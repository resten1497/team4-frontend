import { Box, Center } from "@chakra-ui/react";
import { Button, Input, Heading, Text, Link } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";

export default function App() {
  return (
    <Center
      maxW="768px"
      minW="320px"
      mx="auto"
      h="100vh"
      w="400px"
      flexDir={"column"}
    >
      <Center h="30vh" flexDirection={"column"}>
        <Text fontSize={30} fontWeight={"bold"} lineHeight={10}>
          자취생존
        </Text>
        <Text fontSize={70} fontWeight={"bold"} lineHeight={10}>
          zazone
        </Text>
        <Center h={"30vh"}>
          <Text>프로 자취에 대한 모든 것</Text>
        </Center>
      </Center>

      <Center mt={37} flexDir="column" gap={5}>
        <Link href="/signin" as={NextLink}>
          <Button
            colorScheme="teal"
            variant="solid"
            w="350px"
            h="50px"
            bg={"black"}
            color={"white"}
            borderRadius={100}
          >
            SIGN IN
          </Button>
        </Link>
        <Link href="/signup" as={NextLink}>
          <Button
            w="350px"
            h="50px"
            bg={"white"}
            border={"1px"}
            borderColor={"#C5C5C5"}
            borderRadius={100}
          >
            SIGN UP
          </Button>
        </Link>
        <Link href="/" as={NextLink}>
          <Button
            w="350px"
            h="50px"
            bg={"white"}
            border={"1px"}
            borderColor={"#C5C5C5"}
            borderRadius={100}
          >
            카카오로 시작하기
          </Button>
        </Link>

        {/* <Link href="/main" as={NextLink}>
          먼저 둘러볼께요!
        </Link> */}
      </Center>
    </Center>
  );
}
