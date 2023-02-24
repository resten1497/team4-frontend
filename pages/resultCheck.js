import { Box, Center } from "@chakra-ui/react";
import { Input, Heading, Text, Link, Flex, Button } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import imageURL from "../public/static/images/cat.gif";
import BackWindow from "../components/BackWindow";
import Image from "next/image";

export default function share() {
  return (
    <BackWindow title={true}>
      <Center
        h={200}
        flexDir={"column"}
        fontFamily={"DungGeunMo"}
        fontSize={"20"}
      >
        <Text>방제목</Text>
        <Text>두근두근 과연 결과는?</Text>
      </Center>
      <Button
        marginTop={40}
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

function loading() {
  return (
    <>
      <Center
        fontFamily={"DungGeunMo"}
        textAlign="center"
        h={"200"}
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
    </>
  );
}
