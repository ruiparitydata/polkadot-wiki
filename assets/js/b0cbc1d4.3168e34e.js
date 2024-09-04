(self.webpackChunk=self.webpackChunk||[]).push([[7826],{47379:(e,a,t)=>{"use strict";t.d(a,{A:()=>u});var o=t(90675),n=t(10467),i=t(96540),s=t(69761),r=t(82285),l=t(11135);function d(e,a,t){return p.apply(this,arguments)}function p(){return(p=(0,n.A)((0,o.A)().mark((function e(a,t,n){var i,l,d,p,h;return(0,o.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=void 0,l=void 0,e.t0=a,e.next="polkadot"===e.t0?5:"kusama"===e.t0?7:"statemine"===e.t0?9:"statemint"===e.t0?11:"polkadotpeople"===e.t0?13:"kusamapeople"===e.t0?15:17;break;case 5:return i="wss://rpc.polkadot.io",e.abrupt("break",18);case 7:return i="wss://kusama-rpc.polkadot.io/",e.abrupt("break",18);case 9:return i="wss://statemine-rpc.polkadot.io/",e.abrupt("break",18);case 11:return i="wss://statemint-rpc.polkadot.io/",e.abrupt("break",18);case 13:return i="wss://polkadot-people-rpc.polkadot.io/",e.abrupt("break",18);case 15:return i="wss://kusama-people-rpc.polkadot.io/",e.abrupt("break",18);case 17:console.log("Unknown socket url provided, no connection made.");case 18:if(void 0!==i){e.next=22;break}return e.abrupt("return");case 22:return d=new s.E(i),e.next=25,r.G.create({provider:d});case 25:p=e.sent,(h=t.split(".")).forEach((function(e){e in p&&(p=p[e])})),e.t1=h[0],e.next="consts"===e.t1?31:"query"===e.t1?33:38;break;case 31:return l=p.toString(),e.abrupt("break",39);case 33:return e.next=35,p();case 35:return l=(l=e.sent).toString(),e.abrupt("break",39);case 38:console.log("Unknown path prefix ("+h[0]+") in "+t);case 39:return e.abrupt("return",l);case 40:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,a,t,o){switch(a){case"humanReadable":(0,l.HumanReadable)(e,t,o);break;case"precise":(0,l.Precise)(e,t,o);break;case"blocksToDays":(0,l.BlocksToDays)(e,o);break;case"erasToDays":(0,l.ErasToDays)(e,o,t);break;case"percentage":(0,l.Percentage)(e,o);break;case"permillToPercent":(0,l.PermillToPercent)(e,o);break;case"arrayLength":(0,l.ArrayLength)(e,o);break;default:return void console.log("Ignoring unknown filter type")}}const u=function(e){var a=e.network,t=e.path,s=e.defaultValue,r=e.filter,l=void 0===r?void 0:r,p=(0,i.useState)(""),u=p[0],c=p[1];return a=a.toLowerCase(),(0,i.useEffect)((function(){void 0!==l?h(s.toString(),l,a,c):c(s.toString());var e=void 0;switch(a){case"polkadot":e="wss://rpc.polkadot.io";break;case"kusama":e="wss://kusama-rpc.polkadot.io/";break;case"statemine":e="wss://kusama-asset-hub-rpc.polkadot.io/";break;case"statemint":e="wss://polkadot-asset-hub-rpc.polkadot.io/";break;case"kusamapeople":e="wss://kusama-people-rpc.polkadot.io";break;case"polkadotpeople":e="wss://polkadot-people-rpc.polkadot.io";break;default:console.log("Unknown network provided, "+a)}if(void 0===e)console.log("Failed to connect to a valid websocket, applying default");else{var i=function(){var e=(0,n.A)((0,o.A)().mark((function e(){var n;return(0,o.A)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(a,t,c);case 2:if(void 0!==(n=e.sent)){e.next=7;break}return e.abrupt("return");case 7:void 0!==l?h(n,l,a,c):c(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();try{i()}catch(r){console.log(r)}}}),[]),u}},11135:e=>{var a="polkadot",t="kusama",o="statemine",n="statemint",i="polkadotpeople",s="kusamapeople",r={polkadot:{precision:1e10,symbol:"DOT"},kusama:{precision:1e12,symbol:"KSM"},statemint:{precision:1e10,symbol:"DOT"},statemine:{precision:1e12,symbol:"KSM"},polkadotpeople:{precision:1e10,symbol:"DOT"},kusamapeople:{precision:1e12,symbol:"KSM"}};e.exports={HumanReadable:function(e,l,d){var p=void 0;if(l===a||l===n)p=3;else if(l===t||l===o||l===i)p=6;else{if(l!=s)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");p=8}e=parseFloat(e),d((e=Number.isInteger(e/r[l].precision)?e/r[l].precision+" "+r[l].symbol:(e/r[l].precision).toFixed(p)+" "+r[l].symbol).toString())},Precise:function(e,a,t){t(e=(e=parseFloat(e))/r[a].precision+" "+r[a].symbol)},BlocksToDays:function(e,a){a((e=6*e/86400).toString())},ErasToDays:function(e,r,l){var d=void 0;if(l===a||l===n||l==i)d=1;else{if(l!==t&&l!==o&&l!=s)return void console.log("Unknown network type found when attempting to apply 'Human Readable' filter");d=4}r((e/=d).toString())},Percentage:function(e,a){a((e/=1e7).toString())},PermillToPercent:function(e,a){a((e/=1e4).toString())},ArrayLength:function(e,a){a((e=e.split(",").length).toString())}}},49969:(e,a,t)=>{"use strict";t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var o=t(58168),n=t(98587),i=(t(96540),t(15680)),s=(t(47379),["components"]),r={id:"staking-dashboard",title:"Polkadot Staking Dashboard",sidebar_label:"Staking Dashboard",description:"Everything about the Polkadot Staking Dashboard.",keywords:["ledger","staking","polkadot","dashboard"],slug:"../staking-dashboard"},l=void 0,d={unversionedId:"general/staking-dashboard",id:"general/staking-dashboard",title:"Polkadot Staking Dashboard",description:"Everything about the Polkadot Staking Dashboard.",source:"@site/../docs/general/staking-dashboard.md",sourceDirName:"general",slug:"/staking-dashboard",permalink:"/docs/staking-dashboard",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/general/staking-dashboard.md",tags:[],version:"current",lastUpdatedBy:"Filippo",lastUpdatedAt:1725286484,formattedLastUpdatedAt:"Sep 2, 2024",frontMatter:{id:"staking-dashboard",title:"Polkadot Staking Dashboard",sidebar_label:"Staking Dashboard",description:"Everything about the Polkadot Staking Dashboard.",keywords:["ledger","staking","polkadot","dashboard"],slug:"../staking-dashboard"},sidebar:"docs",previous:{title:"Parity Data Dashboards",permalink:"/docs/parity-data-dashboards"},next:{title:"Community & Contributors",permalink:"/docs/community-index"}},p={},h=[{value:"Preliminary Notes",id:"preliminary-notes",level:2},{value:"Using the Polkadot Staking Dashboard",id:"using-the-polkadot-staking-dashboard",level:2},{value:"Overview",id:"overview",level:2},{value:"Stake",id:"stake",level:2},{value:"Pools",id:"pools",level:3},{value:"Nominate",id:"nominate",level:3},{value:"Payouts",id:"payouts",level:3},{value:"After Staking",id:"after-staking",level:3},{value:"Validators",id:"validators",level:2},{value:"Support",id:"support",level:2},{value:"Network",id:"network",level:2}],u={toc:h},c="wrapper";function m(e){var a=e.components,r=(0,n.A)(e,s);return(0,i.yg)(c,(0,o.A)({},u,r,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"preliminary-notes"},"Preliminary Notes"),(0,i.yg)("p",null,"The ",(0,i.yg)("a",{parentName:"p",href:"https://staking.polkadot.cloud/#/overview"},"Polkadot Staking Dashboard")," supports\n",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-proxies"},(0,i.yg)("strong",{parentName:"a"},"proxy accounts"))," and you can import your\n",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-staking-advanced#staking-proxies"},"staking proxy")," (for nominators) or\n",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-proxies#non-transfer-proxy"},"non-transfer proxy")," (for nomination pool admins and\nmembers)."),(0,i.yg)("p",null,"The dashboard also has ",(0,i.yg)("strong",{parentName:"p"},"native ",(0,i.yg)("a",{parentName:"strong",href:"/docs/ledger"},"Ledger")," support"),", meaning that you do not need an\nextension or a wallet to use it; you just need your Ledger device.\n",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-guides-accounts#metadata-updates-with-the-polkadot-js-browser-extension"},"Metadata updates"),"\nare thus not necessary, as you only need to keep your Ledger apps up-to-date."),(0,i.yg)("p",null,"Before using the dashboard, make sure you have a\n",(0,i.yg)("a",{parentName:"p",href:"/docs/wallets-and-extensions#browser-extensions"},"wallet or extension")," with a funded\nPolkadot account. Note that accounts on\nwallets or extensions can be imported from ",(0,i.yg)("a",{parentName:"p",href:"/docs/ledger"},"Ledger")," or\n",(0,i.yg)("a",{parentName:"p",href:"/docs/polkadot-vault"},"Polkadot Vault"),"."),(0,i.yg)("p",null,"On top of the ",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-accounts#existential-deposit-and-reaping"},"existential deposit"),", you\nneed some free balance to pay for\n",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-transactions#transaction-fees"},"transaction fees")," and\n",(0,i.yg)("a",{parentName:"p",href:"/docs/chain-state-values#minimum-bond-to-participate-in-staking"},"the minimum amount to place your nominations or join a nomination pool"),".\nFor more information about staking on Polkadot\nvisit the ",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-staking"},"staking page")," and the\n",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-staking-advanced"},"advanced staking page"),"."),(0,i.yg)("h2",{id:"using-the-polkadot-staking-dashboard"},"Using the Polkadot Staking Dashboard"),(0,i.yg)("p",null,"The ",(0,i.yg)("a",{parentName:"p",href:"https://staking.polkadot.cloud/#/overview"},"Polkadot Staking Dashboard")," is a tool only dedicated\nto ",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-staking"},"staking")," on Polkadot, ",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-comparisons-kusama"},"Kusama"),"\n(Polkadot's canary network) and ",(0,i.yg)("a",{parentName:"p",href:"/docs/maintain-networks#westend-test-network"},"Westend"),"\n(Polkadot's test network)."),(0,i.yg)("p",null,"The dashboard is not a wallet, meaning that you cannot transfer funds between accounts. To fund\naccounts, you can use ",(0,i.yg)("a",{parentName:"p",href:"/docs/wallets-and-extensions"},"wallets and extension"),". You can participate in\nstaking by being a ",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-nominator"},"nominator")," or a member of a\n",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"nomination pool"),". Once you have a funded account, you need to\nconnect it to the dashboard (connect button on the top-right corner), this will allow you to\ninteract with Polkadot's native staking."),(0,i.yg)("admonition",{title:"The dashboard is a Web3 dApp",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"The dashboard is a decentralized application (dApp), and to login you do not need to sign up with an\nemail and password but just need an account created on the supported non-custodial wallets. Any\ntransaction to be submitted needs to be signed by you. Also, if you use light clients, which are\nresistant to censorship, you interact trustlessly with the network without intermediaries. Welcome\nto the world of ",(0,i.yg)("a",{parentName:"p",href:"/docs/web3-and-polkadot"},"true Web3"),"!")),(0,i.yg)("p",null,"Note the pictures on this page refer to Kusama, but the same applies to Polkadot and Westend.\nThe structure of this page follows the sidebar of the staking dashboard. Here you will learn about\nthe main features of the dashboard. If you need more information, see the\n",(0,i.yg)("a",{parentName:"p",href:"https://youtu.be/hvXLc4H7rA4"},"Walkthrough Tutorial"),"."),(0,i.yg)("admonition",{title:"Walk-through Video Tutorials",type:"info"},(0,i.yg)("ul",{parentName:"admonition"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://youtu.be/F59N3YKYCRs"},(0,i.yg)("strong",{parentName:"a"},"Nominating")),": Stake your tokens, choose your best validators,\nand start your staking journey on Polkadot."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://youtu.be/dDIG7QAApig"},(0,i.yg)("strong",{parentName:"a"},"Becoming a Pool Member")),": Start becoming a part of the Polkadot\nmovement, keep Polkadot secure by staking\nminimum 1 DOT and receiving staking rewards."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://youtu.be/hvXLc4H7rA4"},(0,i.yg)("strong",{parentName:"a"},"Dashboard Walkthrough")),": Become a Pro using the Staking\nDashboard."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://youtu.be/58pIe8tt2o4"},(0,i.yg)("strong",{parentName:"a"},"After Staking")),": Nominating on\nPolkadot is not a set-and-forget action,\nlearn what you can do with the dashboard after you started staking."))),(0,i.yg)("h2",{id:"overview"},"Overview"),(0,i.yg)("admonition",{title:"Staking Dashboard Walk-through video tutorial",type:"info"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("a",{parentName:"p",href:"https://youtu.be/hvXLc4H7rA4"},"This video tutorial")," shows you everything you can do with the Staking\nDashboard.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"dashboard overview",src:t(71208).A,width:"1920",height:"1080"})),(0,i.yg)("p",null,"This page of the dashboard has six main panels:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Section A: The Sidebar")," shows which page you are on (in this case, the Overview). It will also\nshow the role you currently have in staking (in this case, active in both ",(0,i.yg)("a",{parentName:"p",href:"#pools"},"Pools")," and\n",(0,i.yg)("a",{parentName:"p",href:"#nominate"},"Nominate"),"). You can also change the ",(0,i.yg)("a",{parentName:"p",href:"#network"},"network")," (currently on Kusama).")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Section B: The Accounts Panel")," allows you to connect one account to the dashboard. Once\nconnected, the account will appear next to the ",(0,i.yg)("inlineCode",{parentName:"p"},"Accounts")," button. You can see it here if you are\nactive as a nominator and/or a pool member. In this case, the account KSM Stash is a nominator and\na member of the pool Insight Finance. Proxy accounts are also shown here if applicable. Note that\nthe dashboard will automatically fetch the stash and the proxy."))),(0,i.yg)("p",null,"Note that Sections A and B will always be visible while you use the dashboard."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Section C: The Stats Panel")," shows the general view of current staking metrics, including the\nhistorical reward rate (including after\n",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-staking-advanced#inflation"},"inflation"),"), the supply staked and time remaining\nin the current era.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Section D: The Summary Panel")," shows your current situation and gives you general tips about\nstaking. In this case, the KSM Stash account is a nominator and a pool member, and by clicking on\n",(0,i.yg)("inlineCode",{parentName:"p"},"Manage >")," you can go directly to the ",(0,i.yg)("a",{parentName:"p",href:"#nominate"},"Nominate")," and ",(0,i.yg)("a",{parentName:"p",href:"#pools"},"Pools")," pages,\nrespectively. You can take actions such as changing staking preferences, bonding more funds, etc.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Section E: The Balance Panel"),' shows the bonded amount distinguishing between "Nominating", "In\na Pool", and "Not Staking". The amount that is not staking is further divided into "Free" (a\nbalance that can be transferred) and "Reserve" (a balance that is needed the keep the account\non-chain, see ',(0,i.yg)("a",{parentName:"p",href:"/docs/learn-accounts#existential-deposit-and-reaping"},"existential deposit"),").\nIn this case, 0.301 KSM are bonded for nominating, 0.3 KSM are bonded in a pool, and 0.145 KSM are\nnot used for staking. Of the non-staking balance, 0.144 KSM are free while\n",(0,i.yg)("a",{parentName:"p",href:"/docs/chain-state-values#existential-deposit"},"a small portion is reserved for the existential deposit"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Section F: The Recent Payouts Panel")," shows a bar chart with the rewards paid out to you in the\npast 15 days either as a nominator or a pool member (manually claimed). Note how the 4th of April\nbar has the tip that is not filled with color. This is to show a pending payout (for nominators\nonly). Below the bar chart is a line chart showing the 10-day moving average."))),(0,i.yg)("p",null,"Additional statistics can be found at the bottom of the overview page."),(0,i.yg)("admonition",{title:"Pool funds are in system accounts",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Remember that funds bonded in a pool are transferred to the pool's system account, which can only be\naccessed by the protocol, and not by any individual user. Some wallets might not display the balance\nbonded in pools, but the dashboard will always show it.")),(0,i.yg)("h2",{id:"stake"},"Stake"),(0,i.yg)("p",null,"In this category, you can access all functionalities allowing you to stake your tokens as a\nnominator, member of a nomination pool, or both. The payout section will enable you to inspect the\nmost recently received rewards."),(0,i.yg)("h3",{id:"pools"},"Pools"),(0,i.yg)("admonition",{title:"Joining a Nomination Pool - Walk-through video tutorial",type:"info"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("a",{parentName:"p",href:"https://youtu.be/dDIG7QAApig"},"This video tutorial")," shows you how to join a\n",(0,i.yg)("a",{parentName:"p",href:"/docs/learn-nomination-pools"},"nomination pool")," with the Staking Dashboard. You can also read\nthe\n",(0,i.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000182376-staking-dashboard-how-to-join-a-nomination-pool"},"dedicated support article"),"\nabout joining a pool.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"dashboard pools",src:t(90656).A,width:"1920",height:"1080"})),(0,i.yg)("p",null,"This page of the dashboard has four main panels (Sidebar and Accounts Panels excluded):"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Section A: The Stats Panel")," shows the number of active pools and the minimum number of tokens\nneeded to join a pool and/or create one."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Section B: The Balance Panel")," shows the number of tokens bonded in pools and those that are\nfree. In this case, we have 0.3 KSM bonded and 0.144 KSM free. In this panel, you can bond more\nfunds (",(0,i.yg)("inlineCode",{parentName:"li"},"+")," button) or unbond some funds (",(0,i.yg)("inlineCode",{parentName:"li"},"-")," button). Unbonding will withdraw unclaimed rewards\nand funds will be locked for 28 eras\n(28 days). Once the 28 eras have passed, you\ncan unlock the locked funds (button with a lock icon) that will be available as a free balance.")),(0,i.yg)("admonition",{title:"No fast unstake and pool swap for pool members",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"Note that the option to fast unstake is only available to nominators. Also, to change pool, you\ncannot simply swap memberships. You will need to unbond and go through the whole unbonding period.")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Section C: The Pool Panel")," shows the pool id where you have membership (in this case, Pool 82),\nthe pool name, and next to it, a ",(0,i.yg)("inlineCode",{parentName:"p"},"Manage")," button that will allow to choose between different\noptions:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Update Claim Permissions: you can allow other pool members to compound your rewards, withdraw\nyour rewards as a free balance, or both. More details about nomination pools and updating claim\npermissions can be found on the\n",(0,i.yg)("a",{parentName:"li",href:"/docs/learn-nomination-pools#claim-permissions"},"dedicated wiki page"),".")),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"dashboard-permissionlessPoolClaims",src:t(85778).A,width:"651",height:"272"})),(0,i.yg)("admonition",{parentName:"li",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"For more information about how-to update your claim permissions with the staking dashboard see\n",(0,i.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000182399-staking-dashboard-how-to-claim-nomination-pool-rewards#Permissionless-claiming"},"this support article"),".")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Leave the pool and unbond all the funds in the pool.")),(0,i.yg)("p",{parentName:"li"},"If you are a pool admin you will be able to see the additional options:"),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Claim Commission: you can claim pool commissions to an account specified under Manage Commission\n(below)."),(0,i.yg)("li",{parentName:"ul"},"Manage Commission: you can manage the pool commission rate, maximum commission, maximum change\nrate, and minimum time delay between commission updates. More details about nomination pools and\nmanaging pool commissions can be found on the\n",(0,i.yg)("a",{parentName:"li",href:"/docs/learn-nomination-pools#pool-commissions"},"dedicated wiki page"),".")),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("img",{alt:"dashboard-manage-commission",src:t(93389).A,width:"650",height:"645"})),(0,i.yg)("admonition",{parentName:"li",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"For more information about how-to manage commission of your nomination pool with the staking\ndashboard see\n",(0,i.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000182388-staking-dashboard-how-to-create-a-nomination-pool#Pool-management-options"},"this support article"),".")),(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Rename Pool: you can change the pool's name."),(0,i.yg)("li",{parentName:"ul"},"Lock Pool: you can lock the pool so that new members are not allowed."),(0,i.yg)("li",{parentName:"ul"},"Destroy Pool: you can destroy the pool. See\n",(0,i.yg)("a",{parentName:"li",href:"/docs/learn-guides-staking-pools#pool-destruction"},"this wiki page")," and\n",(0,i.yg)("a",{parentName:"li",href:"https://support.polkadot.network/support/solutions/articles/65000182388-staking-dashboard-how-to-create-a-nomination-pool#How-to-destroy-a-pool"},"this support article"),"\nfor more information.")),(0,i.yg)("p",{parentName:"li"},"You can see any unclaimed rewards in the middle of the panel. You can claim and bond the rewards\n(",(0,i.yg)("inlineCode",{parentName:"p"},"+ Compound")," button) or withdraw them as a free balance (",(0,i.yg)("inlineCode",{parentName:"p"},"Withdraw"),' button). In this case, there\nare approximately 0.0012 KSM that can be claimed. You can see the Pool Status at the bottom of the\npanel, currently set to "Nominating and Earning Rewards".'))),(0,i.yg)("p",null,"Note that if it is the first time you log in to the dashboard, you will see two\nbuttons\xa0",(0,i.yg)("inlineCode",{parentName:"p"},"Create"),"\xa0and\xa0",(0,i.yg)("inlineCode",{parentName:"p"},"Join"),", instead of ",(0,i.yg)("inlineCode",{parentName:"p"},"Manage"),". For more information about how to create a\nnomination pool, see\n",(0,i.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/solutions/articles/65000182388-staking-dashboard-how-to-create-a-nomination-pool#How-to-create-a-pool"},"this support article"),"."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Section D: The Pool Nominations Panel")," shows the nominations of the pool you are currently in,\nhighlighting the validator that is active and will pay rewards to the pool at the end of the era\n(in this case ",(0,i.yg)("inlineCode",{parentName:"li"},"ParaNodes.io/11"),").")),(0,i.yg)("p",null,"If you scroll down the page, there are two additional panels:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Roles")," showing the accounts of the pool's Depositor, Root, Nominator, and Bouncer. The same\naccount can cover all the roles."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Pool Stats")," showing the Pool State (either Active, Closed, or Destroying), Pool Members (number\nof members in the pool), and Total Bonded (total number of bonded tokens).")),(0,i.yg)("p",null,"The Pools page is divided into four parts: the Overview is basically what we talked about until now,\nthe Members section will show all accounts of the pool members, the All Pools section will show all\npools (you can filter Active, Locked, and Destroying pools), and the Favorites section shows all\npools that you liked (you can like a pool in the All Pools section by clicking on the heart icons)."),(0,i.yg)("h3",{id:"nominate"},"Nominate"),(0,i.yg)("admonition",{title:"Walk-through video tutorial of How to Nominate",type:"info"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("a",{parentName:"p",href:"https://youtu.be/F59N3YKYCRs"},"This video tutorial")," shows you how to become a nominator with the\nStaking Dashboard.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"dashboard nominate",src:t(6568).A,width:"1920",height:"1080"})),(0,i.yg)("p",null,"This page of the dashboard has four main panels (Sidebar and Accounts Panels excluded):"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Section A: The Stats Panel")," shows the number of active nominators,\n",(0,i.yg)("a",{parentName:"li",href:"/docs/chain-state-values#minimum-bond-to-participate-in-staking"},"the minimum number of tokens to nominate"),"\nand ",(0,i.yg)("a",{parentName:"li",href:"/docs/chain-state-values#minimum-active-bond"},"the minimum active bond"),". The system keeps 12500\nnomination intents and puts them into the\n",(0,i.yg)("a",{parentName:"li",href:"/docs/learn-staking-advanced#bags-list"},"bags list"),". The fact that active nominators are not\n12500 is because there are nominators that have no active validator."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Section B: The Balance Panel")," shows the number of tokens bonded in nominations and those that\nare free. In this case, we have 0.301 KSM bonded and 0.144 KSM free. In this panel, you can bond\nmore funds (",(0,i.yg)("inlineCode",{parentName:"li"},"+")," button) or unbond some funds (",(0,i.yg)("inlineCode",{parentName:"li"},"-")," button). Unbonding will withdraw unclaimed\nrewards and funds will be locked for 28 eras\n(28 days). Once the 28 eras have passed, you\ncan unlock the locked funds (button with a lock icon) that will be available as a free balance.")),(0,i.yg)("admonition",{title:"Fast unstake",type:"info"},(0,i.yg)("p",{parentName:"admonition"},"If your account did not receive rewards in the past 28 eras, you will be eligible for fast unstake.\nThe dashboard will automatically check this for you and prompt a banner.")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Section C: The Nominator Panel"),' shows the current status of the nominator, currently set to\n"Nominating and Earning Rewards", and next to it, the ',(0,i.yg)("inlineCode",{parentName:"li"},"Unstake"),' button allows you to unstake the\nwhole bonded amount and stop nominating. In the middle of the panel, the payout destination is\ncurrently set to "Compounding" (i.e. rewards are added to the bonded funds). The ',(0,i.yg)("inlineCode",{parentName:"li"},"Update"),' button\nwill allow you to change the destination to "To Your Account" (to the stash account as a free\nbalance), "To Another Account" (an account that is not the stash), or "None" (no payout\ndestination).'),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Section D: The Nominations panel")," shows your nominations and allows you to stop all nomination\nwith the ",(0,i.yg)("inlineCode",{parentName:"li"},"Stop")," button or to select specific validators (",(0,i.yg)("inlineCode",{parentName:"li"},"Select")," button) and stop nominating only\nthose.")),(0,i.yg)("h3",{id:"payouts"},"Payouts"),(0,i.yg)("p",null,"This page is an expanded version of Panel F on the ",(0,i.yg)("a",{parentName:"p",href:"#overview"},"Overview")," page. It also shows all\nvalidators and/or nomination pools that paid out rewards to your accounts in the past few months."),(0,i.yg)("h3",{id:"after-staking"},"After Staking"),(0,i.yg)("admonition",{title:"Walk-through video tutorial - What to do after Staking",type:"info"},(0,i.yg)("p",{parentName:"admonition"},(0,i.yg)("a",{parentName:"p",href:"https://youtu.be/F59N3YKYCRs"},"This video tutorial")," shows you how to what you can do after staking\nwith the Staking Dashboard.")),(0,i.yg)("h2",{id:"validators"},"Validators"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"dashboard nominate",src:t(84544).A,width:"1920",height:"1080"})),(0,i.yg)("p",null,"This page of the dashboard has two main panels (Sidebar and Accounts Panels excluded):"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Panel A: The Stats Panel")," shows the total number of active validators, all validators currently\nregistered (active and inactive), and average commission across all validators."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Panel B: The Validators Panel")," shows all validators. You can order them by low/high commission\nor apply the following filters:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Include only active validators"),(0,i.yg)("li",{parentName:"ul"},"Exclude validators that have 100% commission, blocked nominations, and have missing identity.")))),(0,i.yg)("h2",{id:"support"},"Support"),(0,i.yg)("p",null,"Support for the Staking Dashboard is available at\n",(0,i.yg)("a",{parentName:"p",href:"https://support.polkadot.network/support/home"},"the official Polkadot support website"),"."),(0,i.yg)("h2",{id:"network"},"Network"),(0,i.yg)("p",null,"Under Network, you can connect to either Polkadot, Kusama, or Westend through public RPC nodes or\nlight clients for a true Web3 experience. For more information about light clients, see\n",(0,i.yg)("a",{parentName:"p",href:"/docs/build-light-clients#replacing-rpc-node-reliance-with-light-clients"},"this page"),"."))}m.isMDXComponent=!0},93389:(e,a,t)=>{"use strict";t.d(a,{A:()=>o});const o=t.p+"assets/images/dashboard-managePoolCommission-46842e2d0927915c031faf72cb3e266a.png"},6568:(e,a,t)=>{"use strict";t.d(a,{A:()=>o});const o=t.p+"assets/images/dashboard-nominate-7b882e41a42abeb928b78a6d6db4a6f0.png"},71208:(e,a,t)=>{"use strict";t.d(a,{A:()=>o});const o=t.p+"assets/images/dashboard-overview-755861fe5937455f21a9360334fc26ea.png"},85778:(e,a,t)=>{"use strict";t.d(a,{A:()=>o});const o=t.p+"assets/images/dashboard-permissionlessPoolClaims-20c461799ea9447fff83f2d2bd41b4f9.png"},90656:(e,a,t)=>{"use strict";t.d(a,{A:()=>o});const o=t.p+"assets/images/dashboard-pools-b7327a1bbe115970fe683b0350c7bb6e.png"},84544:(e,a,t)=>{"use strict";t.d(a,{A:()=>o});const o=t.p+"assets/images/dashboard-validators-a90166e01dcd1072c9a3be81a439afbb.png"},47790:()=>{}}]);