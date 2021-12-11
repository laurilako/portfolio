
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
  import { FaLinkedin, FaGithub } from 'react-icons/fa';
//   import Blur from './Blur';
  import homeImg from '../assets/image1.jpg';
//   import { HashLink } from 'react-router-hash-link';
  
  const gradient = keyframes`
    0% {background-position:0% ;}
    100% {background-position:100% ;}
  `;

  const animation = `${gradient} cubic-bezier(0.59, 0.82, 0.08, 0.55) 1s infinite alternate`;

  export default function Hero() {
    return (
      <Box id="hero">
        <Container
          as={SimpleGrid}
          maxW={'7xl'}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}
        >
          <Stack spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
            >
              <Text mb="2" fontSize="md" fontWeight="bold" letterSpacing="wide">
                Hello :D
              </Text>
              <Text
                mb="2"
                w="full"
                paddingBottom="5px"
                bgClip="text"
                bgGradient="linear(to-r,#5299D3,#C0FDFB)"
                fontWeight="bold"
                bgSize="200% auto"
                animation={animation}
              >
                KONSTA LAURILA
              </Text>
              <Text fontSize="md" lineHeight={1.1} letterSpacing="wider">
              </Text>
            </Heading>
            <Stack direction={{ base: 'row', sm: 'row' }} spacing={4}>
              {/* <HashLink smooth to="/#projects"> */}
                <Button variant="outline" size="md">
                  My projects
                </Button>
              {/* </HashLink> */}
              <Link
                target="_blank"
                rel="noopener"
                href={
                  'linkki'
                }
                _hover={{ textDecoration: 'none' }}
              >
                <Button variant="solid" size="md">
                  Resume
                </Button>
              </Link>
            </Stack>
            <ButtonGroup spacing="6">
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
                href={'https://www.linkedin.com/in/konsta-laurila-2489451bb/'}
              >
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
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}
          >
            <Box
              position={'relative'}
              height={'350px'}
              // rounded={'2xl'}
              // boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}
            >
              <Image
                htmlWidth="410px"
                htmlHeight="521px"
                alt={'Hero Image'}
                w={'50%'}
                h={'100%'}
                fit={'cover'}
                align={'center'}
                src={homeImg}
              />
            </Box>
          </Flex>
        </Container>
        {/* <Blur
          position={'absolute'}
          top={-10}
          left={-10}
          style={{ filter: 'blur(3px)' }}
          zIndex={-2}
        /> */}
      </Box>
    );
  }