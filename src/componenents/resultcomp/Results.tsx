import React from 'react'
import { useAccount } from 'wagmi'

function Results() {

    const account = useAccount()

  return (
    <div>
        <div className='flex justify-evenly align-center w-full bg-blue-200 p-5 text-left text-sm mt-5'>
            <ul>
              <li>{account.address} voted for obi</li>
            </ul>
          </div> 
    </div>
  )
}

export default Results