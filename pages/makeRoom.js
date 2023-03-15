import { Box, Center } from "@chakra-ui/react";
import {
  Input,
  Heading,
  Text,
  Link,
  Flex,
  Button,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import BackWindow from "../components/BackWindow";
import { useMutation } from "react-query";
import axios from "axios";
import { useRecoilState } from "recoil";
import { nameState } from "../recoilState";
import { useRouter } from "next/router";

async function sendQuestionData(data) {
  return await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/room`, data, {});
}

const newID = function () {
  return Math.random().toString(36).substr(2, 5);
};

export default function Main() {
  const [name, setName] = useRecoilState(nameState);
  const [question, setQuestion] = useState({
    title: "",
    maximum: 10,
    openMinute: null,
    questions: [{ description: newID(), view1: "", view2: "" }],
  });

  const [minute, setMinute] = useState(true);
  const router = useRouter();

  const { mutate, data, error, isLoading } = useMutation(sendQuestionData, {});

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
            _focusVisible={{ outline: "none" }}
            onChange={(e) => {
              setQuestion({ ...question, title: e.target.value });
            }}
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
          <Input
            placeholder="최대 50명"
            _focusVisible={{ outline: "none" }}
            border={"0px"}
            rounded={false}
            onChange={(e) => {
              setQuestion({ ...question, maximum: Number(e.target.value) });
            }}
          ></Input>
        </Flex>
        <Flex
          flexDir={"row"}
          border={"2px solid black"}
          boxShadow={"2px 3px 0px black"}
          h={100}
          w={280}
        >
          <Center>
            <Text w={100} textAlign="center">
              오픈조건
              <br />
              (택1)
            </Text>
          </Center>
          <Flex flexDir={"column"} justifyContent="space-around">
            <Box>
              <Button
                border={"1px solid black"}
                rounded={false}
                w={170}
                fontSize={15}
                _hover={minute ? "#FFA9D2" : "#fff"}
                bg={minute ? "#FFA9D2" : "#fff"}
                onClick={() => {
                  setMinute(true);
                }}
              >
                전부 참여시 오픈
              </Button>
            </Box>
            <label style={{ cursor: "pointer" }}>
              <Flex
                flexDir={"row"}
                w={170}
                h={50}
                border={"1px solid black"}
                bg={minute ? "#fff" : "#FFA9D2"}
                alignItems={"center"}
              >
                <Input
                  onChange={(e) => {
                    setMinute(false);
                    setQuestion({ ...question, openMinute: e.target.value });
                  }}
                  onClick={() => {
                    setMinute(false);
                  }}
                  type={"number"}
                  name={"time"}
                  placeholder="숫자입력"
                  border={"0px"}
                  w={40}
                  fontSize={14}
                  outline={"none"}
                  padding={0}
                  _focusVisible={{ outline: "none" }}
                  rounded={false}
                  css={{
                    "&:focus": {
                      outline: "none",
                      border: "none",
                      boxShadow: "none",
                    },
                  }}
                  textAlign={"right"}
                ></Input>
                <Center w={40}> 분후 오픈</Center>
              </Flex>
            </label>
          </Flex>
        </Flex>
      </Flex>
      <Text marginTop={10} fontFamily={"DungGeunMo"} fontSize={20}>
        밸런스 문제 설정
      </Text>
      <Text fontFamily={"DungGeunMo"} fontSize={14}>
        (최대 15문항)
      </Text>
      {question.questions.map((item, index) => {
        return (
          <Flex
            key={index + 1}
            margin={"0 auto"}
            width={280}
            marginTop={10}
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
                  No.{index + 1}
                </Center>
                <Flex>
                  <Button
                    fontSize={20}
                    color={"white"}
                    h={"8"}
                    rounded={false}
                    background={"#000"}
                    onClick={() => {
                      setQuestion({
                        ...question,
                        questions: question.questions.filter(
                          (tags) => item.description !== tags.description
                        ),
                      });
                    }}
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
                    onClick={() => {
                      setQuestion({
                        ...question,
                        questions: question.questions.concat([
                          {
                            description: newID(),
                            view1: "",
                            view2: "",
                          },
                        ]),
                      });
                    }}
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
                <Textarea
                  w={125}
                  h={75}
                  fontSize={15}
                  border={"2px solid black"}
                  rounded={"false"}
                  wordBreak={"keep-all"}
                  resize={"none"}
                  paddingLeft={0}
                  _focusVisible={{ outline: "none" }}
                  _hover={{ outline: "none" }}
                  value={item.view1}
                  paddingRight={0}
                  textAlign={"center"}
                  onChange={(e_) => {
                    const newTodos = [...question.questions];
                    newTodos[index] = {
                      ...newTodos[index],
                      view1: e_.target.value,
                    };
                    setQuestion({ ...question, questions: newTodos });
                  }}
                />

                <Center h={70} w={10} fontSize={25} color={"black"}>
                  <Text>vs</Text>
                </Center>
                <Textarea
                  w={125}
                  h={75}
                  fontSize={15}
                  border={"2px solid black"}
                  rounded={"false"}
                  wordBreak={"keep-all"}
                  _focusVisible={{ outline: "none" }}
                  _hover={{ outline: "none" }}
                  textAlign={"center"}
                  paddingLeft={0}
                  value={item.view2}
                  paddingRight={0}
                  resize={"none"}
                  onChange={(e_) => {
                    const newTodos = [...question.questions];
                    newTodos[index] = {
                      ...newTodos[index],
                      view2: e_.target.value,
                    };
                    setQuestion({ ...question, questions: newTodos });
                  }}
                />
              </Flex>
            </Flex>
          </Flex>
        );
      })}

      <Center h={100} w={250} marginTop={15}>
        <Link>
          <Button
            onClick={() => {
              console.log(question);
              mutate(question, {
                onSuccess: (data) => {
                  console.log(data.data.result.code);
                  if (data.data.statusCode === 200) {
                    setName(data.data.result.code);
                    router.push("/share");
                  }
                },
                isLoading: (loading) => {},
                onError: (err) => {
                  console.log(err);
                },
              });
            }}
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
