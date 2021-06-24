import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat';

export default function Home() {
  return (
    <Flex h="100vh">
      {/* Sidebar */}
      <Box w="360px" px={2} pt={4} borderRight="1px" borderColor="gray.200">
        <Sidebar />
      </Box>
      {/* Main Chat */}
      <Box flex="1">
        <Chat />
      </Box>
    </Flex>
  );
}
