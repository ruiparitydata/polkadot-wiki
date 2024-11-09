"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3536],{73554:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"learn/learn-transactions","title":"Types of Transactions (a.k.a. Extrinsics)","description":"Types of Transactions on Polkadot.","source":"@site/../docs/learn/learn-transactions.md","sourceDirName":"learn","slug":"/learn-transactions","permalink":"/docs/learn-transactions","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-transactions.md","tags":[],"version":"current","lastUpdatedBy":"Filippo","lastUpdatedAt":1731067872000,"frontMatter":{"id":"learn-transactions","title":"Types of Transactions (a.k.a. Extrinsics)","sidebar_label":"Transactions","description":"Types of Transactions on Polkadot.","keywords":["transaction","transfer","DOT","extrinsics"],"slug":"../learn-transactions"},"sidebar":"docs","previous":{"title":"Pure Proxy Accounts","permalink":"/docs/learn-proxies-pure"},"next":{"title":"Staking","permalink":"/docs/learn-staking-index"}}');var i=t(74848),a=t(28453);t(11470),t(19365),t(3514);const r={id:"learn-transactions",title:"Types of Transactions (a.k.a. Extrinsics)",sidebar_label:"Transactions",description:"Types of Transactions on Polkadot.",keywords:["transaction","transfer","DOT","extrinsics"],slug:"../learn-transactions"},o=void 0,c={},l=[{value:"Pallets and Extrinsics",id:"pallets-and-extrinsics",level:2},{value:"Types of Extrinsics",id:"types-of-extrinsics",level:2},{value:"Mortal and Immortal Extrinsics",id:"mortal-and-immortal-extrinsics",level:3},{value:"Balance Transfers",id:"balance-transfers",level:3},{value:"Vested Transfers",id:"vested-transfers",level:3},{value:"Verifying Extrinsics",id:"verifying-extrinsics",level:2},{value:"Transaction Fees",id:"transaction-fees",level:2},{value:"Fee Multiplier",id:"fee-multiplier",level:3},{value:"Other Resource Limitation Strategies",id:"other-resource-limitation-strategies",level:3},{value:"Parachain Transactions",id:"parachain-transactions",level:2},{value:"Block Limits and Transaction Priority",id:"block-limits-and-transaction-priority",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"pallets-and-extrinsics",children:"Pallets and Extrinsics"}),"\n",(0,i.jsxs)(n.p,{children:["Polkadot is built using ",(0,i.jsx)(n.a,{href:"https://substrate.io/",children:"Substrate"}),", a modular framework to efficiently build\nblockchains. Substrate's FRAME development environment provides modules called pallets and support\nlibraries that you can use, modify, and extend to build the runtime logic to suit the needs of your\nblockchain. You can explore Substrate's FRAME pallets on\n",(0,i.jsx)(n.a,{href:"https://docs.substrate.io/reference/frame-pallets/",children:"this dedicated page"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Within each functional ",(0,i.jsx)(n.strong,{children:"pallet"})," on the blockchain, one can ",(0,i.jsx)(n.strong,{children:"call"})," its functions and execute them\nsuccessfully, provided they have the permission to do so. Because these calls originate outside of\nthe blockchain runtime, such transactions are referred to as ",(0,i.jsx)(n.strong,{children:"extrinsics"}),". Extrinsics normally\ncontain a signature, some data to describe if the extrinsic has passed some validity checks and a\nreference to the pallet and call that it is intended for. For example, the Staking pallet contains\nall functions related to staking. A nominator can bond funds and nominate validators by issuing the\nrespective extrinsics. Some extrinsics might also trigger an event on the chain such as a reward\npayout to the nominators."]}),"\n",(0,i.jsx)(n.h2,{id:"types-of-extrinsics",children:"Types of Extrinsics"}),"\n",(0,i.jsxs)(n.p,{children:["Now that we introduced the term ",(0,i.jsx)(n.em,{children:"extrinsic"}),", let us dive deeper and understand what extrinsics\nreally are. Extrinsics can be one of 3 distinct types:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Signed transactions:"})," these must contain the signature of the account sending the inbound\nrequest to the runtime. With signed transactions, the account used to submit the request typically\npays the transaction fee and must sign it using the account's private key."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Unsigned transactions:"})," these don't carry any information about who submitted the transaction,\nsince the format of this type of transaction doesn't require a signature. You can define what\nconditions must be met for such a transaction to be valid."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Inherents:"})," are a special type of unsigned transaction made by block authors which carry\ninformation required to build a block such as timestamps, storage proofs and uncle blocks."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Signed transactions is the way that most users will interact with Polkadot. Signed transactions come\nfrom an account that has funds, and therefore Polkadot can charge a transaction fee as a way to\nprevent spam."}),"\n",(0,i.jsxs)(n.p,{children:["Unsigned transactions are for special cases where a user needs to submit an extrinsic from a key\npair that does not control funds. For example, validator's ",(0,i.jsx)(n.a,{href:"/docs/learn-cryptography",children:"session keys"}),"\nnever control funds. Unsigned transactions are only used in special cases because, since Polkadot\ncannot charge a fee for them, each one needs its own, custom validation logic."]}),"\n",(0,i.jsx)(n.p,{children:'Inherents are pieces of information that are not signed or included in the transaction queue. As\nsuch, only the block author can add inherents to a block. Inherents are assumed to be "true" simply\nbecause a sufficiently large number of validators have agreed on them being reasonable. For example,\nthe relay chain blocks include a timestamp inherent. There is no way to prove that a timestamp is\ntrue the way one proves the desire to send funds with a signature. Rather, validators accept or\nreject the block based on how reasonable they find the timestamp. In Polkadot, it must be within\nsome acceptable range of their own system clocks.'}),"\n",(0,i.jsx)(n.p,{children:"Here are some key differences between the different types of extrinsics:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Contrary to signed transactions, unsigned transaction types require implementing custom validation\nlogic which can consume more resources for checking validity compared to signed transactions."}),"\n",(0,i.jsx)(n.li,{children:"Unsigned transactions have no economic deterrent to prevent spam or replay attacks, so custom\nlogic must account for protecting the network from these types of transactions being misused."}),"\n",(0,i.jsx)(n.li,{children:"Inherents exist to address the need of adding some data to a block, whereas signed or unsigned\ntransactions exist to potentially change the state of the blockchain."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"mortal-and-immortal-extrinsics",children:"Mortal and Immortal Extrinsics"}),"\n",(0,i.jsxs)(n.p,{children:["Transactions are generally irreversible once confirmed and added to the blockchain, an immutable\nledger of all transactions. This means users must exercise caution, as mistakes such as sending DOT\nto the wrong address cannot be reverted. The permanence of transactions highlights the importance of\ncareful verification before signing any transaction on a blockchain network. It is usually a\n",(0,i.jsx)(n.a,{href:"/docs/transaction-attacks",children:"good practice not to blind sign transactions"})," to avoid being\nvictim of an attack."]}),"\n",(0,i.jsxs)(n.p,{children:["In blockchain terms, transactions can be ",(0,i.jsx)(n.strong,{children:"mortal"})," extrinsics (i.e. valid within a defined block\ninterval, usually short), or ",(0,i.jsx)(n.strong,{children:"immortal"})," extrinsics (i.e. always valid). It is possible to make\nimmortal transactions on Polkadot. However,\n",(0,i.jsx)(n.a,{href:"/docs/transaction-attacks#replay-attack",children:"for security reasons"}),", it is highly recommended\nnot to do so and most wallet software will not allow you to make an immortal extrinsic."]}),"\n",(0,i.jsx)(n.h3,{id:"balance-transfers",children:"Balance Transfers"}),"\n",(0,i.jsx)(n.p,{children:"Balance transfers are transfers of token balances between accounts. This is the most well-known type\nof transfer."}),"\n",(0,i.jsx)(n.h3,{id:"vested-transfers",children:"Vested Transfers"}),"\n",(0,i.jsxs)(n.p,{children:["DOT may have a lock to account for vesting funds. Like other types of\n",(0,i.jsx)(n.a,{href:"/docs/learn-account-balances#locks",children:"locks"}),", these funds cannot be transferred but can be used in\nother parts of the protocol such as voting in governance or being staked as a validator or\nnominator."]}),"\n",(0,i.jsxs)(n.p,{children:["Vesting funds are on a release schedule that unlocks a constant number of tokens at each block\n(",(0,i.jsx)(n.strong,{children:"linear vesting"}),") or the full amount after a specific block number (",(0,i.jsx)(n.strong,{children:"cliff vesting"}),"). In all\nvesting cases, the lock decreases over time until all the funds are transferable."]}),"\n",(0,i.jsx)(n.h2,{id:"verifying-extrinsics",children:"Verifying Extrinsics"}),"\n",(0,i.jsx)(n.admonition,{type:"danger",children:(0,i.jsx)(n.p,{children:"Do not sign a transaction if you can't verify what you are signing or you suspect you might be\nsigning a different extrinsic than the one intended."})}),"\n",(0,i.jsxs)(n.p,{children:["Verifying the extrinsic you are signing can take some more time before signing for a transaction but\nit allows you to add an extra security step. There are\n",(0,i.jsx)(n.a,{href:"/docs/transaction-attacks",children:"a multitude of possible attacks"})," that will prevent you to send\nfunds to the desired destination account."]}),"\n",(0,i.jsx)(n.h2,{id:"transaction-fees",children:"Transaction Fees"}),"\n",(0,i.jsxs)(n.p,{children:["Storage and computation are limited resources in a blockchain network. Transaction fees prevent\nindividual users from consuming too many resources. Polkadot uses a ",(0,i.jsx)(n.strong,{children:"weight-based fee model"})," as\nopposed to a gas-metering model. As such, fees are charged before transaction execution. Once the\nfee is paid, nodes will execute the transaction."]}),"\n",(0,i.jsx)(n.p,{children:"Polkadot fees consist of three parts:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Base fee"}),": a fixed fee applied to every transaction and set by the runtime."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Length fee"}),": a fee that gets multiplied by the length of the transaction in bytes."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Weight fee"}),": a fee for each varying runtime function. Runtime implementers must implement a\nconversion mechanism that determines the corresponding currency amount for the calculated weight."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The final fee can be summarized as:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"fee = base_fee + length_of_transaction_in_bytes * length_fee + weight_fee\n"})}),"\n",(0,i.jsx)(n.p,{children:"where:"}),"\n",(0,i.jsx)(n.p,{children:"Base fee: 1 milliDOT"}),"\n",(0,i.jsx)(n.p,{children:"Length fee: 0.1 DOT per byte"}),"\n",(0,i.jsx)(n.p,{children:"The weight-to-fee conversion is calculated as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"weight_fee = weight/1.26 * (10\u22128)\n"})}),"\n",(0,i.jsx)(n.p,{children:"A weight of 126,000 nS is mapped to 1 mDOT. This fee will always be, at most, the max size of an\nunsigned 128-bit integer."}),"\n",(0,i.jsxs)(n.p,{children:["See\n",(0,i.jsx)(n.a,{href:"https://spec.polkadot.network/id-weights#id-definitions-in-polkadot",children:"the Polkadot specification"}),"\nand ",(0,i.jsx)(n.a,{href:"https://docs.substrate.io/build/tx-weights-fees/",children:"the Substrate documentation"})," for more\ndetails."]}),"\n",(0,i.jsx)(n.h3,{id:"fee-multiplier",children:"Fee Multiplier"}),"\n",(0,i.jsxs)(n.p,{children:["Polkadot can add an additional fee to transactions if the network becomes too busy and starts to\ndecelerate the system. This additional fee is known as the ",(0,i.jsx)(n.code,{children:"Fee Multiplier"})," and its value is defined\nby the runtime. The multiplier compares the saturation of blocks; if the previous block is less\nsaturated than the current block (implying an uptrend in usage), the fee is slightly increased.\nSimilarly, the fee is decreased if the previous block is more saturated than the current block\n(implying a downtrend in usage)."]}),"\n",(0,i.jsx)(n.p,{children:"The multiplier can create an incentive to avoid the production of low-priority or insignificant\ntransactions. In contrast, those additional fees will decrease if the network calms down and\ntransactions can be executed without overheads."}),"\n",(0,i.jsx)(n.p,{children:"The final fee is calculated as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"final_fee = fee * fee_multiplier\n"})}),"\n",(0,i.jsxs)(n.p,{children:["See\n",(0,i.jsx)(n.a,{href:"https://spec.polkadot.network/id-weights#id-fee-multiplier",children:"the documentation about the Polkadot specifications"}),"\nfor more details."]}),"\n",(0,i.jsx)(n.h3,{id:"other-resource-limitation-strategies",children:"Other Resource Limitation Strategies"}),"\n",(0,i.jsx)(n.p,{children:"Transaction weight must be computable before execution and can only represent fixed logic. Some\ntransactions warrant limiting resources with other strategies. For example:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Bonds: Some transactions, like voting, may require a bond that will be returned or\n",(0,i.jsx)(n.a,{href:"/docs/learn-offenses",children:"slashed"})," after an on-chain event. In the voting example, returned at the end\nof the election or slashed if the voter tried anything malicious."]}),"\n",(0,i.jsxs)(n.li,{children:["Deposits: Some transactions, like setting an ",(0,i.jsx)(n.a,{href:"/docs/learn-identity",children:"identity"})," or claiming an index,\nuse storage space indefinitely. These require a deposit to be returned if the user decides to\nclear their identity and free the storage."]}),"\n",(0,i.jsx)(n.li,{children:"Burns: A transaction may burn funds internally based on its logic. For example, a transaction may\nburn funds from the sender if it creates new storage entries, thus increasing the state size."}),"\n",(0,i.jsxs)(n.li,{children:["Limits: Some limits are part of the protocol. For example, nominators can only nominate 16\nvalidators. This limits the complexity of ",(0,i.jsx)(n.a,{href:"/docs/learn-phragmen",children:"Phragm\xe9n"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"parachain-transactions",children:"Parachain Transactions"}),"\n",(0,i.jsx)(n.p,{children:"The transactions that take place within parachains do not incur relay chain transaction fees. Users\nof shard applications do not even need to hold DOT tokens, as each shard has its own economic model\nand may or may not have a token. There are, however, situations where shards themselves make\ntransactions on the relay chain."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/learn-parachains",children:"Parachains"})," have a dedicated core on the relay chain for execution, so their\ncollators do not need to own DOT in order to include blocks. The parachain will make some\ntransactions itself, for example, opening or closing an ",(0,i.jsx)(n.a,{href:"/docs/learn-xcm",children:"XCM"})," channel, renew its time\non a core, or upgrading its runtime. Parachains have their own accounts on the relay chain and will\nneed to use those funds to issue transactions on the parachain's behalf."]}),"\n",(0,i.jsx)(n.h2,{id:"block-limits-and-transaction-priority",children:"Block Limits and Transaction Priority"}),"\n",(0,i.jsx)(n.p,{children:"Relay chain blocks have both a maximum length (in bytes) and a maximum weight. Block producers will\nfill blocks with transactions up to these limits. A portion of each block - currently 25% - is\nreserved for critical transactions that are related to the chain's operation. Block producers will\nonly fill up to 75% of a block with normal transactions. Some examples of operational transactions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Misbehavior reports"}),"\n",(0,i.jsx)(n.li,{children:"Council operations"}),"\n",(0,i.jsx)(n.li,{children:"Member operations in an election (e.g. renouncing candidacy)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Block producers prioritize transactions based on each transaction's total fee. Since a portion of\nthe fee will go to the block producer, producers will include the transactions with the highest fees\nto maximize their reward."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.admonition,{title:"Polkadot-JS Guides",type:"info",children:(0,i.jsxs)(n.p,{children:["If you are an advanced user, see the\n",(0,i.jsx)(n.a,{href:"/docs/learn-guides-transfers",children:"Polkadot-JS guides about transfers"}),"."]})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}}}]);