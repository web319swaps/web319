(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f238c78a"],{"14c3":function(e,t,r){var n=r("c6b6"),a=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var o=r.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==n(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},"1ab4":function(e,t,r){},"4e02":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAyNJREFUeF7t3e1V20AQheHZTpJKCJ2ESgKVQCoJnYRONszBPscB29oZrXavdV794Y8sj+7jWfljbIqxSSVQpKqhGANE7EEACCBiCYiVQ4cAIpaAWDl0CCBiCYiVQ4cAIpaAWDl0CCBiCYiVQ4cAIpaAWDl0CCBiCYiVQ4cAEk+g1vrTzO7M7JuZ/Taz11LKW/xI+reQ7pBa6w8z+/UO4H9Pt1cze9gjiizIAePPlcf0LlEkQRowjk7f99YlciABDEfxZetF/8rQXqEUSBADkHbn+J4JDCulSD2g4mf99RYSJ5TBMLOnd4/HHiEoHWM6SBLjpZTyoBRkr1qmgoAhtGSBcb6npnQIGJcXuOEgYFy/2gwFAWP50j8MBIxlDN9jCAgYbRhDQMBox9gcBIwYxqYgYMQxNgMBI4exCQgYeYzuIGCsw+gKAsZ6jG4gYPTB6AICRj+M1SBg9MVYBQJGf4w0SBLDRz+ftjkNqaP6eb5l58XCby7WWn2+9q9UBJrF+LyYD2KEZpAzID7e+XnWVjOS+VWFJ2NCIMmlan4scyu4L6X4HHLTFgXxOSifRmdrTyA07hoF8e9pPLfXwp7Rgb4oiF87HMQv7GxtCYQm9EMgfv+1VpatNgjfKzxhGQYBpVkj/Awr/cJwBcq9v2hqPqUb3TH62uP0NFMdcjxAcvkKrak3apIuexXIik4B5QLZahBQ0s1w9oZdQEDph9INBJQ+KF1BQFmP0h0ElHUom4CAkkfZDASUHMqmIKDEUTYHASWGMgQElHaUYSCgtKEMBQFlGWU4CCjXUaaAgHIZZRoIKOdRpoKA8hVlOggo/6NIgCRR/LN5nwrc1Wf0MiBJlNCY5vKTzvl7SIEkUEJjmvPjXq5ADiSIQocsG/fZo2XEiF8l7ZN181EWUFKTgc13PmlHySXrNIvDf0bwr0CcDnjvbqk6nrM8yLHQw1fp/MeTd/U093Mj3gzIpBVk+N0CMjxy0Xd7xXKQKYcOkaH4KAQQQMQSECuHDgFELAGxcugQQMQSECuHDgFELAGxcugQQMQSECuHDgFELAGxcugQQMQSECvnHy8sRnS7GQvzAAAAAElFTkSuQmCC"},5319:function(e,t,r){"use strict";var n=r("d784"),a=r("825a"),o=r("7b0bd"),c=r("50c4"),s=r("a691"),i=r("1d80"),l=r("8aa5"),u=r("14c3"),d=Math.max,p=Math.min,f=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,b=/\$([$&'`]|\d\d?)/g,g=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var m=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,x=n.REPLACE_KEEPS_$0,A=m?"$":"$0";return[function(r,n){var a=i(this),o=void 0==r?void 0:r[e];return void 0!==o?o.call(r,a,n):t.call(String(a),r,n)},function(e,n){if(!m&&x||"string"===typeof n&&-1===n.indexOf(A)){var o=r(t,e,this,n);if(o.done)return o.value}var i=a(e),f=String(this),h="function"===typeof n;h||(n=String(n));var b=i.global;if(b){var w=i.unicode;i.lastIndex=0}var C=[];while(1){var E=u(i,f);if(null===E)break;if(C.push(E),!b)break;var S=String(E[0]);""===S&&(i.lastIndex=l(f,c(i.lastIndex),w))}for(var B="",j=0,F=0;F<C.length;F++){E=C[F];for(var O=String(E[0]),k=d(p(s(E.index),f.length),0),y=[],D=1;D<E.length;D++)y.push(g(E[D]));var I=E.groups;if(h){var N=[O].concat(y,k,f);void 0!==I&&N.push(I);var W=String(n.apply(void 0,N))}else W=v(O,f,k,y,I,n);k>=j&&(B+=f.slice(j,k)+W,j=k+O.length)}return B+f.slice(j)}];function v(e,r,n,a,c,s){var i=n+e.length,l=a.length,u=b;return void 0!==c&&(c=o(c),u=h),t.call(s,u,(function(t,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,n);case"'":return r.slice(i);case"<":s=c[o.slice(1,-1)];break;default:var u=+o;if(0===u)return t;if(u>l){var d=f(u/10);return 0===d?t:d<=l?void 0===a[d-1]?o.charAt(1):a[d-1]+o.charAt(1):t}s=a[u-1]}return void 0===s?"":s}))}}))},6547:function(e,t,r){var n=r("a691"),a=r("1d80"),o=function(e){return function(t,r){var o,c,s=String(a(t)),i=n(r),l=s.length;return i<0||i>=l?e?"":void 0:(o=s.charCodeAt(i),o<55296||o>56319||i+1===l||(c=s.charCodeAt(i+1))<56320||c>57343?e?s.charAt(i):o:e?s.slice(i,i+2):c-56320+(o-55296<<10)+65536)}};e.exports={codeAt:o(!1),charAt:o(!0)}},"714c":function(e,t,r){"use strict";r("1ab4")},"726b":function(e,t,r){"use strict";r.r(t);r("b680");var n=r("7a23"),a=r("4e02"),o=r.n(a),c={class:"content"},s={style:{width:"90%",margin:"10px auto",display:"flex","flex-direction":"row","align-items":"center","justify-content":"space-between"}},i={key:0,style:{width:"200px",height:"40px","border-radius":"10px","text-align":"center","line-height":"40px",background:"#7C3BED33",color:"white"}},l={class:"second"},u=Object(n["createVNode"])("view",{style:{width:"90%",margin:"15px auto","font-size":"24px",color:"#FFF",display:"block","font-weight":"600"}},[Object(n["createVNode"])("span",null,"私募情况(点击复制)")],-1),d={style:{width:"90%",margin:"14px auto",display:"flex","flex-direction":"column",padding:"10px 0","border-radius":"12px",border:"1px solid #0B2F68",background:"var(--Base-Black, #0E0C20)",color:"#687DA4","margin-top":"0"}},p=Object(n["createVNode"])("tr",null,[Object(n["createVNode"])("td",null,"地址"),Object(n["createVNode"])("td",null,"汇总"),Object(n["createVNode"])("td",null,"一级"),Object(n["createVNode"])("td",null,"二级"),Object(n["createVNode"])("td",null,"三级"),Object(n["createVNode"])("td",null,"四级"),Object(n["createVNode"])("td",null,"五级")],-1);function f(e,t,r,a,f,h){return Object(n["openBlock"])(),Object(n["createBlock"])("div",c,[Object(n["createVNode"])("div",s,[Object(n["createVNode"])("img",{onClick:t[1]||(t[1]=function(e){return h.back()}),style:{width:"30px",height:"30px"},src:o.a}),f.userAddress?(Object(n["openBlock"])(),Object(n["createBlock"])("div",i,[Object(n["createVNode"])("span",null,Object(n["toDisplayString"])(f.userAddress.substring(0,10)+"..."+f.userAddress.substring(36)),1)])):Object(n["createCommentVNode"])("",!0),f.userAddress?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])("div",{key:1,style:{width:"180px",height:"35px","border-radius":"18px","text-align":"center","line-height":"35px",background:"linear-gradient(90deg, rgba(46, 139, 220, 0.80) 0%, rgba(14, 147, 219, 0.80) 51.5%, rgba(15, 139, 179, 0.80) 100%)",color:"#FFF","font-size":"12px"},onClick:t[2]||(t[2]=function(){return h.connectBSC&&h.connectBSC.apply(h,arguments)})},[Object(n["createVNode"])("span",null,Object(n["toDisplayString"])(f.Language[f.selectLan].p1k1),1)]))]),Object(n["createVNode"])("view",l,[u,Object(n["createVNode"])("view",d,[Object(n["createVNode"])("table",null,[p,(Object(n["openBlock"])(!0),Object(n["createBlock"])(n["Fragment"],null,Object(n["renderList"])(f.datas,(function(e,t){return Object(n["openBlock"])(),Object(n["createBlock"])("tr",null,[Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(e.adr),1),Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(e.n0.toFixed(0)),1),Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(e.n1.toFixed(0)),1),Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(e.n2.toFixed(0)),1),Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(e.n3.toFixed(0)),1),Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(e.n4.toFixed(0)),1),Object(n["createVNode"])("td",null,Object(n["toDisplayString"])(e.n5.toFixed(0)),1)])})),256))])])])])}r("ac1f"),r("5319"),r("96cf");var h=r("1da1"),b=r("99e5"),g=r.n(b),m=r("aee1"),x=r("f64c"),A=r("694c"),v={data:function(){return{defaultProps:{children:"children",label:"label"},contractAddress:"0x8e856cf66b912aceb4d95a3ed92a47efeb27eaa6",networkId:56,userAddress:"",dataStat:[0,0,0,0,0,0,0,0,0,0,0],tokenName:"Web319",mintAmount:0,price:0,totalWhiteDividAmount:0,totalWhiteDividAmountS:0,dataStat2:[0,0,0,0,0,0,0,0],dataStat3:["0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000",0,0,0],getrefMap:["0x0000000000000000000000000000000000000000",0,0,0,0,0,0],getrefMap2:[0,0,0,0],param:[0,0,0,"0x0000000000000000000000000000000000000000","0x0000000000000000000000000000000000000000",0,0,0,0,0],exchangeAmount:0,data2:{},bnbBalance:0,topAmount1:0,topAmount2:0,topAmount3:0,web3:{},myChildAddress:[],burnAmountR:0,needQueryAddresses:[],Language:A,selectLan:"en",adrIndex:0,datas:[{adr:"0xcc08e12a2aE83560b11831668E3D5d57251c24FC",n0:0,n1:0,n2:0,n3:0,n4:0,n5:0},{adr:"0x2A38F4D6447C4B865da55D81b2620a2B3aAFE456",n0:0,n1:0,n2:0,n3:0,n4:0,n5:0},{adr:"0xC5bA41Cb53Dd094A1fDF84B5992D868A342D3401",n0:0,n1:0,n2:0,n3:0,n4:0,n5:0},{adr:"0xFDE407F6116f13be2b80C76CC679B847952aA8ad",n0:0,n1:0,n2:0,n3:0,n4:0,n5:0},{adr:"0xf0b4095797906383C3f21cF8EB62323045883BC2",n0:0,n1:0,n2:0,n3:0,n4:0,n5:0},{adr:"0xf49248c5A4B2d69d6a46E2F67E896D9A44bbA9fE",n0:0,n1:0,n2:0,n3:0,n4:0,n5:0},{adr:"0xc36DE3708070c814Bdcf128B90792197e77f3459",n0:0,n1:0,n2:0,n3:0,n4:0,n5:0}]}},created:function(){localStorage.getItem("language")&&(this.selectLan=localStorage.getItem("language")),this.connectBSC(!0);var e=this;this.interval=setInterval((function(){e.loadData()}),2e4)},destroyed:function(){this.interval&&clearInterval(this.interval)},methods:{copyValue:function(e){var t=document.createElement("textarea");t.style.position="fixed",t.style.opacity=0,t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),x["a"].success("success copy")},queryMyChild:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.myChildAddress=[],r=0;case 2:if(!(r<4e3)){t.next=16;break}return e.adrIndex=0,t.next=6,e.contract.methods.allUsersV(r).call({});case 6:return n=t.sent,console.log(n,"address"+r),t.next=10,e.contract.methods.burnAmountR(n).call({});case 10:a=t.sent,a=parseFloat(e.web3.utils.fromWei(a,"ether")),e.countBurnOne(n,a);case 13:r++,t.next=2;break;case 16:console.log(e.datas,"this.datas"),x["a"].success("query success!");case 18:case"end":return t.stop()}}),t)})))()},countBurnOne:function(e,t){var r=this;return Object(h["a"])(regeneratorRuntime.mark((function n(){var a,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,r.contract.methods.getrefMap(e).call({});case 2:if(a=n.sent,"0x0000000000000000000000000000000000000000"!=a[0]){n.next=5;break}return n.abrupt("return");case 5:r.adrIndex++,o=!1,c=0;case 8:if(!(c<r.datas.length)){n.next=17;break}if(a[0].toLowerCase()!=r.datas[c].adr.toLowerCase()){n.next=14;break}return r.datas[c].n0+=t,r.datas[c]["n"+r.adrIndex]+=t,o=!0,n.abrupt("break",17);case 14:c++,n.next=8;break;case 17:o||r.countBurnOne(a[0],t);case 18:case"end":return n.stop()}}),n)})))()},back:function(){this.$router.replace("/?notTo=1")},mint:function(){if(this.mintAmount)if(this.mintAmount>this.param[2]||this.mintAmount<this.param[1])x["a"].error("amount need "+this.param[1]+"-"+this.param[2]);else if(parseFloat(this.getrefMap[4])+parseFloat(this.mintAmount)>this.param[2])x["a"].error("mint max "+this.param[2]);else{var e=this.web3.utils.toWei(this.mintAmount,"ether");this.web3.eth.sendTransaction({from:this.userAddress,to:this.contractAddress,value:e},(function(e,t){e?(x["a"].error(e),console.error(e)):(x["a"].error("error:"+t),console.log(t))}))}else x["a"].error("must amount!")},max:function(){this.mintAmount=this.param[2]-this.getrefMap[4]},connectBSC:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=t,!window.ethereum){r.next=30;break}return r.prev=2,window.ethereum.on("accountsChanged",(function(e){console.log("change address:",e[0]),n.connectBSC()})),console.log(window.ethereum,"window.ethereum"),r.next=7,window.ethereum.request({method:"eth_requestAccounts"});case 7:return a=r.sent,console.log(a,"accounts"),t.web3=new g.a(window.ethereum),t.userAddress=a[0].toLowerCase(),r.next=13,t.web3.eth.getBalance(t.userAddress);case 13:return o=r.sent,t.bnbBalance=t.web3.utils.fromWei(o,"ether"),console.log(m,"MyContractABI"),r.next=18,t.web3.eth.net.getId();case 18:c=r.sent,c!=t.networkId&&x["a"].error("err network，please select BNB chain"),t.contract=new t.web3.eth.Contract(m,t.contractAddress),t.connected=!0,t.loadData(e),r.next=28;break;case 25:r.prev=25,r.t0=r["catch"](2),console.error(r.t0);case 28:r.next=31;break;case 30:alert("Please install MetaMask or a BSC-compatible wallet to use this DApp.");case 31:case"end":return r.stop()}}),r,null,[[2,25]])})))()},loadData:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c,s,i,l,u,d,p,f,h,b;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!t.contract){r.next=97;break}return r.prev=1,r.next=4,t.contract.methods.getStatData().call({});case 4:return n=r.sent,r.next=7,t.contract.methods.getStatData2().call({});case 7:return a=r.sent,r.next=10,t.contract.methods.getParam().call({});case 10:return o=r.sent,r.next=13,t.contract.methods.getrefMap(t.userAddress).call({});case 13:return c=r.sent,r.next=16,t.contract.methods.totalWhiteDividAmount().call({});case 16:return s=r.sent,r.next=19,t.contract.methods.totalWhiteDividAmountS().call({});case 19:return i=r.sent,t.totalWhiteDividAmount=parseFloat(t.web3.utils.fromWei(s,"ether")),t.totalWhiteDividAmountS=parseFloat(t.web3.utils.fromWei(i,"ether")),r.next=24,t.contract.methods.burnAmountR(t.userAddress).call({});case 24:return l=r.sent,t.burnAmountR=parseFloat(t.web3.utils.fromWei(l,"ether")),console.log(t.getrefMap,"this.getrefMap"),o[1]=t.web3.utils.fromWei(o[1],"ether"),o[2]=t.web3.utils.fromWei(o[2],"ether"),o[3]=o[3].toLowerCase(),o[4]=o[4].toLowerCase(),o[5]=parseFloat(t.web3.utils.fromWei(o[5],"ether")),o[6]=t.web3.utils.fromWei(o[6],"ether"),console.log(c[6],"getrefMap[6]"),c[6]=parseFloat(t.web3.utils.fromWei(c[6],"ether")),c[5]=parseFloat(t.web3.utils.fromWei(c[5],"ether")),c[4]=parseFloat(t.web3.utils.fromWei(c[4],"ether")),c[1]=parseInt(c[1]),c[2]=parseInt(c[2]),console.log(c[6],"getrefMap[6]"),n[1]=parseFloat(t.web3.utils.fromWei(n[1],"ether")),n[6]=parseFloat(t.web3.utils.fromWei(n[6],"ether")),n[7]=parseFloat(t.web3.utils.fromWei(n[7],"ether")),n[2]=parseFloat(t.web3.utils.fromWei(n[2],"ether")),a[0]=parseFloat(t.web3.utils.fromWei(a[0],"ether")),a[1]=parseFloat(t.web3.utils.fromWei(a[1],"ether")),a[0]&&a[1]&&(t.price=parseFloat(a[0])/parseFloat(a[1])),a[3]=parseFloat(t.web3.utils.fromWei(a[3],"ether")),a[4]=parseFloat(t.web3.utils.fromWei(a[4],"ether")),a[5]=parseFloat(t.web3.utils.fromWei(a[5],"ether")),a[6]=parseFloat(t.web3.utils.fromWei(a[6],"ether")),a[7]=parseFloat(t.web3.utils.fromWei(a[7],"ether")),t.dataStat=n,t.dataStat2=a,t.param=o,t.getrefMap=c,console.log(t.dataStat,"dataStat:"),console.log(t.dataStat2,"dataStat2:"),console.log(t.param,"param:"),r.next=61,t.contract.methods.getrefMap2(t.userAddress).call({});case 61:return u=r.sent,u[0]=parseFloat(t.web3.utils.fromWei(u[0],"ether")),u[1]=parseFloat(t.web3.utils.fromWei(u[1],"ether")),u[3]=parseFloat(t.web3.utils.fromWei(u[3],"ether")),r.next=67,t.contract.methods.getStatData3().call({});case 67:return d=r.sent,console.log(t.dataStat3,"dataStat3:"),d[3]=parseFloat(t.web3.utils.fromWei(d[3],"ether")),d[4]=parseFloat(t.web3.utils.fromWei(d[4],"ether")),r.next=73,t.contract.methods.refBurnAmount(d[0]).call({});case 73:return p=r.sent,r.next=76,t.contract.methods.refBurnAmount(d[1]).call({});case 76:return f=r.sent,r.next=79,t.contract.methods.refBurnAmount(d[2]).call({});case 79:return h=r.sent,t.topAmount1=t.web3.utils.fromWei(p,"ether"),t.topAmount2=t.web3.utils.fromWei(f,"ether"),t.topAmount3=t.web3.utils.fromWei(h,"ether"),r.next=85,t.contract.methods.dividAmountMap(t.userAddress).call({});case 85:b=r.sent,console.log(b,"dividAmountMap"),t.getrefMap2=u,t.dataStat3=d,e&&t.queryMyChild(),r.next=95;break;case 92:r.prev=92,r.t0=r["catch"](1),console.error(r.t0);case 95:r.next=98;break;case 97:console.error("Contract not initialized.");case 98:case"end":return r.stop()}}),r,null,[[1,92]])})))()}}};r("714c");v.render=f;t["default"]=v},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},9263:function(e,t,r){"use strict";var n=r("ad6d"),a=r("9f7f"),o=RegExp.prototype.exec,c=String.prototype.replace,s=o,i=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=i||u||l;d&&(s=function(e){var t,r,a,s,d=this,p=l&&d.sticky,f=n.call(d),h=d.source,b=0,g=e;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),g=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,b++),r=new RegExp("^(?:"+h+")",f)),u&&(r=new RegExp("^"+h+"$(?!\\s)",f)),i&&(t=d.lastIndex),a=o.call(p?r:d,g),p?a?(a.input=a.input.slice(b),a[0]=a[0].slice(b),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:i&&a&&(d.lastIndex=d.global?a.index+a[0].length:t),u&&a&&a.length>1&&c.call(a[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)})),a}),e.exports=s},"9f7f":function(e,t,r){"use strict";var n=r("d039");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=n((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=n((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var n=r("23e7"),a=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,r){"use strict";var n=r("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,r){"use strict";r("ac1f");var n=r("6eeb"),a=r("d039"),o=r("b622"),c=r("9263"),s=r("9112"),i=o("species"),l=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=o("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,d){var h=o(e),b=!a((function(){var t={};return t[h]=function(){return 7},7!=""[e](t)})),g=b&&!a((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[i]=function(){return r},r.flags="",r[h]=/./[h]),r.exec=function(){return t=!0,null},r[h](""),!t}));if(!b||!g||"replace"===e&&(!l||!u||p)||"split"===e&&!f){var m=/./[h],x=r(h,""[e],(function(e,t,r,n,a){return t.exec===c?b&&!a?{done:!0,value:m.call(t,r,n)}:{done:!0,value:e.call(r,t,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),A=x[0],v=x[1];n(String.prototype,e,A),n(RegExp.prototype,h,2==t?function(e,t){return v.call(e,this,t)}:function(e){return v.call(e,this)})}d&&s(RegExp.prototype[h],"sham",!0)}}}]);
//# sourceMappingURL=chunk-f238c78a.7efb6935.js.map