import React from 'react'
import { SkeletonCircle,SkeletonText,Box, Flex, Skeleton,Heading } from "@chakra-ui/react";

export default function SkeletonItem() {
    return (
        <div > 
        
        <Box className="my-9" bg="white" mx={5} padding="5" rounded="lg">
            <Flex className="w-full">
                <SkeletonCircle size="16" alignSelf="center"/>
                
                <Flex flexDir="column"  className="w-11/12  ml-3">
                    <Skeleton rounded="xl" className="w-5/6 h-6 ">
                        <div > Content</div>
                    </Skeleton>
                    
                    <Skeleton rounded="xl" className="w-8/12 h-3 mt-5">
                        <div > Content</div>
                    </Skeleton> 
                    
                    <Skeleton rounded="xl" className="w-4/12 h-3 mt-5">
                        <div > Content</div>  
                    </Skeleton> 
                </Flex>
                
            </Flex>
            
        </Box>
        
           
           
        </div>
    )
}
