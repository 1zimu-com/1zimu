var e,t;"function"==typeof(e=globalThis.define)&&(t=e,e=null),function(t,o,r,s,i){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l="function"==typeof n[s]&&n[s],a=l.cache||{},T="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function _(e,o){if(!a[e]){if(!t[e]){var r="function"==typeof n[s]&&n[s];if(!o&&r)return r(e,!0);if(l)return l(e,!0);if(T&&"string"==typeof e)return T(e);var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}p.resolve=function(o){var r=t[e][1][o];return null!=r?r:o},p.cache={};var f=a[e]=new _.Module(e);t[e][0].call(f.exports,p,f,f.exports,this)}return a[e].exports;function p(e){var t=p.resolve(e);return!1===t?{}:_(t)}}_.isParcelRequire=!0,_.Module=function(e){this.id=e,this.bundle=_,this.exports={}},_.modules=t,_.cache=a,_.parent=l,_.register=function(e,o){t[e]=[function(e,t){t.exports=o},{}]},Object.defineProperty(_,"root",{get:function(){return n[s]}}),n[s]=_;for(var f=0;f<o.length;f++)_(o[f]);if(r){var p=_(r);"object"==typeof exports&&"undefined"!=typeof module?module.exports=p:"function"==typeof e&&e.amd?e(function(){return p}):i&&(this[i]=p)}}({"903XX":[function(e,t,o){var r=e("~tools/constants");let s=window,i=document;!function(e){let t=XMLHttpRequest.prototype,o=t.open,n=t.send,l=t.setRequestHeader;t.open=function(e,t){return this._method=e,this._url=t,this._requestHeaders={},this._startTime=new Date().toISOString(),o.apply(this,arguments)},t.setRequestHeader=function(e,t){return this._requestHeaders[e]=t,l.apply(this,arguments)},t.send=function(e){return this.addEventListener("load",function(){if("string"!=typeof this?._url)return;let t=(this?._url,this._url.toLowerCase());if(t&&t.includes(r.FILTER_SUBTITLE_IN_WEBREQUEST)){if(e&&"string"==typeof e)try{this._requestHeaders=e}catch(e){console.error("ERROR from inject.ts\u3002Request Header JSON decode failed, transfer_encoding field could be base64",e)}if(this.getAllResponseHeaders(),!this?.responseType.toLowerCase().includes("blob")&&!this?.responseType.toLowerCase().includes("arraybuffer")&&!this?.responseType.toLowerCase().includes("json")&&this?.responseText)try{let e=this.responseText;if("object"!=typeof e&&"ok"!==e&&e){let t=JSON.parse(e);if(t?.data?.subtitle?.subtitles){let e=t.data.subtitle.subtitles,o="",n="",l="",a="";s.postMessage({postMsgType:r.INIT_SUBTITLENODES},i.baseURI);for(let t=0;t<e.length;t++){let r=e[t];if(1===r.type){if(r.lan.includes("en")){let e=`https:${r.subtitle_url}`;o=e}else if(r.lan.includes("zh")){let e=`https:${r.subtitle_url}`;n=e}}if(0===r.type){if(r.lan.includes("en")){let e=`https:${r.subtitle_url}`;l=e}else if(r.lan.includes("zh")){let e=`https:${r.subtitle_url}`;a=e}}}o?.length>0&&n?.length>0&&l?.length>0&&a?.length>0?s.postMessage({postMsgType:r.SENT_BILIBILI_AI_SUBTITLE_URL,srtUrl:l,zhStrUrl:a},i.baseURI):o?.length>0&&n?.length>0&&(!(l?.length>0)||!(a?.length>0))?s.postMessage({postMsgType:r.SENT_BILIBILI_AI_SUBTITLE_URL,srtUrl:o,zhStrUrl:n},i.baseURI):l?.length>0&&a?.length>0&&(!(o?.length>0)||!(n?.length>0))?s.postMessage({postMsgType:r.SENT_BILIBILI_AI_SUBTITLE_URL,srtUrl:l,zhStrUrl:a},i.baseURI):n?.length>0&&!(o?.length>0)?s.postMessage({postMsgType:r.SENT_BILIBILI_AI_SUBTITLE_URL,srtUrl:"",zhStrUrl:n},i.baseURI):!(n?.length>0)&&o?.length>0?s.postMessage({postMsgType:r.SENT_BILIBILI_AI_SUBTITLE_URL,srtUrl:o,zhStrUrl:""},i.baseURI):a?.length>0&&!(l?.length>0)?s.postMessage({postMsgType:r.SENT_BILIBILI_AI_SUBTITLE_URL,srtUrl:"",zhStrUrl:a},i.baseURI):!(a?.length>0)&&l?.length>0?s.postMessage({postMsgType:r.SENT_BILIBILI_AI_SUBTITLE_URL,srtUrl:l,zhStrUrl:""},i.baseURI):s.postMessage({postMsgType:r.NO_SUBTITLENODES_DATA},i.baseURI)}}}catch(e){console.error("Error in responseType try catch"),console.error(e)}}}),n.apply(this,arguments)}}(XMLHttpRequest)},{"~tools/constants":"DgB7r"}],DgB7r:[function(e,t,o){var r=e("@parcel/transformer-js/src/esmodule-helpers.js");r.defineInteropFlag(o),r.export(o,"SUBTITLE_LIST_PADDING_SIZE",()=>s),r.export(o,"SUBTITLE_LIST_WIDTH",()=>i),r.export(o,"SUBTITLE_LIST_HEIGHT",()=>n),r.export(o,"DRAGGABLE_HANDLE_HEIGHT",()=>l),r.export(o,"CLOSE_SVG_REM_COUNT",()=>a),r.export(o,"SUBTITLE_LIST_ROW_HEIGHT",()=>T),r.export(o,"BWP_VIDEO",()=>_),r.export(o,"VIDEO_PAUSE",()=>f),r.export(o,"KEY_DOWN",()=>p),r.export(o,"CLICK_SUBTITLE",()=>I),r.export(o,"SENT_BILIBILI_AI_SUBTITLE_URL",()=>E),r.export(o,"INIT_SUBTITLENODES",()=>c),r.export(o,"NO_SUBTITLENODES_DATA",()=>S),r.export(o,"FILTER_SUBTITLE_IN_WEBREQUEST",()=>u),r.export(o,"FILTER_SUBTITLE_IN_YOUTUBE_URL",()=>L),r.export(o,"SENT_YOUTUBE_SUBTITLE_API_URL",()=>d),r.export(o,"TOAST_CONTAINER_STYLE",()=>U),r.export(o,"NEXT",()=>h),r.export(o,"PRE",()=>y),r.export(o,"ADD",()=>g),r.export(o,"SUB",()=>A),r.export(o,"VIDEO_MASK",()=>x),r.export(o,"SUB_MASK",()=>O),r.export(o,"REPEAT",()=>R),r.export(o,"VARIABLE_REPEAT",()=>B),r.export(o,"FOLLOW_READ",()=>b),r.export(o,"FULL_MASK",()=>M),r.export(o,"SUBTITLE_LIST",()=>N),r.export(o,"SUBTITLE",()=>D),r.export(o,"ZHSUBTITLE",()=>m),r.export(o,"STORAGE_SHOWSUBTITLE",()=>H),r.export(o,"STORAGE_SHOWZHSUBTITLE",()=>G),r.export(o,"STORAGE_SHOWSUBTITLELIST",()=>w),r.export(o,"STORAGE_SHOWVIDEOMASK",()=>v),r.export(o,"STORAGE_SHOWSUBTITLELISTMASK",()=>C),r.export(o,"STORAGE_ALL_SHORTCUTS",()=>F),r.export(o,"STORAGE_VIDEO_MASK_HEIGHT",()=>W),r.export(o,"STORAGE_DEFAULT_VIDEO_MASK_HEIGHT",()=>j),r.export(o,"STORAGE_FOLLOW_READ_TIMES",()=>V),r.export(o,"STORAGE_DEFAULT_FOLLOW_READ_TIMES",()=>P),r.export(o,"STORAGE_FOLLOW_READ_LENGTH",()=>z),r.export(o,"STORAGE_DEFAULT_FOLLOW_READ_LENGTH",()=>k),r.export(o,"STORAGE_IDLETIME_VIDEO_ACTIVETIME",()=>K),r.export(o,"STORAGE_IDLETIME_DRAGGABLESUBTITLELIST_ACTIVETIME",()=>q),r.export(o,"STORAGE_IDLETIME_NEXTJSSUBTITLELIST_ACTIVETIME",()=>Y),r.export(o,"IDLETIME_STORAGE_DEFAULT_VALUE",()=>X),r.export(o,"ALL_SHORT_CUTS",()=>Z),r.export(o,"COLOR_PRIMARY",()=>J),r.export(o,"FONT_SIZE",()=>$),r.export(o,"FONT_FAMILY",()=>Q),r.export(o,"FONT_WEIGHT",()=>ee),r.export(o,"LINE_HEIGHT",()=>et),r.export(o,"ZIMU1_USESTORAGE_SYNC_JWT",()=>eo),r.export(o,"ZIMU1_USESTORAGE_SYNC_HEADIMGURL",()=>er),r.export(o,"ZIMU1_USESTORAGE_SYNC_NICKNAME",()=>es);let s=5,i=300,n=500,l=16,a=2,T=36,_="bwp-video",f="VIDEO_PAUSE",p="KEY_DOWN",I="CLICK_SUBTITLE",E="SENT_BILIBILI_AI_SUBTITLE_URL",c="INIT_SUBTITLENODES",S="NO_SUBTITLENODES_DATA",u="api.bilibili.com/x/player/wbi/v2",L=".com/api/timedtext",d="SENT_YOUTUBE_SUBTITLE_API_URL",U=`
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
}`,h="K",y="J",g="I",A="U",x="H",O="L",R="R",B="Q",b="F",M="A",N="V",D="S",m="C",H="showSubtitle",G="showZhSubtitle",w="showSubtitleList",v="showVideoMask",C="showSubtitleListMask",F="allShortcuts",W="videoMaskHeight",j=80,V="followReadTimes",P=3,z="followReadLength",k=1.5,K="idleTimeVideoActivetime",q="idleTimeDraggableSubListActivetime",Y="idleTimeNextjsSubListActivetime",X={default:""},Z={next:h,pre:y,add:g,sub:A,videoMask:x,subMask:O,repeat:R,variableRepeat:B,followRead:b,fullMask:M,subtitleList:N,subtitle:D,zhSubtitle:m},J="#16a34a",$="21px",Q='ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',ee="700",et="1.25",eo="zimu1_useStorage_sync_jwt",er="zimu1_useStorage_sync_headimgurl",es="zimu1_useStorage_sync_nickname"},{"@parcel/transformer-js/src/esmodule-helpers.js":"cHUbl"}],cHUbl:[function(e,t,o){o.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},o.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},o.exportAll=function(e,t){return Object.keys(e).forEach(function(o){"default"===o||"__esModule"===o||t.hasOwnProperty(o)||Object.defineProperty(t,o,{enumerable:!0,get:function(){return e[o]}})}),t},o.export=function(e,t,o){Object.defineProperty(e,t,{enumerable:!0,get:o})}},{}]},["903XX"],"903XX","parcelRequiree1df"),globalThis.define=t;