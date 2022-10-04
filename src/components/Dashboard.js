import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const axios = require('axios').default;

const Dashboard = () => {
  const handleChange = (e) => {
    setAccountNumber(e.target.value);
  };

  const [accountNumber, setAccountNumber] = useState(
    '0xb07626bc2ff18d680ec886c3109e9bf6ee05e6b7'
  );
  const [balance, setBalance] = useState(0);

  const [block, setBlock] = useState(15676559);

  const [network, setNetwork] = useState({
    endpoint: 'https://api.etherscan.io/api',
    name: 'Mainnet',
  });

  const query = `${network.endpoint}/?module=account&action=balance&address=${accountNumber}&startblock=0
  &endblock=${block}&apikey=${process.env.REACT_APP_ETHERSCAN_API_KEY}`;

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(query);
      // ...
      console.log(response);

      setBalance(response.data.result);

      const latestBlock = await axios.get(
        'https://api.blockcypher.com/v1/eth/main'
      );
      setBlock(latestBlock.data.height);

      // You can await here
    }
    fetchData();
  }, [network, balance]); // Or [] if effect doesn't need props or state

  return (
    <>
      <div
        style={{
          paddingTop: '3rem',
        }}
      >
        <Card>
          <Card.Header
            className="account"
            style={{ fontSize: '24px', backgroundColor: 'DodgerBlue' }}
          >
            Account Information
          </Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Network: {network.name}</ListGroup.Item>

            <ListGroup.Item>Account: {accountNumber}</ListGroup.Item>
            <ListGroup.Item>
              {' '}
              Balance in Eth: {balance / 1000000000000000000}
            </ListGroup.Item>
            <ListGroup.Item>Block Queried: {block}</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>

      <div
        className=""
        style={{
          paddingTop: '8rem',
        }}
      >
        <Button
          onClick={() => {
            setNetwork({
              endpoint: 'https://api.etherscan.io/api',
              name: 'Mainnet',
            });
          }}
        >
          Switch to Mainnet
        </Button>{' '}
        <Button
          variant="secondary"
          onClick={() => {
            setNetwork({
              endpoint: 'https://api-rinkeby.etherscan.io/api',
              name: 'Rinkeby',
            });
          }}
        >
          Switch to Rinkeby
        </Button>{' '}
        <Button
          variant="info"
          onClick={() => {
            setNetwork({
              endpoint: 'https://api-ropsten.etherscan.io/api',
              name: 'Ropsten',
            });
          }}
        >
          Switch to Ropsten
        </Button>{' '}
      </div>

      <div
        style={{
          paddingTop: '4rem',
        }}
      >
        <h3>Enter Another Account:</h3>
        <input
          type="text"
          placeholder=" Paste Address"
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default Dashboard;
