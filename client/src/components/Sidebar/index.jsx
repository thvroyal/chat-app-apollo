import React, { useState } from 'react';
import {
  Box, Stack, Flex,
} from '@chakra-ui/react';
import { Scrollbars } from 'react-custom-scrollbars';
import { gql, useQuery } from '@apollo/client';
import Header from './Header';
import CardUser from './CardUser';

const GET_USERS = gql`
query getUsers{
  getUsers{
    username imageUrl createdAt
    latestMessage {
      uuid from to content createdAt
    }
  }
}`;
export default function Sidebar() {
  const { loading, data, error } = useQuery(GET_USERS);
  const [isScrolled, setScrollbar] = useState(false);
  function handleBorderTop(values) {
    if (values.top > 0) setScrollbar(true);
    else setScrollbar(false);
  }
  return (
    <Flex direction="column" h="100%">
      <Header />
      <Stack spacing={0} mt={6} flex="1" borderTop="1px" borderColor={isScrolled ? 'gray.200' : 'white'}>
        <Scrollbars
          autoHide
          autoHideDuration={400}
          onScrollFrame={handleBorderTop}
        >
          {data && data.getUsers.map((user) => <CardUser key={user.username} user={user} />)}
        </Scrollbars>
      </Stack>
    </Flex>
  );
}
