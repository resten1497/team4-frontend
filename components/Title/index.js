import { Box, Center } from "@chakra-ui/react";
import { Input, Heading, Text, Link, Flex, Button } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

export default function SignIn() {
  return (
    <Text
      text
      margin={"0 auto"}
      textAlign={"center"}
      fontWeight={"bold"}
      fontSize={"60px"}
      color={"#FFA9D2"}
      fontFamily={"DungGeunMo"}
      filter={"drop-shadow(2px 3px 0px #000);"}
      letterSpacing={"-1"}
      textShadow={
        " 2px 0 #000, \
          -2px 0 #000, \
          0 1px #000, \
          0 -3px #000,\
          1px 1px #000, \
          -1px -1px #000, \
          1px -1px #000,\
           -1px 1px #000;"
      }
    >
      Unbalance
    </Text>
  );
}
