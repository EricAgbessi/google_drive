import { HStack, Image, Input, InputGroup, InputLeftAddon, InputLeftElement, Text, VStack } from '@chakra-ui/react';
import { type } from '@testing-library/user-event/dist/type';
import React, { createContext, useReducer } from 'react';
import Header from '../components/Header';
import BodyHeader from '../components/HomeComponents/BodyHeader';
import FilesList from '../components/HomeComponents/FilesList';
import QuickAccesLIst from '../components/HomeComponents/QuickAccesLIst';
import LeftMenu from '../components/LeftMenu';

const Home = () => {

/*
    createContext()

    function init(initialValue){
        return {count: initialValue}
    }

    function reducer(state, action){
        switch(action.type){
            case 'increment':
                return state + 1
            case 'decrement':
                return state - 1
            default:
                throw new Error("L'action" + action.type + "est inconnue") 
        }
    }

    const [count,dispatch] =  useReducer(reducer,0,init)
    /**<ButtononCLick={()=> dispatch({type:'increment'})}></Button> */


    return (
      <VStack h="100vh">
            <Header />
            <HStack justifyContent="flex-start"  h="100%" w="100%">
                <LeftMenu />
                <VStack justifyContent="flex-start" h="100%"  w="100%" padding="30px" alignItems="flex-start" > 
                    <BodyHeader/>
                    <HStack justifyContent="flex-start" padding="20px" >
                        <QuickAccesLIst/>
                    </HStack>
                    <FilesList />
                </VStack>
            </HStack>     
      </VStack>
    );
};

export default Home;