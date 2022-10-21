import { HStack } from '@chakra-ui/react';
import React from 'react';
import SharedFolder from './QuickAccess/SharedFolder';
import SummaryProjet from './QuickAccess/SummaryProjet';


const QuickAccesLIst = () => {
    return (
        <HStack w="100%"  spacing="30px">
            <SharedFolder Qcolor="#2262c6" textColor="#ffffff" titleColor="#ffffff" />
            <SharedFolder Qcolor="#f0f2f8" textColor="#A0AEC0" titleColor="#2262c6"/>
            <SharedFolder Qcolor="#f0f2f8" textColor="#A0AEC0" titleColor="#2262c6" />
            <SharedFolder Qcolor="#f0f2f8" textColor="#A0AEC0" titleColor="#2262c6" />
            <SharedFolder Qcolor="#f0f2f8" textColor="#A0AEC0" titleColor="#2262c6" />
            <SummaryProjet Qcolor="#f0f2f8" textColor="#A0AEC0" titleColor="#2262c6" />
        </HStack>
    );
};

export default QuickAccesLIst;