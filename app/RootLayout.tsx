"use client";

import "./globals.css";
import { ReactNode, useState } from "react";
import Header from "./Header";
import WalletConnectModal from "./components/walletconnect";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState<{
    name: string;
    address: string | null;
  } | null>(null);

  return (
    <div>
      {/* Header */}
      <Header
        onConnectWalletClick={() => setIsModalOpen(true)}
        connectedWallet={connectedWallet}
      />

      {/* Modal */}
      {isModalOpen && (
        <WalletConnectModal
          onClose={() => setIsModalOpen(false)}
          setConnectedWallet={setConnectedWallet}
        />
      )}

      {/* Main Content */}
      <main>{children}</main>
    </div>
  );
}
