//import React from 'react'
//import name from '../votecomp/VoteComp'
import abi from '../../abi/abi.json';
import ca from '../../abi/ca';
import Web3 from 'web3';
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react';


export default function Results() {

  const [elem, setElem] = useState(null);
  const [elem1, setElem1] = useState(null);
  const [elem2, setElem2] = useState(null);

  const web3 = new Web3("https://sepolia.base.org");

  const fetchPresVote = async () => {
    const contract = await new web3.eth.Contract(abi, ca[0]);
    try {
      await contract.methods.showAddressVoteFunc().call().then(
        (res) => {
          const returnElem = res.map(
            (data: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined) => (
              <div>{data} voted</div>
            )
          );
          setElem(returnElem);
        }
      ).catch((err) => {
        console.log(err);
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  const fetchGovVote = async () => {
    const contract = await new web3.eth.Contract(abi, ca[1]);
    try {
      await contract.methods.showAddressVoteFunc().call().then(
        (res) => {
          const returnElem = res.map(
            (data: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined) => (
              <div>{data} voted</div>
            )
          );
          setElem1(returnElem);
        }
      ).catch((err) => {
        console.log(err);
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  const fetchHorVote = async () => {
    const contract = await new web3.eth.Contract(abi, ca[2]);
    try {
      await contract.methods.showAddressVoteFunc().call().then(
        (res) => {
          const returnElem = res.map(
            (data: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined) => (
              <div>{data} voted</div>
            )
          );
          setElem2(returnElem);
        }
      ).catch((err) => {
        console.log(err);
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(
    () => {
      fetchPresVote();
      fetchGovVote();
      fetchHorVote();
    }, []
  )

  return (
    <div>
      <h1 className='mt-20'>Live Voting Data</h1>
      <div className='flex justify-evenly align-center w-full bg-blue-400 p-5 text-left text-sm mt-5 rounded-xl'>
        <h2>Presidential live data</h2>
        <ul className='text-xl'>
          <li>{elem}</li>
        </ul>
      </div>

      <div className='flex justify-evenly align-center w-full bg-blue-400 p-5 text-left text-sm mt-5 rounded-xl'>
        <h2>Governorship live data</h2>
        <ul className='text-xl'>
          <li>{elem1}</li>
        </ul>
      </div>

      <div className='flex justify-evenly align-center w-full bg-blue-400 p-5 text-left text-sm mt-5 rounded-xl'>
        <h2>House Of Reps live data</h2>
        <ul className='text-xl'>
          <li>{elem2}</li>
        </ul>
      </div>
    </div>
  )
}

