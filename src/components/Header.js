import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query';
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IconButton } from '@chakra-ui/button';
import profilePic from '../assets/image2.jpg'
import React from 'react'

function Header() {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [ isNotSmallerScreen ] = useMediaQuery("(min-width:600px)");


    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end"/>
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : "32"} align='flex-start'>
                    {/* OTSIKKO ? <Text fontSize="5xl" fontWeight="semibold"> ASD </Text> */}
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip="text">Konsta Laurila</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>Infoo tähä vaik</Text>
                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"} mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg" boxSize="300px" src={profilePic} />

            </Flex>
        </Stack>
    )
}

export default Header
