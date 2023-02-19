import { Box, Center } from "@chakra-ui/react";
import { Input, Heading, Text, Link, Flex, Button } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

export default function Main() {
  return (
    <Box
      maxW="768px"
      minW="320px"
      mx="auto"
      h="100vh"
      w="400px"
      bg={"gray.100"}
    >
      <Flex
        bg="gray.100"
        p={4}
        justify="space-around"
        borderTop="1px solid"
        borderColor="gray.200"
        position="fixed"
        display={"flex"}
        margin={"auto"}
        bottom="0"
        left="0"
        right="0"
      >
        <Button>Home</Button>
        <Button>Search</Button>
        <Button>Profile</Button>
      </Flex>
    </Box>
  );
}
