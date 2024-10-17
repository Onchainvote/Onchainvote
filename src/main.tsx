import OnchainProviders  from '../OnchainProviders.tsx';
import wagmiConfig from './config/wagmiConfig.ts';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import '@coinbase/onchainkit/styles.css';
import {WagmiProvider} from "wagmi";
import App from './App.tsx';
import React from 'react';
import './index.css';



createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <BrowserRouter basename='/vote-dapp'>
        <WagmiProvider config={wagmiConfig}>
          <OnchainProviders>
            <App />
        </OnchainProviders>
        </WagmiProvider>
      </BrowserRouter>
  </React.StrictMode>
)
