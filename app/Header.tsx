"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

interface HeaderProps {
  onConnectWalletClick: () => void;
  connectedWallet: { name: string; address: string | null } | null;
}

const Header: React.FC<HeaderProps> = ({
  onConnectWalletClick,
  connectedWallet,
}) => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/staking", label: "Staking" },
    { href: "/dice", label: "Dice game" },
    { href: "/leaderboard", label: "Leaderboard" },
    { href: "/docs", label: "Docs" },
  ];

  return (
    <>
      <header className="bg-black text-white md:py-6 py-[30px] md:h-[128px] h-[105px] z-[99999999999999999999]">
        <div className="container my-container flex flex-wrap items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex">
            <Image
              src="/logo.png"
              width={230}
              height={80}
              className="md:w-[230px] md:h-[80px] w-[132.5px] h-[45px]"
              alt="logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="pc-nav">
            <ul className="flex space-x-6 text-white text-[20px]">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${pathname === href ? "nav-active" : ""}`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Hamburger Menu */}
          <div
            aria-label="hamburger-menu"
            className={openMenu ? "openMenu" : ""}
            onClick={() => setOpenMenu((prev) => !prev)}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>

          {/* Connect Wallet Button (Desktop) */}
          <button
            className="btn px-8 border-white border-[2px] focus:outline-none focus:ring-1 focus:ring-yellow-300 lg:inline-block hidden"
            onClick={onConnectWalletClick}
          >
            {connectedWallet
              ? `Connected: ${connectedWallet.name}`
              : "Connect Wallet"}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <nav aria-label="sp-nav" className={openMenu ? "openMenu" : ""}>
        <div className="bg-black text-center py-[20px] w-full rounded-t-xl">
          {/* Connect Wallet Button (Mobile) */}
          <button
            className="btn !text-[12px] px-8 border-white border-[2px] focus:outline-none focus:ring-1 focus:ring-yellow-300 text-white"
            onClick={onConnectWalletClick}
          >
            {connectedWallet
              ? `Connected: ${connectedWallet.name}`
              : "Connect Wallet"}
          </button>
        </div>

        {/* Mobile Links */}
        <nav className="rounded-b-xl flex flex-col gap-y-2 py-[46px] px-[32px] bg-[rgba(255,255,255,0.2)] w-full">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
      </nav>
    </>
  );
};

export default Header;
