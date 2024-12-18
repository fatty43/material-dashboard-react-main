// require("@nomiclabs/hardhat-ethers");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.0",

//   paths: {
//     sources: "./src/contracts", // Tell Hardhat where your contracts are located
//     tests: "./test",

// },
// };

// require("@nomiclabs/hardhat-ethers"); // Import the Hardhat Ethers plugin

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.0", // Match this with your Solidity contract version

//

//   networks: {
//     localhost: {
//       url: "http://127.0.0.1:8545" // Hardhat Network local node
//     }
//   }
//   },

// };
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers"); // Add this line

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.0",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
  },
};
