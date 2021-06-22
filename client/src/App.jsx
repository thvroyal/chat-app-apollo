import * as React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApolloProvider from './ApolloProvider';
import theme from './theme/index';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import Login from './pages/Login';

import { AuthProvider } from './context/auth';
import DynamicRoute from './utils/DynamicRoute';

function App() {
  return (
    <ApolloProvider>
      <AuthProvider>
        <BrowserRouter>
          <ChakraProvider theme={theme}>
            {/* Set up Routers */}
            <Switch>
              <DynamicRoute path="/register" component={Register} guest />
              <DynamicRoute path="/login" component={Login} guest />
              <DynamicRoute exact path="/" component={Welcome} authenticated />
            </Switch>
          </ChakraProvider>
        </BrowserRouter>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
