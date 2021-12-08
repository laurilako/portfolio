import React from 'react'
import { VStack, Circle, Flex, Box, Text, Heading } from '@chakra-ui/layout'
import { useMediaQuery } from '@chakra-ui/media-query';
import { useColorMode } from '@chakra-ui/color-mode'
import Project from './Project';

function Projects() {
    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";
    const [ isNotSmallerScreen ] = useMediaQuery("(min-width:600px)");

    return (
        <VStack>
            <Heading size='xl' fontWeight='bold' color='cyan.400'> 
                PROJECTS
            </Heading>
            <Flex display='grid' gridGap='8'>
                <Project />
                <Project />
                <Project />
            </Flex>
            



        </VStack>
    )
}

export default Projects
