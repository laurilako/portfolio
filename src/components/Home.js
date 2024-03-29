import {
    Box,
    Stack,
    Heading,
    Text,
    Container,
    Button,
    SimpleGrid,
    Link,
    Image,
    Flex,
    ButtonGroup,
    IconButton,
    keyframes,
  } from '@chakra-ui/react';
  import { FaLinkedin, FaGithub, FaAsterisk } from 'react-icons/fa';
import homeImg from '../assets/image1.jpg';
import { useMediaQuery } from '@chakra-ui/react'
import { HashLink } from 'react-router-hash-link';
import ColorModeSwitcher from '../ColorSwitch';
  
const gradient = keyframes`
    0% {background-position:0% ;}
    100% {background-position:100% ;}
  `;

const animation = `${gradient} cubic-bezier(0.59, 0.82, 0.08, 0.55) 3s infinite alternate`;

function Home(props) {

  const [showImage] = useMediaQuery([
    '(min-width: 850px)',
    '(display-mode: browser)',
  ])

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
        <Flex mt='5' justifyContent={"center"}>
          {showImage ? <></> : <Image
                boxShadow='dark-lg'
                rounded='md'
                borderRadius={'45px'}
                htmlWidth="410px"
                htmlHeight="521px"
                alt={'Prof image'}
                w={'50%'}
                h={'100%'}
                position={'relative'}
                src={homeImg}
              />}
        </Flex>
        <Container
          as={SimpleGrid}
          maxW={'7xl'}
          columns={{ base: 1, md: 2 }}
          py={{ base: 10, sm: 10, lg: 10 }}>
          <Stack spacing={{ base: 5, md: 10 }}>
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
            {showImage ? (
              <Image
                boxShadow='dark-lg'
                rounded='md'
                borderRadius={'45px'}
                htmlWidth="410px"
                htmlHeight="521px"
                alt={'Prof image'}
                w={'50%'}
                h={'100%'}
                fit={'cover'}
                src={homeImg}
              />) : (<></>)}
          </Flex>
        </Container>
      </Box>
    );
  }

export default Home;