import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import "@/styles/main.scss";
import type { AppProps } from "next/app";

import { ChakraProvider, CSSReset } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider>
        <CSSReset />
        <div className="app-wrapper">
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ChakraProvider>
    </>
  );
}
