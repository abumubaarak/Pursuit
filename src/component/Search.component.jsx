import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import SearchDescribtion from './SearchDescribtion.component';

export default function Search({setSearch,setSearchOn}) {

  const { errors, handleSubmit, register, reset } = useForm()
  const [clearSearch ,setClearSearch]=useState(false)
 

  const onSubmit = (data) =>
  {
    if (data) { 
      setSearch(data)
      setClearSearch(true)

     }
        
  }

  const resetForm = () =>
  {
    if (clearSearch) { 
      reset()
      setClearSearch(false)
      setSearchOn(true)
    }
        
  }
  
  

    return (
        <div className="mx-6 mt-8">

        <div className="  bg-white rounded-lg  shadow-sm">

          <div className="md:grid  md:grid-cols-2 px-6 py-3 gap-6">

            {/* what */}
            <div className=" text-base  md:text-base">
              <SearchDescribtion title="What" 
              describtion="Job title, keyword, or company" />
            
              <form id="form"
                onSubmit={handleSubmit(onSubmit)}>
                <input name="description" ref={register} type="text" className=" border border-transparent focus:outline-none  p-3 my-1 bg-gray-100 rounded-lg w-full placeholder-gray-800 placeholder-opacity-50" placeholder="Ruby developer"/>
              </form>
             </div>

            <div className="mt-2 md:mt-0 text-base md:text-base  ">
              
            <SearchDescribtion title="Where" 
              describtion="City,State or Country" />
            
 
                <input name="location" form="form" ref={register} type="text" className=" border border-transparent focus:outline-none  p-3 my-1 bg-gray-100 rounded-lg w-full  placeholder-gray-800 placeholder-opacity-50" placeholder="Sidney,London,Munich"/>
             
              {clearSearch && 
                            <p className="text-red-700 text-right font-custom font-semibold p-3 cursor-pointer " onClick={()=> resetForm()}>Clear Filter</p>
                          }
 
            </div>


          </div>
       
        </div>

        <div className="h-16 max-w-xs px-3 pt-2  mx-auto bg-white shadow-sm rounded-b-md">
        <form onSubmit={handleSubmit(onSubmit)}>
            <button className="h-12    bg-indigo-400 font-nuito hover:bg-indigo-600 transition-all font-semibold   text-white text-lg w-full  rounded-md   
          ;om ">Find a Job</button>
       </form>
        </div>


      </div>
     
    )
}
