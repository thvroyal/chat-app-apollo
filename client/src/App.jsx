import * as React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import Register from './pages/Register';
import myTheme from './theme/index';

function App() {
  return (
    <ChakraProvider theme={myTheme}>
      <Register />
    </ChakraProvider>
  );
}

export default App;
