require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    arbsep: {
      url: "https://arb-sepolia.g.alchemy.com/v2/4V6lGve1lnnwKh3kqwtCyP-SF3dSO9Ft",
      accounts: ["e476aa1d163ab7611a6ff2d2f39f8f85bcbd4be172de9331c70217a07f49e645"],
    }
  },
  etherscan: {
    apiKey: {
      arbsep: "IYXVRE9VIBNGF5QWYEIBAV7D3M1SZ67DJ2"
    },
    customChains: [
      {
        network: "arbsep",
        chainId: 421614,
        urls: {
          apiURL: "https://api-sepolia.arbiscan.io/api",
          browserURL: "https://sepolia.arbiscan.io/"
        }
      }
    ]
  }
};
