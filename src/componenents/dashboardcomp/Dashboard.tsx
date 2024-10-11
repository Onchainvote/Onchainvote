import React, { useState, ChangeEvent, FormEvent } from 'react'
import { useAccount } from 'wagmi'
import EventTransact from '../transactcomp/EventTransact';

interface FormData {
    name: string;
    email: string;
    message: string;
}

function Dashboard() {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [submittedData, setSubmittedData] = useState<FormData | null>(null);

    // Handle input changes with proper typing
    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmittedData(formData);
        setShowModal(false);
    };

    const account = useAccount()

    return (
        <>
            <div>
                <img src="" alt="wallet image" />
                <p>Address</p>

                <button onClick={() => setShowModal(true)} className=' absolute bottom-20 right-5'>
                    create an event
                </button>

                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={() => setShowModal(false)}>
                                &times;
                            </span>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label>Name:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label>Message:</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <EventTransact />
                            </form>
                        </div>
                    </div>
                )}

                {/* Display the submitted data */}
                {submittedData && (
                    <div>
                        <h3>Submitted Data</h3>
                        <p>Name: {submittedData.name}</p>
                        <p>Email: {submittedData.email}</p>
                        <p>Message: {submittedData.message}</p>
                    </div>
                )}

                {/* Styling for the modal */}
                <style>{`
        .modal {
          display: flex;
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          justify-content: center;
          align-items: center;
        }

        .modal-content {
          background-color: white;
          padding: 20px;
          border-radius: 5px;
          width: 400px;
        }

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