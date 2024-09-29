import React, { useState } from 'react'
import { MdHowToVote } from "react-icons/md";
import TransactionComp from '../transactcomp/TransactionComp';

function VoteComp({name, img}: {name: string, img: string} ) {

    const [voteCount, setVoteCount] = useState(0);

    const handleVote = () => {
        setVoteCount(voteCount + 1);
    }

    return (
        <div className='profilewrap flex flex-col justify-center align-center mt-5'>
            <h2 className=' text-xl'>{name}</h2>
            <img src={img} alt={`image of ${name}`} className='profileimage w-48 p-5' />
            {/* <button className='votepp' onClick={handleVote}><MdHowToVote />Vote - {voteCount}</button> */}
            <TransactionComp />
        </div>
    )
}

export default VoteComp