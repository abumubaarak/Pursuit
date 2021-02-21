import React,{useState,useRef,useEffect} from 'react' 
import { motion } from "framer-motion";
import Back from "../component/Back";
import {  useToast,Button } from "@chakra-ui/react";
import { connect  } from "react-redux";
import required from "../utills/utill";
 import { useForm } from "react-hook-form";
import { signUp } from "../redux/Authentication/action";
import Logo from '../component/Logo';
 

 function Signup(props) {
 
     const {createUser:{isFetching,error}}=props

     const {register,handleSubmit,errors}= useForm()

 
    const toast=useToast()
    

    const onSubmit=(data)=>{

        props.signUp(data) 
        
 
    }

    const createToast=(position,message)=>{
        toast({
            position: position,
            title: `Error ❌`,
            description: message,
            status: "error",
            duration: 3000,
            isClosable: true,
          })
    }

   
  
    useEffect(() => {

        error && createToast("top",error.message)

    }, [error])

    useEffect(() => {

          if(errors.firstname){
            createToast("top","Firstname is require")
            return true
         }
         if(errors.lastname){
            createToast("top","Lastname is require")
            return true
 
         }
         if(errors.email){
            createToast("top","Email is invalid")
            return true
 
         }
         if(errors.password){
            createToast("top","One uppercase, One lowercase, one number and one special character")
         }


    }, [errors])


   

    return (
        
        <div className="bg-bottom font-custom h-screen    bg-cover">
        <Logo />
            
        <div className="z-40  px-7  shadow-main text-center mx-5 sm:mx-auto  pb-3 pt-4 md:mx-auto md:max-w-lg max-w-md   rounded-xl ">
            <Back /> 
            <h1 className="font-normal text-center text-2xl font-nuit pt-10">Sign in to get Started</h1>
                    
                    <motion.div 
                     initial={{opacity:0}}
                    animate={{y:"-1vh",opacity:1}} 
                    transition={{ duration: 0.5 }}
                    className="mt-3 mb-2 pt-5 pb-1 md:px-5 visible " >
                       
                         <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-1">
                             <input type="text" name="firstname" ref={register(required)} placeholder="First Name" className=" mt-4  py-3 pl-6 border-2  border-gray-100 w-full placeholder-gray-500 placeholder-opacity-50 font-normal rounded-md text-xl  "/>
                             <input type="text" name="lastname" ref={register(required)} placeholder="Last Name" className="my-4 py-3 pl-6 border-2  border-gray-100 w-full placeholder-gray-500 placeholder-opacity-50 font-normal rounded-md text-xl  "/>
                             <input type="email" name="email" placeholder="Email" className=" mb-4 py-3 pl-6 border-2  border-gray-100 w-full  placeholder-gray-500 placeholder-opacity-50 font-normal rounded-md text-xl  " ref={register({required:true,pattern: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/})} /> 
                             <input type="password" name="password" ref={register({required:true,pattern:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{4,}$/})} placeholder="Password" className=" mb-4 py-3 pl-6 border-2 border-gray-100 w-full placeholder-gray-500 placeholder-opacity-50 font-normal rounded-md text-xl  "/>
                             <Button type="submit" isLoading={isFetching}    variant="solid" colorScheme="blue-500" p={6}   className="bg-blue-500 text-white p-2 font-light  border-2 mb-4   border-gray-100 text-lg   w-full">Create An Account</Button>
                        </form>

                    </motion.div>
                    
                 </div>
            </div>
        

             
     )
}
const mapStateToProps =({userAuth})=>({
    createUser:userAuth
})
export default connect(mapStateToProps,{signUp})(Signup)