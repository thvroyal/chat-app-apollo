import React from 'react';
import {
  Box, Flex, Spacer, Avatar, Text, Stack,
} from '@chakra-ui/react';
import { Incoming } from './BubbleChat';

export default function IncomingRow() {
  return (
    <Flex w="100%" align="flex-end" px={3} my={2}>
      <Avatar name="Hoang" size="sm" mr={2} />
      <Stack spacing="2px" mr={8}>
        <Text fontSize="xs" ml="15px">Name</Text>
        <Incoming variant="top">
          Style props are a way to alter the
        </Incoming>
        <Incoming variant="mid">
          Style props are a way to alter the
        </Incoming>
        <Incoming variant="bot">
          Style props are a way to alter the
        </Incoming>
      </Stack>
      <Spacer />
      <Avatar name="Roy" size="2xs" />

    </Flex>
  );
}
