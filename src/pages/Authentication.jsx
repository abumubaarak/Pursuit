import React,{Component} from 'react'
import { FaGoogle } from "react-icons/fa";
 import { GoMarkGithub } from "react-icons/go";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import   blob from "../img/blob.svg";
import   blobRight from "../img/blob_2.svg";

import { connect  } from "react-redux";
import {googleAuth,githubAuth} from "../redux/Authentication/action";
import Logo from '../component/Logo';
 
 

 class Authentication extends React.Component {
     
    constructor(props){
        super(props)
        this.handleGoggle = this.handleGoggle.bind(this);
        this.handleGithub = this.handleGithub.bind(this);
  
    }
    
   
    handleGoggle=e=>{
        e.preventDefault()
        this.props.googleAuth()
    }

    handleGithub=e=>{
        e.preventDefault()
        this.props.githubAuth()
    }
      
    render() {
        return (
            <div className="bg-bottom font-custom h-screen    bg-cover">
                
                <Logo/>
                <motion.div 
                     initial={{opacity:0}}
                    animate={{opacity:1}} 
                    transition={{ duration: 0.9 }}
                    className="   px-1 sm:px-7 shadow-main text-center mx-4  sm:mx-auto py-10 md:mx-auto md:max-w-lg max-w-md   rounded-xl ">

                    <h1 className="font-medium md:font-semibold text-center font-nuito text-xl sm:text-2xl sm:leading-9 px-3">Switch to a better Opportunity</h1>
                    <p className="text-gray-500 font-normal text-md   pt-10">Get started with:</p>
                    <div className="grid grid-cols-2 grid-rows-2   mx-7 md:mx-16 gap-4 pt-5">
                    <button className="bg-red-500 p-2 text-white text-lg font-medium      rounded-lg flex items-center justify-around" onClick={this.handleGoggle}><FaGoogle /> Google</button>
                    <button className="bg-black p-2 text-white text-lg font-medium    rounded-lg flex items-center justify-around" onClick={this.handleGithub}><GoMarkGithub/>Github</button> 
                       
                    <button className="bg-white col-span-full  p-2 text-gray-800 shadow border-2 ring-gray-500 border-gray-100 text-lg font-normal   
                      rounded-lg" ><Link to="/signup">Sign up with email</Link></button>
                    </div>
                    <p className="my-9 font-normal text-md text-gray-900">Already have an account ? <span className="text-purple-600 cursor-pointer"><Link to="/login">Log in</Link> </span></p>

                </motion.div>
           
                <div className="md:absolute md:top-32 hidden md:block">
                    <img src={blob} className="w-64 h-64" alt=""/>
                </div>
                <div className="md:absolute md:top-36 md:right-0 hidden md:block">
                    <img src={blobRight} className="w-64 h-64" alt=""/>
                </div>

                </div>
                
                 
         )
    
        }
    }

const mapStateToProps=({userAuth})=>({
    user:userAuth
})

export default connect(mapStateToProps,{ googleAuth,githubAuth})(Authentication)
