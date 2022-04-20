require('dotenv').config();
const ENV = process.env;

const username = ENV.account || 'disregardfiat';
const active = ENV.active || '';
const follow = ENV.follow || 'disregardfiat';
const msowner = ENV.msowner || '';
const mspublic = ENV.mspublic || '';
const memoKey = ENV.memo || '';
const hookurl = ENV.discordwebhook || '';
const NODEDOMAIN = ENV.domain || 'http://dlux-token.herokuapp.com' //where your API lives
const acm = ENV.account_creator || false //account creation market ... use your accounts HP to claim account tokens
const mirror = ENV.mirror || false //makes identical posts, votes and IPFS pins as the leader account
const port = ENV.PORT || 3001;
const pintoken = ENV.pintoken || ''
const pinurl = ENV.pinurl || '';
const status = ENV.status || true
const dbcs = ENV.DATABASE_URL || '';
const snapcs = ENV.SNAPBASE_URL || "http://65.108.66.120:8002"; // get a public facing snapshot server
const snapss = ENV.SNAPBASE_URLB || "https://api.v4v.app"; ; // get a public facing snapshot server
const history = ENV.history || 3600
const stream = ENV.stream || 'irreversible'
const mode = ENV.mode || 'normal'

// testing configs for replays
const override = ENV.override || 0 //69116600 //will use standard restarts after this blocknumber
const engineCrank = ENV.startingHash || 'QmconUD3faVGbgC2jAXRiueEuLarjfaUiDz5SA74kptuvu' //but this state will be inserted before

// third party configs
const rta = ENV.rta || '' //rtrades account : IPFS pinning interface
const rtp = ENV.rtp || '' //rtrades password : IPFS pinning interface

const ipfshost = ENV.ipfshost || 'ipfs.infura.io' //IPFS upload/download provider provider
const ipfsport = ENV.ipfsport || '5001' //IPFS upload/download provider provider
const ipfsprotocol = ENV.ipfsprotocol || 'https' //IPFS upload/download protocol
//node market config > 2500 is 25% inflation to node operators, this is currently not used
const bidRate = ENV.BIDRATE || 2500 //

//HIVE CONFIGS
var startURL = ENV.STARTURL || "https://api.deathwing.me/"
var clientURL = ENV.APIURL || "https://api.deathwing.me/"
const clients = ENV.clients || [
    "https://api.deathwing.me/",
    //"https://api.c0ff33a.uk/",
    //"https://rpc.ecency.com/",
    "https://hived.emre.sh/",
    //"https://rpc.ausbit.dev/",
    "https://api.hive.blog/"
]

//!!!!!!! -- THESE ARE COMMUNITY CONSTANTS -- !!!!!!!!!//
//TOKEN CONFIGS -- ALL COMMUNITY RUNNERS NEED THESE SAME VALUES
const starting_block = 63654900; //from what block does your token start
const prefix = 'duat_' //Community token name for Custom Json IDs
const TOKEN = 'DUAT' //Token name
const precision = 3 //precision of token
const tag = 'ragnarok' //the fe.com/<tag>/@<leader>/<permlink>
const jsonTokenName = 'duat' //what customJSON in Escrows and sends is looking for
const leader = 'inconceivable' //Default account to pull state from, will post token 
const ben = '' //Account where comment benifits trigger token action
const delegation = '' //account people can delegate to for rewards
const delegationWeight = 1000 //when to trigger community rewards with bens
const msaccount = 'ragnarok-cc' //account controlled by community leaders
const msPubMemo = 'STM5GNM3jpjWh7Msts5Z37eM9UPfGwTMU7Ksats3RdKeRaP5SveR9' //memo key for msaccount
const msPriMemo = '5KDZ9fzihXJbiLqUCMU2Z2xU8VKb9hCggyRPZP37aprD2kVKiuL'
const msmeta = ''
const mainAPI = 'duat.hivehoneycomb.com' //leaders API probably
const mainRender = 'duatdata.hivehoneycomb.com' //data and render server
const mainFE = 'ragnarok.com' //frontend for content
const mainIPFS = 'a.ipfs.dlux.io' //IPFS service
const mainICO = '' //Account collecting ICO HIVE
const footer = `\n[Find us on Discord](https://bit.ly/discordragnarok)`;
const hive_service_fee = 100 //HIVE service fee for transactions in Hive/HBD in centipercents (1% = 100)
const features = {
    pob: false, //proof of brain
    delegate: false, //delegation
    daily: false, // daily post
    liquidity: false, //liquidity
    ico: false, //ico
    inflation: false,
    dex: true, //dex
    nft: true, //nfts
    state: true, //api dumps
    claimdrop: true //claim drops
}

