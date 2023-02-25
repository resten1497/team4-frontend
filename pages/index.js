import {
  Button,
  Input,
  Heading,
  Text,
  Link,
  Flex,
  extendTheme,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import BackWindow from "../components/BackWindow";
export default function App() {
  return (
    <BackWindow title={false}>
      <Flex h={"15vh"} justifyContent="center" alignItems="flex-end">
        <Text textAlign={"center"} fontSize="25" fontFamily={"DungGeunMo"}>
          어느 누가
          <br />
          밸런스가 잘 맞나?!
        </Text>
      </Flex>
      <Text
        text
        margin={"0 auto"}
        textAlign={"center"}
        fontWeight={"bold"}
        fontSize={"60px"}
        color={"#FFA9D2"}
        fontFamily={"DungGeunMo"}
        filter={"drop-shadow(2px 3px 0px #000);"}
        letterSpacing={"-1"}
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
        Unbalance
      </Text>
      <Flex
        margin={"0 auto"}
        width={280}
        height={200}
        marginTop={15}
        fontFamily={"DungGeunMo"}
        flexDirection="column"
        justifyContent={"space-around"}
      >
        <Link href="/makeRoom">
          <Button
            width={280}
            height={50}
            background={"white"}
            border={"2px solid #000"}
            rounded={false}
            boxShadow={"2px 2px 0px black"}
          >
            방만들기
          </Button>
        </Link>
        <Link href="/invite">
          <Button
            width={280}
            height={50}
            background={"white"}
            border={"2px solid #000"}
            rounded={false}
            boxShadow={"2px 2px 0px black"}
          >
            초대 키워드
          </Button>
        </Link>
        <Link href="/result">
          <Button
            width={280}
            height={50}
            background={"white"}
            border={"2px solid #000"}
            rounded={false}
            boxShadow={"2px 2px 0px black"}
          >
            결과보기
          </Button>
        </Link>
      </Flex>
    </BackWindow>
  );
}
