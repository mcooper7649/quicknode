import React, { useState, useEffect } from 'react';
const axios = require('axios').default;

const Dashboard = () => {
  const handleChange = (e) => {
    setAccountNumber(e.target.value);
  };

  const [accountNumber, setAccountNumber] = useState(
    '0xb07626bc2ff18d680ec886c3109e9bf6ee05e6b7'
  );
  const [balance, setBalance] = useState(0);

  const [block, setBlock] = useState(1567000);

  const [network, setNetwork] = useState({
    endpoint: 'https://api.etherscan.io/api',
    name: 'Mainnet',
  });

  const query = `${network.endpoint}/?module=account&action=balance&address=${accountNumber}&startblock=0
  &endblock=${block}&apikey=${process.env.REACT_APP_ETHERSCAN_API_KEY}`;

  useEffect(() => {
    async function fetchData() {
      const latestBlock = await axios.get(
        'https://api.blockcypher.com/v1/eth/main'
      );
      setBlock(latestBlock.data.height);

      // You can await here
      const response = await axios.get(query);
      // ...
      console.log(response);

      setBalance(response.data.result);
    }
    fetchData();
  }, [network]); // Or [] if effect doesn't need props or state

  return (
    <>
      <div className="color-red">
        <h1 className="account">Account Information</h1>
        <h2>Network:{network.name}</h2>
        <h3>Account: {accountNumber}</h3>
        <h3>Balance in Eth: {balance / 1000000000000000000}</h3>
        <h4>Block Queried: {block}</h4>
      </div>
      <div>
        <button
          onClick={() => {
            setNetwork({
              endpoint: 'https://api.etherscan.io/api',
              name: 'Mainnet',
            });
          }}
        >
          Switch to Mainnet
        </button>
        <button
          onClick={() => {
            setNetwork({
              endpoint: 'https://api-rinkeby.etherscan.io/api',
              name: 'Rinkeby',
            });
          }}
        >
          Switch to Rinkeby
        </button>
        <button
          onClick={() => {
            setNetwork({
              endpoint: 'https://api-ropsten.etherscan.io/api',
              name: 'Ropsten',
            });
          }}
        >
          Switch to Ropsten
        </button>
      </div>
      <div>
        <h3>Enter Another Account:</h3>
        <input type="text" onChange={handleChange} />
      </div>
    </>
  );
};

export default Dashboard;
