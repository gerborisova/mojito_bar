import React, { useEffect, useState } from "react";
import "./Profile.scss";
import { ethers } from "ethers";
import logo from "./assets/mojito.gif";
import confetti from "./assets/confetti.gif";
import {ABI,contractAddress} from './utils';

function Profile() {
  const [activeConfetti, setConfetti] = useState(false);
  const [limes, setLimes] = useState(null);
  const [mojitos, setMojitos] = useState(0);
  const [userBalance, setUserBalance] = useState(0);
  const [defaultAccount, setDefaultAccount] = useState(
    "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
  );
  const [limesValue, setLimesValue] = useState(null);

  const abi=ABI;
  const address = contractAddress;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(address, abi, signer);


  useEffect(() => {
    connectWallet();
  }, []);

  const connectWallet = () => {
    provider
      .send("eth_requestAccounts", [])
      .then((result) => accountChange(result[0]))
      .catch((err) => console.log(err));
  };

  const accountChange = (accountName) => {
    setDefaultAccount(accountName);
    getUserBalance(accountName);
    getTheseLimes();
  };

  const getUserBalance = (accountAddress) => {
    provider
      .getBalance(accountAddress)
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch((err) => console.log(err));
  };


  const getTheseLimes = async () => {
    try{
    const limes = await contract.getLimes();
    setLimes(limes);

  } catch(err){
console.log(err)
  }
  };

  const handleLimeTrade = (e) => {
    setLimesValue(e.target.value);
  };

  const buyLemons = async (e) => {
    e.preventDefault();
    const numberToBuy = Number(limes) + Number(limesValue);
    const lemonsUpdate = await contract.setLimes(numberToBuy.toString());
    await lemonsUpdate.wait();
    setLimes(limesValue);
    getTheseLimes();
    getUserBalance(defaultAccount);
  };

  const substractLemons = () => {
    let step = 10;
    const limesTotal = Number(limes) - step;
    setLimes(limesTotal.toString());
  };

  const makeMojito = (e) => {
    e.preventDefault();
    setMojitos(mojitos + 1);
    substractLemons();
    setConfetti(true);
    setTimeout(() => {
      setConfetti(false);
    }, "4000");
  };

  return (
    <div className="container">
      {activeConfetti ? (
        <img className="confetti" src={confetti} alt="confetti" />
      ) : 
null }
      <div className="image-wrap">
        <img className="profile-logo" src={logo} alt="logo" />
        <h1 className="app-title">The Mojito Bar</h1>
      </div>
      <div className="info-wrap">
        <div className="info-items">
          <div>🤑 {userBalance} </div>
          <div>🍋 {limes}</div>
          <div>🍹 {mojitos}</div>

          {Number(limes) >= 10 ? (
            <p>
              You have enough 🍋 to make a Mojito! You can go directly to the
              Mojito maker!
            </p>
          ) : (
            <p>
              You need 10 🍋 to make Mojito. Please buy {10 - Number(limes)}{" "}
              from the Lime Market ⬇️ and then blend.
            </p>
          )}
          <div className="utilities">
            <div className="lime-form">
              <p className="market-title"> 🏪 The Lime Market 💰 </p>
              <form onSubmit={buyLemons} className="form-items">
                <input onChange={handleLimeTrade} className="lime-input" />
                <input type="submit" name="Buy Limes" className="lime-submit" />
              </form>
            </div>
            <div className="lime-form mojito-blender">
              <p className="market-title ">🍸 Mojito Maker 🍸</p>
              <form className="form-items">
                <button
                  type="submit"
                  className="lime-submit mojito-blender"
                  onClick={(e) => makeMojito(e)}
                >
                  Make Mojito!
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
