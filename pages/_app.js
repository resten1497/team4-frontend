import { ChakraProvider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import "../public/static/fonts.css";
import { extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

const FadeBox = motion(Box);

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const theme = extendTheme({
    components: {
      Button: {
        baseStyle: {
          _focus: {
            boxShadow: "none",
          },
        },
      },
    },
    styles: {
      global: {
        // This could also be "div, p"
        "*, *::before, ::after , ::hover": {
          wordWrap: "word-break",
        },
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <RecoilRoot>
          <FadeBox
            key={router.route}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Component {...pageProps} />
          </FadeBox>
        </RecoilRoot>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
