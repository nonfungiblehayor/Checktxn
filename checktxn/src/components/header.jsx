import React from "react";
import style from '../App.module.scss'
import logo from '../images/logo.webp'
import { ethers } from 'ethers';
import Web3Modal from 'web3modal';
import  CoinbaseWalletSDK from '@coinbase/wallet-sdk';


function Header() {

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
            web3Modal.clearCachedProvider();
            const modalConnector = await web3Modal.connect();
            const modalConnectorIns = new ethers.InfuraProvider.Web3Provider(modalConnector);
            console.log(modalConnectorIns)
        } catch(error) {
            console.error('error')
        }
    }
    return <header className={style.header}>
        <div className={style.headerDiv1}>
            <a href='/'>
                <img src={logo} alt='logo img' className={style.logoImg}></img>
            </a>
            <span className={style.logoName}>Checktxn</span>
        </div>
        <div className={style.headerDiv2}>
            <a href='/'>Home</a>
            <a href='/'>Verify txn</a>
            <a href='About'>About</a>
        </div>
        <div className={style.headerDiv3}>
            <button className={style.btnStyle} onClick={connectWallet}>Connect your wallet</button>
        </div>
    </header>
}
export default Header 