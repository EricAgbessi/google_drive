import { Button, HStack,Text } from '@chakra-ui/react';
import {MdCreateNewFolder} from "react-icons/md"
import {BsGrid3X3} from "react-icons/bs"
import {AiOutlineInfoCircle} from "react-icons/ai"
import React from 'react';

const BodyHeader = () => {
    return (
        <HStack w="100%" pt="50px" justifyContent="space-between">

            <HStack>
                <Text as="b" color="#2262c6">My Drive</Text>
                <Button bgColor="#2262c6" color="white"><MdCreateNewFolder/></Button>
            </HStack>

            <HStack>
                <Button><BsGrid3X3 /></Button>
                <Button><AiOutlineInfoCircle /></Button>
            </HStack>

        </HStack>
    );
};

export default BodyHeader;