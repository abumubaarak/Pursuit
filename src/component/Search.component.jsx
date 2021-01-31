import React from 'react'
import { useForm } from "react-hook-form";

export default function Search({setSearch}) {

    const{errors,handleSubmit,register}= useForm()

    const onSubmit=(data)=>{
         
        setSearch(data)
        console.log(data);
    }

    return (
        <div className="mx-6 mt-8">

        <div className="h-32 bg-white rounded-lg  shadow-sm">

          <div className="grid  grid-cols-2 px-6 py-3 gap-6">

            {/* what */}
            <div className="flex flex-col">
              <h1 className="font-bold font-custom text-lg">What</h1>
              <p className="text-gray-500">Job title, keyword, or company</p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input name="description" ref={register} type="text" className=" border border-transparent focus:outline-none  p-3 my-1 bg-gray-100 rounded-lg w-full placeholder-gray-800 placeholder-opacity-50" placeholder="Ruby developer"/>
              </form>
            </div>

            <div className="">
              <h1 className="font-bold font-custom text-lg">Where</h1>
              <p className="text-gray-500">City,State or Country</p>
              <form onSubmit={handleSubmit(onSubmit)}>

                <input name="location" ref={register} type="text" className=" border border-transparent focus:outline-none  p-3 my-1 bg-gray-100 rounded-lg w-full  placeholder-gray-800 placeholder-opacity-50" placeholder="Sidney,London,Munich"/>
              </form>
            </div>


          </div>
       
        </div>

        <div className="h-16 max-w-xs px-3 pt-2  mx-auto bg-white shadow-sm rounded-b-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <button className="h-12    bg-blue-600 text-white text-lg w-full  rounded-md    ">Find A Job</button>
       </form>
        </div>


      </div>
     
    )
}
