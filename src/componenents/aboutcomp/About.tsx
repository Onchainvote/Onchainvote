import React from 'react'
import miracle from '../../assets/team/miracle.png'
import dxfareed from '../../assets/team/dxfareed.jpeg'
import judy from '../../assets/team/judy.jpg'

function About() {
  return (
    <>
      <div>
        <h1 className='font-bold'>DeVote</h1>
      </div>
      <div>
        <h1 className='font-bold mt-5'>The Team</h1>
        <div className='flex justify-between items-center gap-5 wrap mt-5'>
          <div>
            <img src="" alt="" />
            <p>iamskyful.base.eth</p>
            <p>Product Manager</p>
          </div>
          <div className='flex justify-center items-center flex-col'>
            <img src={miracle} alt="miracleimage" className='w-24' />
            <p>jackofweb3.base.eth</p>
            <p>Dev Contributor</p>
          </div>
          <div className='flex justify-center items-center flex-col'>
            <img src={dxfareed} alt="fareedimage" className='w-24' />
            <p>dxfareed.base.eth</p>
            <p>Smart Contract Dev</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>emperorsmii.base.eth</p>
            <p>Frontend Developer</p>
          </div>
          <div className='flex justify-center items-center flex-col'>
            <img src={judy} alt="judyimage" className='w-24' />
            <p>judithetugbo.base.eth</p>
            <p>Content Creator</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About