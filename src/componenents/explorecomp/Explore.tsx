import { useEffect } from 'react'
import VoteComp from '../votecomp/VoteComp'
import { useNavigate } from "react-router-dom";
import { useAccount } from 'wagmi'
import { presidential, governoship, houseReps } from '../../data';
import { useAppContext } from '../../../AppProvider';
import TransactionComp from '../transactcomp/TransactionComp';

function Explore() {

  const navigate = useNavigate()
  const {handleOnStatus} = useAppContext()
  const account = useAccount()
  useEffect(() => {
    if (account.address == null) {
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

            {
              presidential.map(candidate => (
                <div>
                  <VoteComp key={candidate.id} name={candidate.name} img={candidate.img} party={candidate.party} />
                  <TransactionComp />
                </div>
              ))
            }

          </div>
        </div>
        <div className='grid mt-20'>
          <h1>
            Governnorship Election
          </h1>
          <div className='flex justify-evenly align-center flex-wrap mt-5 md:gap-5'>

            {
              governoship.map(candidate => (
                <div>
                  <VoteComp key={candidate.id} name={candidate.name} img={candidate.img} party={candidate.party} />
                </div>
              ))
            }

          </div>
        </div>

        <div className=' mt-20'>
          <h1>
            House of Reps Election
          </h1>
          <div className='flex justify-evenly align-center flex-wrap mt-5 md:gap-5'>

            {
              houseReps.map(candidate => (
                <div>
                  <VoteComp key={candidate.id} name={candidate.name} img={candidate.img} party={candidate.party} />
                </div>
              ))
            }

          </div>
        </div>

      </div>
    </>
  )
}

export default Explore