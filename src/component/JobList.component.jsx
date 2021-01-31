import React from 'react'
import JobItemCard from "./JobItemCard.component";

export default function JobList({feed,onOpen,setSeletedJob}) {

    const jobItem=feed && feed.map((item,index)=>
                  <JobItemCard
                  key={index}
                  feed={item} 
                  onOpen={onOpen} 
                  setSeletedJob={setSeletedJob}
                  />)

    return (
        <div>
            {jobItem}
        </div>
    )
}
