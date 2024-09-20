"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1067],{15680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>m});var r=a(96540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),h=n,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},82444:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=a(58168),n=a(98587),o=(a(96540),a(15680)),i=["components"],l={id:"build-oracle",title:"Oracles",sidebar_label:"Oracles",description:"Information about building with oracles.",keywords:["build","oracles","contracts"],slug:"../build-oracle"},c=void 0,s={unversionedId:"build/build-oracle",id:"build/build-oracle",title:"Oracles",description:"Information about building with oracles.",source:"@site/../docs/build/build-oracle.md",sourceDirName:"build",slug:"/build-oracle",permalink:"/docs/build-oracle",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/build/build-oracle.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1726729589,formattedLastUpdatedAt:"Sep 19, 2024",frontMatter:{id:"build-oracle",title:"Oracles",sidebar_label:"Oracles",description:"Information about building with oracles.",keywords:["build","oracles","contracts"],slug:"../build-oracle"}},d={},u=[],p={toc:u},h="wrapper";function m(e){var t=e.components,a=(0,n.A)(e,i);return(0,o.yg)(h,(0,r.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"In the blockchain context, an ",(0,o.yg)("em",{parentName:"p"},"oracle")," is a way to bring real-world data onto the blockchain so that\nit can be used by a decentralized application."),(0,o.yg)("p",null,"Oracles serve many purposes for application builders. For example:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Most stablecoin designs use an oracle to bring in data of the exchange rate of assets, in order to\npeg their value to a real world currency."),(0,o.yg)("li",{parentName:"ul"},"Synthetic assets use oracles as price feeds in order to determine if the underlying cryptocurrency\ncan sufficiently collateralize the debt position."),(0,o.yg)("li",{parentName:"ul"},"Prediction markets use oracles to decide the outcome of real world events and determine the payout\nof the prediction shares."),(0,o.yg)("li",{parentName:"ul"},"Decentralized insurance markets use oracles to bring in information about whether a claim is valid\nor not.")),(0,o.yg)("p",null,"Oracle solutions range from centralized and trusted to decentralized and game-theory based. On the\ncentralized end of the spectrum, an oracle could be a single account that has the authority to\ndictate the real-world data on-chain. On the decentralized end, a\n",(0,o.yg)("a",{parentName:"p",href:"https://blog.ethereum.org/2014/03/28/schellingcoin-a-minimal-trust-universal-data-feed/"},'complex game of "chicken"'),"\ncan be played among various staked actors who risk getting slashed if they don't submit the same\ndata as everyone else. Solutions such as\n",(0,o.yg)("a",{parentName:"p",href:"https://polkadot.network/chainlink-reaches-milestone-with-polkadot/"},"Chainlink")," fit somewhere in\nthe middle, where the amount of trust you put into the reporting oracles can be adjusted based on\nyour preferences. A Chainlink\n",(0,o.yg)("a",{parentName:"p",href:"https://github.com/smartcontractkit/chainlink-polkadot/blob/master/pallet-chainlink-feed/README.md"},"Feed Pallet"),"\nwas recently released to allow smart contract applications across Polkadot to access price reference\ndata, made available as a Substrate oracle pallet. ",(0,o.yg)("a",{parentName:"p",href:"https://acurast.com/"},"Acurast")," is another\nsolution that enables developers to define their off-chain data and computation requirements and\nreceive the outputs to the ",(0,o.yg)("a",{parentName:"p",href:"https://docs.acurast.com/integrations/substrate"},"Acurast Pallet")," and EVM\nor WASM environments."),(0,o.yg)("p",null,"When using an oracle in your application you should be aware of the benefits and risks that are\nbaked into its specific model. As the Polkadot ecosystem develops and oracle parachains begin to\nappear, this article will be updated with a comparison of the different solutions and the benefits\nand drawbacks that each provide."))}m.isMDXComponent=!0}}]);