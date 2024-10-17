import type { LifecycleStatus } from '@coinbase/onchainkit/transaction';
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from 'react';
import { contracts } from './contracts';
import { useAccount } from 'wagmi';
import {
    Transaction,
    TransactionButton,
    TransactionSponsor,
    TransactionStatus,
    TransactionStatusAction,
    TransactionStatusLabel,
} from '@coinbase/onchainkit/transaction';

function TransactionComp() {

    const [voteCount, setVoteCount] = useState(0);
    const navigate = useNavigate()
    const { address } = useAccount();

    const handleVote = () => {
        setVoteCount(voteCount + 1);
        alert("Thank you for voting")
        navigate("/")
    }

    const handleOnStatus = useCallback((status: LifecycleStatus) => {
        console.log('LifecycleStatus', status);
        return status.statusData
    }, []);

    return address ? (
        <Transaction
            chainId={84532}
            contracts={contracts}
            onStatus={handleOnStatus}
            onSuccess={handleVote}
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