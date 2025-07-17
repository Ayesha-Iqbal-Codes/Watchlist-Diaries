import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {
  collection,
  addDoc,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  arrayUnion,
  arrayRemove,
  query,
  orderBy
} from 'firebase/firestore';
import { db } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReviewPage = () => {
  const { user, isAuthenticated } = useAuth0();
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');
  const [category, setCategory] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'reviews'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const reviewsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setReviews(reviewsData);
    });

    return () => unsubscribe();
  }, []);

  const handleReviewChange = (e) => setNewReview(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!isAuthenticated || !newReview.trim() || !category) return;

    await addDoc(collection(db, 'reviews'), {
      userId: user?.sub,
      userName: user?.name,
      userEmail: user?.email,
      userPicture: user?.picture,
      review: newReview.trim(),
      category,
      timestamp: new Date(),
      likes: [],
      dislikes: [],
      edited: false,
      editedAt: null
    });

    setNewReview('');
    setCategory('');
    toast.success('Thank you for your review!', { position: 'top-center' });
  };

  const handleLike = async (reviewId, reviewData) => {
    if (!isAuthenticated) return;
    const ref = doc(db, 'reviews', reviewId);
    const hasLiked = reviewData.likes?.includes(user.sub);
    const hasDisliked = reviewData.dislikes?.includes(user.sub);

    if (hasDisliked) {
      await updateDoc(ref, {
        dislikes: arrayRemove(user.sub)
      });
    }

    if (hasLiked) {
      await updateDoc(ref, {
        likes: arrayRemove(user.sub)
      });
    } else {
      await updateDoc(ref, {
        likes: arrayUnion(user.sub)
      });
    }
  };

  const handleDislike = async (reviewId, reviewData) => {
    if (!isAuthenticated) return;
    const ref = doc(db, 'reviews', reviewId);
    const hasLiked = reviewData.likes?.includes(user.sub);
    const hasDisliked = reviewData.dislikes?.includes(user.sub);

    if (hasLiked) {
      await updateDoc(ref, {
        likes: arrayRemove(user.sub)
      });
    }

    if (hasDisliked) {
      await updateDoc(ref, {
        dislikes: arrayRemove(user.sub)
      });
    } else {
      await updateDoc(ref, {
        dislikes: arrayUnion(user.sub)
      });
    }
  };

  const handleEdit = (review) => {
    setEditId(review.id);
    setEditText(review.review);
  };

  const handleUpdateReview = async () => {
    if (!editText.trim()) return;
    await updateDoc(doc(db, 'reviews', editId), {
      review: editText.trim(),
      edited: true,
      editedAt: new Date()
    });
    setEditId(null);
    setEditText('');
    toast.success('Review updated!', { position: 'top-center' });
  };

  const handleDelete = (reviewId) => {
    toast(
      ({ closeToast }) => (
        <div>
          <p>Are you sure you want to delete this review?</p>
          <div className="mt-2 flex gap-2">
            <button
              onClick={async () => {
                await deleteDoc(doc(db, 'reviews', reviewId));
                toast.success('Review deleted!', { position: 'top-center' });
                closeToast();
              }}
              className="bg-red-600 text-white px-3 py-1 rounded-md"
            >
              Yes
            </button>
            <button
              onClick={closeToast}
              className="bg-gray-500 text-white px-3 py-1 rounded-md"
            >
              No
            </button>
          </div>
        </div>
      ),
      {
        position: 'top-center',
        autoClose: false,
        closeOnClick: false,
        closeButton: false
      }
    );
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center text-gray-900 mb-6">Community Reviews</h1>

      <div className="mb-6">
        <textarea
          className="w-full h-32 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={newReview}
          onChange={handleReviewChange}
          placeholder="Write your review here..."
        />
        <button
          onClick={handleSubmitReview}
          className="mt-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit Review
        </button>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-maroon-500 mb-4">Recent Reviews</h2>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="bg-zinc-900 p-4 mb-4 rounded-md shadow-md">
              <div className="flex items-center gap-4 mb-2">
                {review.userPicture && (
                  <img
                    src={review.userPicture}
                    alt={`${review.userName}'s profile`}
                    className="w-10 h-10 rounded-full"
                  />
                )}
                <div>
                  <h3 className="text-lg font-medium">{review.userName}</h3>
                  <p className="text-sm text-gray-400">{review.userEmail}</p>
                  <p className="text-xs text-gray-500">
                    {review.timestamp?.seconds
                      ? new Date(review.timestamp.seconds * 1000).toLocaleString()
                      : ''}
                    {review.edited && review.editedAt?.seconds && (
                      <span className="text-yellow-400 ml-2">
                        (edited: {new Date(review.editedAt.seconds * 1000).toLocaleString()})
                      </span>
                    )}
                  </p>
                </div>
              </div>

              <p className="text-sm italic text-gray-400">Category: {review.category}</p>

              {editId === review.id ? (
                <div className="mt-2">
                  <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="w-full p-2 text-black rounded-md"
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={handleUpdateReview}
                      className="bg-green-600 text-white px-3 py-1 rounded-md"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditId(null)}
                      className="bg-gray-600 text-white px-3 py-1 rounded-md"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <p className="mt-2">{review.review}</p>
              )}

              <div className="mt-2 flex gap-4">
                <button
                  onClick={() => handleLike(review.id, review)}
                  className="text-sm text-green-400 hover:underline"
                >
                  👍 {review.likes?.length || 0}
                </button>
                <button
                  onClick={() => handleDislike(review.id, review)}
                  className="text-sm text-red-400 hover:underline"
                >
                  👎 {review.dislikes?.length || 0}
                </button>

                {user?.sub === review.userId && (
                  <>
                    <button
                      onClick={() => handleEdit(review)}
                      className="text-sm text-yellow-400 hover:underline"
                    >
                      ✏️ Edit
                    </button>
                    <button
                      onClick={() => handleDelete(review.id)}
                      className="text-sm text-red-500 hover:underline"
                    >
                      🗑️ Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No reviews yet. Be the first to add one!</p>
        )}
      </div>
    </div>
  );
};

export default ReviewPage;
  