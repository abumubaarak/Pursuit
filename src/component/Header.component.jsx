import React from 'react'

export default function Header() {
    return (
        <div className="h-16 bg-white md:fixed   md:w-screen w-full  top-0 bottom-0   shadow-sm  flex items-center p-5">
        <h1 className=" font-extrabold  text-2xl   font-custom mr-auto md:pl-8">Pursuit</h1>
        <div className="flex items-center">
          <img src="https://img.icons8.com/plasticine/2x/user-male-circle.png" className="rounded-full h-10 w-10"  alt=""/>
          <p className="p-2 text-lg font-normal font-custom">Quadri</p>
        </div>

       </div> 

    )
}
