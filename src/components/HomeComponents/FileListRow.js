import { Tr,Td,HStack,Avatar,Text } from '@chakra-ui/react';
import {IoMdListBox} from "react-icons/io"
import {FiLink2} from "react-icons/fi"
import {AiOutlineEllipsis} from "react-icons/ai"
import React from 'react';

const FileListRow = () => {
    return (
        
        <Tr>
            <Td>
                <HStack><IoMdListBox  color="#2262c6"/><Text fontSize="10px">metric conversion</Text></HStack>    
            </Td>
            <Td>
                <HStack>
                    <Avatar name='Dan Abrahmov'  size='2xs' src='https://bit.ly/dan-abramov' />
                    <Avatar name='Dan Abrahmov'  size='2xs' src='https://bit.ly/dan-abramov' />
                </HStack>
            </Td>
            <Td><Text fontSize="10px">Sept 9,2019-4:30 AM</Text></Td>
            <Td><Text fontSize="10px">20 MB</Text></Td>
            <Td><FiLink2 /></Td>
            <Td><AiOutlineEllipsis/></Td>
        </Tr>
    );
};

export default FileListRow;