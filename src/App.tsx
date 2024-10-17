import ScrollToTop from "./componenents/ScrollToTop/ScrollToTop";
import Explore from "./componenents/explorecomp/Explore";
import Results from "./componenents/resultcomp/Results";
import About from "./componenents/aboutcomp/About";
import MainLayout from "../src/Layout/MainLayout";
import Home from "./componenents/homecomp/Home";
import {Routes, Route} from "react-router-dom";
import '@coinbase/onchainkit/styles.css';
import NoPage from './NoPage';
import './App.css';

function App(){
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

export default App;
