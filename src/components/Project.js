import React from 'react'
import { Stack, Image, Flex, Box, Text, Heading, Badge } from '@chakra-ui/react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { useColorMode } from '@chakra-ui/color-mode'

// props.otsikko, props.desc, props.image

function Project(props) {
    return(
        <Box w='100%' rounded={'20px'} overflow={'hidden'}
            boxShadow={'sm'}
            bg={'gray.700'}>
            <Image src='../assets/placehold1.jpg' alt='Project cover'/>
            <Box p={5}>
                <Stack isInline align='baseline'>
                    <Badge variant='solid' variantColor='teal' rounded='full' px={2}>
                        REACT
                    </Badge>
                    <Badge variant='solid' variantColor='teal' rounded='full' px={2}>
                        GIT
                    </Badge>
                    </Stack>
                    <Text as='h2' fontWeight='semibold' fontsize='xl' my={2}>
                    Projekti 
                    </Text>
                    <Text>
                        Infoa projektista
                    </Text>
            </Box>
        </Box>
    )
}

export default Project