import { extendTheme } from '@chakra-ui/react';
import Link from './components/Link';

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
  },
});
export default theme;
