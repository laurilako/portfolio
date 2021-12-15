import React from "react";
import {
    Text,
    Flex,
    Heading
  } from '@chakra-ui/react';
import Header from "./Header";

function Resume(){
    return(
        <>
            <Header />
            <Flex mt={20} alignContent={"center"} justifyContent={"center"}>
                <Heading>Its empty here...</Heading>
            </Flex>
        </>
    )
}

export default Resume