import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { db } from '../firebase'; // your firebase.js
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy
} from 'firebase/firestore';

const ReviewPage = () => {
  const { user, isAuthenticated } = useAuth0();
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState('');

  // Load reviews from Firestore
  useEffect(() => {
    const q = query(collection(db, 'reviews'), orderBy('createdAt', 'desc'));

    // Using onSnapshot for real-time updates
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedReviews = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviews(fetchedReviews); // Update state with fetched reviews
    });

    return () => unsubscribe(); // Clean up listener when component unmounts
  }, []);

  const handleReviewChange = (e) => {
    setNewReview(e.target.value);
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    if (newReview.trim()) {
      // Add review to Firestore
      await addDoc(collection(db, 'reviews'), {
        userId: user?.sub,
        userName: user?.name,
        review: newReview,
        createdAt: new Date(),
      });

      setNewReview(''); // Reset the review input after submission
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center text-gray-900 mb-6">Community Reviews</h1>

      {isAuthenticated ? (
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
      ) : (
        <p className="text-center text-gray-600">Please log in to submit a review.</p>
      )}

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Existing Reviews</h2>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="bg-gray-100 p-4 mb-4 rounded-md shadow-md">
              <h3 className="text-lg font-medium text-gray-800">{review.userName}</h3>
              <p className="text-gray-700 mt-2">{review.review}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No reviews yet. Be the first to add one!</p>
        )}
      </div>
    </div>
  );
};

export default ReviewPage;
