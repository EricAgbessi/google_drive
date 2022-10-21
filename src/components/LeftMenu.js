import { Button, VStack ,Text, HStack, Slider,SliderTrack,SliderFilledTrack,SliderThumb} from '@chakra-ui/react';
import {BsCompass,BsDisplay,BsPeople,BsClock,BsArrowUpRight,BsStarFill,BsTrash,BsArrowCounterclockwise,BsCloudArrowUp} from 'react-icons/bs'
import {SiGooglephotos} from  'react-icons/si'
import React from 'react';

const LeftMenu = () => {
    return (
        <VStack  color="white" fontSize="12px" alignItems="flex-start" justifyContent="space-between" p="10px" paddingBottom="30px" bgColor='#2262c6' paddingTop="30px" h="100%" w="200px" borderTopRightRadius="60px ">
           
            <Button borderRadius="full" w="8 0%"><Text color="#2262c6" fontSize="12px"  >Upload New File</Text></Button>
              
            <VStack fontSize="14px" alignItems="flex-start" spacing="15px">
                <HStack><BsCompass /><Text>My drive</Text></HStack> 
                <HStack><BsDisplay /><Text>Computers</Text></HStack>
                <HStack><BsPeople/> <Text>Shared with me</Text></HStack>
                <HStack><BsClock/><Text>Recent</Text></HStack>
                <HStack><BsStarFill/><Text>Starred</Text></HStack>
                <HStack><BsTrash/><Text>Trash</Text></HStack>
                <HStack><BsArrowCounterclockwise /><Text>Backup</Text></HStack>
            </VStack>



            <VStack  alignItems="flex-start" spacing="15px">

                <VStack alignItems="flex-start">
                    <HStack><Text>STORAGE DETAILS</Text><hr/></HStack>
                    <VStack alignItems="flex-start">
                        <HStack><BsCloudArrowUp fontSize="14px"  /><Text>Storage</Text></HStack>
                        <Slider aria-label='slider-ex-1' defaultValue={50}>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                        </Slider>
                        <HStack><Text>60.8 GB of 1TB used</Text></HStack>
                    </VStack>
                </VStack>

                <VStack alignItems="flex-start">    
                    <VStack alignItems="flex-start">
                        <HStack><SiGooglephotos fontSize="14px" /><Text>Photos</Text></HStack>
                        <Slider aria-label='slider-ex-1' defaultValue={10}>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            
                        </Slider>
                        <HStack><Text>10.3 GB of 1TB used</Text></HStack>
                    </VStack>
                </VStack>

                <HStack><Text>Upgrade Storage </Text> <BsArrowUpRight /> </HStack>
            </VStack>

        </VStack>
    );
};

export default LeftMenu;