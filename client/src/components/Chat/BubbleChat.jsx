import React from 'react';
import { Box, Text, useStyleConfig } from '@chakra-ui/react';

export function Incoming(props) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig('Incoming', { variant });

  // Pass the computed styles into the `__css` prop
  return <Box __css={styles} {...rest}>{children}</Box>;
}

export function Outcoming(props) {
  const { variant, children, ...rest } = props;

  const styles = useStyleConfig('Outcoming', { variant });

  // Pass the computed styles into the `__css` prop
  return <Box __css={styles} {...rest}>{children}</Box>;
}
