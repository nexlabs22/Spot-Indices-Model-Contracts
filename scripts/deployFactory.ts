import { goerliAnfiIndexToken, goerliCrypto5IndexToken, goerliUsdtAddress, goerliAnfiNFT, goerliLinkAddress, goerliOracleAdress, goerliExternalJobIdBytes32, polygonCrypto5IndexToken, polygonUsdtAddress, polygonCR5NFT, polygonLinkAddress } from '../network';

// import { ethers, upgrades } from "hardhat";
const { ethers, upgrades, network, hre } = require('hardhat');

async function deployFactory() {
  
  const [deployer] = await ethers.getSigners();

  const IndexFactory = await ethers.getContractFactory("IndexFactory");
  console.log('Deploying IndexFactory...');

  const indexFactory = await upgrades.deployProxy(IndexFactory, [
      deployer.address, //custodian wallet
      deployer.address, //issuer wallet
      polygonCrypto5IndexToken as string,
      polygonUsdtAddress as string,
      '18',
      polygonCR5NFT,
      polygonLinkAddress, //link token address
      goerliOracleAdress, //oracle address
      goerliExternalJobIdBytes32 // jobId
  ], { initializer: 'initialize' });


  await indexFactory.waitForDeployment()

  console.log(
    `IndexFactory deployed: ${ await indexFactory.getAddress()}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
deployFactory().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
