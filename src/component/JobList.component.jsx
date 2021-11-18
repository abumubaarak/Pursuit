import React from "react";
import JobItemCard from "./JobItemCard.component";

export default function JobList({ feed, onOpen, setSeletedJob, isApplied }) {
  const jobItem =
    feed &&
    feed.map((item, index) => (
      <JobItemCard
        key={index}
        isApplied={isApplied}
        feed={item}
        onOpen={onOpen}
        setSeletedJob={setSeletedJob}
      />
    ));

  return <div className="mt-10">{jobItem}</div>;
}
