import React from 'react'
import { createRoot } from 'react-dom/client'
import OnchainProviders  from '../OnchainProviders.tsx'
import '@coinbase/onchainkit/styles.css';
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import {WagmiProvider} from "wagmi";
import wagmiConfig from './config/wagmiConfig.ts';

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
