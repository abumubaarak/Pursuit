import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux';
import {Heading, useDisclosure } from '@chakra-ui/react';

import Model from '../component/Model.component';
import Search from '../component/Search.component'
import { getJobFeed } from "../redux/JobFeed/action";
import SkeletonLoader from "../component/SkeletonLoader.component";
import JobList from '../component/JobList.component';
import Error from '../component/Error.component';

 function Job({getJobFeed,feed:{isLoading,feed,error},user:{profile:{uid}}}) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectedJob,setSeletedJob]= useState();
    const [search,setSearch]= useState()
    const [loadFeed,setLoadFeed]= useState(false)
    
    useEffect(() => {
        if (!feed) {
            getJobFeed("","")
        }
    }, [])


    useEffect(() => {
        console.log(loadFeed + " outside");
        if (loadFeed) {
            setLoadFeed(false)
            
            getJobFeed("","")

        }
       // setLoadFeed(false)
    }, [loadFeed])
    

     useEffect(() => {
         
        if(search){
        const {description,location}=search
        getJobFeed(location,description)
        }
      
     }, [search])
     
        let jobFeed;

        if (isLoading) {
            jobFeed= <SkeletonLoader/>
        }else if(error){
            jobFeed=<Error 
            setLoadFeed={setLoadFeed}/>
        }else{
            jobFeed= <JobList
            feed={feed}  
           onOpen={onOpen} 
           setSeletedJob={setSeletedJob}/>
        }
        
    return (
        <div>
            
            <Search setSearch={setSearch}/>
 
             
            {jobFeed }
                     
            {selectedJob && <Model uid={uid}  isOpen={isOpen}  onClose={onClose} selectedJob={selectedJob}/>}
 
            
            
             
        </div>
    )
}

const mapStateToProps=({feed})=>({
        feed:feed
})

export default connect(mapStateToProps,{getJobFeed})(Job)
