"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';


export default function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false); // TypeScript infers `boolean`
  useEffect(() => {
    console.log(openMenu)
  }, [openMenu])
  return (
    <>
      <header className="bg-black text-white md:py-6 py-[30px] md:h-[128px] h-[105px] z-[99999999999999999999]">
        <div className="container my-container flex flex-wrap items-center justify-between">
          <Link href="/" className='flex'>
            <Image
              src='/logo.png'
              width={230}
              height={80}
              className="md:w-[230px] md:h-[80px] w-[132.5px] h-[45px]"
              alt='logo'
            />
          </Link>
          <nav aria-label='pc-nav'>
            <ul className="flex space-x-6 text-white text-[20px]">
              <li>
                <Link
                  href="/"
                  className={`${pathname === '/' ? 'nav-active' : ''
                    }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/staking"
                  className={`${pathname === '/staking' ? 'nav-active' : ''
                    }`}
                >
                  Staking
                </Link>
              </li>
              <li>
                <Link
                  href="/dice"
                  className={`${pathname === '/dice' ? 'nav-active' : ''
                    }`}
                >
                  Dice game
                </Link>
              </li>
              <li>
                <Link
                  href="/leaderboard"
                  className={`${pathname === '/leaderboard' ? 'nav-active' : ''
                    }`}
                >
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className={`${pathname === '/docs' ? 'nav-active' : ''
                    }`}
                >
                  Docs
                </Link>
              </li>
            </ul>
          </nav>
          <div aria-label='hamburger-menu' className={openMenu ? 'openMenu' : ''}
            onClick={() => {
              setOpenMenu((prev) => !prev); // Use the previous state callback
            }}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>


          <button className="btn px-8 border-white border-[2px] focus:outline-none focus:ring-1 focus:ring-yellow-300 lg:inline-block hidden">
            Connect Wallet
          </button>
        </div>
      </header>
      <nav aria-label='sp-nav' className={openMenu ? 'openMenu' : ''}>
        <div className="bg-black text-center py-[20px] w-full rounded-t-xl">

          <button className="btn !text-[12px] px-8 border-white border-[2px] focus:outline-none focus:ring-1 focus:ring-yellow-300 text-white">
            Connect Wallet
          </button>

        </div>
        <nav className=' rounded-b-xl flex flex-col gap-y-2 py-[46px] px-[32px] bg-[rgba(255,255,255,0.2)] w-full'>
          <Link href="javascript:;">
            Mint 100 Gmoon
          </Link>
          <Link href="javascript:;">
            Staking
          </Link>
          <Link href="javascript:;">
            Dice Game
          </Link>
          <Link href="javascript:;">
            Leaderboard
          </Link>
          <Link href="javascript:;">
            Docs
          </Link>
        </nav>

      </nav>
    </>


  );
}
