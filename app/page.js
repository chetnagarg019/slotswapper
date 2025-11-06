"use client";
import React from 'react'
import { useRouter } from "next/navigation";


export default function page () {
   const router = useRouter();

   const handleClick = (e) => {
    router.push("/login")
   }

   const handleSignup = (e) => {
    router.push("/signup")
   }

   const handleDashboard = (e) => {
    router.push("/dashboard")
   }

  return (
    <div className='flex justify-center items-center gap-4'>
      <button  
      onClick={handleClick}
      className='border-4 bg-red-200 px-2 py-2'>
        Login
      </button>

       <button  
      onClick={handleSignup}
      className='border-4 bg-red-200 px-2 py-1.5'>
        Signup
      </button>

       <button  
      onClick={handleDashboard}
      className='border-4 bg-red-200 px-2 py-1.5'>
        Dashboard
      </button>



      
    </div>
  )
}
