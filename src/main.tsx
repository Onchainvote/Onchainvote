import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import OnchainProviders  from '../OnchainProviders.tsx'
import '@coinbase/onchainkit/styles.css';
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <OnchainProviders>
    <App />
  </OnchainProviders>,
)
