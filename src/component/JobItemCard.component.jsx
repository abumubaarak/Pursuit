import React, { useState } from 'react'
import companyLogo from '../img/placeholder.png'
import Time from "./Time";
import { GrBriefcase,GrUser,GrBookmark,GrDocumentVerified } from 'react-icons/gr'
import { Tooltip,useDisclosure } from '@chakra-ui/react';
 
export default function JobItemCard({feed,onOpen,setSeletedJob}) {

    const {title,company,location,company_logo,created_at}=feed
  
    const handleClick=()=>{
        onOpen() 
        setSeletedJob(feed)
    }
     
    return (                
         <div>
                <div className=" mx-6 grid cursor-pointer bg-white shadow-lg grid-cols-card  rounded-md mt-5 p-2" onClick={handleClick}>
                  <img src={company_logo?company_logo:companyLogo} className="w-16 h-16 rounded-full object-contain" alt="Company Logo"/>
                  <div className="flex flex-col">
                    <h1 className="text-black font-bold font-custom">{title}</h1>
                    <p className="text-gray-600 text-lg font-medium">{company}</p>
                    <Time date={created_at}/>
                   </div>
                  <div className="flex flex-col justify-between items-center">
                  <Tooltip   placement="left" hasArrow className="bg-purple-300" label="Bookmark" fontSize="md">
                  <span><GrBookmark className="w-10 h-6"/></span>
                  </Tooltip>
                   <p className="font-normal truncate ...">{location}</p>
                  </div>
                 
                </div>
                 
        </div>
    )
}
