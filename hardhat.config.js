//require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    mumbai:{
      url: 'https://polygon-mumbai.g.alchemy.com/v2/bAG-QJ6_gFrRSSBW3pyUCZHLVknDbpIr',
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};
