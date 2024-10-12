import React, { useState, ChangeEvent } from 'react'
import { useAccount } from 'wagmi'
import EventTransact from '../transactcomp/EventTransact';
import { Avatar } from '@coinbase/onchainkit/identity';
import { useAppContext } from '../../../AppProvider';


function Dashboard() {

    const {formData, setFormData, showModal, setShowModal, handleSubmit, submittedData} = useAppContext();

    // Handle input changes with proper typing
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    

    const account = useAccount()

    return (
        <>
            <div>
                {
                    account.status === 'connected' ? (
                        <div className='flex justify-center items-center flex-col shadow-2xl rounded-md p-4 mt-28'>
                            <Avatar className='h-24 w-24' address={account.address} />
                            <p className='text-lg font-bold'>
                                {account.address}
                            </p>
                            <p className='font-bold'>{account.status}</p>
                        </div>
                    ) : null
                }

                <button onClick={() => setShowModal(true)} className=' absolute bottom-20 right-5'>
                    create an event
                </button>

                {showModal && (
                    <div className="flex fixed z-[1] left-0 top-0 justify-center items-center w-full h-full bg-[rgba(0,0,0,0.5)]">
                        <div className="bg-white p-8 rounded-md w-96 mt-28">
                            <span className="close" onClick={() => setShowModal(false)}>
                                &times;
                            </span>
                            <div>
                                <div>
                                    <label className='text-xl font-bold'>Name of event</label>
                                    <input
                                        className='p-2 mt-2 mb-2 mr-2 border rounded-xl border-blue-500 outline-none text-center'
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder='Title of event'
                                    />
                                </div>
                                <p className='mt-4 text-lg font-bold'>Heroes Section</p>
                                <div>
                                    <label>Cadidate 1</label>
                                    <input
                                        type="text"
                                        name="name1"
                                        value={formData.name1}
                                        onChange={handleInputChange}
                                        placeholder='Name of candidate'
                                        className='p-2 mt-2 mb-2 mr-2 border rounded-xl border-blue-500 outline-none text-center'
                                    />
                                </div>
                                <div>
                                    <label>Cadidate</label>
                                    <input
                                        type="text"
                                        name="name2"
                                        value={formData.name2}
                                        onChange={handleInputChange}
                                        placeholder='Name of candidate'
                                        className='p-2 mt-2 mb-2 mr-2 border rounded-xl border-blue-500 outline-none text-center'
                                    />
                                </div>
                                <div>
                                    <label>Cadidate 3</label>
                                    <input
                                        type="text"
                                        name="name3"
                                        value={formData.name3}
                                        onChange={handleInputChange}
                                        required
                                        placeholder='Name of candidate'
                                        className='p-2 mt-2 mb-2 mr-2 border rounded-xl border-blue-500 outline-none text-center'
                                    />
                                </div>
                                <div>
                                    <label>Cadidate 4</label>
                                    <input
                                        type="text"
                                        name="name4"
                                        value={formData.name4}
                                        onChange={handleInputChange}
                                        required
                                        placeholder='Name of candidate'
                                        className='p-2 mt-2 mb-2 mr-2 border rounded-xl border-blue-500 outline-none text-center'
                                    />
                                </div>
                                {/* <div>
                                    <label>Message:</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div> */}
                                <EventTransact />
                            </div>
                        </div>
                    </div>
                )}

                {/* Display the submitted data */}
                {submittedData && (
                    <div className='flex justify-center items-center flex-col shadow-2xl rounded-md p-4 mt-20'>
                        <h3>Event Information</h3>
                        <p className='text-xl'>Event: {submittedData.name}</p>
                        <p>Candidate 1: {submittedData.name1}</p>
                        <p>Candidate 2: {submittedData.name2}</p>
                        <p>Candidate 3: {submittedData.name3}</p>
                        <p>Candidate 4: {submittedData.name4}</p>
                    </div>
                )}

                {/* Styling for the modal */}
                <style>{`
        .close {
          cursor: pointer;
          float: right;
        }
      `}</style>
            </div>
        </>
    )
}

export default Dashboard