// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require('hardhat');

const CONTRACT_ADDRESS = '0x53afEEf79dF4D7d1ffcC86471a16DA292bdBd366';

const Alchemy_contract = '0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502'

async function main() {
  const AttemptWinner = await hre.ethers.getContractAt(
    'AttemptWinnerCaller',
    CONTRACT_ADDRESS
  );

  const tx = await AttemptWinner.callAttempt(Alchemy_contract);
  await tx.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});