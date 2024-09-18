// src/pages/_app.tsx
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import {
  cookieStorage,
  cookieToInitialState,
  createConfig,
  createStorage,
  WagmiProvider,
} from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http } from "viem";
import { mainnet, sepolia } from "viem/chains";

import "../styles/globals.css";

import Layout from "../components/layout";
import Header from "@/components/Header/Header";
import { AppProps } from "next/app";
import Head from "next/head";
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi";
import Web3ModalProvider from "@/context";
import { config } from "@/config";

const DynamicPool = dynamic(() => import("../components/layout.js"), {
  ssr: false,
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Web3ModalProvider>
        <DynamicPool>
          <Head>
            <title>Project</title>
            <meta
              name="description"
              content="That's a good project!"
              key="desc"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, user-scalable=no"
            />
          </Head>
          <Header />
          <Component {...pageProps} />
        </DynamicPool>
      </Web3ModalProvider>
    </>
  );
}
