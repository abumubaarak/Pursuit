import React,{Component} from 'react'
import { FaGoogle } from "react-icons/fa";
 import { GoMarkGithub } from "react-icons/go";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 

import { connect  } from "react-redux";
import {googleAuth,githubAuth} from "../redux/Authentication/action";
 
 

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
            <div className="bg-bottom  font-custom   bg-bottom bg-cover">
                  
                  <h1 className=" font-black  text-4xl   font-nuito mr-auto md:pl-8 text-logo">Pursuit</h1>
                
                 <div className="h-screen bg-home-bg  py-6 flex flex-col  items-center mt-8  ">
 
                    <div className="bg-white pt-10 rounded-2xl text-center shadow-lg   px-28 py-5">
    
                        <h1 className="text-4xl font-normal    font-custom">Sign up to get started</h1>
                    
                        <motion.div
                         
                         initial={{opacity:0}}
                        animate={{y:"-1vh",opacity:1}} 
                        transition={{ duration: 0.5 }}
                         className="my-16 visible">
                            <p className="text-gray-500 font-normal">Continue with:</p>
                            <div className="space-x-3 mt-8 mb-4 flex justify-center">
                            <button className="bg-red-500 p-2 text-white text-lg font-medium w-2/5    rounded-lg flex items-center justify-around" onClick={this.handleGoggle}><FaGoogle /> Google</button>
                            <button className="bg-black p-2 text-white text-lg font-medium   w-2/5 rounded-lg flex items-center justify-around" onClick={this.handleGithub}><GoMarkGithub/>Github</button> 
                        </div>
                        
                        <button className="bg-white  p-2 text-gray-800 shadow border-2 ring-gray-500 border-gray-100 text-lg font-normal  w-5/6
                      rounded-lg" ><Link to="/signup">Sign up with email</Link></button>
                      <p className="my-9 font-normal text-md text-gray-900">Already have an account ? <span className="text-purple-600 cursor-pointer"><Link to="/login">Log in</Link> </span></p>
                     
                        </motion.div>
                         
                         <p className="text-purple-600 font-semibold text-sm pb-4">Forgot password?</p>
                      
                    </div>
                </div>
            </div>
    
                 
         )
    
        }
    }

const mapStateToProps=({userAuth})=>({
    user:userAuth
})

export default connect(mapStateToProps,{ googleAuth,githubAuth})(Authentication)
