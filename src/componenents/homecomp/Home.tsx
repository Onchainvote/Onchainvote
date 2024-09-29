import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1 className='mb-10'>Welcome to OnchainVote</h1>
      <form action="" className=' text-xl'>
        <div className='flex justify-center align-center'>
          <label htmlFor="pvcnumber">PVC ID:</label> &nbsp;
          <input type="text" name='pvcnumber' placeholder='Enter your pvc number' className='ml-2 outline-none' />
        </div>
        <button className='m-6 cursor-pointer b-1'><Link to="/explore">Accreditate</Link></button>
      </form>
    </div>
  )
}

export default Home