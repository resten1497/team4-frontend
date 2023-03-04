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
import axios from "axios";
export default function Result() {
  const router = useRouter();

  const { data, refetch, isSuccess, isError } = useQuery(["data"], async () => {
    const { data } = await axios.get(
      "http://220.85.80.226:18881/room/result?name=" + name + "&code=" + code
    );
    return data;
  });
  if (!router.isReady) return null;
  const { code, name } = router.query;

  return (
    <BackWindow title={true}>
      {isSuccess && router.isReady ? (
        <>
          <Center fontFamily={"DungGeunMo"} h={50} fontSize={30}>
            {data.result.gameResult.title}
          </Center>

          <Center fontFamily={"DungGeunMo"} fontSize={20}>
            결과보기
          </Center>

          <Accordion allowToggle>
            {data.result.gameResult.results.map((item, index) => {
              return (
                <AccordionItem key={index}>
                  <Flex
                    margin={"0 auto"}
                    width={280}
                    marginTop={5}
                    fontFamily={"DungGeunMo"}
                    flexDirection="column"
                    justifyContent={"space-around"}
                  >
                    <AccordionButton>
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
                          >
                            {index + 1}
                          </Center>
                        </Center>
                        <Flex
                          flexDir={"row"}
                          w={250}
                          justifyContent="space-around"
                          margin={"0 auto"}
                          h={200}
                          marginTop={5}
                        >
                          <Flex flexDir={"column"}>
                            <Center
                              w={100}
                              h={75}
                              fontSize={15}
                              border={"2px solid black"}
                              rounded={"false"}
                              wordBreak={"keep-all"}
                              paddingLeft={0}
                              paddingRight={0}
                              resize={"none"}
                              overflow={"scroll"}
                            >
                              {item.view1}
                            </Center>
                            <Progress
                              marginTop={1}
                              border={"2px solid black"}
                              value={item.view1Percentage}
                              colorScheme={"pink"}
                            ></Progress>
                          </Flex>
                          <Center h={70} w={10} fontSize={25} color={"black"}>
                            <Text>vs</Text>
                          </Center>
                          <Flex flexDir={"column"}>
                            <Center
                              w={100}
                              h={75}
                              fontSize={15}
                              border={"2px solid black"}
                              rounded={"false"}
                              wordBreak={"keep-all"}
                              paddingLeft={0}
                              paddingRight={0}
                              resize={"none"}
                            >
                              {item.view2}
                            </Center>
                            <Progress
                              marginTop={1}
                              color={"#88ED80"}
                              border={"2px solid black"}
                              value={item.view2Percentage}
                              colorScheme="green"
                            ></Progress>
                          </Flex>
                        </Flex>
                      </Flex>
                    </AccordionButton>
                  </Flex>
                  <AccordionPanel h={150} w={280}>
                    <Flex flexDir={"row"} justifyContent="space-around">
                      <Box
                        w={100}
                        h={100}
                        border={"2px solid black"}
                        overflowY={"scroll"}
                      >
                        {item.view1Users.map((item, index) => {
                          return (
                            <Center
                              key={index}
                              fontSize={15}
                              w={100}
                              overflowY={"scroll"}
                            >
                              {item}
                            </Center>
                          );
                        })}
                      </Box>
                      <Box
                        w={100}
                        h={100}
                        border={"2px solid black"}
                        overflowY={"scroll"}
                      >
                        {item.view2Users.map((item, index) => {
                          return (
                            <Center fontSize={15} w={100} key={index}>
                              {item}
                            </Center>
                          );
                        })}
                      </Box>
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
          <Center h={100}>
            <Center
              width={270}
              height={50}
              border={"2px solid #000"}
              rounded={false}
              boxShadow={"2px 2px 0px black"}
              fontFamily={"DungGeunMo"}
              fontWeight={"bold"}
              background={"#FFA9D2"}
              color={"#FFF592"}
              fontSize={20}
              textShadow={
                " 2px 0 #000, \
                -2px 0 #000, \
                0 1px #000, \
                0 -2px #000,\
                1px 1px #000, \
                -1px -1px #000, \
                1px -1px #000,\
                 -1px 1px #000;"
              }
            >
              RANK
            </Center>
          </Center>
          {data.result.rank.map((item, index) => {
            return (
              <Center
                key={index}
                flexDir={"row"}
                width={270}
                height={50}
                border={"2px solid black"}
                marginTop={2}
                fontFamily={"DungGeunMo"}
                alignItems={"center"}
                textAlign={"center"}
              >
                <Center textAlign={"center"} w={20}>
                  {index + 1} 위
                </Center>
                <Center textAlign={"center"} w={40}>
                  {item.name} / {item.same}
                </Center>
              </Center>
            );
          })}
          <Center fontFamily={"DungGeunMo"} h={50} marginTop={10}>
            앞으로 더 친해지길...
          </Center>
        </>
      ) : null}
    </BackWindow>
  );
}
