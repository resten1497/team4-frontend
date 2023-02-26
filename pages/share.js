import { Box, Center } from "@chakra-ui/react";
import { Input, Heading, Text, Link, Flex, Button } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import BackWindow from "../components/BackWindow";
import { useRecoilState } from "recoil";
import { nameState } from "../recoilState";
import { useRouter } from "next/router";
import { useEffect } from "react";
async function sendQuestionData(data) {
  return await axios.post("http://220.85.80.226:18881/room", data, {});
}

export default function Share() {
  const router = useRouter();
  const [name, setName] = useRecoilState(nameState);
  useEffect(() => {
    if (name === "") {
      router.push("/");
    }
  });
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
        <Center w={100} textAlign={"center"} lineHeight={4}>
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
            {name}
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
            https://www.google.com/핑크벽돌=a28
          </Text>
        </Center>
      </Flex>

      <Button
        marginTop={10}
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
      <Link href="/result">
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
      </Link>
    </BackWindow>
  );
}
