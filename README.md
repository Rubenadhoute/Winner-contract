## AttempWinnerCaller

The goal of this project is to Emit the winner event on this Alchemy smart contract on the Goerli testnet: 

https://goerli.etherscan.io/address/0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502#code 

If you take a look at the code tab, you'll see that the source code for this contract looks like this:


```
// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract Contract {
    event Winner(address);

    function attempt() external {
        require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
        emit Winner(msg.sender);
    }
}
```

### Key Learnings

- Contract deployment via Hardhat

- Contract interaction

- Difference between msg.sender and tx.origin. 


### Step to reproduce

1. Install dependencies:
```
npm i -D hardhat -- yes to all
npm i dotenv
```

2. Deploy your contract in Goerli Testnet:
```
npx hardhat run scripts/deploy.js --network goerli
```

3. Replace the variable CONTRACT_ADDRESS in the script triggerWinner.js with your deployed contract address and run:
```
npx hardhat run scripts/triggerWinner.js --network goerli
```

4. DONE -- You should see an event emitted on the Alchemy smart contract address above.




#### This is also the solution for the Telephone challenge on [Ethernaut] (https://ethernaut.openzeppelin.com/level/0x1ca9f1c518ec5681C2B7F97c7385C0164c3A22Fe)
