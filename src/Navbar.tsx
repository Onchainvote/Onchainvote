import { Outlet, Link } from "react-router-dom";
import WalletComponents from "./componenents/walletcomp/WalletComponents";
import devote from '../src/assets/devotelogo.png'

function Navbar() {
    return (
        <>
          <nav className=" fixed top-0 right-1 w-full p-5 bg-blue-500 z-10">
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