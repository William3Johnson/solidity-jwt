module.exports = {
  networks: {
    local: {
      host: 'localhost',
      port: 9545,
      network_id: '*',
      gas: 5000000
    }
  },
  compilers: {
    solc: {
      version: "0.5.4",
      evmVersion: "constantinople"
    }
  }
}
