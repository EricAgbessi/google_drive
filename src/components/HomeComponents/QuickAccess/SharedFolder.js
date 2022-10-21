import React from 'react';
import { VStack,Text,Stack } from '@chakra-ui/react';
import SharedList from './QuiksAccessComponent/SharedList';
import './style.css'

const SharedFolder = (props) => {
    return (
        <Stack className='clip' bgColor={props.Qcolor} >
            <VStack  h="100%" marginBottom="30px" alignItems="flex-start"  padding="5px"  > 
                <Text fontSize="8px" as="b" color={props.textColor}>CHARED WITH</Text>
                <SharedList />
                <Text color={props.textColor} fontSize="8px" as="b">FOLDER</Text>
                <Text color={props.titleColor} fontSize="8px" as="b">Design Files</Text>
            </VStack>
        </Stack>
    );
};

export default SharedFolder;