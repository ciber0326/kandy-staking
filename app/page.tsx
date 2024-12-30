import Image from "next/image";
import Link from "next/link";
import RootLayout from './RootLayout';
import BitgetWalletCard from "./components/BitgetWalletCard";


export default function Home() {
  return (
    <RootLayout>

      <BitgetWalletCard/>
      <div className="md:min-h-[calc(100vh-128px)] container my-container flex lg:flex-row flex-col items-center lg:justify-between justify-center gap-x-6 lg:py-0 md:mb-0 mb-4 py-[50px]">
        <div className="w-full lg:w-[566px]">

          <h1 style={{ fontFamily: 'Halo Dek, serif' }} className="md:text-[96px] text-[48px] lg:text-left text-center">moonmoverz</h1>
          <p className="mb-8 sm:text-[24px] text-[12px] text-center">THE fIRST MEME PLAY-TO-EARN GAME BUILT WITH CLASSIC NFT ON MOVEMENT NETWORK.</p>

          <div className="lg:block hidden">

            <Link href='javascript:;' className="btn flex text-[20px] gap-x-2.5 justify-center items-center w-full text-white bg-black mb-4">
              <Image
                src="/twitter.png"
                width={20.4}
                height={21}
                alt="twitter"
              />
              Twitter
            </Link>

            <div className="grid grid-cols-2 gap-x-8">
              <Link href='javascript:;' className="btn flex items-center gap-x-2 justify-center text-black border-black border-2 w-full">
                <Image
                  src="/telegram.png"
                  width={24}
                  height={24}
                  alt="telegram"
                />
                Telegram
              </Link>
              <Link href='javascript:;' className="btn flex items-center gap-x-2 justify-center text-black border-black border-2 w-full">
                <Image
                  src="/discord.png"
                  width={24}
                  height={24}
                  alt="discord"
                />
                Discord
              </Link>
            </div>
          </div>
        </div>
        <Image
          src="/main.png"
          width={484}
          height={484}
          className="lg:w-[484px] md:w-[calc(100%*232/375)] w-full lg:mb-0 mb-8"
          alt="main image"
        />

        <div className="lg:hidden block w-full">

          <Link href='javascript:;' className="btn flex !text-[12px] gap-x-2.5 justify-center items-center w-full text-white bg-black mb-4">
            <Image
              src="/twitter.png"
              width={20.4}
              height={21}
              alt="twitter"
            />
            Twitter
          </Link>

          <div className="grid grid-cols-2 gap-x-4">
            <Link href='javascript:;' className="btn !text-[12px] flex items-center gap-x-2 justify-center text-black border-black border-2 w-full">
              <Image
                src="/telegram.png"
                width={24}
                height={24}
                alt="telegram"
              />
              Telegram
            </Link>
            <Link href='javascript:;' className="btn !text-[12px] flex items-center gap-x-2 justify-center text-black border-black border-2 w-full">
              <Image
                src="/discord.png"
                width={24}
                height={24}
                alt="discord"
              />
              Discord
            </Link>
          </div>
        </div>

      </div>
    </RootLayout>
  );
}

