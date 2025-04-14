import { JsonRpcProvider } from "ethers";


let CURRENT_BLOCK_NUMBER = 21695414

const provider = new JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/5PdkNmU-khw3HZ5uPlRZkVnD9SkG6Bo7");

async function indexer(){
    const interestedAddresses = ["0x12a730cf0E81892EE10f13a7da0Ef8A64762aa06", "0x5A991c21B6d3C7b3081C90D695a7E3D7204147F0", "0xB6F591136Bc2Bf535D77aAa2EFc15df718C401fa" ];

    const block = await provider.getBlock(CURRENT_BLOCK_NUMBER, true);
    console.log(block);
    

}

export default indexer();