'use client'
import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';


const AddProduct = () => {

  const inputRef = useRef(null);
  useEffect(() => {
      inputRef.current.focus();

  },[])

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    imageUrl: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.price || !formData.imageUrl || !formData.description) {
      alert('Please fill all fields!');
      return;
    }

    // Console log all values
    // console.log('Product Data:', formData);

    // geting the resto id from local storage
    let user = JSON.parse(localStorage.getItem("user"));
    let restaurantId = user._id

    let result = await fetch("http://localhost:3000/api/fooditems", {
      method: "POST",
      body: JSON.stringify({
        foodname: formData.name,
        price: formData.price,
        image: formData.imageUrl,
        description: formData.description,
        resto_id: restaurantId

      })
    })


    let response = await result.json();
    // console.log(response)

    // alert('Product added! Check console.');

    if (response.status) {


      toast('✔️ Added', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });


      // Reset form
      setFormData({
        name: '',
        price: '',
        imageUrl: '',
        description: ''
      });
      inputRef.current.focus();


    }

  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Add</h1>

        <div className="space-y-4">
          {/* Food Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Food Item Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="Enter food name"
              ref={inputRef}
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Price *
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              required
              step="0.01"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="Enter price"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Image URL *
            </label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="Enter image URL"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="Enter description"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium transition-colors"
          >
            Add Item
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddProduct;