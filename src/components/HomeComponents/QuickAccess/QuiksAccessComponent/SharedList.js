import { HStack, Wrap ,WrapItem,Avatar} from '@chakra-ui/react';
import React from 'react';

const SharedList = () => {
    return (
        <Wrap>
            <WrapItem>
                 <Avatar name='Dan Abrahmov'  size='2xs' src='https://bit.ly/dan-abramov' />
            </WrapItem>
            <WrapItem>
                <Avatar name='Kola Tioluwani' size='2xs' src='https://bit.ly/tioluwani-kolawole' />
            </WrapItem>
            <WrapItem>
                <Avatar name='Kent Dodds' size='2xs' src='https://bit.ly/kent-c-dodds' />
            </WrapItem>
            <WrapItem>
                <Avatar name='Ryan Florence' size='2xs' src='https://bit.ly/ryan-florence' />
            </WrapItem>
            <WrapItem>
                <Avatar name='Prosper Otemuyiwa' size='2xs' src='https://bit.ly/prosper-baba' />
            </WrapItem>
          
        </Wrap>
    );
};

export default SharedList;