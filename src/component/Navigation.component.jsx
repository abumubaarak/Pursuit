import React,{useState,useEffect} from 'react'
 import { IoBriefcaseOutline,IoBookmarksOutline,IoReceiptOutline,IoPersonOutline } from 'react-icons/io5'

export default function Navigation({navigation}) {
 
    const [selected,setSelected]= useState("job")
    
  const navClassName = "hover:bg-indigo-100 transition-all text-gray-500 md:font-light    md:text-base   md:rounded-r-full rounded-t-lg cursor-pointer flex items-center flex-col md:flex-row  md:mb-5 md:pl-12 md:pr-8 md:py-4  p-2"
  const active = "bg-indigo-100 md:rounded-r-full  md:font-semibold md:text-base transition-all   rounded-t-lg text-indigo-600"
  const activeText="text-indigo-600"

    useEffect(() => {
        navigation(selected)
    }, [selected])


 
  return (
      <div className="grid grid-cols-4 gap-2 bottom-0 left-0 right-0 bg-white md:flex md:flex-col md:mr-2 fixed md:static">
        <div className={` ${navClassName}  ${selected==="job"? active :''} '`} 
         onClick={()=>selected!=="job"? setSelected("job"):null}>
          <IoBriefcaseOutline className="h-6 w-6   "/>
          <p  className="md:pl-6   text-base font-custom   ">Jobs</p>
        </div>
        <div className={` ${navClassName} ${selected==="saved"? active:''} '`} 
         onClick={()=>selected!=="saved"? setSelected("saved"):null}>
          <IoBookmarksOutline className="h-6 w-6  "  />
          <p  className="md:pl-6    text-base font-custom">Saved</p>
        </div>
        <div
         className={` ${navClassName} ${selected==="applied"?active :''} '`} 
         onClick={()=>selected!=="applied"? setSelected("applied"):null}>
            <IoReceiptOutline className="h-6 w-6  " />
          <p className="md:pl-4   text-base font-custom ">Applied</p>
        </div>
        <div  className={` ${navClassName} ${selected==="profile"?active :''} '`} 
         onClick={()=>selected!=="profile"? setSelected("profile"):null}>
        <IoPersonOutline className="h-6 w-6 "/>
          <p className="md:pl-4   text-base font-custom ">Profile</p>
        </div>
      </div>
   
    )
}
