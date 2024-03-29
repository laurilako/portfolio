import {
    Box,
    Flex,
    Heading,
    Icon,
    keyframes,
    Link,
    SimpleGrid,
    Stack,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import projectSite from '../assets/projectSite.jpg';
import projectfs from '../assets/projectfs.jpg';
import projecttori from '../assets/projecttori.jpg';
import projectfb from '../assets/projectfeedback.jpg';
import Header from './Header';
  const gradient = keyframes`
      0% {background-position:0% ;}
      100% {background-position:100% ;}
    `;
  
  const animation = `${gradient} cubic-bezier(0.59, 0.82, 0.08, 0.55) 3s infinite alternate`;
  
  const projectData = [
    {
      name: 'Feedback',
      url: 'https://feedbackfrontend.azurewebsites.net/',
      code: 'https://github.com/laurilako/Feedback',
      about:
        'REST API created using .NET CORE. Created as an assignment in purpose of learning .NET.',
      photo: projectfb,
      tools: 'AzureDB, Azure, React, C#, .NET'
    },
    {
      name: 'Tori',
      url: 'https://stark-meadow-54802.herokuapp.com/',
      code: 'https://github.com/laurilako/itori',
      about:
        'Full-Stack project site, where you can create user and create, edit or remove posts with pictures. More info on github. Application demo is available at heroku, press link below (or check github)!',
      photo: projecttori,
      tools: 'MongoDB, ExpressJS, React, NodeJS'
    },
    {
      name: 'This site',
      url: 'https://github.com/laurilako',
      code: 'https://github.com/laurilako',
      about:
        'This "portfolio" site',
      photo: projectSite,
      tools: 'JavaScript (React), HTML, CSS',
    },
    {
      name: 'Completed "Full-Stack Open" course',
      url: 'https://fullstackopen.com/en/about',
      code: 'https://github.com/laurilako/fullstackopen2021',
      about:
        'This course serves as an introduction to modern web application development with JavaScript. ',
      photo: projectfs,
      tools: 'JavaScript, React, Node, REST APIs'
    },
  ];
  
  function ProjectCard(props) {
    const { name, url, about, photo, tools, code } = props;
    return (
      <Flex
        boxShadow={useColorModeValue('lg', 'white')}
        width="300px"
        maxW={'350px'}
        direction={{ base: 'column-reverse', md: 'row' }}
        rounded={'xl'}
        p={10}
        justifyContent={'space-between'}
        position={'relative'}
        bg={useColorModeValue('white', '#0c1b30')}
        _after={{
          position: 'absolute',
          height: '21px',
          width: '29px',
          left: '35px',
          top: '-10px',
          backgroundSize: 'cover',
          backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%235299D3'/%3E%3C/svg%3E")`,
        }}
        _before={{
          position: 'absolute',
          zIndex: '-1',
          height: 'full',
          maxW: '450px',
          width: 'full',
          filter: 'blur(50px)',
          transform: 'scale(0.98)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          top: 0,
          left: 0,
        }}
      >
        <Box maxW={'445px'} w={'full'} p={6} overflow={'hidden'}>
          <Box
            h={'210px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}
            bgImage={photo}
            bgPosition="center"
            bgSize="cover"
          />
          <Stack justifyContent={'start'}>
            <Heading
              fontSize={'small'}
              fontFamily={'body'}
              letterSpacing={'wide'}
            >
              {tools.split(',').map(tool => (
                <Text color="#529DD3" key={tool}>
                  {tool}
                </Text>
              ))}
            </Heading>
            <Heading
              fontSize={'2xl'}
              fontFamily={'body'}
            >
              <Link rel="noopener" isExternal={true} href={url}>
                {name}
              </Link>
            </Heading>
            <Text>{about}</Text>
          </Stack>
          <Stack direction="row" justify="center" mt={4} spacing={4}>
            <Link
              aria-label="See the code for this project"
              rel="noopener"
              isExternal={true}
              href={code}
            >
              <Icon as={FaGithub} />
            </Link>
            <Link
              aria-label="See how it works in the demo"
              rel="noopener"
              isExternal={true}
              href={url}
            >
              <Icon as={FaExternalLinkAlt} />
            </Link>
          </Stack>
        </Box>
      </Flex>
    );
  }
  
  export default function Projects() {
    return (
      <>
      <Header />
        <Box id="projects">
          <Flex
            textAlign={'center'}
            pt={10}
            ml="auto"
            mb={24}
            mr="auto"
            justifyContent={'center'}
            direction={'column'}
            maxW={'7xl'}
          >
            <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
              <Heading
                py={5}
                fontSize={48}
                mb="2"
                w="full"
                bgClip="text"
                bgGradient="linear(to-r,#A9A9A9,#212121)"
                fontWeight="extrabold"
                bgSize="200% auto"
                animation={animation}
              >
                PROJECTS
              </Heading>
              <Heading
                margin={'auto'}
                width={'70%'}
                fontFamily={'Inter'}
                fontWeight={'medium'}
                fontSize={24}
                textAlign="center"
              >
                {/* //Infoa tähän? */}
              </Heading>
            </Box>
            <SimpleGrid
              columns={{ base: 1, xl: 3, lg: 2, md: 2 }}
              spacing={'16'}
              mt={16}
              mx={'auto'}
            >
              {projectData.map((cardInfo, index) => (
                <ProjectCard key={index} {...cardInfo} index={index} />
              ))}
            </SimpleGrid>
          </Flex>
        </Box>
      </>
    );
  }
