import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import EditProfile from "../component/EditProfile.component";
import Error from "../component/Error.component";
import ProfileCard from "../component/ProfileCard.component";
import SkeletonLoader from "../component/SkeletonLoader.component";

function Profile({ getProfile, user }) {
  const { profile, isLoading, error } = user;
  const [loadFeed, setLoadFeed] = useState(false);

  useEffect(() => {
    // There is no need to fetch user account again
    //getProfile("LWPqNfL8yqMshLppoowyKJ9uEt02")
  }, []);

  useEffect(() => {
    if (loadFeed) {
      setLoadFeed(false);
    }
    // setLoadFeed(false)
  }, [loadFeed]);

  let profileFeed;

  if (isLoading) {
    profileFeed = <SkeletonLoader />;
  } else if (error) {
    console.log(error);

    profileFeed = <Error setLoadFeed={setLoadFeed} />;
  } else {
    profileFeed = profile && (
      <>
        <ProfileCard />
        <EditProfile />
      </>
    );
  }

  return (
    <div className="mt-7 ml-3 flex flex-col md:flex-row ">{profileFeed}</div>
  );
}

const mapStateToProps = ({ profile }) => ({
  user: profile,
});

export default connect(mapStateToProps, null)(Profile);
