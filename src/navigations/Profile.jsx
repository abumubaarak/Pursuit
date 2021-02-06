import React,{useEffect} from 'react' 

import profile from "../img/user-male.png";
 import ProfileCard from '../component/ProfileCard.component';
import EditProfile from '../component/EditProfile.component';
import { connect } from 'react-redux';
import { getProfile } from "../redux/Profile/action";

function Profile({ getProfile, user })
{ 
    const {profile}=user
       useEffect(() => {
        getProfile("LWPqNfL8yqMshLppoowyKJ9uEt02")
         
    }, [])
     
    return (
        <div className="mt-7 ml-3 flex flex-col md:flex-row ">
            { profile &&
                <>
                <ProfileCard  />
                <EditProfile  />
                </>
            }  
            </div>
    )
} 

const mapStateToProps = ({ profile }) => ({
    user:profile
})

export default connect(mapStateToProps,{getProfile})(Profile)