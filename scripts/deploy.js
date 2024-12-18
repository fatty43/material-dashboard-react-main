// const hre = require("hardhat");

// async function main() {
//   const UserRegistration = await hre.ethers.getContractFactory("UserRegistration");
//   const userRegistration = await UserRegistration.deploy();
//   await userRegistration.deployed();

//   console.log("Contract deployed to:", userRegistration.address);
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });
async function main() {
  const [deployer] = await ethers.getSigners(); // Access deployer account

  console.log("Deploying contracts with the account:", deployer.address);

  const UserRegistration = await ethers.getContractFactory("UserRegistration"); // Fetch contract
  const userRegistration = await UserRegistration.deploy(); // Deploy contract

  console.log("UserRegistration deployed to:", userRegistration.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
