import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useAccount } from 'wagmi'
import baselogo from '../../assets/baselogo.png'

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

  const isDissabled = (usrInp.length < 10) || (usrInp.length > 10) || (account.address == undefined);

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
    <div>
      <h1>Welcome to OnchainVote</h1>
      <p className='mb-10 text-xl'>A voting system built on BASE to promote a more secure and transparent way of voting.</p>
      <div className='z-10 text-xl'>
        <div className='flex justify-center items-center flex-col'>
          <input type="text" name='pvcnumber' placeholder='Enter your pvc number' className='p-2 mb-2 mr-2 border rounded-xl border-blue-500 outline-none text-center' onChange={handleUsrInp} value={usrInp} />
          <p className='text-sm'>ID will be mapped to your address: {account.address}</p>
        </div>
        <button className='m-6 cursor-pointer b-1 border rounded-xl border-blue-500 outline-none' onClick={handleAccreditate} disabled={isDissabled}>Accreditate</button>
      </div>
      <div>
        <img src={baselogo} alt="baselogo" className='w-48 absolute top-32 left-5' />
        <img src={baselogo} alt="baselogo" className='w-48 absolute bottom-32 right-5' />
      </div>
    </div>
  )
}

export default Home