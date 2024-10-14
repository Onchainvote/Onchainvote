import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './componenents/homecomp/Home'
import Explore from './componenents/explorecomp/Explore'
import About from "./componenents/aboutcomp/About";
import Results from "./componenents/resultcomp/Results";
import NoPage from './NoPage'
import './App.css'
import { ReactNode } from 'react';



import '@coinbase/onchainkit/styles.css';
import MainLayout from "../src/Layout/MainLayout";
import ScrollToTop from "./componenents/ScrollToTop/ScrollToTop";



function App() {

  return (
      <MainLayout>
        <ScrollToTop />
          <Routes>
            
              <Route path="/" element={<Home />} />
              <Route path="explore" element={<Explore />} />
              <Route path="results" element={<Results />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<NoPage />} />
            
        </Routes>
      </MainLayout>    
        
      
    
  )
}

export default App
