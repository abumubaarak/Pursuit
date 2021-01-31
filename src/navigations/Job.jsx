import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux';
import {Heading, useDisclosure } from '@chakra-ui/react';

import Model from '../component/Model.component';
import Search from '../component/Search.component'
import { getJobFeed } from "../redux/JobFeed/action";
import SkeletonLoader from "../component/SkeletonLoader.component";
import JobList from '../component/JobList.component';

 function Job({getJobFeed,feed:{isLoading,feed,error}}) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectedJob,setSeletedJob]= useState();
    const [search,setSearch]= useState()


      useEffect(() => {
        getJobFeed("","")
     }, [])

     useEffect(() => {
         
        if(search){
        const {description,location}=search
        getJobFeed(location,description)
        }
      
     }, [search])
     
        const jobFeed=
        <JobList 
         feed={feed}  
        onOpen={onOpen} 
        setSeletedJob={setSeletedJob}/>
        
    return (
        <div>
            
            <Search setSearch={setSearch}/>
 
             
            {isLoading ? <SkeletonLoader/>: jobFeed }
                     
            {selectedJob && <Model  isOpen={isOpen}  onClose={onClose} selectedJob={selectedJob}/>}
 
            
            
             
        </div>
    )
}

const mapStateToProps=({feed})=>({
        feed:feed
})

export default connect(mapStateToProps,{getJobFeed})(Job)
