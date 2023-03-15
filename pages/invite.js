import { Box, Center } from "@chakra-ui/react";
import { Input, Heading, Text, Link, Flex, Button } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { useRef, useState } from "react";
import BackWindow from "../components/BackWindow";
import { useMutation } from "react-query";
import { GameList } from "../recoilState";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import axios from "axios";
async function sendQuestionData(data) {
  return await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/room/enter`,
    data,
    {}
  );
}
export default function Invite() {
  const [name, setName] = useState();
  const [code, setCode] = useState();
  const { mutate, data, error, isLoading } = useMutation(sendQuestionData, {});
  const router = useRouter();
  const [gameList, setGameList] = useRecoilState(GameList);
  //푸른리본
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
          이름
        </Center>
        <Center>
          <Input
            w={200}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="이름을 입력하세요"
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
            placeholder="키워드을 입력하세요"
            border={"0px"}
            rounded={false}
            onChange={(e) => {
              setCode(e.target.value);
            }}
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
        onClick={() => {
          console.log(name, code);
          mutate(
            { name: name, code: code },
            {
              onSuccess: (data) => {
                console.log(data);
                if (data.data.statusCode == 200) {
                  setGameList(data.data.result);
                  router.push("/game");
                }
              },
            }
          );
        }}
      >
        입장하기
      </Button>
    </BackWindow>
  );
}
