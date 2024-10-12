import React from 'react'
import { createRoot } from 'react-dom/client'
import OnchainProviders from '../OnchainProviders.tsx'
import '@coinbase/onchainkit/styles.css';
import App from './App.tsx'
import './index.css'
import AppProvider from '../AppProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      {/* <BrowserRouter> */}
        {/* <WagmiProvider config={wagmiConfig}> */}
          <OnchainProviders>
            <App />
          </OnchainProviders>
        {/* </WagmiProvider> */}
      {/* </BrowserRouter> */}
    </AppProvider>
  </React.StrictMode>
)
