'use client';
import React, { useEffect, useRef, useState } from 'react';

const UpdateProduct = ({ params }) => {
    const inputRef = useRef(null);

    let payload = React.use(params)



    useEffect(() => {
        inputRef.current.focus();
        fetchData();


    }, []);

    const fetchData = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/fooditems/edit/${payload.itemId}`);
            const data = await res.json();
            console.log("API Response:", data);
            // if (data.status) {
            //     setFooditems(data.fooditems);
            // }
        } catch (err) {
            console.error("Error fetching API:", err);
        }
    };

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        image: '',
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
        if (!formData.name || !formData.price || !formData.image || !formData.description) {
            alert('Please fill all fields!');
            return;
        }

        // Console log all values
        console.log('Updated Product Data:', {
            name: formData.name,
            price: formData.price,
            image: formData.image,
            description: formData.description,
        });

        alert('Product updated! Check console for details.');

        // Reset form after successful update
        setFormData({
            name: '',
            price: '',
            image: '',
            description: ''
        });

        inputRef.current.focus();
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 p-8">
            {payload.itemId}
            <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">Update </h1>

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
                            name="image"
                            value={formData.image}
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
                        className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 font-medium transition-colors"
                    >
                        Update Item
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;