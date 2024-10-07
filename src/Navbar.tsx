import { Outlet, Link } from "react-router-dom";
import WalletComponents from "./componenents/walletcomp/WalletComponents";

function Navbar() {
    return (
        <>
          <nav className=" fixed top-0 right-1 w-full p-5 bg-blue-500 z-10">
            <ul className=" flex justify-around items-center">
              <li>
                <Link to="/">Accreditation</Link>
              </li>
              <li>
                <Link to="/explore">Explore</Link>
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