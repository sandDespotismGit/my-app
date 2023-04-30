import React from 'react';
import { ChakraProvider, VStack } from '@chakra-ui/react';
import { Autorisation } from '../components/Autorisation';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
function Main() {
  return (
    <ChakraProvider>
      <Header />
        <Autorisation />
      <Footer />
    </ChakraProvider>
  );
}

export default Main;
