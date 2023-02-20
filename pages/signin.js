import { Box, Center } from "@chakra-ui/react";
import { Input, Heading, Text, Link, Flex, Button } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

export default function SignIn() {
  return (
    <Box maxW="768px" minW="320px" mx="auto" h="100vh" w="400px">
      <Box h="15vh"></Box>
      <Center fontSize={30} fontWeight={"bold"}>
        zazone
      </Center>
      <Center fontSize={20} mt={10} fontWeight={"bold"}>
        회원가입
      </Center>
    </Box>
  );
}
