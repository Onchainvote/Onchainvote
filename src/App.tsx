import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './componenents/homecomp/Home'
import Explore from './componenents/explorecomp/Explore'
import About from "./componenents/aboutcomp/About";
import Results from "./componenents/resultcomp/Results";
import Dashboard from "./componenents/dashboardcomp/Dashboard";
import Navbar from './Layout/Navbar'
import NoPage from './NoPage'
import './App.css'
import { ReactNode } from 'react';
import { WagmiProvider } from 'wagmi'
import wagmiConfig from "./config/wagmiConfig";

import '@coinbase/onchainkit/styles.css';

function App() {

  return (
    <>
      <WagmiProvider config={wagmiConfig}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="explore" element={<Explore />} />
              <Route path="results" element={<Results />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </WagmiProvider>
    </>
  )
}

export default App
