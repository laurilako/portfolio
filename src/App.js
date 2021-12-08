import { useColorMode } from "@chakra-ui/color-mode";
import { IconButton } from '@chakra-ui/button';
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/react";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
      <VStack p={5}>
        <Flex w='100%'>
          <Heading ml='8' size='md' fontWeight='semibold' color='cyan.400'>
            Portfolio
          </Heading>
        <Spacer></Spacer>
          <IconButton ml={2} icon={<FaGithub />} isRound='true'></IconButton>
          <IconButton ml={2} icon={<FaLinkedin />} isRound='true'></IconButton>
          <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} onClick={toggleColorMode} isRound='true'></IconButton>
        </Flex>
        <Header></Header>
        <Projects></Projects>
      </VStack>
  );
}

export default App;