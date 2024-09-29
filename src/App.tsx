import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './componenents/homecomp/Home'
import Explore from './componenents/explorecomp/Explore'
import Navbar from './Navbar'
import NoPage from './NoPage'
import './App.css'
import { ReactNode } from 'react';
import { WagmiProvider, createConfig, http } from 'wagmi';
import { baseSepolia } from 'wagmi/chains';
import { coinbaseWallet } from 'wagmi/connectors';
import '@coinbase/onchainkit/styles.css';

const wagmiConfig = createConfig({
  chains: [baseSepolia],
  connectors: [
    coinbaseWallet({
      appName: 'onchainvote',
    }),
  ],
  ssr: true,
  transports: {
    [baseSepolia.id]: http(),
  },
});

function App({ children }: { children: ReactNode }) {

  return (
    <>
      <WagmiProvider config={wagmiConfig}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="explore" element={<Explore />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </WagmiProvider>
    </>
  )
}

export default App
