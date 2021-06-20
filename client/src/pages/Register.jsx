import React, { useState } from 'react';
import { Link as ReachLink } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import {
  FormControl,
  FormLabel,
  Input,
  Center,
  Box,
  Text,
  Link,
  Button,
  Icon,
  InputGroup,
  InputRightElement,
  Image,
} from '@chakra-ui/react';
import {
  FiArrowRight,
} from 'react-icons/fi';
import logo from '../assets/img/logo.svg';

function Register() {
  const [show, toggleShow] = useState(false);
  const { control, handleSubmit } = useForm();
  function toggleShowPassword() {
    toggleShow(!show);
  }
  function onSubmit(data) {
    console.log(data);
  }
  return (
    <Center bg="gray.700" h="100vh">
      <Box bg="white" w="500px" borderRadius="md" boxShadow="base" p="10">
        <Center marginBottom="10">
          <Image src={logo} alt="ChatLog" boxSize="60%" />
        </Center>
        <Text fontSize="2xl" fontWeight="semibold" align="center">
          Create new ChatLog account
        </Text>
        <Text fontSize="md" fontWeight="normal" align="center" marginBottom="16px">
          already have an account,
          {' '}
          <Link as={ReachLink} to="/login">sign in now</Link>
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Controller name="name" control={control} defaultValue="" render={({ field }) => <Input type="text" bg="whiteAlpha.900" marginBottom="16px" size="lg" placeholder="Your name" {...field} />} />
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Controller name="email" control={control} defaultValue="" render={({ field }) => <Input type="email" bg="whiteAlpha.900" marginBottom="16px" size="lg" placeholder="you@yourdomain" {...field} />} />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <InputGroup size="lg">
              <Controller name="password" control={control} defaultValue="" render={({ field }) => <Input type={show ? 'text' : 'password'} bg="whiteAlpha.900" size="lg" marginBottom="16px" placeholder="Enter password" {...field} />} />
              <InputRightElement marginRight="4">
                <Button size="sm" onClick={toggleShowPassword} variant="link" colorScheme="purple">{show ? 'HIDE' : 'SHOW'}</Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Center w="100%">
            <Button colorScheme="purple" size="lg" type="submit" rightIcon={<Icon as={FiArrowRight} />}>Sign up</Button>
          </Center>
        </form>
      </Box>

    </Center>
  );
}

export default Register;
