import {
    Box,
    Stack,
    Heading,
    Text,
    Button,
    Link,
    Flex,
    ButtonGroup,
    IconButton,
    keyframes,
  } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
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
      <>
        {/*}
        <Flex padding='3' justifyContent={"middle"}>
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
        */}
        <Flex justifyContent={"center"}>
          <Card background={"#0c1b30d6"} alignItems='center' mt='10' maxW={'md'}>
            <CardBody m={'2'}>                
              <Heading
                lineHeight={1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                <Text
                  align={'center'}
                  mb="0"
                  w="full"
                  paddingBottom="5px"
                  bgClip="text"
                  color={'white'}
                  //bgGradient="linear(to-r,#A9A9A9,#212121)"
                  fontWeight="bold"
                  bgSize="200% auto"
                  //animation={animation}
                >
                  KONSTA LAURILA
                </Text>
                <Text fontSize="md" lineHeight={1.1} letterSpacing="wider" mt='2'>
                  Hi, I am Konsta. I am studying Computer Science and Engineering in University of Oulu and this is my portfolio.
                  {/* The website is under construction! */}
                </Text>
              </Heading>
          <Flex justifyContent={"center"}>
            <HashLink smooth to="/portfolio/projects">
              <Button mt='5' mx={2} variant="outline" size="md">
                PROJECTS
              </Button>
            </HashLink>
          </Flex>
          <Flex mt='5' justifyContent={"center"}>
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
          </Flex>
        </CardBody>
      </Card>
      </Flex>
        <Flex
          flex={1}
          justify={'left'}
          align={'center'}
          position={'relative'}
          w={'full'}>
        </Flex>
      </>
    );
  }

export default Home;