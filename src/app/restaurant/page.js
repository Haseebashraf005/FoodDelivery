'use client'

import { useEffect, useState } from "react"
import Login from "../_components/login"
import Signup from "../_components/signup"
import Footer from "../_components/Footer"
import { useRouter } from "next/navigation"

const Register = () => {
    const [login, setLogin] = useState(true)
    let router = useRouter()

    useEffect(()=>{
        let data = JSON.parse(localStorage.getItem("user"));
        if(data){
            router.push("/restaurant/dashboard")
        }

    },[])

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
                    login ?<Login /> :  <Signup />
                }


               <Footer/>





            </main>

        </>
    )
}

export default Register