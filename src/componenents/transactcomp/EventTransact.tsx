import { useCallback, useState } from 'react';
import {
    Transaction,
    TransactionButton,
    TransactionSponsor,
    TransactionStatus,
    TransactionStatusAction,
    TransactionStatusLabel,
} from '@coinbase/onchainkit/transaction';
import type { LifecycleStatus } from '@coinbase/onchainkit/transaction';
import { useAccount } from 'wagmi'
import { contracts } from './eventcontract'
import { useAppContext } from '../../../AppProvider';


function EventTransact() {

    const { address } = useAccount();
    const { handleSubmit } = useAppContext();

    const handleOnStatus = useCallback((status: LifecycleStatus) => {
        console.log('LifecycleStatus', status);
        return status.statusData
    }, []);

    return address ? (
        <Transaction
            chainId={84532}
            contracts={contracts}
            onStatus={handleOnStatus}
            onSuccess={handleSubmit}
        >
            <TransactionButton className='bg-blue-900 ' text='create' />
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

export default EventTransact