import React,{useState,useEffect} from 'react'
import { useToast } from "@chakra-ui/react"
import logo from "../img/search-comb-1.png";
import search from "../img/search-comb-2.png";
import { connect  } from "react-redux";
import { GrBriefcase,GrUser,GrBookmark,GrDocumentVerified } from 'react-icons/gr'

import Search from "../component/Search.component";
import Navigation from "../component/Navigation.component";
import Header from "../component/Header.component";

import 'react-toastify/dist/ReactToastify.css';
import Profile from '../navigations/Profile';
import Job from '../navigations/Job';
import Applied from '../navigations/Applied';
import SavedJob from '../navigations/SavedJob';

 function Dashboard({user}) {

  const [navigation ,setNavigation]= useState("job");
 

  // const toast = useToast()

  // useEffect(() => {

  //   const {displayName,email}=user?.profile;

  //   let firstname
     
  //   if(!displayName){

  //     const splitName=email?.split("@")
    
  //      firstname=splitName[0]

       
  //   }else{

  //     const splitName=displayName?.split(" ")
    
  //    firstname=splitName[0] 
  //   }
    

  // toast({
  //         position: "top-right",
  //         title: `Welcome ${ firstname } 👋 !`,
  //         description: "Pursuit your next Job ❤️‍🔥",
  //         status: "success",
  //         duration: 5000,
  //         isClosable: true,
  //       })
     
  // }, [a])


  let navigationSelected

  switch (navigation) {
    case "job":
      navigationSelected=<Job user={user}/>
      break;
    
    case "applied":
      navigationSelected=<Applied/>
      break;
    case "saved":
      navigationSelected=<SavedJob/>
      break;
    case "profile":
      navigationSelected=<Profile/>
      break;
    default:
      navigationSelected=<Job/>
      break;
  }
 
    return (   
          <div>
            <Header/>
            <div className="md:mt-20 md:static flex flex-col md:flex-row md:flex">
            <div className=" md:rounded-lg md:flex-1 md:mx-auto md:max-w-4xl bg-jobsearch pb-44">
            {navigationSelected}
           </div>
            <div className="md:order-first md:flex-2 ">

            <Navigation navigation={setNavigation}/>
          </div>
        
          {/* <div className="grid grid-cols-4 gap-2 bottom-0 sm:fixed fixed    md:top-10 md:flex md:flex-col md:flex-1 md:pr-3 md:mt-5  bg-white shadow-md md:pt-9 pt-5"> */}

              {/* <Navigation navigation={setNavigation}/> */}
            </div>
          </div>
    )
}



const mapStateToProps=({userAuth})=>({
  user:userAuth
})

export default connect(mapStateToProps,null)(Dashboard);
