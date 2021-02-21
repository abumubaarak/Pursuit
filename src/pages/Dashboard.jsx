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
import { getProfile } from "../redux/Profile/action";

import SavedJob from '../navigations/SavedJob';

 function Dashboard({user,getProfile,history}) {

   const [navigation, setNavigation] = useState("job");
   const { profile, isLoading, error } = user

   console.log(profile.uid);

    useEffect(() =>
    {
      if (profile.uid) {
              getProfile(profile.uid)
      } else {
        history.push("/")

      }
  
    }, [])
   
   useEffect(() => {
      
     if (!profile.uid) {
       history.push("/")
     }
   }, [profile.uid])

    
  const toast = useToast()

  useEffect(() => {

    const {displayName,email}=user?.profile;

    let firstname
     
    if(!displayName){

      const splitName=email?.split("@")
    
       firstname=splitName[0]

       
    }else{

      const splitName=displayName?.split(" ")
    
     firstname=splitName[0] 
    }
    

  toast({
          position: "top-right",
          title: `Welcome ${ firstname } 👋 !`,
          description: "Pursuit your next Job ❤️‍🔥",
          status: "success",
          duration: 5000,
          isClosable: true,
        })
     
  }, [])


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
            <Header history={history}/>
            <div className="   flex flex-col md:flex-row h-screen md:flex">
            <div className="  md:rounded-lg md:overflow-y-scroll   md:mt-20   md:flex-1 md:mx-auto md:max-w-6xl bg-main-2 pb-44">
            {navigationSelected}
           </div>
            <div className="pt-24 md:items-stretch md:order-first md:flex-2 md:shadow-md">
            <Navigation navigation={setNavigation}/>
          </div>
        </div>
      </div>
    )
}



const mapStateToProps=({userAuth})=>({
  user:userAuth
})

export default connect(mapStateToProps,{getProfile})(Dashboard);
