var e,t;"function"==typeof(e=globalThis.define)&&(t=e,e=null),function(t,o,r,s,i){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a="function"==typeof n[s]&&n[s],f=a.cache||{},l="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function c(e,o){if(!f[e]){if(!t[e]){var r="function"==typeof n[s]&&n[s];if(!o&&r)return r(e,!0);if(a)return a(e,!0);if(l&&"string"==typeof e)return l(e);var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}T.resolve=function(o){var r=t[e][1][o];return null!=r?r:o},T.cache={};var p=f[e]=new c.Module(e);t[e][0].call(p.exports,T,p,p.exports,this)}return f[e].exports;function T(e){var t=T.resolve(e);return!1===t?{}:c(t)}}c.isParcelRequire=!0,c.Module=function(e){this.id=e,this.bundle=c,this.exports={}},c.modules=t,c.cache=f,c.parent=a,c.register=function(e,o){t[e]=[function(e,t){t.exports=o},{}]},Object.defineProperty(c,"root",{get:function(){return n[s]}}),n[s]=c;for(var p=0;p<o.length;p++)c(o[p]);if(r){var T=c(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=T:"function"==typeof e&&e.amd?e(function(){return T}):i&&(this[i]=T)}}({"903XX":[function(e,t,o){var r=e("~tools/constants");let s=window,i=document;!function(e){let t=XMLHttpRequest.prototype,o=t.open,n=t.send,a=t.setRequestHeader;t.open=function(e,t){return this._method=e,this._url=t,this._requestHeaders={},this._startTime=new Date().toISOString(),o.apply(this,arguments)},t.setRequestHeader=function(e,t){return this._requestHeaders[e]=t,a.apply(this,arguments)},t.send=function(e){return this.addEventListener("load",function(){let t=this._url?this._url.toLowerCase():this._url;if(t&&t.includes(r.FILTER_SUBTITLE_IN_WEBREQUEST)){if(e&&"string"==typeof e)try{this._requestHeaders=e}catch(e){console.error("ERROR from inject.ts\u3002Request Header JSON decode failed, transfer_encoding field could be base64",e)}if(this.getAllResponseHeaders(),!this?.responseType.toLowerCase().includes("blob")&&!this?.responseType.toLowerCase().includes("arraybuffer")&&!this?.responseType.toLowerCase().includes("json")&&this?.responseText)try{let e=this.responseText;if("object"!=typeof e&&"ok"!==e&&e){let t=JSON.parse(e);if(t?.data?.subtitle?.subtitles){let e=t.data.subtitle.subtitles,o="",n="";s.postMessage({postMsgType:r.INIT_SUBTITLENODES},i.baseURI);for(let t=0;t<e.length;t++){let r=e[t];if(r.lan.includes("en")){let e=`https:${r.subtitle_url}`;o=e}else if(r.lan.includes("zh")){let e=`https:${r.subtitle_url}`;n=e}}o.length>0?s.postMessage({postMsgType:r.SENT_BILIBILI_AI_SUBTITLE_URL,srtUrl:o,zhStrUrl:n},i.baseURI):s.postMessage({postMsgType:r.NO_SUBTITLENODES_DATA},i.baseURI)}}}catch(e){console.error("Error in responseType try catch"),console.error(e)}}}),n.apply(this,arguments)}}(XMLHttpRequest)},{"~tools/constants":"DgB7r"}],DgB7r:[function(e,t,o){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(o),r.export(o,"SUBTITLE_LIST_PADDING_SIZE",()=>s),r.export(o,"SUBTITLE_LIST_WIDTH",()=>i),r.export(o,"SUBTITLE_LIST_HEIGHT",()=>n),r.export(o,"DRAGGABLE_HANDLE_HEIGHT",()=>a),r.export(o,"CLOSE_SVG_REM_COUNT",()=>f),r.export(o,"SUBTITLE_LIST_ROW_HEIGHT",()=>l),r.export(o,"BWP_VIDEO",()=>c),r.export(o,"VIDEO_PAUSE",()=>p),r.export(o,"KEY_DOWN",()=>T),r.export(o,"CLICK_SUBTITLE",()=>_),r.export(o,"SENT_BILIBILI_AI_SUBTITLE_URL",()=>u),r.export(o,"INIT_SUBTITLENODES",()=>E),r.export(o,"NO_SUBTITLENODES_DATA",()=>d),r.export(o,"FILTER_SUBTITLE_IN_WEBREQUEST",()=>S),r.export(o,"FILTER_SUBTITLE_IN_YOUTUBE_URL",()=>I),r.export(o,"SENT_YOUTUBE_SUBTITLE_API_URL",()=>L),r.export(o,"TOAST_CONTAINER_STYLE",()=>y),r.export(o,"NEXT",()=>x),r.export(o,"PRE",()=>O),r.export(o,"ADD",()=>h),r.export(o,"SUB",()=>U),r.export(o,"VIDEO_MASK",()=>R),r.export(o,"SUB_MASK",()=>A),r.export(o,"REPEAT",()=>g),r.export(o,"VARIABLE_REPEAT",()=>b),r.export(o,"FOLLOW_READ",()=>B),r.export(o,"FULL_MASK",()=>D),r.export(o,"SUBTITLE_LIST",()=>N),r.export(o,"SUBTITLE",()=>H),r.export(o,"STORAGE_SHOWSUBTITLE",()=>w),r.export(o,"STORAGE_SHOWSUBTITLELIST",()=>M),r.export(o,"STORAGE_SHOWVIDEOMASK",()=>v),r.export(o,"STORAGE_SHOWSUBTITLELISTMASK",()=>m),r.export(o,"STORAGE_ALL_SHORTCUTS",()=>G),r.export(o,"STORAGE_VIDEO_MASK_HEIGHT",()=>F),r.export(o,"STORAGE_DEFAULT_VIDEO_MASK_HEIGHT",()=>W),r.export(o,"STORAGE_FOLLOW_READ_TIMES",()=>P),r.export(o,"STORAGE_DEFAULT_FOLLOW_READ_TIMES",()=>C),r.export(o,"STORAGE_FOLLOW_READ_LENGTH",()=>j),r.export(o,"STORAGE_DEFAULT_FOLLOW_READ_LENGTH",()=>k),r.export(o,"ALL_SHORT_CUTS",()=>q);let s=5,i=300,n=500,a=16,f=2,l=36,c="bwp-video",p="VIDEO_PAUSE",T="KEY_DOWN",_="CLICK_SUBTITLE",u="SENT_BILIBILI_AI_SUBTITLE_URL",E="INIT_SUBTITLENODES",d="NO_SUBTITLENODES_DATA",S="api.bilibili.com/x/player/wbi/v2",I=".com/api/timedtext",L="SENT_YOUTUBE_SUBTITLE_API_URL",y=`
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
}`,x="K",O="J",h="I",U="U",R="H",A="L",g="R",b="Q",B="F",D="A",N="V",H="S",w="showSubtitle",M="showSubtitleList",v="showVideoMask",m="showSubtitleListMask",G="allShortcuts",F="videoMaskHeight",W=80,P="followReadTimes",C=3,j="followReadLength",k=1.5,q={next:x,pre:O,add:h,sub:U,videoMask:R,subMask:A,repeat:g,variableRepeat:b,followRead:B,fullMask:D,subtitleList:N,subtitle:H}},{"@parcel/transformer-js/src/esmodule-helpers.js":"cHUbl"}],cHUbl:[function(e,t,o){o.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},o.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.exportAll=function(e,t){return Object.keys(e).forEach(function(o){"default"===o||"__esModule"===o||t.hasOwnProperty(o)||Object.defineProperty(t,o,{enumerable:!0,get:function(){return e[o]}})}),t},o.export=function(e,t,o){Object.defineProperty(e,t,{enumerable:!0,get:o})}},{}]},["903XX"],"903XX","parcelRequiree1df"),globalThis.define=t;