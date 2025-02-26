import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const Wishlist = () => {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  const [items, setItems] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null); // Track item being edited
  const [newItemTitle, setNewItemTitle] = useState('');
  const [newItemType, setNewItemType] = useState('Movie');
  const [newItemCategory, setNewItemCategory] = useState('');
  const [newItemReason, setNewItemReason] = useState('');
  const [newItemImage, setNewItemImage] = useState(null);
  const [error, setError] = useState('');

  const backendUrl = 'http://localhost:9000/api/items';

  useEffect(() => {
    axios.get(backendUrl)
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching items:', error);
      });
  }, []);

  const handleUpvote = (id) => {
    axios.post(`${backendUrl}/${id}/upvote`)
      .then(response => {
        setItems(items.map(item =>
          item._id === id ? response.data : item
        ).sort((a, b) => b.upvotes - a.upvotes));
      })
      .catch(error => {
        console.error('Error upvoting item:', error);
      });
  };

  const handleAddItem = (e) => {
    e.preventDefault();

    if (newItemTitle.trim() === '' || newItemCategory.trim() === '' || newItemReason.trim() === '') {
      setError('Please fill in all fields');
      return;
    }

    const formData = new FormData();
    formData.append('title', `${newItemType}: ${newItemTitle}`);
    formData.append('category', newItemCategory);
    formData.append('reason', newItemReason);
    formData.append('email', isAuthenticated && user?.email ? user.email : 'anonymous');
    if (newItemImage) {
      formData.append('image', newItemImage);
    }

    axios.post(backendUrl, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      setItems([response.data, ...items]);
      setNewItemTitle('');
      setNewItemType('Movie');
      setNewItemCategory('');
      setNewItemReason('');
      setNewItemImage(null);
      setIsFormOpen(false);
      setError('');
    })
    .catch(error => {
      console.error('Error adding item:', error.response ? error.response.data : error.message);
      setError('Error adding item');
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setNewItemImage(e.target.files[0]);
    }
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
    setNewItemTitle(item.title.split(': ')[1]);
    setNewItemType(item.title.split(': ')[0]);
    setNewItemCategory(item.category);
    setNewItemReason(item.reason);
    setNewItemImage(null); // Optionally reset image
    setIsFormOpen(true); // Open form to edit item
  };

  const handleUpdateItem = (e) => {
    e.preventDefault();

    if (newItemTitle.trim() === '' || newItemCategory.trim() === '' || newItemReason.trim() === '') {
      setError('Please fill in all fields');
      return;
    }

    const formData = new FormData();
    formData.append('title', `${newItemType}: ${newItemTitle}`);
    formData.append('category', newItemCategory);
    formData.append('reason', newItemReason);
    if (newItemImage) {
      formData.append('image', newItemImage);
    }

    axios.put(`${backendUrl}/${editingItem._id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(response => {
      setItems(items.map(item =>
        item._id === response.data._id ? response.data : item
      ).sort((a, b) => b.upvotes - a.upvotes));
      setNewItemTitle('');
      setNewItemType('Movie');
      setNewItemCategory('');
      setNewItemReason('');
      setNewItemImage(null);
      setIsFormOpen(false);
      setEditingItem(null); // Reset editing item
      setError('');
    })
    .catch(error => {
      console.error('Error updating item:', error.response ? error.response.data : error.message);
      setError('Error updating item');
    });
  };

  return (
    <div className="p-4 bg-black min-h-screen relative">
      <h1 className="text-2xl font-bold mb-4 text-white">Wishlist</h1>

      {/* Add Wishlist Button */}
      <button 
        onClick={() => isAuthenticated ? setIsFormOpen(!isFormOpen) : loginWithRedirect()} 
        className="fixed bottom-4 right-4 px-4 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600"
      >
        {isAuthenticated ? 'Add Wishlist' : 'Login to Add'}
      </button>

      {/* Form Popup */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div className="bg-rose-950 p-6 rounded-lg shadow-lg max-w-md w-full relative" style={{ height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-2 right-2 text-white text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4 text-white">{editingItem ? 'Edit Wishlist Item' : 'Add to Wishlist'}</h2>
            <form onSubmit={editingItem ? handleUpdateItem : handleAddItem} className="flex-1 overflow-auto">

              <label className="block mb-2 text-white">Type:</label>
              <select
                value={newItemType}
                onChange={(e) => setNewItemType(e.target.value)}
                className="w-full p-2 mb-4 text-black rounded-lg"
              >
                <option value="Movie">Movie</option>
                <option value="TV Show">TV Show</option>
              </select>

              <label className="block mb-2 text-white">Title:</label>
              <input
                type="text"
                value={newItemTitle}
                onChange={(e) => setNewItemTitle(e.target.value)}
                placeholder="Enter title"
                className="w-full p-2 mb-4 text-black rounded-lg"
              />

              <label className="block mb-2 text-white">Category:</label>
              <input
                type="text"
                value={newItemCategory}
                onChange={(e) => setNewItemCategory(e.target.value)}
                placeholder="Enter category (e.g., Fantasy, Action)"
                className="w-full p-2 mb-4 text-black rounded-lg"
              />

              <label className="block mb-2 text-white">Reason for Review:</label>
              <textarea
                value={newItemReason}
                onChange={(e) => setNewItemReason(e.target.value)}
                placeholder="Why do you want me to review it?"
                className="w-full p-2 mb-4 text-black rounded-lg"
              />

              <label className="block mb-2 text-white">Image:</label>
              <input
                type="file"
                onChange={handleImageChange}
                className="w-full mb-4"
              />

              <button type="submit" className="w-full px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600">
                {editingItem ? 'Update' : 'Add'}
              </button>

              {error && <p className="text-red-500 mt-4">{error}</p>}
            </form>
          </div>
        </div>
      )}

      {/* Wishlist Items */}
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={item._id} className="flex items-center p-4 border border-rose-950 rounded-lg shadow-sm bg-rose-950">
            {/* Numbered Label */}
            <span className="text-lg text-white mr-4">{index + 1}.</span>
            
            {item.image && (
              <img
                src={`http://localhost:9000${item.image}`} // Remove any extra 'uploads'
                alt={item.title}
                className="w-16 h-45 object-cover rounded-lg mr-4"
              />
            )}
            <div className="flex-1">
              <span className="text-lg text-white">{item.title}</span>
              <span className="text-sm text-gray-300 block">{item.category}</span>
              <p className="text-sm text-gray-300 mb-4">{item.reason}</p>
            </div>
            <div className="flex items-center">
              <span className="text-lg text-white mr-2">{item.upvotes}</span>
              <button
                onClick={() => handleUpvote(item._id)}
                className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600"
              >
                Upvote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
