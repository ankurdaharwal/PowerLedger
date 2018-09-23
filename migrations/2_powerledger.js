/*****************************************
    PowerLedger New Request Voting Test
    ===================================
    Module  : 2_powerledger.js
    Authors : Ankur Daharwal
    Version : 1.0
    License : Apache 2.0
    Date    : 23/09/2018
******************************************/

var SafeMath = artifacts.require("./SafeMath.sol");
var PowerLedger = artifacts.require("./PowerLedger.sol");
var NewRequestVoting = artifacts.require("./NewRequestVoting.sol");
var web3 = require("web3");

module.exports = function (deployer) {

    // Deploy SafeMath Library
    deployer.deploy(SafeMath);

    // Link SafeMath library to Contracts
    deployer.link(SafeMath, NewRequestVoting);

    // Deploy PowerLedger Token Contract
    deployer.deploy(PowerLedger).then(function (powerLedger) {

        // console.log("PowerLedger Token Contract Address: ", powerLedger.address);

        // Deploy New Functionality Request Voting Smart Contract
        deployer.deploy(NewRequestVoting, powerLedger.address).then(function (newRequestVoting) {

            // console.log("New Request Voting Smart Contract Address: ", newRequestVoting.address);

        }).catch((ex) => { console.log(ex); });

    }).catch((ex) => { console.log(ex); });

};