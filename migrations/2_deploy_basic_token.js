const zkYFinance = artifacts.require("zkYFinance");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(zkYFinance);
};