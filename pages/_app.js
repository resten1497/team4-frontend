import { ChakraProvider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

const FadeBox = motion(Box);

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <ChakraProvider>
      <FadeBox
        key={router.route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Component {...pageProps} />
      </FadeBox>
    </ChakraProvider>
  );
}

export default MyApp;
