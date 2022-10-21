import React from 'react';
import {Table,Thead,Tbody,Tfoot,Tr,Th,Td, TableCaption,TableContainer, HStack,Avatar, Stack,Text} from '@chakra-ui/react'
import FileListRow from './FileListRow';

const FilesList = () => {
    return (
        <Stack w="100%">
            <TableContainer w="100%">
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th><Text fontSize="10px">Name</Text></Th>
                            <Th><Text fontSize="10px">OWNERS</Text></Th>
                            <Th><Text fontSize="10px">LAST MODIFIED</Text></Th>
                            <Th><Text fontSize="10px">FILE SIZE</Text></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <FileListRow />
                        <FileListRow />
                        <FileListRow />
                        <FileListRow />
                        <FileListRow />
                    </Tbody>
                
                </Table>
            </TableContainer>
        </Stack>
    );
};

export default FilesList;