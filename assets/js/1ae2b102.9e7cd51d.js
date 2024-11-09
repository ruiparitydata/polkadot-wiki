"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8121],{56195:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"build/build-protocol-info","title":"Polkadot Protocol Overview","description":"Characteristics about the Polkadot protocol, and what you need to consider when building.","source":"@site/../docs/build/build-protocol-info.md","sourceDirName":"build","slug":"/build-protocol-info","permalink":"/docs/build-protocol-info","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-protocol-info.md","tags":[],"version":"current","lastUpdatedBy":"Filippo","lastUpdatedAt":1731067872000,"frontMatter":{"id":"build-protocol-info","title":"Polkadot Protocol Overview","sidebar_label":"Polkadot Protocol Overview","description":"Characteristics about the Polkadot protocol, and what you need to consider when building.","keywords":["build","protocol","extrinsics","events","transaction"],"slug":"../build-protocol-info"},"sidebar":"docs","previous":{"title":"Coretime Swap","permalink":"/docs/learn-guides-coretime-swap"},"next":{"title":"Using AssetHub","permalink":"/docs/build-integrate-assets"}}');var s=t(74848),a=t(28453);const o={id:"build-protocol-info",title:"Polkadot Protocol Overview",sidebar_label:"Polkadot Protocol Overview",description:"Characteristics about the Polkadot protocol, and what you need to consider when building.",keywords:["build","protocol","extrinsics","events","transaction"],slug:"../build-protocol-info"},r=void 0,c={},l=[{value:"Tokens",id:"tokens",level:2},{value:"Redenomination",id:"redenomination",level:3},{value:"Addresses",id:"addresses",level:2},{value:"Cryptography",id:"cryptography",level:3},{value:"Extrinsics and Events",id:"extrinsics-and-events",level:2},{value:"Block Format",id:"block-format",level:3},{value:"Extrinsics",id:"extrinsics",level:3},{value:"Transaction Mortality",id:"transaction-mortality",level:3},{value:"Unique Identifiers for Extrinsics",id:"unique-identifiers-for-extrinsics",level:3},{value:"Events",id:"events",level:3},{value:"Fees",id:"fees",level:3},{value:"Encoding",id:"encoding",level:3},{value:"Runtime Upgrades",id:"runtime-upgrades",level:2},{value:"Runtime Versioning",id:"runtime-versioning",level:3},{value:"Smart Contracts",id:"smart-contracts",level:2},{value:"Other F.A.Q.",id:"other-faq",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This page serves as a high-level introduction to the Polkadot protocol with terminology that may be\nspecific to Polkadot, notable differences to other chains that you may have worked with, and\npractical information for dealing with the chain."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If the below does not offer a sufficient amount of information regarding the Polkadot protocol, be\nsure to visit the ",(0,s.jsx)(n.a,{href:"https://spec.polkadot.network/id-polkadot-protocol",children:"Polkadot Spec"}),", which is\nmore verbose than this Wiki page."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"tokens",children:"Tokens"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Token decimals:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Polkadot (DOT): 10"}),"\n",(0,s.jsx)(n.li,{children:"Kusama (KSM): 12"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Base unit:"}),' "Planck"']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Balance type:"})," ",(0,s.jsx)(n.a,{href:"https://doc.rust-lang.org/std/u128/index.html",children:(0,s.jsx)(n.code,{children:"u128"})})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"redenomination",children:"Redenomination"}),"\n",(0,s.jsxs)(n.p,{children:['Polkadot conducted a poll, which ended on 27 July 2020 (block 888_888), in which the stakeholders\ndecided to redenominate the DOT token. The redenomination does not change the number of base units\n(called "plancks" in Polkadot) in the network. The only change is that a single DOT token will be\n1e10 plancks instead of the original 1e12 plancks. See the Polkadot blog posts explaining the\n',(0,s.jsx)(n.a,{href:"https://medium.com/polkadot-network/the-first-polkadot-vote-1fc1b8bd357b",children:"details"})," and the\n",(0,s.jsx)(n.a,{href:"https://medium.com/polkadot-network/the-results-are-in-8f6b1ca2a4e6",children:"results"})," of the vote."]}),"\n",(0,s.jsxs)(n.p,{children:["The redenomination took effect 72 hours after transfers were enabled, at block 1_248_326, which\noccurred at approximately 16:50 UTC on 21 Aug 2020. You can find more information about the\nredenomination ",(0,s.jsx)(n.a,{href:"/docs/learn/learn-redenomination",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"addresses",children:"Addresses"}),"\n",(0,s.jsxs)(n.p,{children:["In Polkadot (and most Substrate chains), user accounts are identified by a 32-byte (256-bit)\n",(0,s.jsx)(n.code,{children:"AccountId"}),". This is often, but not always, the public key of a cryptographic key pair."]}),"\n",(0,s.jsx)(n.p,{children:'Polkadot (and Substrate) use the SS58 address format. This is a broad "meta-format" designed to\nhandle many different cryptographic schemes and chains. It has much in common with Bitcoin\'s\nBase58Check format such as a version prefix, a hash-based checksum suffix, and base-58 encoding.'}),"\n",(0,s.jsxs)(n.p,{children:["See the\n",(0,s.jsx)(n.a,{href:"https://docs.substrate.io/main-docs/fundamentals/accounts-addresses-keys/#address-encoding-and-chain-specific-addresses",children:"SS58 page"}),"\nin the Substrate documentation for encoding information and a more comprehensive list of network\nprefixes."]}),"\n",(0,s.jsx)(n.admonition,{title:"Do not use regular expressions (regex) to validate addresses",type:"warning",children:(0,s.jsxs)(n.p,{children:["Always verify using the prefix and checksum of the address. Substrate API Sidecar provides an\n",(0,s.jsx)(n.code,{children:"accounts/{accountId}/validate"})," path that returns a boolean ",(0,s.jsx)(n.code,{children:"isValid"})," response for a provided\naddress."]})}),"\n",(0,s.jsx)(n.p,{children:"Relevant SS58 prefixes for this guide:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Polkadot: 0"}),"\n",(0,s.jsx)(n.li,{children:"Kusama: 2"}),"\n",(0,s.jsx)(n.li,{children:"Westend: 42"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"cryptography",children:"Cryptography"}),"\n",(0,s.jsxs)(n.p,{children:["Polkadot supports the following ",(0,s.jsx)(n.a,{href:"/docs/learn-cryptography",children:"cryptographic"})," key pairs and\nsigning algorithms:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ed25519"}),"\n",(0,s.jsx)(n.li,{children:"Sr25519 - Schnorr signatures on the Ristretto group"}),"\n",(0,s.jsx)(n.li,{children:"ECDSA signatures on secp256k1"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Note that the address for a secp256k1 key is the SS58 encoding of the ",(0,s.jsx)(n.em,{children:"hash of the public key"})," in\norder to reduce the public key from 33 bytes to 32 bytes."]}),"\n",(0,s.jsx)(n.h2,{id:"extrinsics-and-events",children:"Extrinsics and Events"}),"\n",(0,s.jsx)(n.h3,{id:"block-format",children:"Block Format"}),"\n",(0,s.jsx)(n.p,{children:"A Polkadot block consists of a block header and a block body. The block body is made up of\nextrinsics representing the generalization of the concept of transactions. Extrinsics can contain\nany external data the underlying chain wishes to validate and track."}),"\n",(0,s.jsx)(n.p,{children:"The block header is a 5-tuple containing the following elements:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"parent_hash"}),": a 32-byte Blake2b hash of the SCALE encoded parent block header."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"number"}),": an integer representing the index of the current block in the chain. It is equal to the\nnumber of the ancestor blocks. The genesis state has number 0."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"state_root"}),": the root of the Merkle tree, used as storage for the system."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"extrinsics_root"}),": field which is reserved for the Runtime to validate the integrity of the\nextrinsics composing the block body."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"digest"}),": field used to store any chain-specific auxiliary data, which could help the light\nclients interact with the block without the need of accessing the full storage as well as\nconsensus-related data including the block signature."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["A node creating or receiving a block must gossip that block to the network (i.e. to the other\nnodes). Other nodes within the network will track this announcement and can request information\nabout the block. Additional details on the process are outlined\n",(0,s.jsx)(n.a,{href:"https://spec.polkadot.network/#sect-msg-block-announce",children:"here"})," in the Polkadot Spec."]}),"\n",(0,s.jsx)(n.h3,{id:"extrinsics",children:"Extrinsics"}),"\n",(0,s.jsxs)(n.p,{children:["An extrinsic is a\n",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/parity-scale-codec#parity-scale-codec",children:"SCALE encoded"})," array\nconsisting of a ",(0,s.jsx)(n.code,{children:"version number"}),", ",(0,s.jsx)(n.code,{children:"signature"}),", and varying ",(0,s.jsx)(n.code,{children:"data"})," types indicating the resulting\nruntime function to be called, including the parameters required for that function to be executed."]}),"\n",(0,s.jsx)(n.p,{children:"Extrinsics constitute information from the outside world and take on three forms:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Inherents"}),"\n",(0,s.jsx)(n.li,{children:"Signed Transactions"}),"\n",(0,s.jsx)(n.li,{children:"Unsigned Transactions"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["As an infrastructure provider, you will deal almost exclusively with signed transactions. You will,\nhowever, see other extrinsics within the blocks that you decode. Find more information in the\n",(0,s.jsx)(n.a,{href:"https://docs.substrate.io/main-docs/build/tx-weights-fees/",children:"Substrate documentation"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Inherent extrinsics are unsigned and contain information that is not provably true, but validators\nagree on based on some measure of reasonability. For example, a timestamp cannot be proved, but\nvalidators can agree that it is within some time difference on their system clock. Inherents are\nbroadcasted as part of the produced blocks rather than being gossiped as individual extrinsics."}),"\n",(0,s.jsx)(n.p,{children:"Signed transactions contain a signature of the account that issued the transaction and stands to pay\na fee to have the transaction included on chain. Because the value of including signed transactions\non-chain can be recognized prior to execution, they can be gossiped on the network between nodes\nwith a low risk of spam. Signed transactions fit the concept of a transaction in Ethereum or\nBitcoin."}),"\n",(0,s.jsx)(n.p,{children:"Some transactions cannot be signed by a fee-paying account and use unsigned transactions. For\nexample, when a user claims their DOT from the Ethereum DOT indicator contract to a new DOT address,\nthe new address doesn't yet have any funds with which to pay fees."}),"\n",(0,s.jsx)(n.p,{children:"The Polkadot Host does not specify or limit the internals of each extrinsics and those are defined\nand dealt with by the Runtime."}),"\n",(0,s.jsx)(n.h3,{id:"transaction-mortality",children:"Transaction Mortality"}),"\n",(0,s.jsx)(n.p,{children:'Extrinsics can be mortal or immortal. The transaction payload includes a block number and block hash\ncheckpoint from which a transaction is valid and a validity period (also called "era" in some\nplaces) that represents the number of blocks after the checkpoint for which the transaction is\nvalid. If the extrinsic is not included in a block within this validity window, it will be discarded\nfrom the transaction queue.'}),"\n",(0,s.jsxs)(n.p,{children:["The chain only stores a limited number of prior block hashes as reference. You can query this\nparameter, called ",(0,s.jsx)(n.a,{href:"/docs/chain-state-values#block-hash-count",children:(0,s.jsx)(n.code,{children:"BlockHashCount"})}),", from the\nchain state or metadata. If the validity period is larger than the number of blocks stored on-chain,\nthen the transaction will only be valid as long as there is a block to check it against, i.e. the\nminimum value of validity period and block hash count."]}),"\n",(0,s.jsx)(n.p,{children:'Setting the block checkpoint to zero, using the genesis hash, and a validity period of zero will\nmake the transaction "immortal".'}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NOTE:"})," If an account is reaped and a user re-funds the account, then they could replay an\nimmortal transaction. Always default to using a mortal extrinsic."]}),"\n",(0,s.jsx)(n.h3,{id:"unique-identifiers-for-extrinsics",children:"Unique Identifiers for Extrinsics"}),"\n",(0,s.jsx)(n.admonition,{title:"Transaction Hash is not a unique identifier",type:"caution",children:(0,s.jsx)(n.p,{children:"The assumption that a transaction's hash is a unique identifier is the number one mistake that\nindexing services and custodians make. This error will cause major issues for your users. Make sure\nthat you read this section carefully."})}),"\n",(0,s.jsx)(n.p,{children:"Many infrastructure providers on existing blockchains, e.g. Ethereum, consider a transaction's hash\nas a unique identifier. In Substrate-based chains like Polkadot, a transaction's hash only serves as\na fingerprint of the information within a transaction, and there are times when two transactions\nwith the same hash are both valid. In the case that one is invalid, the network properly handles the\ntransaction and does not charge a transaction fee to the sender nor consider the transaction in the\nblock's fullness."}),"\n",(0,s.jsxs)(n.p,{children:["Imagine this contrived example with a ",(0,s.jsx)(n.a,{href:"#existential-deposit",children:"reaped account"}),". The first and last\ntransactions are identical, and both valid."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Index"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Hash"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Origin"}),(0,s.jsx)(n.th,{style:{textAlign:"center"},children:"Nonce"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Call"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Results"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"0"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"0x01"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Account A"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"0"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Transfer 5 DOT to B"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Account A reaped"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"1"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"0x02"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Account B"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"4"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Transfer 7 DOT to A"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Account A created (nonce = 0)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"2"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"0x01"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Account A"}),(0,s.jsx)(n.td,{style:{textAlign:"center"},children:"0"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Transfer 5 DOT to B"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Successful transaction"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:['In addition, not every extrinsic in a Substrate-based chain comes from an account as a "pure"\npublic/private key pair. The concept of dispatch\n',(0,s.jsx)(n.a,{href:"/docs/learn-account-abstraction#origin-abstraction-in-polkadot",children:"\u201cOrigin\u201d"}),", which could\nrepresent different contexts for a particular, signed extrinsic."]}),"\n",(0,s.jsx)(n.p,{children:"For example, the origin could befrom a public key account, but could also represent a collective.\nThese origins do not have a nonce associated with them the way that an account does. For example,\ngovernance might dispatch the same call with the same arguments multiple times, like \u201cincrease the\nvalidator set by 10%.\u201d This dispatch information (and therefore its hash) would be the same, and the\nhash would be a reliable representative of the call, but its execution would have different effects\ndepending on the chain\u2019s state at the time of dispatch."}),"\n",(0,s.jsxs)(n.p,{children:["The correct way to uniquely identify an extrinsic on a Substrate-based chain is to use the block ID\n(height or hash) and the extrinsic's index. Substrate defines a block as a header and an array of\nextrinsics; therefore, an index in the array at a canonical height will always uniquely identify a\ntransaction. This methodology is reflected in the Substrate codebase itself, for example to\n",(0,s.jsx)(n.a,{href:"https://paritytech.github.io/substrate/master/pallet_multisig/struct.Timepoint.html",children:"reference a previous transaction"}),"\nfrom the Multisig pallet."]}),"\n",(0,s.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,s.jsxs)(n.p,{children:["While extrinsics represent information from the outside world, events represent information from the\nchain. Extrinsics can trigger events. For example, the Staking pallet emits a ",(0,s.jsx)(n.code,{children:"Reward"})," event when\nclaiming staking rewards to tell the user how much the account was credited."]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to monitor deposits into an address, keep in mind that several transactions can initiate\na balance transfer (such as ",(0,s.jsx)(n.code,{children:"balances.transferKeepAlive"})," and a ",(0,s.jsx)(n.code,{children:"utility.batch"})," transaction with a\ntransfer inside of it). Only monitoring ",(0,s.jsx)(n.code,{children:"balances.transfer"})," transactions will not be sufficient.\nMake sure that you monitor events in each block for events that contain your addresses of interest.\nMonitor events instead of transaction names to ensure that you can properly credit deposits."]}),"\n",(0,s.jsx)(n.h3,{id:"fees",children:"Fees"}),"\n",(0,s.jsxs)(n.p,{children:["Polkadot uses weight-based fees that, unlike gas, are charged ",(0,s.jsx)(n.em,{children:"pre-dispatch."}),' Users can also add a\n"tip" to increase transaction priority during congested periods. See the\n',(0,s.jsx)(n.a,{href:"/docs/learn-transactions#transaction-fees",children:"transaction fee"})," page for more info."]}),"\n",(0,s.jsx)(n.h3,{id:"encoding",children:"Encoding"}),"\n",(0,s.jsxs)(n.p,{children:["Parity's integration tools should allow you to deal with decoded data. If you'd like to bypass them\nand interact directly with the chain data or implement your own codec, Polkadot encodes block and\ntransaction data using the\n",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/parity-scale-codec#parity-scale-codec",children:"SCALE codec"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"runtime-upgrades",children:"Runtime Upgrades"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/learn-runtime-upgrades",children:"Runtime upgrades"})," allow Polkadot to change the logic of the\nchain without the need for a hard fork. You can find a guide for how to properly perform a runtime\nupgrade here."]}),"\n",(0,s.jsx)(n.h3,{id:"runtime-versioning",children:"Runtime Versioning"}),"\n",(0,s.jsxs)(n.p,{children:["There are a number of fields that are a part of the overall\n",(0,s.jsx)(n.a,{href:"https://paritytech.github.io/polkadot-sdk/master/frame/runtime/apis/struct.RuntimeVersion.html#",children:(0,s.jsx)(n.code,{children:"RuntimeVersion"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Apart the ",(0,s.jsx)(n.code,{children:"runtime_version"})," there is also the ",(0,s.jsx)(n.code,{children:"transaction_version"})," which denotes how to correctly\nencode/decode calls for a given runtime (useful for hardware wallets). The reason\n",(0,s.jsx)(n.code,{children:"transaction_version"})," is separate from ",(0,s.jsx)(n.code,{children:"runtime_version"})," is that it explicitly notes that the call\ninterface is broken/not compatible."]}),"\n",(0,s.jsx)(n.h2,{id:"smart-contracts",children:"Smart Contracts"}),"\n",(0,s.jsxs)(n.p,{children:["The Polkadot relay chain does not support smart contracts, but a number of its parachains do,\n",(0,s.jsx)(n.a,{href:"/docs/build-smart-contracts",children:"see here for more."})]}),"\n",(0,s.jsx)(n.h2,{id:"other-faq",children:"Other F.A.Q."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Can an account's balance change without a corresponding, on-chain transaction?"})}),"\n",(0,s.jsxs)(n.p,{children:["No, but not all balance changes are in a ",(0,s.jsx)(n.em,{children:"transaction,"})," some are in ",(0,s.jsx)(n.em,{children:"events."})," You will need to run\nan archive node and listen for events and transactions to track all account activity. This\nespecially applies to ",(0,s.jsx)(n.em,{children:"locking"})," operations if you are calculating balance as the spendable balance,\ni.e. free balance minus the maximum lock."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:'What chain depth is considered "safe"?'})}),"\n",(0,s.jsx)(n.p,{children:"Polkadot uses a deterministic finality mechanism. Once a block is finalized, it cannot be reverted\nexcept by a hard fork. Kusama has had hard forks that had to revert four finalized blocks in order\nto cancel a runtime upgrade. Using a finalized depth of ten blocks should be safe."}),"\n",(0,s.jsx)(n.p,{children:"Note that block production and finality are isolated processes in Polkadot, and the chain can have a\nlong unfinalized head."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Do users need to interact with any smart contracts?"})}),"\n",(0,s.jsx)(n.p,{children:"No, users interact directly with the chain's logic."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Does Polkadot have state rent?"})}),"\n",(0,s.jsx)(n.p,{children:"No, Polkadot uses the existential deposit to prevent dust accounts and other economic mechanisms\nlike locking or reserving tokens for operations that utilize state."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"What is an external source to see the current chain height?"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://polkadot.js.org/apps/#/explorer",children:"Polkadot-JS explorer"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.subscan.io/",children:"Subscan block explorer"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(96540);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);