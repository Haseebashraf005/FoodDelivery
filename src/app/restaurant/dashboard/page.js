'use client'
import Footer from '@/app/_components/Footer'
import React from 'react'
import "flowbite";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { initFlowbite } from 'flowbite'; // Import Flowbite's init function
import Dashboardbody from '@/app/_components/Dashboardbody';


const Dashboard = () => {


    let router = useRouter()
    let [userDetails, setUserDetails] = useState({})


    useEffect(() => {
        // check if user log in or not  

        let data = localStorage.getItem("user");
        if (!data) {
            router.push('/restaurant')
        } else {
            setUserDetails(JSON.parse(data))
        }

        // Initialize Flowbite components after DOM is updated
        initFlowbite();

    }, [])



    function signOut() {

        router.push('/restaurant')
        localStorage.removeItem("user");

    }

    return (
      <>
      test
      </>
    )
}

export default Dashboard