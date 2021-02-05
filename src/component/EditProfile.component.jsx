import React from 'react'

export default function EditProfile({user:{profile:{ email,firstname,lastname}}}) {
    
 
    return (
        <div className="bg-white shadow-sm    w-11/12 mr-4 ml-5 rounded-lg px-5 py-3">
            
        <h1 className="font-custom font-bold pt-2 leading-9 text-2xl">Account Details</h1>
        <p className=" text-gray-500 text-lg pt-1">Edit your account details</p>
        
        <div className="md:grid  md:grid-cols-2  gap-6 ">
            <div className="mt-5">
            <h3>Firstname</h3>
            <form >
            <input name="firstname" value={firstname} type="text" className=" border border-transparent focus:outline-none  p-3 my-1 bg-gray-100 rounded-lg w-full placeholder-gray-800 placeholder-opacity-50" />
     
                </form>
            </div>
            <div className="mt-5">
            <h3>Firstname</h3>
            <form >
        <input name="lastname" value={lastname}  type="text" className=" border border-transparent focus:outline-none  p-3 my-1 w-full bg-gray-100 rounded-lg  placeholder-gray-800 placeholder-opacity-50" />
      </form>
        </div>
        </div>

        <div className="mt-5">
            <h3>Email Address</h3>
            <form >
        <input name="firstanme" value={email}  type="text" className=" border border-transparent focus:outline-none  p-3 my-1 w-full bg-gray-100 rounded-lg  placeholder-gray-800 placeholder-opacity-50" />
            </form>
            
            <div className="flex mt-5">
            <button className="w-1/2 bg-purple-500 text-white p-3 rounded-md">Update </button>
            <button className="w-1/2 bg-gray-400 ml-5 text-white p-3 rounded-md">Cancel </button>

            </div>
        </div>
       


    </div>

    )
}
