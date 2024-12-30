export const metadata = {
  title: "Moon Moverz",
  description: "Moon Moverz staking platform",
};

import Web3ProviderWrapper from "./Web3ProviderWrapper";



export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Wrap with Web3Provider */}
        <Web3ProviderWrapper>{children}</Web3ProviderWrapper>
        

      </body>
    </html>
  );
}
