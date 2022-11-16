import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../utils/constants';

export const TransactionContext = React.createContext();

const { ethereum } = window;

const createEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

    console.log({
        provider,
        signer,
        transactionsContract
    });
        
    return transactionsContract;
};

export const TransactionProvider = ({ children }) => {
    return (<TransactionContext.Provider value={{}}>
        {children}
    </TransactionContext.Provider>
    );
}
