import { useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Empty from "../component/Empty.component";
import JobList from "../component/JobList.component";
import Model from "../component/Model.component";
import SkeletonLoader from "../component/SkeletonLoader.component";
import { getAppliedJob } from "../redux/Applied/action";

function Applied({ getAppliedJob, feed }) {
  const {
    appliedJobs: { jobs, isLoading, empty },
    userAuth: {
      profile: { uid },
    },
  } = feed;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedJob, setSeletedJob] = useState();

  useEffect(() => {
    getAppliedJob(uid);
  }, []);

  let appliedFeed;

  if (empty) {
    appliedFeed = <Empty applied={true} />;
  } else if (isLoading) {
    console.log(empty);
    appliedFeed = <SkeletonLoader />;
  } else {
    appliedFeed = (
      <JobList
        feed={jobs}
        isApplied={true}
        onOpen={onOpen}
        setSeletedJob={setSeletedJob}
      />
    );
  }

  return (
    <div>
      {appliedFeed}

      {selectedJob && (
        <Model
          uid={uid}
          isOpen={isOpen}
          onClose={onClose}
          selectedJob={selectedJob}
        />
      )}
    </div>
  );
}
const mapStateToProps = ({ appliedJobs, userAuth }) => ({
  feed: { appliedJobs, userAuth },
});

export default connect(mapStateToProps, { getAppliedJob })(Applied);
