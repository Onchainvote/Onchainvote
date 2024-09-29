import { useCallback } from 'react';
import { Avatar, Name } from '@coinbase/onchainkit/identity';
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

    const { address } = useAccount();

    const handleOnStatus = useCallback((status: LifecycleStatus) => {
        console.log('LifecycleStatus', status);
    }, []);

    return address ? (
        <Transaction
            chainId={84532}
            contracts={contracts}
            onStatus={handleOnStatus}
        >
            <TransactionButton />
            <TransactionSponsor />
            <TransactionStatus>
                <TransactionStatusLabel />
                <TransactionStatusAction />
            </TransactionStatus>
        </Transaction>
    ) : (
        <Wallet>
            <ConnectWallet>
                <Avatar className='h-6 w-6' />
                <Name />
            </ConnectWallet>
        </Wallet>
    );
}

export default TransactionComp