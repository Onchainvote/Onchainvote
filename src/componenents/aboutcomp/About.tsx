import React from 'react'
import miracle from '../../assets/team/miracle.png'
import dxfareed from '../../assets/team/dxfareed.jpeg'
import judy from '../../assets/team/judy.jpg'
import emperor from '../../assets/team/emperor.jpg'
import skyful from '../../assets/team/iamskyful.jpg'

function About() {
  return (
    <>
      <div>
        <h1 className='font-bold mt-20'>DeVote</h1>
        A voting platform that has the potential to create transparency in the voting industry, leveraging the base block, DeVote allows users to vote for their choice candidates by signing a contract that stores their vote onchain and can fetched at any time promoting transparency, since the voting data is stored onchain their vote is secured thanks to the dev team and the base blockchain. Users can now enjoy free and fair elections.
      </div>
      <div>
        <h1 className='font-bold mt-5'>The Team</h1>
        <div className='flex justify-between items-center gap-5 wrap mt-5'>
          <div className='flex justify-center items-center flex-col'>
            <img src={skyful} alt="skyfulimage" className='w-24 rounded-full'/>
            <p className='font-bold'>iamskyful.base.eth</p>
            <p>Product Manager</p>
          </div>
          <div className='flex justify-center items-center flex-col'>
            <img src={miracle} alt="miracleimage" className='w-24 rounded-full' />
            <p className='font-bold'>jackofweb3.base.eth</p>
            <p>Developer Advocate</p>
          </div>
          <div className='flex justify-center items-center flex-col'>
            <img src={dxfareed} alt="fareedimage" className='w-24 rounded-full' />
            <p className='font-bold'>dxfareed.base.eth</p>
            <p>SMC Developer</p>
          </div>
          <div className='flex justify-center items-center flex-col'>
            <img src={emperor} alt="emperorimage" className='w-24 rounded-full' />
            <p className='font-bold'>emperorsmii.base.eth</p>
            <p>Frontend Developer</p>
          </div>
          <div className='flex justify-center items-center flex-col'>
            <img src={judy} alt="judyimage" className='w-24 rounded-full' />
            <p className='font-bold'>judithetugbo.base.eth</p>
            <p>Content Creator</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About