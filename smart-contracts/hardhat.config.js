//https://eth-goerli.g.alchemy.com/v2/B-3yptzYVsEw0y9SinxPdjjvckL4pxhG

require("@nomicfoundation/hardhat-toolbox");

// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "B-3yptzYVsEw0y9SinxPdjjvckL4pxhG";

// Replace this private key with your Goerli account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const GOERLI_PRIVATE_KEY = "ab5c6b2bce15423e45188f66b485fcadcc4df975fb82379637e2c355d460a4b4";

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
};

// Deployed To Goerli: 0xe03C3dD39Cf6E9b7A351047dE6dE9b2027988ab1