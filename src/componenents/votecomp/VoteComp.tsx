import TransactionComp from '../transactcomp/TransactionComp';

function VoteComp({ name, img }: { name: string, img: string }) {

    return (
        <div className=' flex flex-col justify-center items-center bg-blue-500 p-10 rounded-xl'>
            <h2 className=' text-xl text-white'>{name}</h2>
            <img src={img} alt={`image of ${name}`} className='w-44 mt-5 mb-5 rounded-lg' />
            <TransactionComp />
        </div>
    )
}

export default VoteComp