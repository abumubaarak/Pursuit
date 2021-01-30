import React from 'react'
import { GrBriefcase,GrUser,GrBookmark,GrDocumentVerified } from 'react-icons/gr'
 

export default function Jobcard() {
    return (                

        <div>
                <div className=" mx-6 grid bg-white shadow-lg grid-cols-card  rounded-md mt-5 p-2">
                  <img src="https://img.icons8.com/plasticine/2x/user-male-circle.png" className="w-16 h-16" alt="Company Logo"/>
                  <div className="flex flex-col">
                    <h1 className="text-black font-bold font-custom">Full Stack Developer</h1>
                    <p className="text-gray-600 text-lg font-medium">Google</p>
                    <p className="text-gray-500 font-custom">3 days ago </p>
                  </div>
                  <div className="flex flex-col justify-between items-center">
                     <GrBookmark className="w-10 h-6"/>
                  <p className="font-normal truncate ...">Germany</p>
                  </div>
                 
                </div>
                 
        </div>
    )
}
