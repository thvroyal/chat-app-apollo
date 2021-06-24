import React from 'react';
import {
  Box, Flex, Spacer, Avatar, Text, Stack,
} from '@chakra-ui/react';
import { Outcoming } from './BubbleChat';

export default function OutcomingRow() {
  return (
    <Flex w="100%" px={3} align="flex-end" direction="row-reverse" my={2}>
      <Avatar name="hel" size="2xs" ml={2} />
      <Stack spacing="2px" w="100%" align="flex-end">
        <Outcoming variant="top">
          Hello from the other side ~~
        </Outcoming>
        <Outcoming variant="bot">
          Hello from the other side ~~
        </Outcoming>
      </Stack>
    </Flex>
  );
}
