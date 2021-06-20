import * as React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Register from './pages/Register';
import theme from './theme/index';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Register />
    </ChakraProvider>
  );
}

export default App;
