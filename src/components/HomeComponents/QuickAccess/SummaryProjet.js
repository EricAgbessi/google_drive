import { VStack,Text,Stack, HStack,Avatar } from '@chakra-ui/react';
import {IoMdListBox} from "react-icons/io"
import React from 'react';
import SharedList from './QuiksAccessComponent/SharedList';
import './style.css'

const SummaryProjet = (props) => {
    return (
        <VStack w="150px" h="120px" borderRadius="15px" bgColor={props.Qcolor}   justifyContent="flex-end">
            
                <VStack w="100%" alignItems="flex-start" borderLeft="2px solid #2262c6" paddingLeft="10px" paddingRight="5px">
                    <HStack w="100%" justifyContent="space-between">
                        <IoMdListBox  color="#2262c6"/>
                        <Avatar name='Dan Abrahmov'  size='2xs' src='https://bit.ly/dan-abramov' />
                    </HStack>
                    <Text color="#2262c6" as="b" w="70%" fontSize="10px">Projet Summary for english class</Text>
                </VStack>
                <VStack paddingLeft="20px" alignItems="flex-start" w="100%" spacing="0px" >
                    <Text color={props.textColor} fontSize="8px" as="b">LAST MODIFIED</Text>
                    <Text color={props.textColor} fontSize="8px" as="b">Sept 9,2019-4:30 AM</Text>
                </VStack>
        </VStack>
    );
};

export default SummaryProjet;