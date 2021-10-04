require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remind evil journey kitchen orange swing'; 
let testAccounts = [
"0x3596f6225c6e5a7553fa7a897e858619f72918ab8ead42c272aa2dd63c21cf89",
"0x7a565addefadd27bd2a33306176ff456f515fe09c701b3f0dc804095779bd6fd",
"0xb1a73d813fea3af9e3e67f4b8e457fa302ecbd891af808077956703ffda895da",
"0x74d175d4f5373c3da9c4df0f1c4938508c2c96129fc513afae52348ddc81366f",
"0x30c75d40ab3062c7bb0782f978c1e83e3a794afef544a7d350125631de3abecc",
"0xa222d2d9ee38a8d4a68ecaba088e50c3d1859084511f659ce3fecadd87d40d92",
"0xe00c19ca294734d68d51da2d256dc215721541d9fcd2a35058a7de8c5d12d3bc",
"0xbd21aa653d6a50d14fdf105e8319f306b8183cb3ca2452ffc18d71d85887dd48",
"0x9d108805ce6e6cffa43c5c81c868bdfb9e77819fc956b68c713d3a4109e1eeb5",
"0xff5f61ce257b887a25c6e24763539b63874fa114c6169fcac78cd8a76b5ffaf8"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

