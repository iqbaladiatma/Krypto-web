// https://eth-mainnet.g.alchemy.com/v2/9BO-6vlsuL_hC3LiEM-kROp8W6l3KUxR

require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-mainnet.g.alchemy.com/v2/9BO-6vlsuL_hC3LiEM-kROp8W6l3KUxR",
      account: ["019280"],
    },
  },
};
