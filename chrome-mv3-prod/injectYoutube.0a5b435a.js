var e,t;"function"==typeof(e=globalThis.define)&&(t=e,e=null),function(t,o,r,s,i){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof n[s]&&n[s],f=a.cache||{},T="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function _(e,o){if(!f[e]){if(!t[e]){var r="function"==typeof n[s]&&n[s];if(!o&&r)return r(e,!0);if(a)return a(e,!0);if(T&&"string"==typeof e)return T(e);var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}E.resolve=function(o){var r=t[e][1][o];return null!=r?r:o},E.cache={};var l=f[e]=new _.Module(e);t[e][0].call(l.exports,E,l,l.exports,this)}return f[e].exports;function E(e){var t=E.resolve(e);return!1===t?{}:_(t)}}_.isParcelRequire=!0,_.Module=function(e){this.id=e,this.bundle=_,this.exports={}},_.modules=t,_.cache=f,_.parent=a,_.register=function(e,o){t[e]=[function(e,t){t.exports=o},{}]},Object.defineProperty(_,"root",{get:function(){return n[s]}}),n[s]=_;for(var l=0;l<o.length;l++)_(o[l]);if(r){var E=_(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=E:"function"==typeof e&&e.amd?e(function(){return E}):i&&(this[i]=E)}}({aQ2OM:[function(e,t,o){var r=e("~tools/constants");let s=window,i=document;!function(e){let t=XMLHttpRequest.prototype,o=t.open,n=t.send,a=t.setRequestHeader;t.open=function(e,t){return this._method=e,this._url=t,this._requestHeaders={},this._startTime=new Date().toISOString(),o.apply(this,arguments)},t.setRequestHeader=function(e,t){return this._requestHeaders[e]=t,a.apply(this,arguments)},t.send=function(e){return this.addEventListener("load",function(){if("string"!=typeof this?._url)return;let t=this?._url?.length>0?this._url.toLowerCase():this._url;if(t&&t.includes(r.FILTER_SUBTITLE_IN_YOUTUBE_URL)){if(e&&"string"==typeof e)try{this._requestHeaders=e}catch(e){console.error("ERROR from inject.ts\u3002Request Header JSON decode failed, transfer_encoding field could be base64",e)}if(this.getAllResponseHeaders(),!this?.responseType.toLowerCase().includes("blob")&&!this?.responseType.toLowerCase().includes("arraybuffer")&&!this?.responseType.toLowerCase().includes("json")&&this?.responseText)try{let e=this.responseText;"object"!=typeof e&&"ok"!==e&&e?(JSON.parse(e),s.postMessage({postMsgType:r.SENT_YOUTUBE_SUBTITLE_API_URL,srtUrl:this._url},i.baseURI)):s.postMessage({postMsgType:r.INIT_SUBTITLENODES},i.baseURI)}catch(e){console.error("Error in injectYoutube.ts"),console.error(e)}}}),n.apply(this,arguments)}}(XMLHttpRequest)},{"~tools/constants":"DgB7r"}],DgB7r:[function(e,t,o){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(o),r.export(o,"SUBTITLE_LIST_PADDING_SIZE",()=>s),r.export(o,"SUBTITLE_LIST_WIDTH",()=>i),r.export(o,"SUBTITLE_LIST_HEIGHT",()=>n),r.export(o,"DRAGGABLE_HANDLE_HEIGHT",()=>a),r.export(o,"CLOSE_SVG_REM_COUNT",()=>f),r.export(o,"SUBTITLE_LIST_ROW_HEIGHT",()=>T),r.export(o,"BWP_VIDEO",()=>_),r.export(o,"VIDEO_PAUSE",()=>l),r.export(o,"KEY_DOWN",()=>E),r.export(o,"CLICK_SUBTITLE",()=>p),r.export(o,"SENT_BILIBILI_AI_SUBTITLE_URL",()=>c),r.export(o,"INIT_SUBTITLENODES",()=>u),r.export(o,"NO_SUBTITLENODES_DATA",()=>I),r.export(o,"FILTER_SUBTITLE_IN_WEBREQUEST",()=>S),r.export(o,"FILTER_SUBTITLE_IN_YOUTUBE_URL",()=>L),r.export(o,"SENT_YOUTUBE_SUBTITLE_API_URL",()=>d),r.export(o,"TOAST_CONTAINER_STYLE",()=>O),r.export(o,"NEXT",()=>A),r.export(o,"PRE",()=>x),r.export(o,"ADD",()=>y),r.export(o,"SUB",()=>R),r.export(o,"VIDEO_MASK",()=>U),r.export(o,"SUB_MASK",()=>h),r.export(o,"REPEAT",()=>g),r.export(o,"VARIABLE_REPEAT",()=>N),r.export(o,"FOLLOW_READ",()=>D),r.export(o,"FULL_MASK",()=>b),r.export(o,"SUBTITLE_LIST",()=>B),r.export(o,"SUBTITLE",()=>M),r.export(o,"ZHSUBTITLE",()=>G),r.export(o,"STORAGE_SHOWSUBTITLE",()=>m),r.export(o,"STORAGE_SHOWZHSUBTITLE",()=>H),r.export(o,"STORAGE_SHOWSUBTITLELIST",()=>w),r.export(o,"STORAGE_SHOWVIDEOMASK",()=>v),r.export(o,"STORAGE_SHOWSUBTITLELISTMASK",()=>C),r.export(o,"STORAGE_ALL_SHORTCUTS",()=>F),r.export(o,"STORAGE_VIDEO_MASK_HEIGHT",()=>j),r.export(o,"STORAGE_DEFAULT_VIDEO_MASK_HEIGHT",()=>W),r.export(o,"STORAGE_FOLLOW_READ_TIMES",()=>P),r.export(o,"STORAGE_DEFAULT_FOLLOW_READ_TIMES",()=>V),r.export(o,"STORAGE_FOLLOW_READ_LENGTH",()=>Y),r.export(o,"STORAGE_DEFAULT_FOLLOW_READ_LENGTH",()=>k),r.export(o,"STORAGE_IDLETIME_VIDEO_ACTIVETIME",()=>K),r.export(o,"STORAGE_IDLETIME_DRAGGABLESUBTITLELIST_ACTIVETIME",()=>q),r.export(o,"STORAGE_IDLETIME_NEXTJSSUBTITLELIST_ACTIVETIME",()=>Z),r.export(o,"IDLETIME_STORAGE_DEFAULT_VALUE",()=>z),r.export(o,"ALL_SHORT_CUTS",()=>J),r.export(o,"COLOR_PRIMARY",()=>Q),r.export(o,"FONT_SIZE",()=>X),r.export(o,"FONT_FAMILY",()=>$),r.export(o,"FONT_WEIGHT",()=>ee),r.export(o,"LINE_HEIGHT",()=>et),r.export(o,"ZIMU1_USESTORAGE_SYNC_JWT",()=>eo),r.export(o,"ZIMU1_USESTORAGE_SYNC_HEADIMGURL",()=>er),r.export(o,"ZIMU1_USESTORAGE_SYNC_NICKNAME",()=>es),r.export(o,"DRAGGABLE_NODE_CONTAINER_WIDTH",()=>ei),r.export(o,"DRAGGABLE_NODE_CONTAINER_HEIGHT",()=>en),r.export(o,"DRAGGABLE_NODE_CONTAINER_X",()=>ea),r.export(o,"DRAGGABLE_NODE_CONTAINER_Y",()=>ef);let s=5,i=300,n=500,a=16,f=2,T=36,_="bwp-video",l="VIDEO_PAUSE",E="KEY_DOWN",p="CLICK_SUBTITLE",c="SENT_BILIBILI_AI_SUBTITLE_URL",u="INIT_SUBTITLENODES",I="NO_SUBTITLENODES_DATA",S="api.bilibili.com/x/player/wbi/v2",L=".com/api/timedtext",d="SENT_YOUTUBE_SUBTITLE_API_URL",O=`
  .Toastify__toast-container.Toastify__toast-container--top-center {
    --toastify-color-light: #fff;
    --toastify-color-dark: #121212;
    --toastify-color-info: #3498db;
    --toastify-color-success: #07bc0c;
    --toastify-color-warning: #f1c40f;
    --toastify-color-error: #e74c3c;
    --toastify-color-transparent: hsla(0,0%,100%,.7);
    --toastify-icon-color-info: var(--toastify-color-info);
    --toastify-icon-color-success: var(--toastify-color-success);
    --toastify-icon-color-warning: var(--toastify-color-warning);
    --toastify-icon-color-error: var(--toastify-color-error);
    --toastify-toast-width: 320px;
    --toastify-toast-background: #fff;
    --toastify-toast-min-height: 64px;
    --toastify-toast-max-height: 800px;
    --toastify-font-family: sans-serif;
    --toastify-z-index: 9999;
    --toastify-text-color-light: #757575;
    --toastify-text-color-dark: #fff;
    --toastify-text-color-info: #fff;
    --toastify-text-color-success: #fff;
    --toastify-text-color-warning: #fff;
    --toastify-text-color-error: #fff;
    --toastify-spinner-color: #616161;
    --toastify-spinner-color-empty-area: #e0e0e0;
    --toastify-color-progress-light: linear-gradient(90deg,#4cd964,#5ac8fa,#007aff,#34aadc,#5856d6,#ff2d55);
    --toastify-color-progress-dark: #bb86fc;
    --toastify-color-progress-info: var(--toastify-color-info);
    --toastify-color-progress-success: var(--toastify-color-success);
    --toastify-color-progress-warning: var(--toastify-color-warning);
    --toastify-color-progress-error: var(--toastify-color-error);
    --toastify-color-progress-bgo: 0.3;
}`,A="K",x="J",y="I",R="U",U="H",h="L",g="R",N="Q",D="F",b="A",B="V",M="S",G="C",m="showSubtitle",H="showZhSubtitle",w="showSubtitleList",v="showVideoMask",C="showSubtitleListMask",F="allShortcuts",j="videoMaskHeight",W=80,P="followReadTimes",V=3,Y="followReadLength",k=1.5,K="idleTimeVideoActivetime",q="idleTimeDraggableSubListActivetime",Z="idleTimeNextjsSubListActivetime",z={default:""},J={next:A,pre:x,add:y,sub:R,videoMask:U,subMask:h,repeat:g,variableRepeat:N,followRead:D,fullMask:b,subtitleList:B,subtitle:M,zhSubtitle:G},Q="#16a34a",X="21px",$='ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',ee="700",et="1.25",eo="zimu1_useStorage_sync_jwt",er="zimu1_useStorage_sync_headimgurl",es="zimu1_useStorage_sync_nickname",ei=1e3,en=480,ea=150,ef=150},{"@parcel/transformer-js/src/esmodule-helpers.js":"cHUbl"}],cHUbl:[function(e,t,o){o.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},o.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.exportAll=function(e,t){return Object.keys(e).forEach(function(o){"default"===o||"__esModule"===o||t.hasOwnProperty(o)||Object.defineProperty(t,o,{enumerable:!0,get:function(){return e[o]}})}),t},o.export=function(e,t,o){Object.defineProperty(e,t,{enumerable:!0,get:o})}},{}]},["aQ2OM"],"aQ2OM","parcelRequiree1df"),globalThis.define=t;