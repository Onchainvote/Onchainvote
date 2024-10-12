import { Outlet, Link } from "react-router-dom";
import WalletComponents from "../componenents/walletcomp/WalletComponents";
import devote from '../assets/devotelogo.png';
import { useEffect, useState } from "react";
import classNames from "classnames";
import { useAccount } from 'wagmi'

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { address } = useAccount();

  //Detect scrolling for background change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Conditional class for background blur and shadow on screen
  const headerClass = classNames("fixed top-0 left-0 w-full z-50 transition-all",
    {
      "bg-blue-200 shadow-lg backdrop-blur-lg": scrolled,
      "bg-blue-500": !scrolled,
    }
  );


  return (
    <>
      <nav className={headerClass}>
        <ul className=" flex justify-between items-center">
          <li>
            <img className='w-20' src={devote} alt="devotelogo" />
          </li>
          <li>
            <Link to="/">Accreditation</Link>
          </li>
          <li>
            <Link to="/explore">Explore</Link>
          </li>
          <li>
            <Link to="/results">Live data</Link>
          </li>
          {
            address != null ? (
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            ) : null
          }
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <WalletComponents />
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
}

export default Navbar