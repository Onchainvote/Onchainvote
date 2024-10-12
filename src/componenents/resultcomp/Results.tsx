//import React from 'react'
import { useAccount } from 'wagmi'
//import name from '../votecomp/VoteComp'
import abi from '../../abi/abi.json';
import ca from '../../abi/ca';
import Web3 from 'web3';
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react';


export default function Results() {

  const account = useAccount();
  const [elem, setElem] = useState(null);
  const web3= new Web3("https://sepolia.base.org");

  const fetchUserVote= async ()=>{
    const contract= await new web3.eth.Contract(abi, ca);
    try{
      await contract.methods.showAddressVoteFunc().call().then(
        (res)=>{
            const returnElem = res.map(
              (data: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined)=>(
                <div>{data} voted</div>
              )
            );
            setElem(returnElem);
        }
      ).catch((err)=>{
        console.log(err);
      });
    }
    catch(err){
      console.log(err);
    }
  }
  useEffect(
    ()=>{
      fetchUserVote()
    },[]
  )
  
  return (
    <div>
      <h1>Live Voting Data</h1>
        <div className='flex justify-evenly align-center w-full bg-blue-400 p-5 text-left text-sm mt-5 rounded-xl'>
            <ul className='text-xl'>
             <li>{account.address} voted </li>
              <li>{elem}</li>
            </ul>
          </div> 
    </div>
  )
}

