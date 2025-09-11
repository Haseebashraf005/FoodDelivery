'use client'
import React, { useEffect, useState } from 'react'
import "flowbite";



const Dashboard = () => {

    let [fooditems, setfooditems] = useState([]);



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

                setfooditems(data.fooditems)

            }
        } catch (err) {
            console.error("Error fetching API:", err);
        }
    };


    return (
        <>

            <h1 className='py-2 text-center capitalize'>my menu</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">

                {
                    fooditems.map(item => (
                        <div key={item._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                            {/* <a href="#">
                                <img
                                    key={item._id}
                                    className="rounded-t-lg w-full h-48 object-cover"
                                    src={item.image}
                                    alt="Food item"
                                />
                            </a> */}
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        {item.foodname}
                                    </h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {item.description}
                                </p>
                                <p className="text-lg font-bold text-[#0FB478] mb-4">Pkr {item.price}</p>
                            </div>
                        </div>
                    ))
                }


            </div>






        </>
    )
}

export default Dashboard