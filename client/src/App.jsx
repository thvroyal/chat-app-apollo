import * as React from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ApolloProvider from './ApolloProvider';
import theme from './theme/index';
import Register from './pages/Register';
import Welcome from './pages/Welcome';
import Login from './pages/Login';

function App() {
  return (
    <ApolloProvider>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          {/* Set up Routers */}
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Welcome} />
          </Switch>
        </ChakraProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
