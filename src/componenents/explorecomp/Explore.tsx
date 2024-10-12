import {useEffect} from 'react'
import VoteComp from '../votecomp/VoteComp'
import { useNavigate } from "react-router-dom";
import { useAccount } from 'wagmi'

import { presidential, governoship, houseReps} from '../../data';



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
          <VoteComp name={presidential[0].name} img={presidential[0].img} party={presidential[0].party}/>
          <VoteComp name={presidential[1].name} img = {presidential[1].img} party={presidential[1].party} />
          <VoteComp name={presidential[2].name} img={presidential[2].img} party={presidential[2].party}/>
          <VoteComp name={presidential[3].name} img={presidential[3].img} party={presidential[3].party}/>
        </div> 
      </div>
      <div className='grid mt-20'>
        <h1>
          Governnorship Election
        </h1>
        <div className='flex justify-evenly align-center flex-wrap mt-5 md:gap-5'>
          <VoteComp name={governoship[0].name} img={governoship[0].img} party={governoship[0].party}/>
          <VoteComp name={governoship[1].name} img={governoship[1].img} party={governoship[1].party}/>
          <VoteComp name={governoship[2].name} img={governoship[2].img} party={governoship[2].party}/>
          <VoteComp name={governoship[3].name} img={governoship[3].img} party={governoship[3].party}/>
        </div>
      </div>
      
      <div className=' mt-20'>
        <h1>
          House of Reps Election
        </h1>
        <div className='flex justify-evenly align-center flex-wrap mt-5 md:gap-5'>
          <VoteComp name={houseReps[0].name} img={houseReps[0].img} party={houseReps[0].party}/>
          <VoteComp name={houseReps[1].name} img={houseReps[1].img} party={houseReps[1].party}/>
          <VoteComp name={houseReps[2].name} img={houseReps[2].img} party={houseReps[2].party}/>
          <VoteComp name={houseReps[3].name} img={houseReps[3].img} party={houseReps[3].party}/>
        </div>
      </div>
     
    </div>
    </>
  )
}

export default Explore