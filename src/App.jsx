import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { Main } from './pages/main';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Main />
    </ChakraProvider>
  );
}

export default App;
