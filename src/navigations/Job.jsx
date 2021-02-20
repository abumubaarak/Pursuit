import React,{useEffect,useState} from 'react'
import { connect } from 'react-redux';
import {Heading, useDisclosure } from '@chakra-ui/react';

import Model from '../component/Model.component';
import Search from '../component/Search.component'
import { getJobFeed,getJobFeedpage } from "../redux/JobFeed/action";
import SkeletonLoader from "../component/SkeletonLoader.component";
import JobList from '../component/JobList.component';
import Error from '../component/Error.component';
import InfiniteScroll from 'react-infinite-scroller';


 function Job({getJobFeed,feed:{isLoading,feed,error},user:{profile:{uid}}}) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectedJob,setSeletedJob]= useState();
    const [search,setSearch]= useState()
    const [searchOn ,setSearchOn]=useState(false)
    const [loadFeed,setLoadFeed]= useState(false)
    
  
    useEffect(() => {
         if (!feed) {
             getJobFeed("", "", 1)
             //getProfile("LWPqNfL8yqMshLppoowyKJ9uEt02")

          }
    }, [])
     
     useEffect(() => {
         if (searchOn) {
            
        getJobFeed("","",1)  
          }
     }, [searchOn])


    useEffect(() => {
        console.log(loadFeed + " outside");
        if (loadFeed) {
            setLoadFeed(false)
            
            getJobFeed("","",1)

        }
       // setLoadFeed(false)
    }, [loadFeed])
    

     useEffect(() => {
         
        if(search){
        const {description,location}=search
        getJobFeed(location,description,1)
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
            
            <Search setSearch={setSearch} setSearchOn={setSearchOn} />
            {/* <InfiniteScroll
                pageStart={0}
                loadMore={() => getJobFeedpage(2)}
                hasMore={true || false}
                loader={<div className="loader" key={0}>Loading NOW ...</div>}>
                 */}
                      {jobFeed}


            {/* </InfiniteScroll> */}
              
                     
            {selectedJob && <Model uid={uid}  isOpen={isOpen}  onClose={onClose} selectedJob={selectedJob}/>}
 
            
            
             
        </div>
    )
}

const mapStateToProps=({feed})=>({
        feed:feed
})

export default connect(mapStateToProps,{getJobFeed})(Job)
