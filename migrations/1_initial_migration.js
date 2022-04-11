require("dotenv").config()
const Nippleverse = artifacts.require("Nippleverse")
const baseURI = process.env.BASE_URI

module.exports = function (deployer) {
  deployer.deploy(Nippleverse, baseURI)
}
