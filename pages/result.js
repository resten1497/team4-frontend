import { Box, Center } from "@chakra-ui/react";
import { useState } from "react";
import { Input, Heading, Text, Link, Flex, Button } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import BackWindow from "../components/BackWindow";
export default function Share() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  return (
    <BackWindow title={true}>
      <Center fontFamily={"DungGeunMo"} fontSize={20} h={120}>
        두근두근 과연 결과는 ?
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
          이름
        </Center>
        <Center>
          <Input
            w={200}
            placeholder="이름을 입력하세요"
            border={"0px"}
            rounded={false}
            onChange={(e) => {
              setName(e.target.value);
            }}
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
            onChange={(e) => {
              setCode(e.target.value);
            }}
          ></Input>
        </Center>
      </Flex>
      <Link href={"/result/" + code + "/" + name}>
        <Button
          marginTop={20}
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
      </Link>
    </BackWindow>
  );
}
