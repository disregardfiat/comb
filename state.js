const config = require('./config');
module.exports = {
  balances: {
    [config.leader]: 0,
    "ragnarok-cc": 0, //additional distributions
    ra: 0,
    rb: 0,
    rc: 0,
    rd: 0,
    re: 0,
    ri: 0, //in ICO account for fixed price
    rm: 0,
    rn: 0,
    rr: 0,
  },
  delegations: {}, //these need to be preloaded if already on account before starting block
  dex: {
    hbd: {
      tick: "0.012500", //ICO price
      buyBook: "",
    },
    hive: {
      tick: "0.100000", //ICO Price
      buyBook: "",
    },
  },
  gov: {
    [config.leader]: 1,
    t: 1, //total in other accounts
  },
  lt: {
    "rct:claim": {
      b: 0,
      d: "null_10000",
      h: 0,
      p: 112000,
      i: "rct:claim",
      o: "null",
      q: 3300000,
      s: "",
    },
  },
  markets: {
    node: {
      [config.leader]: {
        attempts: 0,
        bidRate: 2000,
        contracts: 0,
        domain: config.mainAPI,
        escrow: true,
        escrows: 0,
        lastGood: 49994100, //genesisblock
        marketingRate: 0,
        self: [config.leader],
        wins: 0,
        yays: 0,
      },
    },
  },
  pow: {
    [config.leader]: 0,
    t: 0, //total in other accounts
  },
  queue: {
    0: [config.leader],
  },
  runners: {
    [config.leader]: {
      //config.leader
      g: 1, //config.mainAPI
    },
  },
  sets: {
    rct: {
      a: "ragnarok.game", //author
      b: 0, //bond
      d: 0, //dividend
      e: "png", //handling
      f: 0, //fee
      i: "0000", // min purchase
      j: "CbgW", // max purchase
      m: "CbgW", // max range
      n: "rct", //set name
      nl: "Raganarok Claim Token", //long set name
      o: "0000", // min definable range
      p: "ragnarok-claim-tokens-update", //permlink
      r: "0", //royalty
      ra: "", //royalty account
      s: "QmYSRLiGaEmucSXoNiq9RqazmDuEZmCELRDg4wyE7Fo8kX", //nft script
      t: 0, //type
      u: "", //uids
    },
  },
  stats: {
    IPFSRate: 2000,
    budgetRate: 2000,
    chaos: 0,
    currationRate: 2000,
    delegationRate: 2000,
    dex_fee: "0.01000",
    dex_max: "100.00",
    dex_slope: "0.00",
    dluxPerDel: "0.000000",
    gov_threshhold: 0,
    delegationRate: 2000,
    hashLastIBlock: "Genesis",
    icoPrice: 0, //in millihive
    interestRate: 999999999999, //mints 1 millitoken per this many millitokens in your DAO period
    lastBlock: "",
    liq_reward: 100,
    marketingRate: 2500,
    maxBudget: 1000000000,
    max_transfer: 20,
    ms: {
      account: "ragnarok-cc",
      active_account_auths: {
        inconceivable: 1,
      },
      active_threshold: 1,
      memo_key: "STM5se9o2oZwY7ztpo2scyvf12RR41zaYa6rozBtetwfr1DmH1J5k",
      owner_key_auths: {
        STM5Rp1fWQMS7tAPVqatg8B22faeJGcKkfsez3mgUwGZPE9aqWd6X: 1,
      },
      owner_threshold: 1,
      posting_account_auths: {
        inconceivable: 1,
      },
      posting_threshold: 1,
    },
    MSHeld: {
      HIVE: 0,
      HBD: 0,
    },
    multiSigCollateral: 0,
    nft_byte_cost: 20,
    nft_fee_1: 100000,
    nodeRate: 2000,
    outOnBlock: 0, //amm ICO pricing
    safetyLimit: 0,
    savingsRate: 1000,
    tokenSupply: 1, //your starting token supply
  },
};