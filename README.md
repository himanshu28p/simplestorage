# SimpleStorage DApp

This project is a simple decentralized application (DApp) that interacts with a smart contract deployed on the Ethereum blockchain. The smart contract allows users to store, retrieve, and view an owner address.

## Project Structure

- `SimpleStorage.sol`: The Solidity smart contract that handles storing and retrieving data.
- `index.html`: The HTML file that creates the user interface.
- `app.js`: The JavaScript file that connects the frontend to the smart contract using Web3.js.

## Smart Contract

The `SimpleStorage` smart contract is written in Solidity. It has the following features:

- **Set Value**: Only the owner can set a new value.
- **Get Value**: Anyone can retrieve the stored value.
- **Get Owner**: Anyone can retrieve the contract owner's address.

### SimpleStorage.sol

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private storedData;
    address private owner;

    constructor() {
        owner = msg.sender;
    }

    // Function to set a value
    function set(uint256 x) public {
        require(msg.sender == owner, "Only owner can set the value");
        storedData = x;
    }

    // Function to get the stored value
    function get() public view returns (uint256) {
        return storedData;
    }

    // Function to get the contract owner
    function getOwner() public view returns (address) {
        return owner;
    }
}

Frontend Application
The frontend application is built using HTML and JavaScript, with the help of the Web3.js library to interact with the Ethereum blockchain.
create a app.js and idex.html file in folder and store it in local storage copy the code from the respective files and paste it there
How to Run
Prerequisites
Node.js
MetaMask extension for your browser
Steps
Clone the Repository:

Copy code
git clone https://github.com/yourusername/SimpleStorageApp.git
cd SimpleStorageApp
Open the Project in VS Code:

Copy code
c
Deploy the Smart Contract:

Use Remix IDE or another tool to compile and deploy the SimpleStorage.sol contract.
Copy the deployed contract address and paste it into the contractAddress variable in app.js.
Serve the Application:

Install the Live Server extension in VS Code.
Right-click on index.html and select "Open with Live Server".
Interact with the Application:

Ensure MetaMask is connected to the correct network.
Use the UI to set and get values and to view the contract owner.
