# AttempWinnerCaller

The goal of this project is to Emit the winner event on this smart contract on the Goerli testnet: https://goerli.etherscan.io/address/0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502#code 



## Setup

1. Install dependencies

```bash
npm install
```

2. Copy `.env.example` to `.env` and fill it with your Alchemy API key. You can get one for free at [alchemy.com](https://www.alchemy.com/). And fill it with your Private Key.

3. Run this command to deploy :

```shell
npx hardhat run scripts/deploy.ts --network goerli
```

4. Install cast for free at [getfoundry.sh](https://book.getfoundry.sh/getting-started/installation) and then run this command to call the function :

```shell
cast send --private-key PRIVATE_KEY ADDRESS_OF_DEPLOYED_CONTRACT "callAttempt(address)" "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502" --rpc-url URL_ALCHEMY_GOERLI
```
