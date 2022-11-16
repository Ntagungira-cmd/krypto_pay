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
    const [currentAccount, setCurrentAccount] = useState("");

    const checkIfWalletIsConnected = async () => {
        try {
            
            if (!ethereum) return alert("Please install MetaMask.");
                const accounts = await ethereum.request({ method: "eth_accounts" });
                
            if (accounts.length) {
                setCurrentAccount(accounts[0]);
            }else{
                console.log("No accounts found");
            }
                
        } catch (error) {
            console.log(error);
        }
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install MetaMask first.");

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            setCurrentAccount(accounts[0]);

        } catch (error) { 
            console.log(error);
            throw new Error("No Ethereum Object");
        }
    }

    useEffect(() => { 
        checkIfWalletIsConnected();
    }, []);

    return (<TransactionContext.Provider value={{connectWallet}}>
        {children}
    </TransactionContext.Provider>
    );
}
