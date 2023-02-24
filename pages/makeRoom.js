import { Box, Center } from "@chakra-ui/react";
import { Input, Heading, Text, Link, Flex, Button } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

import BackWindow from "../components/BackWindow";
export default function Main() {
  return (
    <BackWindow title={true}>
      <Text
        h={"10vh"}
        lineHeight={"10vh"}
        fontFamily={"DungGeunMo"}
        fontSize={20}
      >
        방만들기
      </Text>
    </BackWindow>
  );
}
