import React from 'react'
import user from "../img/profile_img.jfif";


export default function ProfileCard({user:{profile:{ email,firstname,lastname}}}) {
    return (
             <div className="flex flex-col items-center bg-profile-bg bg-cover bg-center bg-no-repeat rounded-lg shadow-sm mx-auto h-80 max-w-xs ">

                <div className=" mt-5 relative">
                    <img src={user} className="rounded-full ring-white ring-4 mt-5 relative top-7"  alt=""/>
                </div>
                <div className="bg-white text-center flex-1 px-14 py-8 self-end h-1/2 w-full rounded-t-lg rounded-b-lg">
                    <h1 className="font-custom font-bold pt-2 leading-9 text-2xl">{` ${firstname} ${lastname}` }</h1>
                    <p className=" text-gray-500 pt-1">{email}</p>
                </div>
            </div>
        
    )
}
