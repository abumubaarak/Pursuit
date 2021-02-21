import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
import {  updateUserProfile } from "../redux/Profile/action";

function EditProfile({user: {profile,isLoading,update},updateUserProfile}) {
    
    const toast = useToast()
    const { handleSubmit, errors, register } = useForm()
    const [data, setProfile] = useState(profile)
    const [initialdata, setInitialdata] = useState(profile)

    const onChange = (e) =>
    {
        let preData = { ...data }

        if (e.target.name === "firstname") {
            preData.firstname = e.target.value
            setProfile(preData)
        } else if (e.target.name === "lastname") {
            preData.lastname = e.target.value
            setProfile(preData)

        } else if (e.target.name === "email") {

            preData.email = e.target.value
            setProfile(preData)


        }
        console.log(data);
        
    }
     

    const cancelChanges = () =>
    {
        setProfile(initialdata)
    }

    useEffect(() => {
        if (update) {
            toast({
                position: "top-right",
                title: `Update Done 👋 !`,
                status: "success",
                        duration: 5000,
                        isClosable: true,
                      })
         }
    }, [update])
    const updateProfile = (userData) => {
       console.log(data);
       updateUserProfile(data, data.uid)
        
    }
 
    return (
        <div className="bg-white shadow-sm  mt-7 md:mt-0   w-11/12 md:mr-4 ml-5 rounded-lg px-5 py-3">
            <h1 className="font-custom font-bold pt-2 leading-9 text-2xl">Account Details</h1>
            <p className=" text-gray-500 text-lg pt-1">Edit your account details</p>
            <div className="md:grid  md:grid-cols-2  gap-6 ">
                <div className="mt-5">
                    <h3>Firstname</h3>
                    <form onSubmit={handleSubmit(updateProfile)}>
                        <input name="firstname" ref={register} onChange={onChange} value={data.firstname} type="text" className=" border border-transparent focus:outline-none  p-3 my-1 bg-gray-100 rounded-lg w-full placeholder-gray-800 placeholder-opacity-50" />
                    </form>
                </div>
                <div className="mt-5">
                    <h3>Firstname</h3>
                    <form onSubmit={handleSubmit(updateProfile)}>
                        <input name="lastname" value={data.lastname} onChange={onChange} ref={register} type="text" className=" border border-transparent focus:outline-none  p-3 my-1 w-full bg-gray-100 rounded-lg  placeholder-gray-800 placeholder-opacity-50" />
                    </form>
                </div>
            </div>
            
            <div className="mt-5">
                <h3>Email Address</h3>
                <form onSubmit={handleSubmit(updateProfile)}>
                    <input name="email" value={data.email} onChange={onChange} ref={register} type="text" className=" border border-transparent focus:outline-none  p-3 my-1 w-full bg-gray-100 rounded-lg  placeholder-gray-800 placeholder-opacity-50" />
                </form>
            
                <div className="flex mt-5">
                    
            <button onClick={handleSubmit(updateProfile)} className="w-1/2 bg-purple-500 text-white p-3 rounded-md" >Update </button>
            <button className="w-1/2 bg-gray-400 ml-5 text-white p-3 rounded-md"  onClick={cancelChanges}>Cancel </button>

            </div>
        </div>
       


    </div>

    )
}

const mapStateToProps = ({ profile }) => ({
    user:profile
})

export default connect(mapStateToProps,{updateUserProfile})(EditProfile)