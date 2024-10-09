import { useCallback, useState } from 'react';
import { Avatar, Name } from '@coinbase/onchainkit/identity';
//import { MdHowToVote } from "react-icons/md";
import {
    Transaction,
    TransactionButton,
    TransactionSponsor,
    TransactionStatus,
    TransactionStatusAction,
    TransactionStatusLabel,
} from '@coinbase/onchainkit/transaction';
import type { LifecycleStatus } from '@coinbase/onchainkit/transaction';
import { Wallet, ConnectWallet } from '@coinbase/onchainkit/wallet';
import { useAccount } from 'wagmi'
import { contracts } from './contracts'

function TransactionComp() {

    const [voteCount, setVoteCount] = useState(0);

    const handleVote = () => {
        setVoteCount(voteCount + 1);
    }

    const { address } = useAccount();

    const handleOnStatus = useCallback((status: LifecycleStatus) => {
        console.log('LifecycleStatus', status);
        return status.statusData
    }, []);

    return address ? (
        <Transaction
            chainId={84532}
            contracts={contracts}
            onStatus={handleOnStatus}
        >
            <TransactionButton className='bg-blue-900 ' text='vote'  />
            <TransactionSponsor />
            <TransactionStatus>
                <TransactionStatusLabel />
                <TransactionStatusAction />
            </TransactionStatus>
        </Transaction>
    ) : (
        ''
            
        // <Wallet>
        //     <ConnectWallet>
        //         <Avatar className='h-6 w-6' />
        //         <Name />
        //     </ConnectWallet>
        // </Wallet>
        
    );
}

export default TransactionComp