// https://eth-mainnet.g.alchemy.com/v2/9BO-6vlsuL_hC3LiEM-kROp8W6l3KUxR

require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-mainnet.g.alchemy.com/v2/9BO-6vlsuL_hC3LiEM-kROp8W6l3KUxR",
      account: ["d1b08f844c8229f8220f227e7d49706ab00c5bf271c2dd278979d9c765d82072"],
    },
  },
};
