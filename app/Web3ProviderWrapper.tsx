"use client";

import React from "react";
import { Web3ReactProvider } from "@web3-react/core";
import { hooks as bitgetWalletHooks, bitgetWallet } from "./connectors/bitgetWallet";

const connectors = [[bitgetWallet, bitgetWalletHooks]];



export default function Web3ProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Web3ReactProvider connectors={connectors}>{children}</Web3ReactProvider>;
}
