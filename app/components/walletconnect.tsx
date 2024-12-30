"use client";

import { useState } from "react";
import { ethers } from "ethers"; // For Ethereum-based wallets
import BitgetWalletCard from "./BitgetWalletCard";
import { hooks, bitgetWallet } from "../connectors/bitgetWallet";
const {
    useChainId,
    useAccounts,
    useIsActivating,
    useIsActive,
    useProvider,
    useENSNames,
} = hooks;


// Detect if a wallet is installed
const checkWalletInstalled = (walletId: string) => {
    switch (walletId) {
        case "bitget":
            return !!window.bitget;
        case "nightly":
            return !!window.nightly;
        case "razor":
            return !!window.razor;
        default:
            return false;
    }
};


const wallets = [
    {
        name: "BitgetWallet_TGBot",
        icon: "/wallet/bitget.png", // Replace with actual path
        url: "dfdf",
        connect: async () => {
            // if (!window.ethereum) {
            //     alert("BitgetWallet (MetaMask compatible) not detected.");
            //     return null;
            // }
            // try {
            //     const provider = new ethers.providers.Web3Provider(window.ethereum);
            //     await provider.send("eth_requestAccounts", []);
            //     const signer = provider.getSigner();
            //     const address = await signer.getAddress();
            //     return address;
            // } catch (error) {
            //     console.error("Error connecting to BitgetWallet:", error);
            //     return null;
            // }
            void bitgetWallet.connectEagerly().catch(() => {
                alert("Failed to connect eagerly to Bitget Wallet");
            });
        },
    },
    {
        name: "Nightly.app",
        icon: "/wallet/nightly.png", // Replace with actual path
        url: "dfdf",
        connect: async () => {
            alert("Nightly Wallet connection logic goes here!");
            // Placeholder logic - replace with Nightly wallet SDK/API
            return null;
        },
    },
    {
        name: "RazorWallet.xyz",
        icon: "/wallet/razor.png", // Replace with actual path
        url: "dfdf",
        connect: async () => {
            alert("Razor Wallet connection logic goes here!");
            // Placeholder logic - replace with Razor wallet SDK/API
            return null;
        },
    },
];

const WalletConnectModal = ({ onClose, setConnectedWallet }: any) => {

    const [isInstallModalOpen, setIsInstallModalOpen] = useState(false);


    const [selectedWallet, setSelectedWallet] = useState({ name: "", icon: "", url: "" });


    const handleWalletClick = (wallet: any) => {
        const isInstalled = checkWalletInstalled(wallet.id);
        if (!isInstalled) {
            setSelectedWallet(wallet);
            setIsInstallModalOpen(true);
        } else {
            console.log(`${wallet.name} is installed! Connecting...`);
            // Add wallet connection logic here
        }
    };



    const chainId = useChainId();
    const accounts = useAccounts();
    const isActivating = useIsActivating();
    const isActive = useIsActive();
    const provider = useProvider();
    const ENSNames = useENSNames(provider);

    const [error, setError] = useState<Error | undefined>(undefined);
    const handleWalletConnect = async (wallet: any) => {
        const address = await wallet.connect();
        if (address) {
            setConnectedWallet({ name: wallet.name, address });
            onClose();
        }
    };

    return (

        <>
            <div className="fixed inset-0 bg-yello flex items-center justify-center">

                <div className="w-[736px] px-[28px] py-[40px] lg:px-[86px] lg:py-[64px] rounded-2xl bg-[rgba(18,18,18,0.2)] lg:mx-0 mx-[20px]">

                    <div className="bg-black text-white rounded-lg  py-[64px] relative">
                        <button
                            onClick={onClose}
                            className="text-white text-[30px] font-bold hover:opacity-70 absolute right-[28px] top-[28px] leading-[1] duration-300 transition-opacity"
                        >
                            &times;
                        </button>
                        <div className="text-black font-bold text-lg mb-4 flex justify-between">
                            <span className="text-white text-[16px] lg:text-[36px] sm:mb-[32px] mb-[16px] px-[24px] uppercase font-halo">Connect Wallet</span>

                        </div>
                        <div>
                            {wallets.map((wallet, index) => (
                                <button
                                    key={wallet.id}
                                    onClick={() => handleWalletClick(wallet)}
                                    className="flex items-center justify-between w-full p-[16px] lg:px-[24px] lg:py-[20px] bg-black text-white hover:bg-gray-700 border-b border-white first:border-t"
                                >
                                    <span className="flex items-center sm:text-[24px] text-[12px]">
                                        <img
                                            src={wallet.icon}
                                            alt={wallet.name}
                                            className="w-[18px] lg:w-[40px] mr-2"
                                        />
                                        {wallet.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Install Wallet Modal */}
            {isInstallModalOpen && (
                <div className="install-wallet-modal-overlay fixed z-[99999999999999999999999999999999]">
                    <div className="install-wallet-modal">
                        <button className="close-button" onClick={() => setIsInstallModalOpen(false)}>✖</button>
                        <img src={selectedWallet.icon} alt={`${selectedWallet.name} logo`} className="wallet-logo" />
                        <h2>Install Wallet</h2>
                        <p>You haven’t installed this wallet</p>
                        <p>Install wallet via Chrome Extension Store</p>
                        <a
                            href={selectedWallet.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="get-wallet-button"
                        >
                            Get Wallet
                        </a>
                    </div>
                </div>
            )}
        </>

    );
};

export default WalletConnectModal;
