import React from "react";
import { ethers } from 'ethers';
import Web3Modal from 'web3modal'
import  CoinbaseWalletSDK from '@coinbase/wallet-sdk';

function About() {
    const walletProviderOpt = {
        coinbasewallet: {
            package: CoinbaseWalletSDK,
            Option: {
                appName: 'Checktxn',
                infuraID: {3: 'https://mainnet.infura.io/v3/d6a6042128c24bc0a130de47dffe857f'}
            }
        }
    }

    async function connectWallet() {
        try {
            let web3Modal = new Web3Modal( Option, {
                cacheProvider: false,
                walletProviderOpt,
            })
            const modalConnector = await web3Modal.connect();
            const modalConnectorIns = new ethers.InfuraProvider.Web3Provider(modalConnector);
            console.log(modalConnectorIns)
        } catch(error) {
            console.error('error')
        }
    }
    return <div>
         <button onClick={connectWallet}>Connect your wallet</button>
    </div>
}
export default About