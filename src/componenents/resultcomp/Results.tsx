import { useEffect, useState } from 'react';
import abi from '../../abi/abi.json';
import ca from '../../abi/ca';
import Web3 from 'web3';

export default function Results() {
  const [elem, setElem] = useState(null);
  const web3= new Web3("https://sepolia.base.org");
  const fetchUserVote= async() =>{
    const contract= await new web3.eth.Contract(abi, ca[0]);
    try{
      await contract.methods.showAddressVoteFunc().call().then(
        (res)=>{
          //@ts-ignore
            const returnElem = res.map(
              //@ts-ignore
              (data)=>(
                <div>{data} voted</div>
              )
            );
            setElem(returnElem);
          }).catch((err)=>{
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
        <div className='flex justify-evenly align-center w-full bg-blue-200 p-5 text-left text-sm mt-5'>
            <ul>
              <li>{elem}</li>
            </ul>
          </div> 
    </div>
  )
}

