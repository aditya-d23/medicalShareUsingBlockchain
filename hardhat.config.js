require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.17",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  networks: {
    localganache: {
      url: "http://127.0.0.1:8545",
      accounts: ["0x14334cc480173455ebe467c88d2f80efabcfbcd3c219399ee65b356b35fa4d81"],
    },
  },
};