const featuresModel = {
  claim_id: "drop_claim",
  claim_S: "Airdrop",
  claim_B: false,
  claim_json: "drop_claim",
  rewards_id: "claim",
  rewards_S: "Rewards",
  rewards_B: true,
  rewards_json: "claim",
  rewardSel: false,
  reward2Gov: true,
  send_id: "send",
  send_S: "Send",
  send_B: true,
  send_json: "send",
  powup_id: "power_up",
  powup_B: false,
  pow_val: "",
  powdn_id: "power_down",
  powdn_B: false,
  powsel_up: false,
  govup_id: "gov_up",
  govup_B: true,
  gov_val: "",
  govsel_up: true,
  govdn_id: "gov_down",
  govdn_B: true,
  node: {
    id: "node_add",
    enabled: true,
    opts: [
      {
        S: "Domain",
        type: "text",
        info: "https://no-trailing-slash.com",
        json: "domain",
        val: "",
      },
      {
        S: "DEX Fee Vote",
        type: "number",
        info: "500 = .5%",
        max: 1000,
        min: 0,
        json: "bidRate",
        val: "",
      },
      {
        S: "DEX Max Vote",
        type: "number",
        info: "10000 = 100%",
        max: 10000,
        min: 0,
        json: "dm",
        val: "",
      },
      {
        S: "DEX Slope Vote",
        type: "number",
        info: "10000 = 100%",
        max: 10000,
        min: 0,
        json: "ds",
        val: "",
      },
    ],
  },
  nft: [
    {
      id: "ft_sell",
      enabled: true,
      props: [
        {
          name: "set",
          type: "string",
          help: `Set the FT to buy`,
        },
        {
          name: "uid",
          type: "string",
          help: `UID of the FT to buy`,
        },
        {
          name: "bid_amount",
          type: "number",
          help: `milli${TOKEN}`,
        },
      ],
    },
    {
      id: "ft_buy",
      enabled: true,
      props: [
        {
          name: "set",
          type: "string",
          help: `Set the FT to buy`,
        },
        {
          name: "uid",
          type: "string",
          help: `UID of the FT to buy`,
        },
      ],
    },
    {
      id: "nft_sell_cancel",
      enabled: true,
      props: [
        {
          name: "set",
          type: "string",
          help: `Set the FT to cancel sell`,
        },
        {
          name: "uid",
          type: "string",
          help: `UID of the FT to cancel sell`,
        },
      ],
    },
    {
      id: "ft_sell_cancel",
      enabled: true,
      props: [
        {
          name: "set",
          type: "string",
          help: `Set the FT to cancel sell`,
        },
        {
          name: "uid",
          type: "string",
          help: `UID of the FT to cancel sell`,
        },
      ],
    },
    {
      id: "ft_auction",
      enabled: true,
      props: [
        {
          name: "set",
          type: "string",
          help: `Set the NFT to be auctioned`,
        },
        {
          name: "uid",
          type: "string",
          help: `UID of the NFT to be auctioned`,
        },
        {
          name: "price",
          type: "number",
          help: `milliTYPE`,
        },
        {
          name: "type",
          type: "string",
          help: `HIVE or HBD`,
        },
        {
          name: "time",
          type: "number",
          help: `Number of Days, 7 Max.`,
        },
      ],
    },
    {
      id: "ft_bid",
      enabled: true,
      props: [
        {
          name: "set",
          type: "string",
          help: `Set the NFT to be bid on`,
        },
        {
          name: "uid",
          type: "string",
          help: `UID of the NFT to be bid on`,
        },
        {
          name: "bid_amount",
          type: "number",
          help: `milli${TOKEN}`,
        },
      ],
    },
    {
      id: "nft_hauction",
      enabled: false,
      props: [
        {
          name: "set",
          type: "string",
          help: `Set the NFT to be auctioned`,
        },
        {
          name: "uid",
          type: "string",
          help: `UID of the NFT to be auctioned`,
        },
        {
          name: "price",
          type: "number",
          help: `milliTYPE`,
        },
        {
          name: "type",
          type: "string",
          help: `HIVE or HBD`,
        },
        {
          name: "time",
          type: "number",
          help: `Number of Days, 7 Max.`,
        },
      ],
    },
    {
      id: "fth_buy",
      enabled: true,
      props: [
        {
          name: "amount",
          type: "number",
          help: `milli${TOKEN}`,
        },
        {
          name: "qty",
          type: "number",
          help: `Purchase Quantity`,
        },
        {
          name: "set",
          type: "string",
          help: `Set Name`,
        },
        {
          name: "item",
          type: "string",
          help: `contract name`,
        },
      ],
    },
  ],
  /*
processor.on("send", HR.send);
  processor.on("claim", HR.claim);
  if (config.features.claimdrop) processor.on("drop_claim", HR.drop_claim);
  processor.on("node_delete", HR.node_delete);
  processor.on("gov_down", HR.gov_down);
  processor.on("gov_up", HR.gov_up);
  processor.onOperation("comment", HR.comment);
  processor.on("nomention", HR.nomention);
  if (config.features.pob) {
    processor.on("power_up", HR.power_up); // power up tokens for vote power in layer 2 token proof of brain
    processor.on("power_down", HR.power_down);
    processor.on("power_grant", HR.power_grant);
    processor.on("vote_content", HR.vote_content);
    processor.onOperation("vote", HR.vote); //layer 2 voting
    processor.onOperation(
      "delegate_vesting_shares",
      HR.delegate_vesting_shares
    );
    processor.onOperation("comment_options", HR.comment_options);
    processor.on("cjv", HR.cjv);
    processor.on("cert", HR.cert); // json.cert is an open ended hope to interact with executable posts... unexplored
  }
  if (config.features.dex) {
    processor.on("dex_sell", HR.dex_sell);
    processor.on("dex_clear", HR.dex_clear);
  }
  if (config.features.dex || config.features.nft || config.features.ico) {
    processor.onOperation("transfer", HR.transfer);
  }
  if (config.features.nft) {
    processor.on("ft_escrow_cancel", HR.ft_escrow_cancel);
    processor.on("ft_escrow_complete", HR.ft_escrow_complete);
    processor.on("ft_escrow", HR.ft_escrow);
    processor.on("fts_sell_h", HR.fts_sell_h);
    processor.on("fts_sell_hcancel", HR.fts_sell_hcancel);
    processor.on("nft_buy", HR.nft_buy);
    processor.on("nft_sell", HR.nft_sell);
    processor.on("ft_transfer", HR.ft_transfer);
    processor.on("ft_airdrop", HR.ft_airdrop);
    processor.on("nft_transfer", HR.nft_transfer);
    processor.on("nft_auction", HR.nft_auction);
    processor.on("nft_bid", HR.nft_bid);
    processor.on("nft_transfer_cancel", HR.nft_transfer_cancel);
    processor.on("nft_reserve_transfer", HR.nft_reserve_transfer);
    processor.on("nft_reserve_complete", HR.nft_reserve_complete);
    //processor.on("nft_define", HR.nft_define);
    //processor.on("nft_add_roy", HR.nft_add_roy);
    //processor.on("nft_div", HR.nft_div);
    //processor.on("nft_define_delete", HR.nft_define_delete);
    processor.on("nft_melt", HR.nft_delete);
    //processor.on("nft_mint", HR.nft_mint); //Minting will be in a future release.
    //processor.on("nft_pfp", HR.nft_pfp);
  */
};
const adverts = [
    'https://camo.githubusercontent.com/954558e3ca2d68e0034cae13663d9807dcce3fcf/68747470733a2f2f697066732e627573792e6f72672f697066732f516d64354b78395548366a666e5a6748724a583339744172474e6b514253376359465032357a3467467132576f50'
]     //adverts for community
const detail = {
                name: 'DUAT NFT Platform',
                symbol: TOKEN,
                icon: 'https://www.dlux.io/img/dlux-hive-logo-alpha.svg',
                supply:'Claim Only',
                wp:`https://docs.google.com/document/d/1_jHIJsX0BRa5ujX0s-CQg3UoQC2CBW4wooP2lSSh3n0/edit?usp=sharing`,
                ws:`https://www.dlux.io`,
                be:`https://hiveblockexplorer.com/`,
                text: `DUAT is a NFT platform that allows users to claim and send NFTs to other users.`
            }

//Aditionally on your branch, look closely at dao, this is where tokenomics happen and custom status posts are made

let config = {
  username,
  active,
  msowner,
  mspublic,
  memoKey,
  follow,
  NODEDOMAIN,
  hookurl,
  status,
  history,
  dbcs,
  mirror,
  bidRate,
  engineCrank,
  port,
  pintoken,
  pinurl,
  clientURL,
  startURL,
  clients,
  acm,
  rta,
  rtp,
  override,
  ipfshost,
  ipfsprotocol,
  ipfsport,
  starting_block,
  prefix,
  leader,
  msaccount,
  msPubMemo,
  msPriMemo,
  msmeta,
  ben,
  adverts,
  delegation,
  delegationWeight,
  TOKEN,
  precision,
  tag,
  mainAPI,
  jsonTokenName,
  mainFE,
  mainRender,
  mainIPFS,
  mainICO,
  detail,
  footer,
  hive_service_fee,
  features,
  stream,
  mode,
  featuresModel,
  snapcs,
  snapss,
};

module.exports = config;