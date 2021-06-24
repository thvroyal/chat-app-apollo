import { extendTheme } from '@chakra-ui/react';
import Link from './components/Link';
import Button from './components/Button';
import Input from './components/Input';
import { Incoming, Outcoming } from './components/BubbleChat';

const theme = extendTheme({
  styles: {
    // Styles for global
    global: {
      body: {
        color: 'blue.800',
      },
    },
  },
  // Import styles for components
  components: {
    Link,
    Button,
    Input,
    Incoming,
    Outcoming,
  },
});
export default theme;
