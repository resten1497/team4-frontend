import { Box, Center, pseudoPropNames } from "@chakra-ui/react";
import { Input, Heading, Text, Link, Flex, Button } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import BackWindow from "../../components/BackWindow";
import { useRouter } from "next/router";

export default function invite() {
  const router = useRouter();
  const { name } = router.query;
  return (
    <BackWindow title={true}>
      <Center fontFamily={"DungGeunMo"} fontSize={20} h={100}>
        나는 누구인가요?
      </Center>
      <Flex
        w={280}
        h={50}
        flexDir={"row"}
        border={"2px solid black"}
        boxShadow={"2px 3px 0px black"}
        fontFamily={"DungGeunMo"}
      >
        <Center w={20} textAlign="center" lineHeight={10}>
          제목
        </Center>
        <Center>
          <Input
            w={200}
            placeholder="제목을 입력하세요"
            border={"0px"}
            rounded={false}
          ></Input>
        </Center>
      </Flex>

      <Flex
        marginTop={"20px"}
        w={280}
        h={50}
        flexDir={"row"}
        border={"2px solid black"}
        boxShadow={"2px 3px 0px black"}
        fontFamily={"DungGeunMo"}
      >
        <Center w={100} textAlign={"center"} lineHeight={4}>
          초대
          <br />
          키워드
        </Center>
        <Center>
          <Input
            w={200}
            placeholder="제목을 입력하세요"
            border={"0px"}
            rounded={false}
            value={name}
          ></Input>
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
        입장하기
      </Button>
    </BackWindow>
  );
}
