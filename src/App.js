import { Container } from '@chakra-ui/react';
import './App.css';
import Aside from './components/Aside';
import Section from './components/Section';
import { ChakraProvider, Divider, Center } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
      <Container minW="100%" display="flex" flexDirection="row" justifyContent="center" bg="gray.500" h="100vh" p="0" overflow="hidden">
        <Aside/>
        <Center >
          <Divider orientation='vertical' />
        </Center>
        <Section/>
      </Container>
    </ChakraProvider>
  );
}

export default App;
