import React from 'react';
import { Box, Button, HStack, Image, Input, InputGroup, InputLeftAddon, InputLeftElement, Text, VStack } from '@chakra-ui/react';
import { AiOutlineSearch } from "react-icons/ai";
import { BsBell,BsQuestionCircle,BsGear,BsTextRight} from "react-icons/bs";
import {FaGoogleDrive } from "react-icons/fa"


const Header = () => {
    return (
            <HStack   h="30px" mt="5px" w="100%" justifyContent="space-around" >

                <HStack  w="200px" color="#2262c6">
                    <FaGoogleDrive/>
                    <Text as="b" >Google drive</Text>
                </HStack>

                <InputGroup w="30%" h="30px" >
                    <InputLeftElement h="30px"  pointerEvents="none" children={< AiOutlineSearch  color='#ccc'/>} />
                    <Input h="30px"  fontSize="12px" placeholder='Search drive'  bgColor="#f0f2f8"  borderRadius="full" />
                </InputGroup>

                <HStack color="#2262c6"> 
                    <BsBell />
                    <BsQuestionCircle />
                    <BsGear />
                </HStack>

                <HStack fontSize="12px">
                    <Text>Jessica</Text>
                    <Box display="flex" flexDirection="row" justifyContent="center"  alignItems="center" boxSize="30px" bgColor="#2262c6" borderRadius="full">
                        <Text as="b" color="white">J</Text>
                    </Box>
                </HStack>

                <Button h="25px" bgColor="white" > <BsTextRight  fontSize="20px"/></Button>
            </HStack>
    );
};

export default Header;