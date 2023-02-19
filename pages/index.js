import { Box, Center } from "@chakra-ui/react";
import { Button, Input, Heading, Text, Link } from "@chakra-ui/react";
import NextLink from "next/link";

export default function App() {
  return (
    <Box
      maxW="768px"
      minW="320px"
      mx="auto"
      w="400px"
      h="100vh"
      bg={"gray.100"}
    >
      <Center h="65vh">
        <Box w="200px" h="200px" bg={"gray.200"}></Box>
      </Center>

      <Center mt={50} flexDir="column" gap={6}>
        <Button w="300px" h="50px" bg={"gray.200"}></Button>
        <Link href="/main" as={NextLink}>
          먼저 둘러볼께요!
        </Link>
      </Center>
    </Box>
  );
}
