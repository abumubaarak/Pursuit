import React,{useEffect} from 'react' 

import profile from "../img/user-male.png";
import user from "../img/profile_img.jfif";
import ProfileCard from '../component/ProfileCard.component';
import EditProfile from '../component/EditProfile.component';
import { connect } from 'react-redux';
import { getProfile } from "../redux/Profile/action";

function Profile({ getProfile, user }) {
     useEffect(() => {
        getProfile("LWPqNfL8yqMshLppoowyKJ9uEt02")
         
    }, [])
     
    return (
        <div className="mt-7 ml-3 flex flex-col md:flex-row ">
            <ProfileCard user={user}/> 
            <EditProfile user={user}/>  
            </div>
    )
} 

const mapStateToProps = ({ profile }) => ({
    user:profile
})

export default connect(mapStateToProps,{getProfile})(Profile)