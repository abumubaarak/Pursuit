import React from 'react'
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
 
  const ReactMarkdown = require("react-markdown");

  
export default function Model({ isOpen, onClose,selectedJob}) {
 
 
    const {title,company,location,company_logo,created_at,description,how_to_apply}=selectedJob
   
 
 

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
                 <div className="ml-5">
                    <ReactMarkdown source={description}    escapeHtml={false}/>
                 </div>
                
                 <h1 className="font-medium text-lg mt-3">Location</h1>
                <p>{location}</p>
                <h1 className="font-medium text-lg mt-3">How to Apply</h1>
                <ReactMarkdown source={how_to_apply}     className=" mb-2"/>


             </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button color="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
        </div>
    )
}
