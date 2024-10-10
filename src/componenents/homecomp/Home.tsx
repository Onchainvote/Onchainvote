import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useAccount } from 'wagmi'
import baselogo from '../../assets/baselogo.png'
import RetroGrid from '../ui/retro-grid';

interface MyObject{
  [key: string]: string,
}

function Home() {

  // let id_address = new Map<string, string>();

  const account = useAccount()
  const navigate = useNavigate()
  const [usrInp, setUsrInp] = useState<string>("");
  const [id_address, setId_Address] = useState<MyObject>({'1234567890': '0x23456789'});

  const handleUsrInp = (event: any) => {
    setUsrInp(event.target.value)
  }

  const isDissabled = (usrInp.length < 10) && (usrInp.length > 10) && (account.address == undefined);

  const handleAccreditate = () => {   
    if(isDissabled){
      alert("make sure your wallet is connected and a valid ID is inputed")
    }
 
    if (id_address[usrInp] !== undefined) {
      alert(`${usrInp} is already connected to another wallet`)
    } else {
      setId_Address(prevState => ({...prevState, usrInp: `${account.address}`}))
      navigate("/explore")
      console.log(id_address[usrInp])
    }
  }

  


  return (
    <div className=''>
      {/* hero section */}
    <div className='relative flex flex-col items-center justify-center w-full min-h-screen px-3 overflow-hidden bg-background mt-20'>
    <div className="text-center">
    <h1 className='-mt-30 pt-26 text-5xl font-bold text-black md:text-8xl ml-6'>Welcome to{" "}</h1>
    <h1 className="text-blue-600 text-5xl font-bold md:text-8xl">DeVote</h1> 

    <p className="mt-4 text-lg text-slate-700 md:text-xl">A voting system built on BASE to promote a more secure and transparent way of voting.</p>
    </div>
     
      <div className='z-10 text-xl mt-4'>
        <div className='flex justify-center items-center flex-col'>
          <input type="text" name='pvcnumber' placeholder='Enter your testID' className='p-2 mt-2 mb-2 mr-2 border rounded-xl border-blue-500 outline-none text-center' onChange={handleUsrInp} value={usrInp} />
          <p className='text-sm'>ID will be mapped to your address: {account.address}</p>
        </div>
        <button className='m-6 cursor-pointer b-1 border rounded-xl border-blue-500 outline-none' onClick={handleAccreditate} disabled={isDissabled}>Accreditate</button>
      
      </div>
      
      <div>
        <img src={baselogo} alt="baselogo" className='w-48 absolute top-20 left-0' />
        <img src={baselogo} alt="baselogo" className='w-48 absolute top-20 right-5 ' />
        <img src={baselogo} alt="baselogo" className='w-48 absolute bottom-12 right-5 ' />
        <img src={baselogo} alt="baselogo" className='w-48 absolute bottom-12 left-0 ' />
      </div>

      <RetroGrid />
    </div>
   
    </div>
  )
}
     
      

export default Home