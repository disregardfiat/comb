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
const snapcs = ENV.SNAPBASE_URL || 'http://96.46.48.108:8002'; // get a public facing snapshot server
const snapss = ENV.SNAPBASE_URLB || "http://65.108.66.120:8002/"; // get a public facing snapshot server
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
const starting_block = 63631500; //from what block does your token start
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
    state: false, //api dumps
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
  powdn_B: true,
  powsel_up: true,
  govup_id: "gov_up",
  govup_B: true,
  gov_val: "",
  govsel_up: true,
  govdn_id: "gov_down",
  govdn_B: true,
  node: {
    id: "node_add",
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
      id: "fth_buy",
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