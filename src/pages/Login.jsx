import React,{useState,useRef,useEffect} from 'react' 
  import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Back from '../component/Back';
import {  useToast,Button } from "@chakra-ui/react";
 
import { connect  } from "react-redux";
import  required  from "../utills/utill";
import {useForm} from 'react-hook-form'
import { login } from "../redux/Authentication/action";
import Logo from '../component/Logo';

 

 function Login(props) {

 
    const {errors,handleSubmit,register}= useForm()

    const {props:{isFetching,error}}=props

    const toast = useToast()

console.log(props);

    useEffect(() => {

        error && createToast("top",error.message)

    }, [error])

    const createToast=(position,message)=>{
        toast({
            position: position,
            title: `Error ❌`,
            description: message,
            status: "error",
            duration: 5000,
            isClosable: true,
          })
    }
    useEffect(() => {

          if(errors.email){
            createToast("top","Email is require")
            return true
         }
        
         if(errors.password){
            createToast("top","One uppercase, One lowercase, one number and one special character")
         }


    }, [errors]) 

    const onSubmit=(data)=>{
         
        props.login(data)
         
    }

     return (
        <div className="bg-bottom font-custom h-screen    bg-cover">
        <Logo />
            
            <div className="z-40  px-7  shadow-main text-center mx-5 sm:mx-auto  pb-7 pt-4 md:mx-auto md:max-w-lg max-w-md   rounded-xl ">
            <Back />      

            <h1 className="font-normal text-center text-3xl font-nuito pt-4">Sign in to get Started</h1>
                    
                    <motion.div 
                     initial={{opacity:0}}
                    animate={{y:"-2vh",opacity:1}} 
                    transition={{ duration: 0.5 }}
                    className="mt-5 mb-2 pt-5 pb-1 px-5 visible " >

                                           
                        <form className="flex flex-col   mx-1 mt-2" onSubmit={handleSubmit(onSubmit)}>

                             <input ref={register(required)} type="text" name="email" placeholder="Email" className="my-4 py-3  pl-6 border-2  border-gray-100 w-full placeholder-grey-300 font-normal rounded-md text-xl  "/>
                             <input name="password" ref={register(required)} type="password" placeholder="password" className=" mb-4 py-3 pl-6 border-2 w-full placeholder-grey-500 font-normal rounded-md text-xl  "/>

                             <Button type="submit" isLoading={isFetching}    variant="solid" colorScheme="blue-500" p={6}   className="bg-blue-500 text-white p-2 font-light  border-2 mb-4   border-gray-100 text-lg   w-full">Continue</Button>
                        
                         </form>

                    </motion.div>
              
            </div>
            
        </div>

             
     )
}
const mapStateToProps =({userAuth})=>({
    props:userAuth
})
export default connect(mapStateToProps,{login})(Login)