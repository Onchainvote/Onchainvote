import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import baselogo from "../../assets/baselogo.png";
import RetroGrid from "../ui/retro-grid";
import Footer from "../../Layout/Footer";

import { presidential } from "../../data";
import VoteCandi from "../votecomp/VoteCandi";

interface MyObject {
  [key: string]: string;
}

function Home() {
  // let id_address = new Map<string, string>();

  const account = useAccount();
  const navigate = useNavigate();
  const [usrInp, setUsrInp] = useState<string>("");
  const [id_address, setId_Address] = useState<MyObject>({
    "1234567890": "0x23456789",
  });

  const handleUsrInp = (event: any) => {
    setUsrInp(event.target.value);
  };

  const isDissabled =
    usrInp.length < 10 && usrInp.length > 10 && account.address == undefined;

  const handleAccreditate = () => {
    if (isDissabled) {
      alert("make sure your wallet is connected and a valid ID is inputed");
    }

    if (id_address[usrInp] !== undefined) {
      alert(`${usrInp} is already connected to another wallet`);
    } else {
      setId_Address((prevState) => ({
        ...prevState,
        usrInp: `${account.address}`,
      }));
      navigate("/explore");
      console.log(id_address[usrInp]);
    }
  }

  


  return (
    <div className="">
      {/* hero section */}
      <div className="relative flex flex-col items-center justify-center w-full min-h-screen px-3 overflow-hidden bg-background mt-20">
        <div className="text-center">
          <h1 className="-mt-30 pt-26 text-5xl font-bold text-black md:text-8xl ml-6">
            Welcome to{" "}
          </h1>
          <h1 className="text-blue-600 text-5xl font-bold md:text-8xl">
            DeVote
          </h1>

          <p className="mt-4 text-lg text-slate-700 md:text-xl">
            A voting system built on BASE to promote a more secure and
            transparent way of voting.
          </p>
        </div>

        <div className="z-10 text-xl mt-4">
          <div className="flex justify-center items-center flex-col">
            <input
              type="text"
              name="pvcnumber"
              placeholder="Enter your testID"
              className="p-2 mt-2 mb-2 mr-2 border rounded-xl border-blue-500 outline-none text-center"
              onChange={handleUsrInp}
              value={usrInp}
            />
            <p className="text-sm">
              ID will be mapped to your address: {account.address}
            </p>
          </div>
          <button
            className="m-6 cursor-pointer b-1 border rounded-xl border-blue-500 outline-none"
            onClick={handleAccreditate}
            disabled={isDissabled}
          >
            Accreditate
          </button>
        </div>

        <div>
          <img
            src={baselogo}
            alt="baselogo"
            className="w-20 absolute top-20 left-0"
          />
          <img
            src={baselogo}
            alt="baselogo"
            className="w-20 absolute top-20 right-5 "
          />
          <img
            src={baselogo}
            alt="baselogo"
            className="w-20 absolute bottom-12 right-5 "
          />
          <img
            src={baselogo}
            alt="baselogo"
            className="w-20 absolute bottom-12 left-0 "
          />
        </div>

        <RetroGrid />
      </div>

      {/* ongoing election */}
      <div className="container p-4 mx-auto my-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">Ongoing Election</h2>
          <Link to="/explore" className="text-blue-600 hover:underline">
            See All
          </Link>
        </div>

        {/* Event List (limited to 3) */}
        <h3 className="font-bold text-xl">Presidential Election</h3>
        <div className='flex justify-evenly flex-wrap mt-5 md:gap-5'>
          <VoteCandi name={presidential[0].name} img={presidential[0].img} party={presidential[0].party} votes={presidential[0].vote}/>
          <VoteCandi name={presidential[1].name} img = {presidential[1].img} party={presidential[1].party} votes={presidential[1].vote}/>
          <VoteCandi name={presidential[2].name} img={presidential[2].img} party={presidential[2].party} votes={presidential[2].vote}/>
          <VoteCandi name={presidential[3].name} img={presidential[3].img} party={presidential[3].party} votes={presidential[3].vote}/>
        </div> 
      </div>

      <Footer />
    </div>
  );
}

export default Home;
