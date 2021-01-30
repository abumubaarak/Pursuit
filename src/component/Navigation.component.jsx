import React,{useState,useEffect} from 'react'
import { GrBriefcase,GrUser,GrBookmark,GrDocumentVerified } from 'react-icons/gr'

export default function Navigation({navigation}) {
 
    const [selected,setSelected]= useState("job")
    
    const navClassName="cursor-pointer flex items-center flex-col md:flex-row  md:mb-5 md:pl-14 md:pr-8 md:py-4  p-2"

    useEffect(() => {
        navigation(selected)
    }, [selected])


 
    return (
       
        <div className="grid grid-cols-4 gap-2 bottom-0 sm:fixed w-screen  fixed md:order-first  md:top-10 md:flex md:flex-col md:flex-2 md:pr-3    md:mt-5   md:w-max bg-white  shadow-md md:pt-9    pt-5 ">

        <div className={` ${navClassName}  ${selected==="job"?`md:bg-purple-100  md:rounded-r-full` :''} '`} 
         onClick={()=>selected!=="job"? setSelected("job"):null}>
          <GrBriefcase className="h-6 w-6"/>
          <p  className="md:pl-4 md:font-medium text-base font-custom">Jobs</p>
        </div>
        <div className={` ${navClassName} ${selected==="saved"?`md:bg-purple-100  md:rounded-r-full` :''} '`} 
         onClick={()=>selected!=="saved"? setSelected("saved"):null}>
          <GrBookmark className="h-6 w-6"  />
          <p className="md:pl-4 md:font-medium text-base font-custom">Saved</p>
        </div>
        <div
         className={` ${navClassName} ${selected==="applied"?`md:bg-purple-100  md:rounded-r-full` :''} '`} 
         onClick={()=>selected!=="applied"? setSelected("applied"):null}>
            <GrDocumentVerified className="h-6 w-6 " />
          <p className="md:pl-4 md:font-medium text-base font-custom">Applied</p>
        </div>
        <div  className={` ${navClassName} ${selected==="profile"?`md:bg-purple-100  md:rounded-r-full` :''} '`} 
         onClick={()=>selected!=="profile"? setSelected("profile"):null}>
        <GrUser className="h-6 w-6"/>
          <p className="md:pl-4 md:font-medium text-base font-custom">Profile</p>
        </div>
      </div>
   
    )
}
