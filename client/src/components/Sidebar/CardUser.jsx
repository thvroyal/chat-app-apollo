import React from 'react';
import {
  Avatar, Box, AvatarBadge, Flex, Text, Spacer,
} from '@chakra-ui/react';
import moment from 'moment';

export default function CardUser({ user }) {
  return (
    <Flex align="center" w="100%" py={3} px={2} borderRadius={6} cursor="pointer" _hover={{ bg: 'gray.100' }}>
      <Avatar size="md" name={user.username} src={user.imageUrl} mr={3}>
        <AvatarBadge boxSize="1em" bg="green.500" />
      </Avatar>
      <Flex direction="column" maxW="220px">
        <Text fontSize="md">{user.username}</Text>
        {user.latestMessage ? (
          <Flex align="center" color="gray.500" whiteSpace="nowrap" fontSize="smaller">
            <Text isTruncated>{`${user.latestMessage?.from && user.latestMessage.from !== user.username ? 'You: ' : ''}${user.latestMessage?.content}`}</Text>
            <Text mx={1}>&middot;</Text>
            <Text>{moment(user.latestMessage.createdAt).fromNow(true)}</Text>
          </Flex>
        ) : <Text color="gray.500" fontSize="smaller">Send Message Now!</Text>}
      </Flex>
      <Spacer />
      <Box>
        <Avatar size="2xs" />
      </Box>
    </Flex>
  );
}

// ${user.latestMessage.from === user.username ? 'You: ' : ''}
