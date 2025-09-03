'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';


const Login = () => {

    let router = useRouter()

    // State to manage form inputs
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        login: true
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
        // console.log(response)
        if (response.result) {

            toast('✔️ Login Successfull plz wait', {
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


            // save user to local storage without password field 
            let userData = response.result;
            delete userData.password;

           localStorage.setItem("user", JSON.stringify(userData));

           setTimeout(() => {
               router.push("/restaurant/dashboard")
            
           }, 3000);





        } else {
            toast.error('Password / Email not matched', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            })

        }
    };

    return (
        <>
            <ToastContainer />

            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-1 gap-8 lg:gap-16">
                    <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800 m-auto">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Login Here
                        </h2>
                        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
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
                                    required
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" name="remember" type="checkbox" className="w-4 h-4 border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                </div>
                                <div className="ms-3 text-sm">
                                    <label htmlFor="remember" className="font-medium text-gray-500 dark:text-gray-400">Remember this device</label>
                                </div>
                                <a href="#" className="ms-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Lost Password?</a>
                            </div>
                            <button
                                type="submit"
                                className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Login to your account
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;


