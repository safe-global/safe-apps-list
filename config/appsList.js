const ETHEREUM_NETWORK = {
  MAINNET: 1,
  MORDEN :2,
  ROPSTEN: 3,
  RINKEBY: 4,
  GOERLI: 5,
  KOVAN: 42,
  XDAI: 100,
  ENERGY_WEB_CHAIN: 246,
  VOLTA: 73799,
  UNKNOWN: 0,
  LOCAL: 4447,
}

const safeAppsConfig = [
  // 1inch
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/QmUXF1yVGdqUfMbhNyfM3jpP6Bw66cYnKPoWq6iHkhd3Aw`,
    networks: [ETHEREUM_NETWORK.MAINNET],
  },
  // Aave
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/QmQ3w2ezp2zx3u2LYQHyuNzMrLDJFjyL1rjAFTjNMcQ4cK`,
    networks: [ETHEREUM_NETWORK.MAINNET],
  },
  // Aave v2
  {
    url: `https://app.aave.com/`,
    networks: [ETHEREUM_NETWORK.MAINNET],
  },
  //Balancer Exchange
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/QmRb2VfPVYBrv6gi2zDywgVgTg3A19ZCRMqwL13Ez5f5AS`,
    networks: [ETHEREUM_NETWORK.MAINNET],
  },
  // Balancer Pool
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/QmVaxypk2FTyfcTS9oZKxmpQziPUTu2VRhhW7sso1mGysf`,
    networks: [ETHEREUM_NETWORK.MAINNET],
  },
  // CMM
  // Point to a static server to allow app update without Safe deployment
  {
    url: `https://safe-cmm.gnosis.io`,
    networks: [ETHEREUM_NETWORK.RINKEBY, ETHEREUM_NETWORK.XDAI],
  },
  // Compound
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/QmX31xCdhFDmJzoVG33Y6kJtJ5Ujw8r5EJJBrsp8Fbjm7k`,
    networks: [ETHEREUM_NETWORK.MAINNET, ETHEREUM_NETWORK.RINKEBY],
  },
  // dHedge
  {
    url: `https://app.dhedge.org/`,
    networks: [ETHEREUM_NETWORK.MAINNET],
  },
  // ENS
  {
    url: `https://app.ens.domains/`,
    networks: [ETHEREUM_NETWORK.MAINNET, ETHEREUM_NETWORK.RINKEBY],
  },
  // Gnosis Auction Starter
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/QmdCwUutYH8GXXNgTShB4cKJ8YJq4PqZ55QxMznKc9DbeS`,
    networks: [ETHEREUM_NETWORK.MAINNET, ETHEREUM_NETWORK.RINKEBY],
  },
  // Idle
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/QmTvrLwJtyjG8QFHgvqdPhcV5DBMQ7oZceSU4uvPw9vQaj`,
    networks: [ETHEREUM_NETWORK.MAINNET, ETHEREUM_NETWORK.RINKEBY],
  },
  // Lido finance
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/Qmde8dsa9r8bB59CNGww6LRiaZABuKaJfuzvu94hFkatJC`,
    networks: [ETHEREUM_NETWORK.MAINNET],
  },
  // Liquity
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/QmYzTAH6Nzexu35tbWmhVrLYwWj9MdbD1iECejgaGHFk8P`,
    disabled: false,
    networks: [ETHEREUM_NETWORK.MAINNET, ETHEREUM_NETWORK.RINKEBY],
  },
  // Mushrooms finance
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/QmT96aES2YA9BssByc6DVizQDkofmKRErs8gJyqWipjyS8`,
    networks: [ETHEREUM_NETWORK.MAINNET],
  },
  // Pooltogether
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/QmTa21pi77hiT1sLCGy5BeVwcyzExUSp2z7byxZukye8hr`,
    networks: [ETHEREUM_NETWORK.MAINNET, ETHEREUM_NETWORK.RINKEBY],
  },
  // Request
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/QmTBBaiDQyGa17DJ7DdviyHbc51fTVgf6Z5PW5w2YUTkgR`,
    networks: [ETHEREUM_NETWORK.MAINNET],
  },
  // Sablier
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/Qmb1Xpfu9mnX4A3trpoVeBZ9sTiNtEuRoFKEiaVXWntDxB`,
    networks: [ETHEREUM_NETWORK.MAINNET, ETHEREUM_NETWORK.RINKEBY],
  },
  // Synthetix
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/QmXLxxczMH4MBEYDeeN9zoiHDzVkeBmB5rBjA3UniPEFcA`,
    networks: [ETHEREUM_NETWORK.MAINNET, ETHEREUM_NETWORK.RINKEBY],
  },
  // OpenZeppelin
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/QmQovvfYYMUXjZfNbysQDUEXR8nr55iJRwcYgJQGJR7KEA`,
    networks: [
      ETHEREUM_NETWORK.MAINNET,
      ETHEREUM_NETWORK.RINKEBY,
      //ETHEREUM_NETWORK.ENERGY_WEB_CHAIN,
      //ETHEREUM_NETWORK.VOLTA,
      // ETHEREUM_NETWORK.XDAI,
    ],
  },
  // TX-Builder
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/QmZBgEvjqi9Jg8xATr9uUgNUVmnfYiECNxZv9Taux7mzgV`,
    networks: [
      ETHEREUM_NETWORK.MAINNET,
      ETHEREUM_NETWORK.RINKEBY,
      ETHEREUM_NETWORK.ENERGY_WEB_CHAIN,
      ETHEREUM_NETWORK.VOLTA,
      ETHEREUM_NETWORK.XDAI,
    ],
  },
  // Wallet-Connect
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/QmX9B982ZAaBzbm6yBoZUS3uLgcizYA6wW65RCXVRZkG6f`,
    networks: [
      ETHEREUM_NETWORK.MAINNET,
      ETHEREUM_NETWORK.RINKEBY,
      ETHEREUM_NETWORK.ENERGY_WEB_CHAIN,
      ETHEREUM_NETWORK.VOLTA,
      ETHEREUM_NETWORK.XDAI,
    ],
  },
  // Yearn Vaults
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/Qme9HuPPhgCtgfj1CktvaDKhTesMueGCV2Kui1Sqna3Xs9`,
    networks: [ETHEREUM_NETWORK.MAINNET],
  },
]

module.exports = safeAppsConfig