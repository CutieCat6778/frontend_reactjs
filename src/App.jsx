import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { AppRouter } from './router';
import { theme } from './chakra/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <AppRouter />
    </ChakraProvider>
  );
}

export default App;
