import React from 'react';
import {
  Box,
  Flex, Spacer, Avatar, Text, Center, IconButton, HStack, InputGroup, InputLeftElement, Input, Icon,
  PopoverTrigger, Popover, PopoverContent, PopoverArrow, Stack, StackDivider,
} from '@chakra-ui/react';
import {
  FiMoreVertical, FiPlus, FiSearch, FiLogOut, FiSettings,
} from 'react-icons/fi';
import { gql, useQuery } from '@apollo/client';
import { useAuthDispatch } from '../../context/auth';

const GET_INFO_USER = gql`
query getInfoUser{
  getInfoUser{
    username imageUrl
  }
}`;

export default function Header() {
  const dispatch = useAuthDispatch();
  const { loading, data, error } = useQuery(GET_INFO_USER);
  console.log(data);
  function Logout() {
    dispatch({ type: 'LOGOUT' });
  }
  return (
    <Box mt={2}>
      <Flex px={2}>
        {data && (
        <Center>
          <Avatar name={data.getInfoUser?.username} src={data.getInfoUser?.imageUrl} />
          <Text fontSize="xl" fontWeight="semibold" ml={3}>{data.getInfoUser?.username}</Text>
        </Center>
        )}
        <Spacer />
        <HStack spacing={2}>
          <IconButton aria-label="New" icon={<FiPlus />} variant="ghost" fontSize="xl" borderRadius={4} colorScheme="purple" />
          <Popover isLazy placement="bottom-start">
            <PopoverTrigger>
              <IconButton aria-label="More Action" icon={<FiMoreVertical />} variant="ghost" fontSize="xl" borderRadius={4} colorScheme="purple" />
            </PopoverTrigger>
            <PopoverContent _focus={{ outline: 'none', boxShadow: 'none' }}>
              <PopoverArrow />
              <Stack p={2} divider={<StackDivider borderColor="gray.200" />}>
                <ButtonLeft label="Setting" iconLeft={FiSettings} />
                <ButtonLeft label="Sign out" iconLeft={FiLogOut} onClick={Logout} />
              </Stack>
            </PopoverContent>
          </Popover>
        </HStack>
      </Flex>
      <InputGroup mt={6}>
        <InputLeftElement
          pointerEvents="none"
          children={<Icon as={FiSearch} color="gray.400" />}
        />
        <Input type="text" placeholder="Search on Chat Log" bg="gray.100" borderRadius="full" />
      </InputGroup>
    </Box>

  );
}

function ButtonLeft({ label, iconLeft, ...props }) {
  return (
    <HStack
      as="button"
      w="100%"
      py={2}
      spacing={6}
      _hover={{ bg: 'gray.50' }}
      _active={{ bg: 'gray.100', fontWeight: 'semibold' }}
      borderRadius="base"
      px={3}
      color="blue.800"
      {...props}
    >
      <Icon as={iconLeft} />
      <Text>{label}</Text>
    </HStack>
  );
}
