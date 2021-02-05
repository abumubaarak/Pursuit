import React, { useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
     DrawerCloseButton,Button, Heading, Divider
  } from "@chakra-ui/react"
   import companyLogo from '../img/placeholder.png'
 import Time from "./Time";
 import ReactMarkdown from 'react-markdown'
import { saveAppliedJob } from "../redux/Applied/action";
import { saveUserJob } from "../redux/SaveJob/action";
import { timestamp } from "../firebase/config";
import { connect } from 'react-redux';
 
  
 function Model({ isOpen, onClose,selectedJob,saveAppliedJob,saveUserJob}) {
 //just import uid in the object destructure 
   
   const [save, setSave] = useState(false);
 
  
   const { title, company, location, company_logo, created_at, description, how_to_apply, id } = selectedJob
        
   let uid = "LWPqNfL8yqMshLppoowyKJ9uEt02"

   const data = { ...selectedJob, uid, timestamp }

   const handleApply = () => {
     
     saveAppliedJob(data, id)
   
   }
 
   const handleSave = () => {
    saveUserJob(data,id)
    setSave(!save)
   }
    return (
        <div>
             <Drawer 
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="lg"
       >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
                <div className="grid grid-cols-card">
               <img src={company_logo?company_logo:companyLogo} className="w-16 h-16 rounded-full object-contain" alt="Company Logo"/>
                  <div className="flex flex-col">
                    <h1 className="text-black font-bold font-custom">{title} </h1>
                    <p className="text-gray-600 text-lg font-medium">{company} </p>
                    <Time date={created_at}/>
                   </div>
                </div>
                <Divider/>

            </DrawerHeader>

 
            <DrawerBody>

                <h1 className="font-semibold text-lg mb-2 text-black font-custom">Description</h1>
                <div className="mt-4">
            <ReactMarkdown children={selectedJob.description} />
          </div>
                
                 <h1 className="font-medium text-lg mt-3">Location</h1>
                <p>{location}</p>
                <h1 className="font-medium text-lg mt-3">How to Apply</h1>
                <div style={{ wordBreak: 'break-all' }} onClick={handleApply}>
              <ReactMarkdown source={how_to_apply}   linkTarget="_blank"/>
            </div>

             </DrawerBody>

            <DrawerFooter>
              <Button color="blue" variant="outline"  onClick={handleSave}>{save?("Saved!"):("Save")}</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
        </div>
    )
}
export default connect(null,{saveAppliedJob,saveUserJob})(Model)