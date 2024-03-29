import { Box, Center } from "@chakra-ui/react";
import { Button, Input, Heading, Text, Link, Flex } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import Title from "../Title";
export default function BackWindow({ title, game, children }) {
  return (
    <Center
      mx="auto"
      h="100vh"
      overflow={"hidden"}
      background="#FFF59E"
      flexDirection={"column"}
    >
      {title ? <Title /> : null}
      <Box
        width={350}
        boxShadow={"0.5px 0.5px 10px #000"}
        bg="white"
        height={540}
        border={"2px solid black"}
        overflowY={"auto"}
        dropShadow={"2px 4px 4px #000000"}
        css={{
          "-ms-overflow-style": "none;",
          scrollbarWidth: "none;",
          "&:-webkit-scrollbar": { display: "none" },
        }}
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
      {game ? (
        <Text paddingTop={30} fontFamily={"DungGeunMo"}>
          클릭 하면 넘어가니 신중하게 눌러주세요!
        </Text>
      ) : null}
    </Center>
  );
}
