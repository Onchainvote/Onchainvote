import React from 'react'
import VoteComp from '../votecomp/VoteComp'

import obi from '../../assets/contestants/Peter_Obi.jpg'
import bola from '../../assets/contestants/Tinubu.jpg'

function Explore() {
  return (
    <div className='mt-20'>
      <div>
        <h1>Presidential Election</h1>
        <div className='flex justify-between align-center p-10'>
          <VoteComp name='Peter Obi' img={obi} />
          <VoteComp name='Bola Tinubu' img={bola} />
        </div>
      </div>
      <div>
        <h1>
          Governnorship Election
        </h1>
      </div>
    </div>
  )
}

export default Explore