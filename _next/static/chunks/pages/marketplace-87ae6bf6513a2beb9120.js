_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[42],{OrUz:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/marketplace",function(){return n("tH/X")}])},"tH/X":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return V}));var r=n("rePB"),a=n("nKUr"),c=n("/MKj"),i=n("CBTV"),o=n("KQm4"),s=n("1OyB"),l=n("vuIU"),u=n("Ji7U"),d=n("md7G"),f=n("foSv"),h=n("q1tI"),b=n.n(h),j=n("20a2"),O=n("g4pe"),p=n.n(O),g=n("q01u"),C=n("TSYQ"),m=n.n(C),v=n("Cz6E"),y=n("CxlD"),k=n.n(y),S=n("Dd6D"),w=n("T1bm"),x=n("vm2M"),T=n("Tkjx"),P=function(e){var t=e.onContractsChange,n=e.onChainsChange,c=e.onSale,i=e.onOnSale,o=e.onVerified,s=e.onPriceRangeChange,l=e.setIsTokensLoading,u=e.t,d=e.user,f=e.wallet.data.chainId,b=e.selectedContracts,j=e.selectedChains,O=e.priceRange,p=e.verified,g=e.isTokensLoading,C=e.context,y=C.search,P=C.sort,_=Object(h.useState)(!1),N=_[0],I=_[1];return Object(a.jsxs)(v.b,{className:k.a.mainContainer,children:[Object(a.jsx)(v.a,{className:m()(k.a.filterCol,Object(r.a)({},k.a.filterColShown,N)),children:Object(a.jsxs)(S.b,{className:m()(k.a.filterColContainer),children:[Object(a.jsxs)("div",{className:k.a.filterColTitle,children:["Filters",Object(a.jsx)(S.c,{onClick:function(){return I(!N)},children:Object(a.jsx)(T.k,{})})]}),Object(a.jsxs)(S.b.Content,{className:k.a.filterColContent,children:[Object(a.jsx)("div",{className:k.a.filterColContentBottomButtonsContainer,children:Object(a.jsx)(S.a,{block:!0,onClick:function(){return I(!N)},children:u("filterBar.mobileButton")})}),Object(a.jsx)(x.a,{shown:N,priceRange:O,selectedContracts:b,onContractsChange:t,selectedChains:j,onChainsChange:n,onPriceRangeChange:function(e){return s(e)},onOnSale:i,onSale:c,verified:p,onVerified:o,isTokensLoading:g,t:u})]})]})}),Object(a.jsx)(w.a,{reverse:!0,toggleFilter:function(){return I(!N)},searchTermContext:y,selectedSortOptionContext:P,selectedContracts:b,selectedChains:j,onSale:c,verified:p,user:d,chainId:f,priceRange:O,showCta:!1,setIsTokensLoading:l,isTokensLoading:g,t:u})]})};P.defaultProps={selectedChains:[],onSale:!1,isTokensLoading:!1};var _=P;function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.a)(e);if(t){var a=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var D=function(e){Object(u.a)(n,e);var t=R(n);function n(e){var r;return Object(s.a)(this,n),(r=t.call(this,e)).state={isSelectedItemLoading:!1,priceRange:[g.b,g.a],selectedChains:[],selectedContracts:[],searchTerm:"",onSale:!1,verified:!0,isTokensLoading:!1},r}return Object(l.a)(n,[{key:"onContractsChange",value:function(e,t){var n=this.state.selectedContracts,r=[];r=t?[].concat(Object(o.a)(n),[e]):n.filter((function(t){return t.id!==e.id})),this.setState({selectedContracts:r},(function(){}))}},{key:"onChainsChange",value:function(e,t){var n=this.state,r=n.selectedChains,a=n.selectedContracts,c=[];t?c=r.map((function(e){return e.chainId})).includes(e.chainId)?Object(o.a)(r):[].concat(Object(o.a)(r),[e]):c=r.filter((function(t){return t.chainId!==e.chainId}));var i={selectedChains:c},s=c.map((function(e){return e.chainId}));s.length&&(i.selectedContracts=a.filter((function(e){return s.includes(e.chainId)}))),this.setState(i)}},{key:"onPriceRangeChange",value:function(e){this.setState({priceRange:e})}},{key:"onOnSale",value:function(e){this.setState({onSale:e})}},{key:"onVerified",value:function(e){this.setState({verified:e})}},{key:"setActiveMobileTab",value:function(e){this.setState({activeMobileTab:e})}},{key:"setStatus",value:function(e){this.setState({status:e})}},{key:"setIsTokensLoading",value:function(e){this.setState({isTokensLoading:e})}},{key:"callbacks",value:function(){return{onPriceRangeChange:this.onPriceRangeChange.bind(this),onContractsChange:this.onContractsChange.bind(this),onChainsChange:this.onChainsChange.bind(this),onOnSale:this.onOnSale.bind(this),onVerified:this.onVerified.bind(this),setIsTokensLoading:this.setIsTokensLoading.bind(this)}}},{key:"render",value:function(){var e="NFTrade | Marketplace | Create, Buy, Sell, Swap and Farm NFTs",t="https://res.cloudinary.com/nftrade/image/upload/s--tV_aUXDa--/v1629391041/Screenshot_from_2021-08-19_19-37-09_vjtmmn.png",n="NFTrade is a multi-chain and cross-chain platform for NFT creation and trading. Seamlessly launch, mint, and swap non-fungible tokens. Earn digital collectibles. NFTrade places you at the heart of the NFT economy.";return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(p.a,{children:[Object(a.jsx)("title",{children:e}),Object(a.jsx)("meta",{property:"og:title",content:e}),Object(a.jsx)("meta",{property:"og:description",content:n}),Object(a.jsx)("meta",{name:"description",content:n}),Object(a.jsx)("meta",{property:"og:image",content:t}),Object(a.jsx)("meta",{name:"twitter:card",content:"summary"}),Object(a.jsx)("meta",{name:"twitter:site",content:"@NFTradeOfficial"}),Object(a.jsx)("meta",{name:"twitter:title",content:e}),Object(a.jsx)("meta",{name:"twitter:description",content:n}),Object(a.jsx)("meta",{name:"twitter:image",content:t})]}),Object(a.jsx)(_,I(I(I({},this.props),this.state),this.callbacks()))]})}}]),n}(b.a.Component);D.defaultProps={orders:[],tokens:[]};var L=Object(j.withRouter)(D);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(e){var t={user:Object(c.d)((function(e){return e.user})),tokens:Object(c.d)((function(e){return e.tokens})),orders:Object(c.d)((function(e){return e.orders})),wallet:Object(c.d)((function(e){return e.wallet}))};return Object(a.jsx)(L,F(F(F({},e),t),{}))};B.page="marketplace";var V=!0;t.default=Object(i.b)(B)}},[["OrUz",0,2,4,1,3,5,6,8,7,9,10,11,12,21,22]]]);