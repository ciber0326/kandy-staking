"use client";

import { useEffect, useState } from "react";
import { hooks, bitgetWallet } from "../connectors/bitgetWallet";

const {
  useChainId,
  useAccounts,
  useIsActivating,
  useIsActive,
  useProvider,
  useENSNames,
} = hooks;

export default function BitgetWalletCard() {
  const chainId = useChainId();
  const accounts = useAccounts();
  const isActivating = useIsActivating();
  const isActive = useIsActive();
  const provider = useProvider();
  const ENSNames = useENSNames(provider);
  const [error, setError] = useState<Error | undefined>(undefined);

  // Attempt to connect eagerly on mount
  useEffect(() => {
    void bitgetWallet.connectEagerly().catch(() => {
      console.debug("Failed to connect eagerly to Bitget Wallet");
    });
  }, []);

  return (
    <div>
      <h3>Bitget Wallet</h3>
      {isActivating && <p>Connecting...</p>}
      {isActive ? (
        <div>
          <p>Connected to Chain ID: {chainId}</p>
          <p>Accounts: {accounts ? accounts.join(", ") : "N/A"}</p>
        </div>
      ) : (
        <button onClick={() => bitgetWallet.activate()}>Connect Bitget Wallet</button>
      )}
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
    </div>
  );
}
