import React,{useEffect,useState} from 'react' 

import profile from "../img/user-male.png";
 import ProfileCard from '../component/ProfileCard.component';
import EditProfile from '../component/EditProfile.component';
import { connect } from 'react-redux';
import { getProfile } from "../redux/Profile/action";
import SkeletonLoader from '../component/SkeletonLoader.component';
import Error from '../component/Error.component';


function Profile({ getProfile, user })
{ 
    const { profile, isLoading, error } = user
    const [loadFeed,setLoadFeed]= useState(false)

       useEffect(() => {
        getProfile("LWPqNfL8yqMshLppoowyKJ9uEt02")
         
       }, [])
    
       useEffect(() => {
        console.log(loadFeed + " outside");
        if (loadFeed) {
            setLoadFeed(false)
            
 
        }
       // setLoadFeed(false)
    }, [loadFeed])
    
       let profileFeed;

       if (isLoading) {
           profileFeed = <SkeletonLoader/>
       }else if(error){
           profileFeed=<Error 
           setLoadFeed={setLoadFeed}/>
       }else{
           profileFeed = profile &&
           <>
           <ProfileCard  />
           <EditProfile  />
           </>
       }
       
     
    return (
        <div className="mt-7 ml-3 flex flex-col md:flex-row ">
            { profileFeed 
            }  
            </div>
    )
} 

const mapStateToProps = ({ profile }) => ({
    user:profile
})

export default connect(mapStateToProps,{getProfile})(Profile)