import React, { useState } from 'react';
import { Link as ReachLink } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
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
  FormErrorMessage,
} from '@chakra-ui/react';
import {
  FiArrowRight,
} from 'react-icons/fi';
import { gql, useLazyQuery } from '@apollo/client';
import logo from '../assets/img/logo.svg';
import { useAuthDispatch } from '../context/auth';

const LOGIN_USER = gql`
  query login($username: String! $password: String!) {
    login(username: $username password: $password) {
      username email token
    }
  }
`;
const schemaValidation = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required().min(6).max(15),
});
function Login(props) {
  const dispatch = useAuthDispatch();
  const [errorsFromServer, setErrorsFromServer] = useState(null);
  const [loginUser, { loading }] = useLazyQuery(LOGIN_USER, {
    onError: (err) => setErrorsFromServer(err.graphQLErrors[0].extensions.errors),
    onCompleted: (data) => {
      dispatch({ type: 'LOGIN', payload: data.login });
      props.history.push('/');
    },
  });
  const [show, toggleShow] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaValidation),
  });
  function toggleShowPassword() {
    toggleShow(!show);
  }
  function onSubmit(userInput) {
    setErrorsFromServer(null);
    const { username, password } = userInput;
    loginUser({ variables: { username, password } });
  }
  return (
    <Center bg="gray.700" h="100vh">
      <Box bg="white" w="500px" borderRadius="md" boxShadow="base" p="10">
        <Center marginBottom="10">
          <Image src={logo} alt="ChatLog" boxSize="60%" />
        </Center>
        <Text fontSize="2xl" fontWeight="semibold" align="center">
          Sign in to ChatLog
        </Text>
        <Text fontSize="md" fontWeight="normal" align="center" marginBottom="16px">
          Not a member ?
          {' '}
          <Link as={ReachLink} to="/register">Sign up now</Link>
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors.username?.message || errorsFromServer?.username} marginBottom="16px">
            <FormLabel>Username</FormLabel>
            <Controller name="username" control={control} defaultValue="" render={({ field }) => <Input type="text" bg="whiteAlpha.900" size="lg" placeholder="Your name" {...field} />} />
            <FormErrorMessage>
              {errors.username?.message || errorsFromServer?.username}
            </FormErrorMessage>
          </FormControl>
          <FormControl marginBottom="16px" isInvalid={errors.password?.message || errorsFromServer?.password}>
            <FormLabel>Password</FormLabel>
            <InputGroup size="lg">
              <Controller name="password" control={control} defaultValue="" render={({ field }) => <Input type={show ? 'text' : 'password'} bg="whiteAlpha.900" size="lg" placeholder="Enter password" {...field} />} />
              <InputRightElement marginRight="4">
                <Button size="sm" onClick={toggleShowPassword} variant="link" colorScheme="purple">{show ? 'HIDE' : 'SHOW'}</Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.password?.message || errorsFromServer?.password}
            </FormErrorMessage>
            <Text fontSize="sm" align="left" marginTop="8px">
              <Link as={ReachLink} to="/password_reset">Forgot password?</Link>
            </Text>
          </FormControl>
          <Center w="100%">
            <Button isLoading={loading} loadingText="Loading" colorScheme="purple" size="lg" type="submit" rightIcon={<Icon as={FiArrowRight} />}>Log in</Button>
          </Center>
        </form>
      </Box>

    </Center>
  );
}

export default Login;
