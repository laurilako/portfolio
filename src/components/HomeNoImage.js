import {
    Box,
    Stack,
    Heading,
    Text,
    Container,
    Button,
    SimpleGrid,
    Link,
    Flex,
    ButtonGroup,
    IconButton,
    keyframes,
  } from '@chakra-ui/react';
  import { FaLinkedin, FaGithub, FaAsterisk } from 'react-icons/fa';
import { HashLink } from 'react-router-hash-link';
import ColorModeSwitcher from '../ColorSwitch';
  
const gradient = keyframes`
    0% {background-position:0% ;}
    100% {background-position:100% ;}
  `;

const animation = `${gradient} cubic-bezier(0.59, 0.82, 0.08, 0.55) 3s infinite alternate`;

function Home(props) {
    return (
      <Box id="hero" align='center'>
        <Flex justifyContent={"center"}>
          <ColorModeSwitcher mt='2' isRound="true" />
          <IconButton
            ml='2'
            mt='2'
            isRound='true'
            variant="outline"
            size="md"
            fontSize="lg"
            onClick={props.handleClick}
            color="current"
            icon={<FaAsterisk />}></IconButton>
        </Flex>
          <Stack mt='10' spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text mb="2" fontSize="md" fontWeight="bold" letterSpacing="wide">
              </Text>
              <Text
                mb="0"
                w="full"
                paddingBottom="5px"
                bgClip="text"
                bgGradient="linear(to-r,#A9A9A9,#212121)"
                fontWeight="bold"
                bgSize="200% auto"
                animation={animation}
              >
                KONSTA LAURILA
              </Text>
              <Text fontSize="md" lineHeight={1.1} letterSpacing="wider" mt='2'>
                COMPUTER SCIENCE AND ENGINEERING
                {/* The website is under construction! */}
              </Text>
            </Heading>
            <Flex justifyContent={"center"}>
              <HashLink smooth to="/portfolio/projects">
                <Button mx={2} variant="outline" size="md">
                  PROJECTS
                </Button>
              </HashLink>
            </Flex>
            <ButtonGroup justifyContent={"center"} spacing="6">
              <Link href={'https://www.github.com/laurilako/'}>
                <IconButton
                  variant="outline"
                  aria-label="Go to Github Profile"
                  fontSize="20px"
                  icon={<FaGithub />}
                  isRound="true"
                ></IconButton>
              </Link>
              <Link
                rel="noopener"
                href={'https://www.linkedin.com/in/konstalaurila/'}>
                <IconButton
                  variant="outline"
                  aria-label="Go to LinkedIn Profile"
                  fontSize="20px"
                  isRound="true"
                  icon={<FaLinkedin />}
                ></IconButton>
              </Link>
            </ButtonGroup>
          </Stack>
          <Flex
            flex={1}
            justify={'left'}
            align={'center'}
            position={'relative'}
            w={'full'}>
          </Flex>
        <Flex mt='5' justifyContent={"center"}>
        </Flex>
      </Box>
    );
  }

export default Home;