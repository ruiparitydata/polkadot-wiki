"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4791],{15680:(e,a,t)=>{t.d(a,{xA:()=>h,yg:()=>g});var n=t(96540);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},h=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(t),u=o,g=p["".concat(l,".").concat(u)]||p[u]||d[u]||r;return t?n.createElement(g,i(i({ref:a},h),{},{components:t})):n.createElement(g,i({ref:a},h))}));function g(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3702:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>h,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var n=t(58168),o=t(98587),r=(t(96540),t(15680)),i=["components"],s={id:"build-parachains",title:"Parachain Development",sidebar_label:"Parachain Development",description:"A guide on what it means to become a Parachain and the steps to do so.",keywords:["build","parachain","develop","implement","PDK"],slug:"../build-pdk"},l=void 0,c={unversionedId:"build/build-parachains",id:"build/build-parachains",title:"Parachain Development",description:"A guide on what it means to become a Parachain and the steps to do so.",source:"@site/../docs/build/build-parachains.md",sourceDirName:"build",slug:"/build-pdk",permalink:"/docs/build-pdk",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-parachains.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1726730833,formattedLastUpdatedAt:"Sep 19, 2024",frontMatter:{id:"build-parachains",title:"Parachain Development",sidebar_label:"Parachain Development",description:"A guide on what it means to become a Parachain and the steps to do so.",keywords:["build","parachain","develop","implement","PDK"],slug:"../build-pdk"},sidebar:"docs",previous:{title:"Node Management",permalink:"/docs/build-node-management"},next:{title:"Network Maintainers",permalink:"/docs/maintain-index"}},h={},p=[{value:"What are the Benefits of Deploying a Parachain?",id:"what-are-the-benefits-of-deploying-a-parachain",level:3},{value:"Shared Security (Pooled Security)",id:"shared-security-pooled-security",level:4},{value:"On-Chain Governance (Thought-through Governance)",id:"on-chain-governance-thought-through-governance",level:4},{value:"Scalability",id:"scalability",level:4},{value:"Interoperability",id:"interoperability",level:4},{value:"Things to Consider",id:"things-to-consider",level:2},{value:"Para-nomics",id:"para-nomics",level:3},{value:"Digital Nation States",id:"digital-nation-states",level:4},{value:"Connecting Digital Economies",id:"connecting-digital-economies",level:4},{value:"Para-objects",id:"para-objects",level:3},{value:"Migration",id:"migration",level:3},{value:"Implement a Parachain",id:"implement-a-parachain",level:2},{value:"Parachain Development Kit",id:"parachain-development-kit",level:3},{value:"Key Components",id:"key-components",level:4},{value:"What PDKs Exist?",id:"what-pdks-exist",level:4},{value:"Cumulus",id:"cumulus",level:4},{value:"How to set up your parachain",id:"how-to-set-up-your-parachain",level:3},{value:"Future PDKs",id:"future-pdks",level:3},{value:"Testing a Parachain",id:"testing-a-parachain",level:2},{value:"Rococo Testnet",id:"rococo-testnet",level:3},{value:"What Parachains are on Rococo Now?",id:"what-parachains-are-on-rococo-now",level:3},{value:"Obtaining ROC",id:"obtaining-roc",level:3},{value:"How to Connect to a Parachain",id:"how-to-connect-to-a-parachain",level:3},{value:"Parachain Playground",id:"parachain-playground",level:3},{value:"Deploy",id:"deploy",level:2},{value:"Parachain",id:"parachain",level:3},{value:"Resources",id:"resources",level:2}],d={toc:p},u="wrapper";function g(e){var a=e.components,s=(0,o.A)(e,i);return(0,r.yg)(u,(0,n.A)({},d,s,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Parachains are connected to and secured by the relay chain. They benefit from the ",(0,r.yg)("em",{parentName:"p"},"pooled security"),",\n",(0,r.yg)("em",{parentName:"p"},"thought-through governance"),", and overall ",(0,r.yg)("em",{parentName:"p"},"scalability")," of the heterogeneous sharding approach of\nthe network. Creating a parachain can be seen as creating a ",(0,r.yg)("strong",{parentName:"p"},"Layer-1 blockchain"),", which has its\nown logic and runs in parallel within the Polkadot ecosystem."),(0,r.yg)("p",null,"Developers can focus on creating state-of-the-art chains that take advantage of Polkadot's\nnext-generation approach. Some examples of what a parachain could be are:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"DeFi (Decentralized Finance) Applications"),(0,r.yg)("li",{parentName:"ul"},"Digital Wallets"),(0,r.yg)("li",{parentName:"ul"},"IoT (Internet of Things) Applications"),(0,r.yg)("li",{parentName:"ul"},"Gaming"),(0,r.yg)("li",{parentName:"ul"},"Web 3.0 Infrastructure")),(0,r.yg)("p",null,"and more."),(0,r.yg)("p",null,"Polkadot aims to be a bet against blockchain maximalism, where the success of Polkadot's\nheterogeneous multi-chain approach will play a key part in the overall advancement of Web 3.0 and\ndecentralized systems. As a result, Polkadot's parachain model was designed with the belief that the\ninternet of the future will have many different types of blockchains working together."),(0,r.yg)("h3",{id:"what-are-the-benefits-of-deploying-a-parachain"},"What are the Benefits of Deploying a Parachain?"),(0,r.yg)("p",null,"The parachain model attempts to alleviate five key ",(0,r.yg)("em",{parentName:"p"},"build")," failures of present technology stacks, as\ndescribed in the ",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.network/PolkaDotPaper.pdf"},"Polkadot Whitepaper"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Scalability"),": How much is spent on resources and will the network be subject to bottlenecks?"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Isolatability"),": Are the needs of many accounted for under the same framework?"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Developability"),": Is the system tooling, system support, and overall system integrity\ndependable?"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Governance"),": Can the network remain flexible to evolve and adapt over time? Can decisions be\nmade with sufficient inclusivity, legitimacy, and transparency to provide effective leadership of\na decentralised system?"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Applicability"),": Does the technology address a burning need on its own? Is other \u201cmiddleware\u201d\nrequired to bridge the gap to actual applications?")),(0,r.yg)("h4",{id:"shared-security-pooled-security"},(0,r.yg)("a",{parentName:"h4",href:"/docs/learn-parachains"},"Shared Security")," (Pooled Security)"),(0,r.yg)("p",null,"Parachains can lease the security of the Polkadot network by bonding ",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-DOT"},"DOT"),"\nfor a parachain slot. This means that the social costs of building a community around your project\nand convincing validators to participate in your network security are reduced. Polkadot has strong\nsecurity, and decentralised application projects wishing to benefit from this security would want to\nbecome a parachain to share in that pooled security."),(0,r.yg)("h4",{id:"on-chain-governance-thought-through-governance"},(0,r.yg)("a",{parentName:"h4",href:"/docs/learn-polkadot-opengov"},"On-Chain Governance")," (Thought-through Governance)"),(0,r.yg)("p",null,"Most governance systems in blockchains use an off-chain governance mechanism. Polkadot's on-chain\ngovernance encourages maximum participation of token holders and is frictionless and transparent. It\nalso enables ",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-runtime-upgrades"},"forkless upgrades"),"."),(0,r.yg)("h4",{id:"scalability"},"Scalability"),(0,r.yg)("p",null,"The sharded multichain network approach allows for what is essentially parallel computation\n(processing power) that can process several transactions in parallel. Isolated blockchains are often\nfaced with the network constraint of processing transactions in sequence, causing bottlenecks."),(0,r.yg)("h4",{id:"interoperability"},"Interoperability"),(0,r.yg)("p",null,"Any decentralised application or chain that wants to enable trustless messaging to other parachains\nalready connected to the relay chain would want to become a parachain. Interoperability between\nsovereign chains involves certain constraints and complex protocols to enable across a wide breadth\nof chains."),(0,r.yg)("p",null,"With Polkadot, you will get this feature out of the box if you build your application as a\nparachain. The ",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM format")," allows any parachains to communicate by passing\nmessages between them. Furthermore, as ",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-bridges"},"bridges")," to other chains are\nconnected (such as those to Bitcoin or Ethereum), Polkadot's parachains will be able to communicate\nwith these as well."),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"Despite the benefits of becoming a parachain, developers should be conscious of the challenges in\nbecoming a parachain, and whether building a blockchain with an end goal of becoming a parachain is\na viable one for their project.")),(0,r.yg)("p",null,"On Polkadot, you are able to put your blockchain\u2019s latest block head onto the relay chain. As a\nparachain, the blocks you submit are verified by validators with a Wasm runtime, which can be stored\non the relay chain. You also get the ability to communicate with other parachains using the\n",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-xcm"},"XCM")," format: an abstract message passing system. Message passing is tracked\non the relay chain - as such, you can prove the delivery of messages and facilitate trustless\ninteractions."),(0,r.yg)("p",null,"As you can place your blockchain\u2019s latest block head, you can achieve deterministic finalization for\nyour chain. The hard part of reaching finalization for blockchains tends to be the consensus, where,\nin the parachain model, a blockchain can offload consensus to the overall shared network, and focus\non block production. Since the validators have the Wasm runtime for all the parachains, your\nparachain shares the security of the validator pool with everyone on the relay chain."),(0,r.yg)("p",null,"Any validator in the validator pool can help validate your blockchain."),(0,r.yg)("h2",{id:"things-to-consider"},"Things to Consider"),(0,r.yg)("h3",{id:"para-nomics"},(0,r.yg)("a",{parentName:"h3",href:"/docs/learn-parachains#parachain-economies"},"Para-nomics")),(0,r.yg)("h4",{id:"digital-nation-states"},"Digital Nation States"),(0,r.yg)("p",null,"Parachains can be seen as autonomous agents; networks that act as decentralised digital nation\nstates. Parachains have their own communities, rules, economies, governance, treasuries, and\nrelationships with external chains. As a result, the economic policies within parachain ecosystems\nare subject to the developers and overall community of that parachain ecosystem; there isn't\nnecessarily a go-to economic model a parachain should follow."),(0,r.yg)("p",null,"Moreover, ",(0,r.yg)("em",{parentName:"p"},"becoming a parachain")," has an opportunity cost associated. Ideally, you can increase the\nvalue of the network by participating in the parachain selection process, and this should serve as a\ngood return on investment."),(0,r.yg)("h4",{id:"connecting-digital-economies"},"Connecting Digital Economies"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"/docs/learn-collator"},"Collators")," act as network maintainers and maintain a full node of a\nparachain. They can be incentivized with a native token payout from:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Transaction fees collected"),(0,r.yg)("li",{parentName:"ul"},"Parachain token sponsorship")),(0,r.yg)("h3",{id:"para-objects"},"Para-objects"),(0,r.yg)("admonition",{title:"The relay chain can host arbitrary state machines, not just blockchains.",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"The Polkadot network will encourage the connection and interoperability between different\n",(0,r.yg)("em",{parentName:"p"},"para-objects"),"."),(0,r.yg)("p",{parentName:"admonition"},"Here, para-objects are referring to objects on the network that operate in parallel, generally,\nparallelizable objects.")),(0,r.yg)("p",null,"These could be in the form of:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"System level chains (permanent chains): ",(0,r.yg)("a",{parentName:"li",href:"/docs/learn-auction"},"leased slots")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"/docs/learn-bridges"},"Bridge")," Hubs"),(0,r.yg)("li",{parentName:"ul"},"Nested relay chains")),(0,r.yg)("h3",{id:"migration"},"Migration"),(0,r.yg)("p",null,'Projects that are already functioning as "solochains" or in isolated environments may be interested\nin migrating onto the relay chain as a para-object. While the parachain model has its benefits, it\nmay not be the go-to strategy for some projects.'),(0,r.yg)("p",null,"As a path for migration onto Polkadot, it may be more viable to migrate to one of the chains in one\nof the reserved slots."),(0,r.yg)("p",null,"For instance, there are currently options for ",(0,r.yg)("a",{parentName:"p",href:"/docs/build-smart-contracts"},"smart contract deployment"),"\non Kusama through the networks that have secured a slot in the latest slot auctions."),(0,r.yg)("h2",{id:"implement-a-parachain"},"Implement a Parachain"),(0,r.yg)("p",null,"The Parachain Implementer's Guide is a significant work in progress and maintained by Parity Tech.\n",(0,r.yg)("a",{parentName:"p",href:"https://w3f.github.io/parachain-implementers-guide/"},(0,r.yg)("strong",{parentName:"a"},"The live version"))," is built from the source\nlocated in the official\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/master/polkadot/roadmap/implementers-guide"},"Polkadot repository"),"."),(0,r.yg)("h3",{id:"parachain-development-kit"},"Parachain Development Kit"),(0,r.yg)("p",null,"The Parachain Development Kit or ",(0,r.yg)("strong",{parentName:"p"},"PDK")," is a set of tools that allows developers to easily create a\nparachain. In practice, the PDK will consist of the following key components:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"State transition function")," : a way for your application to move from one state to another state."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("em",{parentName:"li"},"Collator node")," : a type of peer-to-peer node in the Polkadot network with certain\nresponsibilities regarding parachains.")),(0,r.yg)("h4",{id:"key-components"},"Key Components"),(0,r.yg)("p",null,"The state transition function (STF) can be an abstract way for an application to go from one state\nto another state. The only constraint that Polkadot places on this STF is that it must be easily\nverifiable -- usually through what we call a ",(0,r.yg)("em",{parentName:"p"},"witness")," or ",(0,r.yg)("em",{parentName:"p"},"proof"),". It must be so because the Relay\nChain validators will need to check that each state it receives from the collator node is correct\nwithout actually running through the entire computation. Some examples of these proofs include the\nProof-of-Validity blocks or zk-SNARKs, which require less computational resources to verify than\nthey do to generate. The verification asymmetry in the proof generation of the STF is one of the\nintegral insights that allows Polkadot to scale while keeping high-security guarantees."),(0,r.yg)("p",null,"A collator node is one of the types of network maintainers in the protocol. They are responsible for\n",(0,r.yg)("strong",{parentName:"p"},"keeping availability")," of the state of the parachain and the new states returned from the\niteration of the state transition function. They must remain online to keep track of the state and\nalso of the XCMP messages that it will route between itself and other parachains. Collator nodes are\nresponsible for passing the succinct proofs to the relay chain's validators and tracking the latest\nblocks from the relay chain. In essence, a collator node also acts as a light client for the relay\nchain. For more on collator nodes, see the ",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-collator"},"collator page"),"."),(0,r.yg)("h4",{id:"what-pdks-exist"},"What PDKs Exist?"),(0,r.yg)("p",null,"Currently, the only PDK is\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/master/substrate"},"Parity Substrate")," and\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/master/cumulus"},"Cumulus"),".\n",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("a",{parentName:"strong",href:"https://substrate.io/"},"Substrate"))," is a blockchain framework that provides the basic building\nblocks of a blockchain (things like the networking layer, consensus, a Wasm interpreter) while\nproviding an intuitive way to construct your runtime. Substrate is made to ease the process of\ncreating a new chain, but it does not provide support for relay chain compatibility directly. For\nthis reason, ",(0,r.yg)("inlineCode",{parentName:"p"},"Cumulus"),", an added ",(0,r.yg)("em",{parentName:"p"},"library")," contains all of the Polkadot compatibility glue code."),(0,r.yg)("admonition",{title:"Get started with Substrate",type:"note"},(0,r.yg)("p",{parentName:"admonition"},"The best way to get started with Substrate is to explore the\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.substrate.io/"},"Substrate Documentation")," maintained by\n",(0,r.yg)("a",{parentName:"p",href:"https://parity.io"},"Parity Technologies"),".")),(0,r.yg)("h4",{id:"cumulus"},"Cumulus"),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Cumulus clouds are shaped sort of like dots. Together, they form an intricate system that is\nbeautiful and functional.")),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/master/cumulus"},"Cumulus")," is an extension to\nSubstrate that makes it easy to make any Substrate-built runtime into a Polkadot-compatible\nparachain."),(0,r.yg)("p",null,"Cumulus Consensus is a consensus engine for Substrate that follows a relay chain. This runs a Relay\nChain node internally, and dictates to the client and synchronization algorithms which chain to\nfollow, finalize, and treat as correct."),(0,r.yg)("p",null,"See the\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/blob/master/cumulus/docs/overview.md"},"Cumulus overview"),"\nfor a more detailed description of Cumulus."),(0,r.yg)("p",null,"Cumulus is still in development, but the idea is that it should be simple to take a Substrate chain\nand add the parachain code by importing the crates and adding a single line of code. Keep up-to-date\nwith the latest Cumulus developments from the ",(0,r.yg)("a",{parentName:"p",href:"###cumulus"},"Cumulus section"),"."),(0,r.yg)("admonition",{type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Substrate and Cumulus provide a PDK from the abstraction of the blockchain format, but it is ",(0,r.yg)("strong",{parentName:"p"},"not\nnecessary")," that a parachain even needs to be a blockchain. For example, a parachain just needs to\nsatisfy the two constraints listed above: ",(0,r.yg)("em",{parentName:"p"},"state transition function")," and ",(0,r.yg)("em",{parentName:"p"},"collator node"),"."),(0,r.yg)("p",{parentName:"admonition"},"Everything else is up to the implementer of the PDK.")),(0,r.yg)("p",null,"Cumulus handles the network compatibility overhead that any parachain would need to implement to be\nconnected to the relay chain. This includes:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Cross-chain message passing (XCMP)"),(0,r.yg)("li",{parentName:"ul"},"Out-of-the-box Collator node setup"),(0,r.yg)("li",{parentName:"ul"},"An embedded full client of the relay chain"),(0,r.yg)("li",{parentName:"ul"},"Block authorship compatibility")),(0,r.yg)("p",null,"Are you interested in building a PDK? See the ",(0,r.yg)("a",{parentName:"p",href:"#future-pdks"},"future PDKs")," section for details."),(0,r.yg)("h3",{id:"how-to-set-up-your-parachain"},"How to set up your parachain"),(0,r.yg)("p",null,"After creating your chain runtime logic with Substrate, you will be able to compile it down to a\nWasm executable. This Wasm code blob will contain the entire state transition function of your\nchain, and is what you will need to deploy your project to the relay chain as a parachain."),(0,r.yg)("p",null,"Validators on the relay chain will use the submitted Wasm code to validate the state transitions of\nyour chain or thread, but doing this requires some additional infrastructure. A validator needs some\nway to stay up to date with the most recent state transitions, since relay chain nodes will not be\nrequired to also be nodes of your chain."),(0,r.yg)("p",null,"This is where the collator node comes into play. A collator is a maintainer of your parachain and\nperforms the critical action of producing new block candidates for your chain and passing them to\nrelay chain validators for inclusion in the relay chain."),(0,r.yg)("p",null,"Substrate comes with its own networking layer built-in but unfortunately only supports solo chains\n(that is, chains that do not connect to the relay chain). However, there is the Cumulus extension\nthat includes a collator node and allows for your Substrate-built logic to be compatible with the\nrelay chain as a parachain."),(0,r.yg)("h3",{id:"future-pdks"},"Future PDKs"),(0,r.yg)("admonition",{title:"Call to action",type:"info"},(0,r.yg)("p",{parentName:"admonition"},"Do you want to build a Parachain Development Kit from scratch? The Web3 Foundation is giving grants\nto teams who are doing this, learn more and apply on the\n",(0,r.yg)("a",{parentName:"p",href:"https://grants.web3.foundation"},"W3F grants page"),".")),(0,r.yg)("p",null,"One example of a PDK W3F is interested in supporting is a\n",(0,r.yg)("a",{parentName:"p",href:"https://ethresear.ch/t/roll-up-roll-back-snark-side-chain-17000-tps/3675"},"roll-up")," kit that allowed\ndevelopers to create SNARK-based parachains. If we review the roll-up write-up, we see that the\nsystem uses two roles: users that update ",(0,r.yg)("strong",{parentName:"p"},"state")," and an operator that ",(0,r.yg)("strong",{parentName:"p"},"aggregates the state\nupdates")," into a single on-chain update. It should be straightforward to see how we can translate\nthis to the parachain terms. The state transition function for a roll-up-like parachain would be\nupdating the state (in practice, most likely a Merkle tree, which would be easily verifiable) from\nthe user inputs. The operator would act as the collator node, which would aggregate the state and\ncreate the zk-SNARK proof that it would hand to a relay chain's validators for verification."),(0,r.yg)("p",null,"If you or your team are interested in developing a PDK feel free to apply for a grant on the\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program"},"W3F Grants Program repository"),". There may be grants\navailable for this type of work."),(0,r.yg)("h2",{id:"testing-a-parachain"},"Testing a Parachain"),(0,r.yg)("h3",{id:"rococo-testnet"},"Rococo Testnet"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/paritytech/polkadot-sdk/tree/master/cumulus#rococo-"},"Rococo")," is a testnet built\nfor testing parachains. Rococo utilizes Cumulus and\n",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-xcm-transport#hrmp-xcmp-lite"},"HRMP")," (Horizontal Relay-routed Message Passing) in\norder to send transfers and messages between parachains."),(0,r.yg)("p",null,"Rococo runs a few test system parachains, like\n",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-asset-hub-rpc.polkadot.io#/explorer"},"Asset Hub"),",\n",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-contracts-rpc.polkadot.io#/explorer"},"Contracts"),",\n",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-coretime-rpc.polkadot.io#/explorer"},"Coretime"),",\n",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo.api.encointer.org#/explorer"},"Encointer Lietaer"),",\nand\n",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-bridge-hub-rpc.polkadot.io#/explorer"},"Bridge Hub"),".\nIt also runs several externally developed parachains."),(0,r.yg)("h3",{id:"what-parachains-are-on-rococo-now"},"What Parachains are on Rococo Now?"),(0,r.yg)("p",null,"You can see the list of included parachains\n",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/parachains"},"here"),". A list of\nproposed parachains is available\n",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Frococo-rpc.polkadot.io#/parachains/proposals"},"here"),"."),(0,r.yg)("h3",{id:"obtaining-roc"},"Obtaining ROC"),(0,r.yg)("p",null,"Follow the instructions ",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-DOT#getting-tokens-on-the-rococo-testnet"},"here")," to get\nROCs tokens."),(0,r.yg)("h3",{id:"how-to-connect-to-a-parachain"},"How to Connect to a Parachain"),(0,r.yg)("p",null,"If you would like to connect to a parachain via ",(0,r.yg)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"Polkadot-JS Apps"),",\nyou may do so by clicking on the network selection at the top left-hand corner of the navigation and\nselecting any parachain of choice."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"rococo parachains",src:t(9057).A,width:"544",height:"538"})),(0,r.yg)("p",null,'For the purpose of these following examples, we will be using the Rococo testnet "Custom Node"\nunderneath "Development", following the\n',(0,r.yg)("a",{parentName:"p",href:"https://docs.substrate.io/reference/how-to-guides/parachains/connect-to-a-relay-chain/"},"parachain tutorials"),"."),(0,r.yg)("h3",{id:"parachain-playground"},"Parachain Playground"),(0,r.yg)("p",null,"You can also take advantage of the account functions offered on Polkadot-JS Apps to test the entire\nParachain onboarding process (e.g. crowdloans, auctions, registrations)."),(0,r.yg)("p",null,"Start a local node on ",(0,r.yg)("a",{parentName:"p",href:"/docs/maintain-networks###westend-test-network"},"Westend")," by running:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"polkadot --chain=westend-dev --alice\n")),(0,r.yg)("p",null,"Then, connect your local node with Polkadot-JS Apps."),(0,r.yg)("p",null,(0,r.yg)("img",{alt:"parachains playground",src:t(78353).A,width:"2528",height:"668"})),(0,r.yg)("h2",{id:"deploy"},"Deploy"),(0,r.yg)("p",null,"Substrate-based chains, including the Polkadot and Kusama relay chains, use an\n",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-account-advanced#address-format"},"SS58 encoding")," for their address formats.\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/paritytech/ss58-registry/blob/main/ss58-registry.json"},"This page")," serves as the\ncanonical registry for teams to see which chain corresponds to a given prefix, and which prefixes\nare available."),(0,r.yg)("h3",{id:"parachain"},"Parachain"),(0,r.yg)("p",null,"To include your parachain into the Polkadot network, you will need to acquire a parachain slot."),(0,r.yg)("p",null,"Parachain slot leases are acuqired through open auctions, the mechanics of which can be found on the\n",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-auction"},"parachain auction")," page. With\n",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-agile-coretime"},"Agile Coretime,")," these parachain lease auctions will be\ndeprecated and parachains can ",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-guides-coretime-marketplaces"},"purchase coretime")," to\nproduce blocks\n",(0,r.yg)("a",{parentName:"p",href:"/docs/learn-parachains#parachains-vs-on-demand-parachains"},"continuously or on-demand"),"."),(0,r.yg)("h2",{id:"resources"},"Resources"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://docs.substrate.io/reference/how-to-guides/parachains/"},"Parachain tutorials")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://polkadot.network/blog/common-good-parachains-an-introduction-to-governance-allocated-parachain-slots/"},"System (Common Good) Parachains")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://polkadot.network/blog/the-launch-of-parachains/"},"The Launch of Parachains")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://medium.com/polkadot-network/parathreads-pay-as-you-go-parachains-7440d23dde06"},"Parathreads: Pay-as-you-go Parachains")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://medium.com/polkadot-network/polkadot-bridges-connecting-the-polkadot-ecosystem-with-external-networks-1118916392e3"},"Polkadot Bridges")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://polkadot.network/blog/the-path-of-a-parachain-block/"},"The Path of a Parachain Block")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.crowdcast.io/e/polkadot-path-of-a-parachain-block?utm_source=profile&utm_medium=profile_web&utm_campaign=profile"},"The Path of a Parachain Block (Video)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://polkadot.network/polkadot-parachain-slots/"},"Polkadot Parachain Slots")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=fYc1yolanoE"},"How to become a parachain on Polkadot (Video)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://polkadot.network/blog/trusted-execution-environments-and-the-polkadot-ecosystem/"},"Trusted Execution Environments and the Polkadot Ecosystem"))))}g.isMDXComponent=!0},78353:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/parachain-playground-7873519d5357d27cd254133f7c6ae79f.png"},9057:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/polkadotjs_network_parachains-76ab1faa61e1f8677724db7cbf2c16a5.png"}}]);