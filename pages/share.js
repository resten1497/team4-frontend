import { Box, Center } from "@chakra-ui/react";
import { Input, Heading, Text, Link, Flex, Button } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import BackWindow from "../components/BackWindow";
export default function share() {
  return (
    <BackWindow title={true}>
      <Center fontFamily={"DungGeunMo"} fontSize={20} h={100}>
        우리 밸런스 게임할래?
      </Center>
      <Flex
        flexDirection={"row"}
        fontFamily={"DungGeunMo"}
        boxShadow={"2px 3px 0px black"}
        border={"2px solid black"}
        w={280}
        h={50}
      >
        <Center w={100} textAlign={"center"}>
          초대
          <br />
          키워드
        </Center>
        <Center>
          <Center
            w={150}
            h={30}
            background={"#000"}
            color={"#fff"}
            fontSize={20}
          >
            핑크벽돌
          </Center>
        </Center>
      </Flex>

      <Flex
        marginTop={30}
        flexDirection={"row"}
        fontFamily={"DungGeunMo"}
        boxShadow={"2px 3px 0px black"}
        border={"2px solid black"}
        w={280}
        h={50}
      >
        <Center>
          <Text fontSize={14} textAlign="center" w={280}>
            https://www.google.com/핑크_벽돌=a28
          </Text>
        </Center>
      </Flex>

      <Button
        marginTop={40}
        flexDirection={"row"}
        fontFamily={"DungGeunMo"}
        boxShadow={"2px 3px 0px black"}
        border={"2px solid black"}
        w={280}
        h={50}
        background={"#88ED80"}
      >
        초대 링크 공유하기
      </Button>

      <Button
        marginTop={30}
        flexDirection={"row"}
        fontFamily={"DungGeunMo"}
        boxShadow={"2px 3px 0px black"}
        border={"2px solid black"}
        w={280}
        h={50}
        background={"#FFA9D2"}
      >
        결과보기
      </Button>
    </BackWindow>
  );
}
