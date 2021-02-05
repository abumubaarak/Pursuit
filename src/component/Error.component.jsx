import { Button } from '@chakra-ui/react'
import React from 'react'

export default function Error({setLoadFeed}) {
   // const [loadFeed,setloadFeed]= useState(false)


    // const handleTryAgain=()=>{
    //     setLoadFeed(loadFeed)
    // }

    return (
        <div className="text-center mt-24">
            <h1 className="text-center text-xl font-bold font-custom text-black">Can't refresh Jobs right now </h1>
            <Button className=" bg-blue-600 text-white" mt={5} bg="purple"
             onClick={()=>setLoadFeed(true)}>Try Again</Button>
        </div>
    )
}
