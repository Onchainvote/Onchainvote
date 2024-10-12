import React, { createContext, useContext, useState, ReactNode,  useCallback } from 'react';
import type { LifecycleStatus } from '@coinbase/onchainkit/transaction';

// Step 1: Define the types for the context
interface AppContextInterface {
    name: string;
    setName: (name: string) => void;
    showModal: boolean;
    setShowModal: (showModal: boolean) => void;
    formData: FormData;
    setFormData: (formData: FormData) => void;
    handleSubmit: any;
    submittedData: FormData | null;
    setSubmittedData: (submittedData: FormData | null) => void;
    handleOnStatus: any
}

// Step 2: Create the context with default values
const AppContext = createContext<AppContextInterface | undefined>(undefined);

interface FormData {
    name: string;
    name1: string;
    name2: string;
    name3: string;
    name4: string;
}

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [name, setName] = useState<string>('Default Name');

    const [showModal, setShowModal] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        name: "",
        name1: "",
        name2: "",
        name3: "",
        name4: ""
    });
    const [submittedData, setSubmittedData] = useState<FormData | null>(null);

    const handleSubmit = () => {
        setSubmittedData(formData);
        setShowModal(false);
    };

    const handleOnStatus = useCallback((status: LifecycleStatus) => {
        console.log('LifecycleStatus', status);
        return status.statusData
    }, []);

    return (
        <AppContext.Provider value={{ name, setName, showModal, setShowModal, formData, setFormData, handleSubmit, submittedData, setSubmittedData, handleOnStatus  }}>
            {children}
        </AppContext.Provider>
    );
};

// Step 4: Create a custom hook to use the context
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};

export default AppProvider