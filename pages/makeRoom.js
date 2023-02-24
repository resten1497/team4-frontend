import { Box, Center } from "@chakra-ui/react";
import { Input, Heading, Text, Link, Flex, Button } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";

import BackWindow from "../components/BackWindow";
export default function Main() {
  const [question, setQuestion] = useState();

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
      <Flex
        margin={"0 auto"}
        width={280}
        h={250}
        fontFamily={"DungGeunMo"}
        flexDirection="column"
        justifyContent={"space-around"}
      >
        <Flex
          flexDir={"row"}
          border={"2px solid black"}
          boxShadow={"2px 3px 0px black"}
        >
          <Text w={100} textAlign="center" lineHeight={10}>
            제목
          </Text>
          <Input
            placeholder="제목을 입력하세요"
            border={"0px"}
            rounded={false}
          ></Input>
        </Flex>
        <Flex
          flexDir={"row"}
          border={"2px solid black"}
          boxShadow={"2px 3px 0px black"}
        >
          <Text w={100} textAlign="center" lineHeight={10}>
            인원
          </Text>
          <Input placeholder="최대 50명" border={"0px"} rounded={false}></Input>
        </Flex>
        <Flex
          flexDir={"row"}
          border={"2px solid black"}
          boxShadow={"2px 3px 0px black"}
          h={100}
        >
          <Center>
            <Text w={100} textAlign="center">
              오픈조건
              <br />
              (택1)
            </Text>
          </Center>
          <Flex flexDir={"column"} justifyContent="space-around">
            <Input
              placeholder="초대인원 전부 참여시 오픈"
              border={"0px"}
              rounded={false}
            ></Input>
            <Input
              placeholder="분시 오픈"
              border={"0px"}
              rounded={false}
            ></Input>
          </Flex>
        </Flex>
      </Flex>
      <Text marginTop={10} fontFamily={"DungGeunMo"} fontSize={20}>
        밸런스 문제 설정
      </Text>
      <Text fontFamily={"DungGeunMo"} fontSize={14}>
        (최소 5분명 ~ 15문항)
      </Text>
      <Flex
        margin={"0 auto"}
        width={280}
        marginTop={10}
        fontFamily={"DungGeunMo"}
        flexDirection="column"
        justifyContent={"space-around"}
      >
        <Flex
          flexDir={"column"}
          h={170}
          border={"2px solid black"}
          boxShadow={"2px 3px 0px black"}
        >
          <Flex
            w={250}
            h={30}
            margin={"0 auto"}
            flexDir="row"
            justifyContent={"space-between"}
            marginTop={5}
          >
            <Center
              fontSize={20}
              color={"white"}
              w={70}
              h={8}
              background={"black"}
              textAlign={"center"}
            >
              No.1
            </Center>
            <Flex>
              <Button
                fontSize={20}
                color={"white"}
                h={"8"}
                rounded={false}
                background={"#000"}
              >
                -
              </Button>

              <Button
                marginLeft={2}
                fontSize={20}
                color={"white"}
                h={"8"}
                rounded={false}
                background={"#000"}
              >
                +
              </Button>
            </Flex>
          </Flex>
          <Flex
            flexDir={"row"}
            w={250}
            justifyContent="space-around"
            margin={"0 auto"}
            h={200}
            marginTop={"30px"}
          >
            <Input
              w={125}
              h={50}
              border={"2px solid black"}
              rounded={"false"}
            />
            <Center h={50} w={10} fontSize={25} color={"black"}>
              <Text>vs</Text>
            </Center>
            <Input
              w={125}
              h={50}
              border={"2px solid black"}
              rounded={"false"}
            />
          </Flex>
        </Flex>
      </Flex>

      <Center h={100} w={250} marginTop={15}>
        <Link href="/share">
          <Button
            h={50}
            w={250}
            rounded={false}
            fontFamily={"DungGeunMo"}
            boxShadow={"2px 3px 0px black"}
            background="#FFA9D2"
            color={"#FFF59E"}
            fontSize={"34"}
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
            START
          </Button>
        </Link>
      </Center>
    </BackWindow>
  );
}
