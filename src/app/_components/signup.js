'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';

const Signup = () => {
    let router = useRouter()
   



   


    // State to manage form inputs
    const [formData, setFormData] = useState({
        restaurantName: '',
        city: '',
        email: '',
        address: '',
        contactNo: '',
        password: '',
    });


    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);

        let result = await fetch("http://localhost:3000/api/restaurantsignup", {
            method: "POST",
            body: JSON.stringify(formData)
        })
        let response = await result.json();

        if (response.status) {
            setFormData({
                restaurantName: '',
                city: '',
                email: '',
                address: '',
                contactNo: '',
                password: '',
            })
            toast('✔️ User Registered', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });

            // save user to local storage without password field 
            let userData = response.result;
            delete userData.password;
            console.log(userData);

           localStorage.setItem("user", JSON.stringify(userData));

           setInterval(() => {
               router.push("/restaurant/dashboard")
            
           }, 3000);











        } else if (response.code == 11000) {
            toast('❌ Email Already Register', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        } else {
            toast('❌ Unathorized error', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }


    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-1 gap-8 lg:gap-16">
                <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800 m-auto">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        SignUp Here
                    </h2>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="restaurantName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Restaurant Name
                            </label>
                            <input
                                type="text"
                                name="restaurantName"
                                id="restaurantName"
                                placeholder="name"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={formData.restaurantName}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                City
                            </label>
                            <input
                                type="text"
                                name="city"
                                id="city"
                                placeholder="Enter city"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={formData.city}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Your email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="name@company.com"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                id="address"
                                placeholder="Enter address"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={formData.address}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="contactNo" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Contact No
                            </label>
                            <input
                                type="number"
                                name="contactNo"
                                id="contactNo"
                                placeholder="Enter contact number"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={formData.contactNo}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Your password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="••••••••"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={formData.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input
                                    id="remember"
                                    aria-describedby="remember"
                                    name="remember"
                                    type="checkbox"
                                    className="w-4 h-4 border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                                />
                            </div>
                            <div className="ms-3 text-sm">
                                <label htmlFor="remember" className="font-medium text-gray-500 dark:text-gray-400">
                                    Remember this device
                                </label>
                            </div>
                            <a href="#" className="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                                Lost Password?
                            </a>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Sign Up New Account
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
};

export default Signup;