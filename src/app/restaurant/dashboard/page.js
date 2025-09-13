'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import "flowbite";


const Dashboard = () => {
    const [fooditems, setFooditems] = useState([]);
    let router = useRouter();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            let user = JSON.parse(localStorage.getItem("user"));
            const res = await fetch(`http://localhost:3000/api/fooditems/${user._id}`);
            const data = await res.json();
            console.log("API Response:", data);
            if (data.status) {
                setFooditems(data.fooditems);
            }
        } catch (err) {
            console.error("Error fetching API:", err);
        }
    };

    const handleUpdate = (id) => {
        console.log("Update item:", id);
        router.push(`/restaurant/dashboard/updateproduct/${id}`)
        // 👉 Add modal or navigate to update page here
    };

    const handleDelete = async (id) => {
        if (!confirm("Are you sure you want to delete this item?")) return;
        try {
            const res = await fetch(`http://localhost:3000/api/fooditems/${id}`, {
                method: "DELETE"
            });
            const data = await res.json();
            console.log(data)
            if (data.status) {
                fetchData();
            }

        } catch (err) {
            console.error("Delete failed:", err);
        }
    };

    return (
        <>
            <h1 className="py-2 text-center capitalize">Food List</h1>

            {/* Table View */}
            <div className="overflow-x-auto p-6">
                <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400 border">
                    <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-4 py-3">Sr #</th>
                            <th className="px-6 py-3">Food Name</th>
                            <th className="px-6 py-3">Description</th>
                            <th className="px-6 py-3">Price</th>
                            <th className="px-6 py-3">Image</th>
                            <th className="px-6 py-3">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fooditems.map((item, index) => (
                            <tr
                                key={item._id}
                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            >
                                {/* Serial No */}
                                <td className="px-4 py-4 font-medium text-gray-900 dark:text-white">
                                    {index + 1}
                                </td>

                                <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                    {item.foodname}
                                </td>
                                <td className="px-6 py-4">{item.description}</td>
                                <td className="px-6 py-4">Pkr {item.price}</td>

                                {/* Image */}
                                {/* <td className="px-6 py-4">
                                    <img
                                        src={item.image}
                                        alt={item.foodname}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                </td> */}

                                {/* Actions */}
                                <td className="px-6 py-4">
                                    <div className="flex flex-col sm:flex-row gap-2">
                                        <button
                                            onClick={() => handleUpdate(item._id)}
                                            className="px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 w-full sm:w-auto cursor-pointer"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item._id)}
                                            className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700 w-full sm:w-auto cursor-pointer"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Dashboard;
