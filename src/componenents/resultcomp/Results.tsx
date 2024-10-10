import React from 'react'
import { useAccount } from 'wagmi'
import name from '../votecomp/VoteComp'

function Results() {

    const account = useAccount()
    
    

  return (
    <div>
        <div className='flex justify-evenly align-center w-full bg-blue-200 p-5 text-left text-sm mt-5'>
            <ul>
              <li>{account.address} voted for </li>
            </ul>
          </div> 
    </div>
  )
}

export default Results