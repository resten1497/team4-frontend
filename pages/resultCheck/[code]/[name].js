import { Box, Center } from "@chakra-ui/react";
import { Input, Heading, Text, Link, Flex, Button } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import imageURL from "../../../public/static/images/cat.gif";
import BackWindow from "../../../components/BackWindow";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";

function Result() {
  const router = useRouter();
  const { code, name } = router.query;
  return (
    <BackWindow title={true}>
      <Center
        h={300}
        flexDir={"column"}
        fontFamily={"DungGeunMo"}
        fontSize={"20"}
      >
        <Text>두근두근 과연 결과는?</Text>
      </Center>
      <Link href={"/result/" + code + "/" + name}>
        <Button
          marginTop={15}
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

function Loading() {
  return (
    <BackWindow title={true}>
      <Center
        fontFamily={"DungGeunMo"}
        textAlign="center"
        h={"300"}
        fontSize={"20"}
      >
        아직 어느 누가
        <br />
        게임을 진행하고 있어요!
      </Center>

      <Image
        src={imageURL}
        alt="my gif"
        style={{ transform: "scaleX(-1)" }}
        width={50}
      />
      <Center
        fontFamily={"DungGeunMo"}
        textAlign="center"
        marginTop={"5"}
        fontSize={"20"}
      >
        LOADING...
      </Center>
    </BackWindow>
  );
}
export default function MyComponent() {
  const router = useRouter();
  const { code, name } = router.query;
  const { data, isLoading, isError, isSuccess } = useQuery(
    "myData",
    async () => {
      return await axios(
        "http://220.85.80.226:18881/room/result?name=" + name + "&code=" + code
      );
    },
    { refetchInterval: 1000 }
  ); // 5분(300초)마다 호출
  if (isSuccess) {
    return <Result></Result>;
  }
  if (isLoading) {
    return <Loading></Loading>;
  }
}
