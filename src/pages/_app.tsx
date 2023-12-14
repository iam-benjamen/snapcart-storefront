import "@/styles/globals.css";
import { CartProvider } from "@/context/cartContext";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </CartProvider>
  );
}
