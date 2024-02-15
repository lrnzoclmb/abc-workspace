const hre = require("hardhat");

async function main() {
  const miguCoin = await hre.ethers.deployContract("MiguCoin");
  await miguCoin.waitForDeployment();
  console.log(
    `Deployed to ${miguCoin.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
