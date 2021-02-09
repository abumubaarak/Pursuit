import React, { useState } from 'react'
import companyLogo from '../img/placeholder.png'
import Time from "./Time";
import { GrBriefcase,GrUser,GrBookmark,GrCheckmark } from 'react-icons/gr'
import { Tooltip,useDisclosure } from '@chakra-ui/react';
 
export default function JobItemCard({feed,onOpen,setSeletedJob,isApplied}) {

    const {title,company,location,company_logo,created_at}=feed
  
     const handleClick=()=>{
        onOpen() 
        setSeletedJob(feed)
    }
 
    return (                
         <div>
                   <div className=" mx-6 grid break-all cursor-pointer bg-white shadow-sm grid-cols-mobile md:grid-cols-card  rounded-md mt-5 p-2" onClick={handleClick}>
                  <img src={company_logo?company_logo:companyLogo} className="w-16 h-16 rounded-full object-contain justify-self-center self-center" alt="Company Logo"/>
                  <div className="flex flex-col  p-2">
            <h1 className="text-black   font-bold pr-4 md:pr-0 text-xl
                     font-custom">{title}</h1>
            <p className="text-gray-600 text-base md:text-lg font-medium font-custom">{company}</p>
            {isApplied ? (<> <Time date={feed.timestamp} /></>) :
              <>
                <div className="flex items-center text-base">
                <Time date={created_at} />  <p className="text-base pl-3">{location}</p>

                </div>
              </>}
   
                   </div>
                  <div className="flex flex-col justify-between items-center">
                     
                  {/* <p className="font-normal truncate ...">{location}</p> */}

                   </div>
                 
                </div>
                     
        </div>
    )
}
