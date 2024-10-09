import {useEffect} from 'react'
import VoteComp from '../votecomp/VoteComp'
import { useNavigate } from "react-router-dom";
import { useAccount } from 'wagmi'

import obi from '../../assets/contestants/Peter_Obi.png'
import bola from '../../assets/contestants/Tinubu.jpg'
import sanwo from '../../assets/contestants/Sanwo-Olu.jpg'
import datti from '../../assets/contestants/Datti-Baba.jpg'

function Explore() {

  const navigate = useNavigate()
  const account = useAccount()
  useEffect(() => {
    if(account.address == null){
      alert("Connect your wallet to vote")
      navigate("/")
    }
  }, [])
  

  return (
    <div className='mt-20'>
      <div>
        <h1>Presidential Election</h1>
        <div className='flex justify-evenly flex-wrap mt-5 md:gap-5'>
          <VoteComp name='Peter Obi' img={obi} party='LP'/>
          <VoteComp name='Bola Tinubu' img={bola} party='APC' />
          <VoteComp name='Peter Obi' img={obi} party='LP'/>
          <VoteComp name='Bola Tinubu' img={bola} party='APC'/>
        </div> 
      </div>
      <div className='grid mt-20'>
        <h1>
          Governnorship Election
        </h1>
        <div className='flex justify-evenly align-center flex-wrap mt-5 md:gap-5'>
          <VoteComp name='Datti-Baba' img={datti} party='LP'/>
          <VoteComp name='Sanwo-Olu' img={sanwo} party='APC'/>
          <VoteComp name='Datti-Baba' img={datti} party='LP'/>
          <VoteComp name='Sanwo-Olu' img={sanwo} party='APC'/>
        </div>
      </div>
      
      <div className=' mt-20'>
        <h1>
          House of Reps Election
        </h1>
        <div className='flex justify-evenly align-center flex-wrap mt-5 md:gap-5'>
          <VoteComp name='Datti-Baba' img={datti} party='LP'/>
          <VoteComp name='Sanwo-Olu' img={sanwo} party='APC'/>
          <VoteComp name='Datti-Baba' img={datti} party='LP'/>
          <VoteComp name='Sanwo-Olu' img={sanwo} party='APC'/>
        </div>
      </div>
    </div>
  )
}

export default Explore