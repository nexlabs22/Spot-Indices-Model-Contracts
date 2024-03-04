import { ethers } from "hardhat";
// import {
//     abi as Factory_ABI,
//     bytecode as Factory_BYTECODE,
//   } from '../artifacts/contracts/factory/IndexFactory.sol/IndexFactory.json'

import {
    abi as IndexToken_ABI,
    bytecode as IndexToken_BYTECODE,
  } from '../../artifacts/contracts/token/IndexToken.sol/IndexToken.json'
import {
    abi as NFT_ABI,
    bytecode as NFT_BYTECODE,
  } from '../../artifacts/contracts/token/RequestNFT.sol/RequestNFT.json'
import { IndexFactory } from "../../typechain-types";
// import { goerliAnfiFactoryAddress } from "../contractAddresses";
require("dotenv").config()

async function main() {
    // const signer = new ethers.Wallet(process.env.PRIVATE_KEY as string)
    const [deployer] = await ethers.getSigners();
    // const signer = await ethers.getSigner(wallet)
    // const provider = new ethers.JsonRpcProvider(process.env.GOERLI_RPC_URL)
    const provider = new ethers.JsonRpcProvider(process.env.POLYGON_RPC_URL)
    const tokenCotract:any = new ethers.Contract(
        polygonCR5IndexToken as string, //factory goerli
        IndexToken_ABI,
        provider
    )
    const nftCotract:any = new ethers.Contract(
        polygonCR5NFT as string, //factory goerli
        NFT_ABI,
        provider
    )
    // await wallet.connect(provider);
    // console.log("sending data...")

    console.log("setting minter...")
    const result1 = await cotract.connect(deployer).setMinter(
        sepoliaCR5IndexFactory
    )
    const receipt1 = await result1.wait();
    console.log('Ended')
    
}

main()