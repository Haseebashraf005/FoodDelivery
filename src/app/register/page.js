'use client'

import { useState } from "react"
import Login from "../_components/login"
import Signup from "../_components/signup"

const Register = () => {
    const [login, setLogin] = useState(true)

    return (
        <>
            <main className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 min-h-screen flex flex-col justify-between">

                <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Register Here</span>
                        </a>

                        {
                            login ?
                                <div className="text-sm font-medium text-gray-900 dark:text-white">
                                    Not registered yet? <a className="text-blue-600 hover:underline dark:text-blue-500 cursor-pointer" onClick={() => setLogin(!login)}>

                                        Create account

                                    </a>
                                </div>
                                :
                                <div className="text-sm font-medium text-gray-900 dark:text-white ">
                                    Already Have Account ? <a className="text-blue-600 hover:underline dark:text-blue-500 cursor-pointer" onClick={() => setLogin(!login)}>

                                        Login here

                                    </a>
                                </div>



                        }

                    </div>
                </nav>



                {
                    login ?
                        <Login />
                        :
                        <Signup />


                }


                <footer className="bg-white rounded-lg shadow-sm m-4 dark:bg-gray-800">
                    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                        </span>
                        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">About</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
                            </li>
                        </ul>
                    </div>
                </footer>





            </main>

        </>
    )
}

export default Register