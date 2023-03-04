import { useEffect, useState } from "react";
import { Button, Fade, Center, Flex, Text, Box } from "@chakra-ui/react";
import BackWindow from "../components/BackWindow";
import { useRecoilState } from "recoil";
import { GameList } from "../recoilState";
import { motion } from "framer-motion";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import axios from "axios";
export default function Game() {
  const [selectedValue, setSelectedValue] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [gameResult, setGameResult] = useState({
    name: "",
    code: "",
    results: [],
  });
  const router = useRouter();
  const [gameList, setGameList] = useRecoilState(GameList);
  const { mutate, data, error, isLoading } = useMutation(sendQuestionData, {});
  async function sendQuestionData(data) {
    return await axios.post(
      "http://220.85.80.226:18881/room/complete",
      data,
      {}
    );
  }

  useEffect(() => {
    setGameResult({ ...gameResult, name: gameList.name, code: gameList.code });
  }, []);
  useEffect(() => {
    if (count == gameList.questions.length) {
      mutate(gameResult, {
        onSuccess: (data) => {
          console.log(data);
          router.push(
            "/resultCheck/" + gameResult.code + "/" + gameResult.name
          );
        },
      });
    }
  }, [count]);

  let openCount = 0;

  return (
    <BackWindow title={true} game={true}>
      <Center
        fontFamily={"DungGeunMo"}
        fontSize={20}
        h={100}
        textAlign={"center"}
      >
        {gameList.title}
        <br></br>
        밸런스게임
      </Center>
      {gameList.questions.map((question, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index == count ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box display={index == count ? "block" : "none"}>
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
                    >
                      {question.description}
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
                    <Button
                      w={125}
                      h={75}
                      fontSize={15}
                      border={"2px solid black"}
                      rounded={"false"}
                      wordBreak={"keep-all"}
                      resize={"none"}
                      paddingLeft={0}
                      paddingRight={0}
                      onClick={() => {
                        setGameResult({
                          ...gameResult,
                          results: gameResult.results.concat([
                            {
                              id: question.id,
                              select: 1,
                            },
                          ]),
                        });
                        setCount(count + 1);
                      }}
                    >
                      {question.view1}
                    </Button>

                    <Center h={70} w={10} fontSize={25} color={"black"}>
                      <Text>vs</Text>
                    </Center>
                    <Button
                      w={125}
                      h={75}
                      fontSize={15}
                      border={"2px solid black"}
                      rounded={"false"}
                      wordBreak={"keep-all"}
                      paddingLeft={0}
                      paddingRight={0}
                      resize={"none"}
                      onClick={() => {
                        setGameResult({
                          ...gameResult,
                          results: gameResult.results.concat([
                            {
                              id: question.id,
                              select: 2,
                            },
                          ]),
                        });
                        setCount(count + 1);
                      }}
                    >
                      {question.view2}
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </motion.div>
        );
      })}
    </BackWindow>
  );
}
function Problem({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleNextProblem = () => {
    // 다음 문제를 불러오는 로직
    setShowAnswer(false); // 답안 보기 초기화
  };

  return (
    <Box>
      <Box>{question}</Box>
      <Fade in={showAnswer}>
        <Box>{answer}</Box>
      </Fade>
      <Button onClick={handleShowAnswer}>답안 보기</Button>
      <Button onClick={handleNextProblem}>다음 문제</Button>
    </Box>
  );
}
