/*****************************************
    PowerLedger New Request Voting Test
    ===================================
    Module  : truffle.js
    Authors : Ankur Daharwal
    Version : 1.0
    License : Apache 2.0
    Date    : 23/09/2018
******************************************/

module.exports = {
  networks: {
    // ropsten: {
    //   provider: function () {
    //     return new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/Rd1lLWZMkAgTUjVr6gbB')
    //   },
    //   network_id: '3',
    //   gas: 4500000,
    //   gasPrice: 10000000000,
    // },
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*'
    }
  }
};
