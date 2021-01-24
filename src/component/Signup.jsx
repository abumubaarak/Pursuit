import React,{useState} from 'react'
import { FaGoogle } from "react-icons/fa";
import { BsChevronLeft } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { motion } from "framer-motion";
import Back from "./Back";
import { Link } from "react-router-dom";
 

export default function Signup() {
 

    const handleSignup=(e)=>{
        e.preventDefault()
        
    }

    return (
        <div className="bg-bottom font-custom   bg-bottom bg-cover">

            <h1 className="text-center font-black  text-4xl font-mono mt-10 font-custom">Pursuit</h1>

            <div className="h-screen bg-home-bg  py-6 flex flex-col  items-center mt-8  ">

                <div className="bg-white pt-10 rounded-2xl text-center shadow-lg   px-28 py-5">

                    <h1 className="text-4xl font-normal    font-custom">Sign up to get started</h1>
                 
                    <motion.div 
                     initial={{opacity:0}}
                    animate={{y:"-1vh",opacity:1}} 
                    transition={{ duration: 0.5 }}
                    className="mt-9 mb-2 pt-5 pb-1 px-5 visible " >
                        
                        <Back/>


                         <form className="flex flex-col   mx-1">
                         <input type="text" placeholder="First Name" className="my-4 py-3 pl-6 border-2  border-gray-100 w-full placeholder-grey-300 font-normal rounded-md text-xl  "/>
                         <input type="text" placeholder="Last Name" className="my-4 py-3 pl-6 border-2  border-gray-100 w-full placeholder-grey-300 font-normal rounded-md text-xl  "/>
                         <input type="email" placeholder="Email" className="my-4 py-3 pl-6 border-2  border-gray-100 w-full placeholder-grey-300 font-normal rounded-md text-xl  "/>
                         <input type="password" placeholder="Password" className=" mb-4 py-3 pl-6 border-2 border-gray-100 w-full placeholder-grey-500 font-normal rounded-md text-xl  "/>
                         <button className="bg-blue-500 text-white p-2 font-light  border-2 mb-4   border-gray-100 text-lg   w-full
                  rounded-lg">Create An Account</button>
                         
                         </form>
                    </motion.div>

                   
                     <p className="text-purple-600 font-semibold text-sm pb-4">Forgot password?</p>
                  
                </div>
            </div>
        </div>

             
     )
}
