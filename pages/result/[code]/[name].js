import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import {
  Input,
  Heading,
  Text,
  Link,
  Flex,
  Button,
  Progress,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import BackWindow from "../../../components/BackWindow";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";

import { useQuery } from "react-query";
export default function result() {
  let result = {
    statusCode: 200,
    message: "OK - 정상 처리",
    result: {
      gameResult: {
        code: "파란이슬",
        title: "방 제목1",
        name: "경준",
        questionCount: 3,
        results: [
          {
            id: 31,
            view1: "보기1",
            view2: "보기1-1",
            view1Percentage: 100.0,
            view2Percentage: 33.333333333333336,
            view1Users: ["경준", "경준", "경준_2"],
            view2Users: ["경준_3"],
          },
          {
            id: 32,
            view1: "보기2",
            view2: "보기2-1",
            view1Percentage: 33.333333333333336,
            view2Percentage: 100.0,
            view1Users: ["경준_2"],
            view2Users: ["경준", "경준", "경준_3"],
          },
          {
            id: 33,
            view1: "보기3",
            view2: "보기3-1",
            view1Percentage: 133.33333333333334,
            view2Percentage: 0.0,
            view1Users: ["경준", "경준", "경준_2", "경준_3"],
            view2Users: [],
          },
        ],
      },
      rank: { 경준_3: 4, 경준_2: 4 },
    },
  };

  return (
    <BackWindow title={true}>
      <Accordion allowToggle>
        <AccordionItem>
          <Flex
            margin={"0 auto"}
            width={280}
            marginTop={5}
            fontFamily={"DungGeunMo"}
            flexDirection="column"
            justifyContent={"space-around"}
          >
            <Flex
              flexDir={"column"}
              h={200}
              border={"2px solid black"}
              boxShadow={"2px 3px 0px black"}
            >
              <Center marginTop={5}>
                <Center
                  fontSize={20}
                  color={"white"}
                  w={70}
                  h={8}
                  background={"black"}
                  textAlign={"center"}
                ></Center>
              </Center>
              <Flex
                flexDir={"row"}
                w={250}
                justifyContent="space-around"
                margin={"0 auto"}
                h={200}
                marginTop={5}
              >
                <AccordionButton w={125} h={75} border={"2px solid black"}>
                  <Box
                    fontSize={15}
                    rounded={"false"}
                    wordBreak={"keep-all"}
                    resize={"none"}
                    paddingLeft={0}
                    paddingRight={0}
                  ></Box>
                </AccordionButton>
                <Center h={70} w={10} fontSize={25} color={"black"}>
                  <Text>vs</Text>
                </Center>
                <Box
                  w={125}
                  h={75}
                  fontSize={15}
                  border={"2px solid black"}
                  rounded={"false"}
                  wordBreak={"keep-all"}
                  paddingLeft={0}
                  paddingRight={0}
                  resize={"none"}
                ></Box>
              </Flex>
            </Flex>
          </Flex>
          <AccordionPanel h={200} w={280} border={"1px solid black"}>
            <Flex flexDir={"row"} justifyContent="space-around">
              <Box w={100} h={180} bg={"red"}></Box>
              <Box w={100} h={180} bg={"red"}></Box>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <Flex
            margin={"0 auto"}
            width={280}
            marginTop={5}
            fontFamily={"DungGeunMo"}
            flexDirection="column"
            justifyContent={"space-around"}
          >
            <Flex
              flexDir={"column"}
              h={200}
              border={"2px solid black"}
              boxShadow={"2px 3px 0px black"}
            >
              <Center marginTop={5}>
                <Center
                  fontSize={20}
                  color={"white"}
                  w={70}
                  h={8}
                  background={"black"}
                  textAlign={"center"}
                ></Center>
              </Center>
              <Flex
                flexDir={"row"}
                w={250}
                justifyContent="space-around"
                margin={"0 auto"}
                h={200}
                marginTop={5}
              >
                <AccordionButton w={125} h={75} border={"2px solid black"}>
                  <Box
                    fontSize={15}
                    rounded={"false"}
                    wordBreak={"keep-all"}
                    resize={"none"}
                    paddingLeft={0}
                    paddingRight={0}
                  ></Box>
                </AccordionButton>
                <Center h={70} w={10} fontSize={25} color={"black"}>
                  <Text>vs</Text>
                </Center>
                <Box
                  w={125}
                  h={75}
                  fontSize={15}
                  border={"2px solid black"}
                  rounded={"false"}
                  wordBreak={"keep-all"}
                  paddingLeft={0}
                  paddingRight={0}
                  resize={"none"}
                ></Box>
              </Flex>
            </Flex>
          </Flex>
          <AccordionPanel bg={"black"} h={100}>
            아코디언 내용 1
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </BackWindow>
  );
}
