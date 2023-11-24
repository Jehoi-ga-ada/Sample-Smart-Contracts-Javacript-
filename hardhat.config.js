require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config()
require("hardhat-gas-reporter")
require("./tasks/block-numbers")
require("solidity-coverage")
const COINMARKET = process.env.COINMARKET
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337
    }
  },
  solidity: "0.8.19",
  gasReporter:{
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKET,
    token: "SOL"
  }
};
