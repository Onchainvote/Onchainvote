import {useEffect} from 'react'
import VoteComp from '../votecomp/VoteComp'
import { useNavigate } from "react-router-dom";
import { useAccount } from 'wagmi'

//presidents
import obi from '../../assets/contestants/Peter_Obi.png'
import bola from '../../assets/contestants/Tinubu.jpg'
import buhari from '../../assets/contestants/buhari.png'
import salbaba from '../../assets/contestants/salbaba.png'

//governors
import sanwo from '../../assets/contestants/Sanwo-Olu.jpg'
import datti from '../../assets/contestants/Datti-Baba.jpg'
import sagamu from '../../assets/contestants/sagamu.jpg'
import bassey from '../../assets/contestants/BasseyOtu.jpg'

//house of reps
import tajudeen from '../../assets/contestants/Tajudeen.jpeg'
import femi from '../../assets/contestants/Femi.jpg'
import tambuwal from '../../assets/contestants/tambuwal.jpg'
import Yakubu from '../../assets/contestants/Yakubu.jpg'


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
    <>
    
    <div className='mt-28'>
     
      <div>
        <h1>Presidential Election</h1>
        <div className='flex justify-evenly flex-wrap mt-5 md:gap-5'>
          <VoteComp name='Peter Obi' img={obi} party='LP'/>
          <VoteComp name='Bola Tinubu' img={bola} party='APC' />
          <VoteComp name='Buhari' img={buhari} party='APC'/>
          <VoteComp name='Salbaba' img={salbaba} party='PDP'/>
        </div> 
      </div>
      <div className='grid mt-20'>
        <h1>
          Governnorship Election
        </h1>
        <div className='flex justify-evenly align-center flex-wrap mt-5 md:gap-5'>
          <VoteComp name='Datti-Baba' img={datti} party='LP'/>
          <VoteComp name='Sanwo-Olu' img={sanwo} party='APC'/>
          <VoteComp name='Sagamu' img={sagamu} party='PDP'/>
          <VoteComp name='Bassey-Otu' img={bassey} party='APC'/>
        </div>
      </div>
      
      <div className=' mt-20'>
        <h1>
          House of Reps Election
        </h1>
        <div className='flex justify-evenly align-center flex-wrap mt-5 md:gap-5'>
          <VoteComp name='Tajudeen' img={tajudeen} party='APC'/>
          <VoteComp name='Femi' img={femi} party='PDP'/>
          <VoteComp name='TAmbuwal' img={tambuwal} party='LP'/>
          <VoteComp name='Yakubu' img={Yakubu} party='APC'/>
        </div>
      </div>
     
    </div>
    </>
  )
}

export default Explore