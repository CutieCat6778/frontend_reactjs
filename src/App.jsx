import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { AppRouter } from './router';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <AppRouter />
    </ChakraProvider>
  );
}

export default App;
