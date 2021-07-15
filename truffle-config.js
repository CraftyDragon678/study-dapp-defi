const path = require("path");
const HDWalletProvider = require("@truffle/hdwallet-provider");

const INFURA_KEY = "db7e045a789c4b3394c469d11cd2dffb";
const privateKeys = [];

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
  rinkeby: {
    
  },
  networks: {
    develop: { // default with truffle unbox is 7545, but we can use develop to test changes, ex. truffle migrate --network develop
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    }
  }
};
