const ETHEREUM_NETWORK = {
  MAINNET: 1,
  MORDEN: 2,
  ROPSTEN: 3,
  RINKEBY: 4,
  GOERLI: 5,
  KOVAN: 42,
  BSC: 56,
  XDAI: 100,
  POLYGON: 137,
  ARBITRUM: 42161,
  ENERGY_WEB_CHAIN: 246,
  VOLTA: 73799,
  UNKNOWN: 0,
  LOCAL: 4447,
}

const safeAppsConfig = [
  // 1inch
  {
    url: `https://app.1inch.io/`,
    networks: [
      ETHEREUM_NETWORK.MAINNET,
      ETHEREUM_NETWORK.BSC,
      ETHEREUM_NETWORK.POLYGON,
    ],
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
  // Balancer
  {
    url: `https://app.balancer.fi/`,
    networks: [
      ETHEREUM_NETWORK.MAINNET,
      ETHEREUM_NETWORK.POLYGON,
      ETHEREUM_NETWORK.ARBITRUM
    ],
  },
  // Compound
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/QmX31xCdhFDmJzoVG33Y6kJtJ5Ujw8r5EJJBrsp8Fbjm7k`,
    networks: [ETHEREUM_NETWORK.MAINNET, ETHEREUM_NETWORK.RINKEBY],
  },
  // CSV Airdrop
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/QmdFyTuzHnzj6Z1pRRLqjWXEbH56TBNKo3M1an21zKWCXt`,
    networks: [ETHEREUM_NETWORK.MAINNET, ETHEREUM_NETWORK.RINKEBY, ETHEREUM_NETWORK.XDAI],
  },
  // Curve
  {
    url: `https://curve.fi`,
    networks: [ETHEREUM_NETWORK.MAINNET, ETHEREUM_NETWORK.POLYGON],
  },
  // DeFi Saver
  {
    url: `https://app.defisaver.com/`,
    networks: [ETHEREUM_NETWORK.MAINNET],
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
  // Furucombo
  {
    url: `https://furucombo.app/`,
    networks: [ETHEREUM_NETWORK.MAINNET],
  },
  // Gnosis Auction Starter
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/QmdCwUutYH8GXXNgTShB4cKJ8YJq4PqZ55QxMznKc9DbeS`,
    networks: [ETHEREUM_NETWORK.MAINNET, ETHEREUM_NETWORK.RINKEBY],
  },
  // Gnosis CMM
  // Point to a static server to allow app update without Safe deployment
  {
    url: `https://safe-cmm.gnosis.io`,
    networks: [ETHEREUM_NETWORK.RINKEBY, ETHEREUM_NETWORK.XDAI],
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
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/QmWZDNujzAHeALnzAvmT975TejAmwWmYTpVqgZrexBAVrt`,
    disabled: false,
    networks: [ETHEREUM_NETWORK.MAINNET, ETHEREUM_NETWORK.RINKEBY],
  },
  // mStable
  {
    url: `https://mstable.app/`,
    networks: [ETHEREUM_NETWORK.MAINNET],
  },
  // Mushrooms finance
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/QmT96aES2YA9BssByc6DVizQDkofmKRErs8gJyqWipjyS8`,
    networks: [ETHEREUM_NETWORK.MAINNET],
  },
  // Paraswap
  {
    url: `https://paraswap.io`,
    networks: [
      ETHEREUM_NETWORK.MAINNET,
      ETHEREUM_NETWORK.POLYGON,
      ETHEREUM_NETWORK.BSC,
    ],
  },
  // Pooltogether
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/QmTa21pi77hiT1sLCGy5BeVwcyzExUSp2z7byxZukye8hr`,
    networks: [ETHEREUM_NETWORK.MAINNET, ETHEREUM_NETWORK.RINKEBY],
  },
  // Reflexer
  {
    url: `https://app.reflexer.finance/`,
    networks: [ETHEREUM_NETWORK.MAINNET],
  },
  // Request
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/QmTBBaiDQyGa17DJ7DdviyHbc51fTVgf6Z5PW5w2YUTkgR`,
    networks: [ETHEREUM_NETWORK.MAINNET],
  },
  // Sablier
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/QmXU37CwCx4cJRnv1ArurzmiJDqwCGeKS9sTC6zR1BZkws`,
    networks: [ETHEREUM_NETWORK.MAINNET, ETHEREUM_NETWORK.RINKEBY],
  },
  // Stakewise
  {
    url: `https://stakewise.io`,
    networks: [ETHEREUM_NETWORK.MAINNET],
  },
  // Synthetix
  {
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/QmXLxxczMH4MBEYDeeN9zoiHDzVkeBmB5rBjA3UniPEFcA`,
    networks: [ETHEREUM_NETWORK.MAINNET, ETHEREUM_NETWORK.RINKEBY],
  },
  // Oasis
  {
    url: `https://oasis.app`,
    networks: [ETHEREUM_NETWORK.MAINNET],
  },
  // OmniBridge
  {
    url: `https://bridge.xdaichain.com/`,
    networks: [ETHEREUM_NETWORK.MAINNET, ETHEREUM_NETWORK.XDAI],
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
    url: `${process.env.REACT_APP_IPFS_GATEWAY}/QmTJMCBZHX56z36aTUaL2QZ3rKTkzaq1CG3zhPSKb1Su3a`,
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
  // Zerion
  {
    url: `https://app.zerion.io`,
    networks: [ETHEREUM_NETWORK.MAINNET],
  },
]

module.exports = safeAppsConfig
