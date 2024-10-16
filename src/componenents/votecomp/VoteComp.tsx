
function VoteComp({ name, img, party }: { name: string, img: string ,party: string }) {

   
    return (
        // <div className=' flex flex-col justify-center items-center bg-blue-500 p-10 rounded-xl'>
        //     <h2 className=' text-xl text-white'>{name}</h2>
        //     <img src={img} alt={`image of ${name}`} className='w-44 mt-5 mb-5 rounded-lg' />
        //     <TransactionComp />
        // </div>

        <div className="overflow-hidden border rounded-lg shadow-lg">
            {/* Image Section */}
            <div className="relative">
                <img src={img} 
                    alt="{`image of ${name}`}"
                    className="object-cover w-full h-48 transition-transform duration-300 ease-in-out transform rounded-t-lg hover:scale-105" 
                />
                
            </div>
           
         {/* Candidate's Name */}
            <div className='p-4'>
                 <h2 className="mb-2 text-xl font-bold">{name}</h2>
                <p className="mb-2 text-xl font-bold">{party}</p>
            </div>
            <div className="flex w-full items-center justify-between">
        
            </div>
        </div>
    )
}

export default VoteComp