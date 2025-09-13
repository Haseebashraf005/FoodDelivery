'use client';
import React, { useEffect, useRef, useState } from 'react';

const UpdateProduct = ({ params }) => {
    const inputRef = useRef(null);

    // unwrap params safely (Next.js App Router 15+)
    const payload = React.use(params);

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        image: '',
        description: ''
    });

    // fetch product data
    const fetchData = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/fooditems/edit/${payload.itemId}`);
            const data = await res.json();
            console.log("API Response:", data);

            if (data.status && data.foodItem) {
                setFormData({
                    name: data.foodItem.foodname || '',
                    price: data.foodItem.price || '',
                    image: data.foodItem.image || '',
                    description: data.foodItem.description || ''   // in case description exists
                });
            }
        } catch (err) {
            console.error("Error fetching API:", err);
        }
    };

    useEffect(() => {
        inputRef.current?.focus();
        fetchData();
    }, []);

    // handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.price || !formData.image || !formData.description) {
            alert('Please fill all fields!');
            return;
        }
        

        console.log('Updated Product Data:', formData);

        alert('Product updated! Check console for details.');

        setFormData({
            name: '',
            price: '',
            image: '',
            description: ''
        });

        inputRef.current?.focus();
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 p-8">
            {payload.itemId}
            <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Update</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
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
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md
                                       focus:outline-none focus:ring-2 focus:ring-blue-500
                                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md
                                       focus:outline-none focus:ring-2 focus:ring-blue-500
                                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="Enter price"
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Image URL *
                        </label>
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md
                                       focus:outline-none focus:ring-2 focus:ring-blue-500
                                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
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
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md
                                       focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none
                                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                            placeholder="Enter description"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800
                                   text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2
                                   focus:ring-green-500 font-medium transition-colors"
                    >
                        Update Item
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;
