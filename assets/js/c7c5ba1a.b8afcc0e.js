"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9476],{15680:(e,t,a)=>{a.d(t,{xA:()=>u,yg:()=>y});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(a),h=r,y=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return a?n.createElement(y,i(i({ref:t},u),{},{components:a})):n.createElement(y,i({ref:t},u))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},3514:(e,t,a)=>{a.d(t,{A:()=>f});var n=a(96540),r=a(20053),o=a(84142),i=a(75489),s=a(16654),c=a(21312);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){var t=e.href,a=e.children;return n.createElement(i.A,{href:t,className:(0,r.A)("card padding--lg",l.cardContainer)},a)}function d(e){var t=e.href,a=e.icon,o=e.title,i=e.description;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,r.A)("text--truncate",l.cardTitle),title:o},a," ",o),i&&n.createElement("p",{className:(0,r.A)("text--truncate",l.cardDescription),title:i},i))}function p(e){var t,a=e.item,r=(0,o._o)(a);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:a.label,description:null!=(t=a.description)?t:(0,c.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:a.items.length})}):null}function h(e){var t,a,r=e.item,i=(0,s.A)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,o.cC)(null!=(t=r.docId)?t:void 0);return n.createElement(d,{href:r.href,icon:i,title:r.label,description:null!=(a=r.description)?a:null==c?void 0:c.description})}function y(e){var t=e.item;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function m(e){var t=e.className,a=(0,o.$S)();return n.createElement(f,{items:a.items,className:t})}function f(e){var t=e.items,a=e.className;if(!t)return n.createElement(m,e);var i=(0,o.d1)(t);return n.createElement("section",{className:(0,r.A)("row",a)},i.map((function(e,t){return n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(y,{item:e}))})))}},19365:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(96540),r=a(20053);const o={tabItem:"tabItem_Ymn6"};function i(e){var t=e.children,a=e.hidden,i=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(o.tabItem,i),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>k});var n=a(58168),r=a(96540),o=a(20053),i=a(23104),s=a(56347),c=a(57485),l=a(31682),u=a(89466);function d(e){return function(e){var t,a;return null!=(t=null==(a=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(a);return function(e){var t=(0,l.X)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function h(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function y(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,o=(0,s.W6)(),i=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,c.aZ)(i),(0,r.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function m(e){var t,a,n,o,i=e.defaultValue,s=e.queryString,c=void 0!==s&&s,l=e.groupId,d=p(e),m=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:d})})),f=m[0],g=m[1],v=y({queryString:c,groupId:l}),b=v[0],w=v[1],k=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:l}.groupId),a=(0,u.Dv)(t),n=a[0],o=a[1],[n,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=k[0],A=k[1],x=function(){var e=null!=b?b:N;return h({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){x&&g(x)}),[x]),{selectedValue:f,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);g(e),w(e),A(e)}),[w,A,d]),tabValues:d}}var f=a(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){var t=e.className,a=e.block,s=e.selectedValue,c=e.selectValue,l=e.tabValues,u=[],d=(0,i.a_)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,a=u.indexOf(t),n=l[a].value;n!==s&&(d(t),c(n))},h=function(e){var t,a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var n,r=u.indexOf(e.currentTarget)+1;a=null!=(n=u[r])?n:u[0];break;case"ArrowLeft":var o,i=u.indexOf(e.currentTarget)-1;a=null!=(o=u[i])?o:u[u.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":a},t)},l.map((function(e){var t=e.value,a=e.label,i=e.attributes;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:function(e){return u.push(e)},onKeyDown:h,onClick:p},i,{className:(0,o.A)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":s===t})}),null!=a?a:t)})))}function b(e){var t=e.lazy,a=e.children,n=e.selectedValue,o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var i=o.find((function(e){return e.props.value===n}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function w(e){var t=m(e);return r.createElement("div",{className:(0,o.A)("tabs-container",g.tabList)},r.createElement(v,(0,n.A)({},e,t)),r.createElement(b,(0,n.A)({},e,t)))}function k(e){var t=(0,f.A)();return r.createElement(w,(0,n.A)({key:String(t)},e))}},83538:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var n=a(58168),r=a(98587),o=(a(96540),a(15680)),i=(a(11470),a(19365),a(3514)),s=["components"],c={id:"learn-accounts",title:"Polkadot Accounts",sidebar_label:"Polkadot Accounts",description:"Polkadot Accounts, Account Identity, and Account Reaping.",keywords:["account","polkadot account","polkadotjs","indices","identity","reaping"],slug:"../learn-accounts"},l=void 0,u={unversionedId:"learn/learn-accounts",id:"learn/learn-accounts",title:"Polkadot Accounts",description:"Polkadot Accounts, Account Identity, and Account Reaping.",source:"@site/../docs/learn/learn-accounts.md",sourceDirName:"learn",slug:"/learn-accounts",permalink:"/docs/learn-accounts",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-accounts.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1726731604,formattedLastUpdatedAt:"Sep 19, 2024",frontMatter:{id:"learn-accounts",title:"Polkadot Accounts",sidebar_label:"Polkadot Accounts",description:"Polkadot Accounts, Account Identity, and Account Reaping.",keywords:["account","polkadot account","polkadotjs","indices","identity","reaping"],slug:"../learn-accounts"},sidebar:"docs",previous:{title:"Basics",permalink:"/docs/learn-basics-index"},next:{title:"Account Balances",permalink:"/docs/learn-account-balances"}},d={},p=[{value:"Account Address",id:"account-address",level:2},{value:"Mnemonic Seed Phrase",id:"mnemonic-seed-phrase",level:3},{value:"Account Generation",id:"account-generation",level:3},{value:"Backing Up Accounts",id:"backing-up-accounts",level:3},{value:"Existential Deposit and Reaping",id:"existential-deposit-and-reaping",level:2}],h={toc:p},y="wrapper";function m(e){var t=e.components,a=(0,r.A)(e,s);return(0,o.yg)(y,(0,n.A)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("admonition",{title:"User friendly wallets",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Create your Polkadot accounts with any of the secure and user-friendly wallets listed on the\n",(0,o.yg)("a",{parentName:"p",href:"https://www.polkadot.network/ecosystem/wallets/"},"Polkadot website"),"."),(0,o.yg)("p",{parentName:"admonition"},"See the ",(0,o.yg)("a",{parentName:"p",href:"./wallets-index"},"Wallets")," section for more information about different wallet options\navailable, and specifically the ",(0,o.yg)("a",{parentName:"p",href:"/docs/wallets-and-extensions"},"wallets and extensions")," page,\nwhich lists the user friendly wallet projects funded by the Polkadot/Kusama Treasuries or by the\n",(0,o.yg)("a",{parentName:"p",href:"/docs/grants"},"Web3 Foundation Grants Program"),".")),(0,o.yg)("p",null,"This document covers the basics of accounts in the Polkadot ecosystem. See the\n",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-account-advanced"},"Advanced Account")," page for more information about accounts such as\n",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-account-advanced#derivation-paths"},"account derivation")," and\n",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-account-advanced#indices"},"indices"),". For a more in-depth explanation of the cryptography\nbehind accounts, please see the ",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-cryptography"},"cryptography page"),"."),(0,o.yg)(i.A,{mdxType:"DocCardList"}),(0,o.yg)("h2",{id:"account-address"},"Account Address"),(0,o.yg)("p",null,"An address is the public part of an account. The private part is the key used to access this\naddress. The public and private parts together make up an account. You can think of the public\naddress of your account, like your mailbox and the private key like the key to open that mailbox.\nAnybody can send mail to your mailbox, but only you can access it as only you have access to its\nkey. In the context of accounts, anybody can send tokens to your public address, but only you can\ntransact with them using your private key. That is why you should keep your private key secret."),(0,o.yg)("h3",{id:"mnemonic-seed-phrase"},"Mnemonic Seed Phrase"),(0,o.yg)("p",null,"A user's account requires a private key that can sign on to one of the\n",(0,o.yg)("a",{parentName:"p",href:"/docs/build-protocol-info#cryptography"},"supported curves and signature schemes"),". Without a\nprivate key, an account cannot sign anything. In Polkadot, there are some exceptions of accounts\nthat do not have known private keys (i.e. keyless accounts). Such accounts are\n",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-account-multisig"},"multi-signature accounts"),",\n",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-proxies-pure#anonymous-proxy-pure-proxy"},"pure proxies"),", and\n",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-account-advanced#system-accounts"},"system accounts")," that are not discussed here and are\nmeant for an advanced audience."),(0,o.yg)("p",null,"A typical 12-word mnemonic seed phrase is shown below."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"'caution juice atom organ advance problem want pledge someone senior holiday very'\n")),(0,o.yg)("p",null,"Its corresponding ",(0,o.yg)("em",{parentName:"p"},"private/public keypair")," is also shown."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"Secret seed (Private key): 0x056a6a4e203766ffbea3146967ef25e9daf677b14dc6f6ed8919b1983c9bebbc\nPublic key (SS58): 5F3sa2TJAWMqDhXG6jhV4N8ko9SxwGy8TpaNS1repo5EYjQX\n")),(0,o.yg)("p",null,"Polkadot default address format is the ",(0,o.yg)("inlineCode",{parentName:"p"},"MultiAddress")," type. This means the same mnemonic phrase will\ngenerate public keys for different parachains. For more information, see the\n",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-account-advanced#address-format"},"Address Format")," section on the\n",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-account-advanced"},"Advanced Account")," page."),(0,o.yg)("h3",{id:"account-generation"},"Account Generation"),(0,o.yg)("p",null,"Usually, there are two ways of generating a mnemonic seed:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},'On a "hot" device, i.e. a device that is connected to the internet'),(0,o.yg)("li",{parentName:"ul"},'On a "cold" device, i.e. a device that is not (and ideally will never be) connected to the\ninternet')),(0,o.yg)("p",null,"Hot wallets are susceptible to a wide range of attacks, so it is recommended to use cold wallets\nwhen dealing with non-trivial amounts of funds."),(0,o.yg)("p",null,"Generating a mnemonic seed on a browser extension or a mobile application will create a hot key or\nhot wallet. Create your Polkadot accounts with a secure and user-friendly wallet listed on the\n",(0,o.yg)("a",{parentName:"p",href:"https://www.polkadot.network/ecosystem/wallets/"},"Polkadot website"),". See also the\n",(0,o.yg)("a",{parentName:"p",href:"./wallets-index"},"Wallets")," section for more information about wallets and the\n",(0,o.yg)("a",{parentName:"p",href:"/docs/wallets-and-extensions"},"wallets and extensions")," page for wallets and browser\nextensions funded by the Polkadot/Kusama Treasuries or by the\n",(0,o.yg)("a",{parentName:"p",href:"/docs/grants"},"Web3 Foundation Grants Program"),"."),(0,o.yg)("p",null,"Cold keys are generated on special devices such as those provided by ",(0,o.yg)("a",{parentName:"p",href:"/docs/ledger"},"Ledger"),".\nAdditionally, you can generate your account using the ",(0,o.yg)("a",{parentName:"p",href:"/docs/polkadot-vault"},"Polkadot Vault"),"\nmobile app (you need a dedicated air-gapped Android or iOS-compatible smartphone that you are\ncomfortable using only for Polkadot Vault), or a dedicated hardware implementation of Polkadot Vault\nsuch as ",(0,o.yg)("a",{parentName:"p",href:"https://www.kampe.la/"},"the Kampela Signer"),"."),(0,o.yg)("p",null,"Usually, browser extensions and mobile devices have options to securely import accounts from cold\nwallets. Note that the private keys of those accounts will remain on the cold wallet, meaning that\nyou will always need the device to sign any transaction. Exceptions exist where you can generate hot\nwallet based ",(0,o.yg)("a",{parentName:"p",href:"/docs/learn-proxies"},"proxy accounts")," and sign on behalf of a cold wallet account\nwithout connecting the cold device. This is practical, especially for transactions made frequently."),(0,o.yg)("h3",{id:"backing-up-accounts"},"Backing Up Accounts"),(0,o.yg)("p",null,"Depending on what software you use to access your account, there are various ways to back up and\nrestore your account. It is a good idea to back your information up and keep it secure. In general,\nas long as you know how you created your account and have the mnemonic seed phrase or the JSON\nbackup file (and password) stored securely, you can restore your account."),(0,o.yg)("h2",{id:"existential-deposit-and-reaping"},"Existential Deposit and Reaping"),(0,o.yg)("admonition",{type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Visit\n",(0,o.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000168651-what-is-the-existential-deposit-"},(0,o.yg)("strong",{parentName:"a"},"this support page")),"\nfor more information about existential deposit.")),(0,o.yg)("p",null,"When you generate an account (address), you only generate a ",(0,o.yg)("em",{parentName:"p"},"key")," that lets you access it. The\naccount does not exist yet on-chain. For that, it needs the\n",(0,o.yg)("a",{parentName:"p",href:"/docs/chain-state-values#existential-deposit"},"existential deposit"),"."),(0,o.yg)("p",null,"Having an account go below the existential deposit causes that account to be ",(0,o.yg)("em",{parentName:"p"},"reaped"),". The account\nwill be wiped from the blockchain's state to conserve space, along with any funds in that address.\nYou do not lose access to the reaped address - as long as you have your private key or recovery\nphrase, you can still use the address - but it needs a top-up of another existential deposit to be\nable to interact with the chain."),(0,o.yg)("p",null,"Transaction fees cannot cause an account to be reaped. Since fees are deducted from the account\nbefore any other transaction logic, accounts with balances ",(0,o.yg)("em",{parentName:"p"},"equal to")," the existential deposit cannot\nconstruct a valid transaction. Additional funds will need to be added to cover the transaction fees."),(0,o.yg)("admonition",{title:"The existential deposit can be different on parachains",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"Having an Existential Deposit (ED) on the relay chain account does not guarantee the liveness of the\nsame account on its system chains or parachains. Parachains typically define ED for an account in\ntheir native tokens but can also configure it with tokens that are deemed sufficient. For example,\nthe Existential Deposit on Polkadot Asset Hub can be in DOT or sufficient assets like USDC or USDT.")),(0,o.yg)("p",null,"Here's another way to think about existential deposits. Ever notice those ",(0,o.yg)("inlineCode",{parentName:"p"},"Thumbs.db")," files on\nWindows or ",(0,o.yg)("inlineCode",{parentName:"p"},".DS_Store")," files on Mac? Those are junk; they serve no specific purpose other than\nmaking previews a bit faster. If a folder is empty saved for such a file, you can remove the folder\nto clear the junk off your hard drive. That does not mean you will lose access to this folder\nforever - you can always recreate it. You have the ",(0,o.yg)("em",{parentName:"p"},"key"),", after all - you're the computer's owner.\nIt just means you want to keep your computer clean until you maybe need this folder again and\nrecreate it. Your address is like this folder - it gets removed from the chain when nothing is in it\nbut gets put back when it has the existential deposit."),(0,o.yg)("hr",null),(0,o.yg)("admonition",{title:"Polkadot-JS Guides",type:"info"},(0,o.yg)("p",{parentName:"admonition"},"If you are an advanced user, see the ",(0,o.yg)("a",{parentName:"p",href:"./learn-guides-accounts"},"Polkadot-JS guides about accounts"),".")))}m.isMDXComponent=!0}}]);