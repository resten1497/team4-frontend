import { Box, Center } from "@chakra-ui/react";
import { Button, Input, Heading, Text, Link, Flex } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import Title from "../Title";
export default function BackWindow({ title, children }) {
  return (
    <Center
      maxW="768px"
      minW="320px"
      mx="auto"
      h="100vh"
      background="#FFF59E"
      flexDirection={"column"}
    >
      {title ? <Title /> : null}
      <Box
        width={350}
        boxShadow={"0.5px 0.5px 10px #000"}
        bg="white"
        height={"75vh"}
        border={"2px solid black"}
        dropShadow={"2px 4px 4px #000000"}
        overflow={"scroll"}
      >
        <Box
          className="header"
          h={"50"}
          background={"#3838FF"}
          borderBottom={"2px solid black"}
        >
          <Flex
            h={"50"}
            width={"10vh"}
            marginLeft="4"
            justifyContent="space-around"
            alignItems={"center"}
          >
            <Box
              h={"5"}
              w={"5"}
              background="#FFA9D2"
              border={"2px solid black"}
            ></Box>
            <Box
              h={"5"}
              w={"5"}
              background="#88ED80"
              border={"2px solid black"}
            ></Box>
            <Box
              h={"5"}
              w={"5"}
              background="#FFE672"
              border={"2px solid black"}
            ></Box>
          </Flex>
        </Box>
        <Center flexDirection={"column"}>{children}</Center>
      </Box>
    </Center>
  );
}
