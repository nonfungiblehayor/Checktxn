import React, { useState } from "react";
import style from '../App.module.scss'
import logo from '../images/logo.webp'
import { ethers } from 'ethers';
import Web3Modal from 'web3modal'
import  CoinbaseWalletSDK from '@coinbase/wallet-sdk';


function Header() {
    const providerOptions2 = {
        coinbasewallet: {
            package: CoinbaseWalletSDK,
            Option: {
                appName: 'Checktxn',
                infuraID: {3: 'https://mainnet.infura.io/v3/d6a6042128c24bc0a130de47dffe857f'}
            }
        },
    }
    const [user, userState] = useState(false);
    let [userAddress, userAddressState] = useState('');
    const altUserState = () => {
        userState(!user)
    }

    const altUserState2 = () => {
        userAddressState(userAddress)
    }

    async function connectWallet() {
        try {
            if(window.ethereum) {
                let web3Modal = new Web3Modal( Option, {
                    cacheProvider: false,
                    disableInjectedProvider: true,
                    providerOptions2,
                })
                const modalConnector = await web3Modal.connect();
                const modalConnectorIns = new ethers.providers.Web3Provider(modalConnector);
                const result = {...modalConnectorIns.provider};
                let userAddress2 = result.selectedAddress;
                const addrArray = userAddress2.split(" ");
                const eachStr = addrArray[0].slice(0, 21)
                userAddress = eachStr              
                altUserState2()
                altUserState()
            } else {
                alert('install a wallet')
            }
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
            {user ? <p className={style.userAddress}> {userAddress} </p> : 
             <button className={style.btnStyle} onClick={connectWallet}>Connect your wallet</button>            
            }
        </div>
    </header>
}
export default Header 