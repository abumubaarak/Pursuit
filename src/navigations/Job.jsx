import { useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Error from "../component/Error.component";
import JobList from "../component/JobList.component";
import Model from "../component/Model.component";
import Search from "../component/Search.component";
import SkeletonLoader from "../component/SkeletonLoader.component";
import { getJobFeed } from "../redux/JobFeed/action";

function Job({
  getJobFeed,
  feed: { isLoading, feed, error },
  user: {
    profile: { uid },
  },
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedJob, setSeletedJob] = useState();
  const [search, setSearch] = useState();
  const [searchOn, setSearchOn] = useState(false);
  const [loadFeed, setLoadFeed] = useState(false);

  useEffect(() => {
    if (!feed) {
      getJobFeed("", "", 1);
    }
  }, []);

  useEffect(() => {
    if (searchOn) {
      getJobFeed("", "", 1);
    }
  }, [searchOn]);

  useEffect(() => {
    if (loadFeed) {
      setLoadFeed(false);

      getJobFeed("", "", 1);
    }
  }, [loadFeed]);

  useEffect(() => {
    if (search) {
      const { description, location } = search;
      getJobFeed(location, description, 1);
    }
  }, [search]);

  let jobFeed;

  if (isLoading) {
    jobFeed = <SkeletonLoader />;
  } else if (error) {
    jobFeed = <Error setLoadFeed={setLoadFeed} />;
  } else {
    jobFeed = (
      <JobList feed={feed} onOpen={onOpen} setSeletedJob={setSeletedJob} />
    );
  }

  return (
    <div>
      <Search setSearch={setSearch} setSearchOn={setSearchOn} />
      {jobFeed}
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

const mapStateToProps = ({ feed }) => ({
  feed: feed,
});

export default connect(mapStateToProps, { getJobFeed })(Job);
