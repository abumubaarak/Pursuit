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
import Saved from '../navigations/Saved';

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
      navigationSelected=<Job/>
      break;
    case "applied":
      navigationSelected=<Applied/>
      break;
    case "saved":
      navigationSelected=<Saved/>
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
            <div className=" relative md:static sm:relative flex md:flex flex-col md:flex-row md:mt-16  h-screen overflow-visible">
              <div className="md:my-7 md:rounded-t-2xl md:flex-2 md:mx-auto   bg-jobsearch">
                {navigationSelected}
              </div>
              <Navigation navigation={setNavigation}/>
            </div>
          </div>
    )
}



const mapStateToProps=({userAuth})=>({
  user:userAuth
})

export default connect(mapStateToProps,null)(Dashboard);
