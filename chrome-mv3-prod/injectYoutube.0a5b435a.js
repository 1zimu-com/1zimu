var e,a;"function"==typeof(e=globalThis.define)&&(a=e,e=null),function(a,l,t,i,r){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="function"==typeof n[i]&&n[i],s=o.cache||{},u="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);function m(e,l){if(!s[e]){if(!a[e]){var t="function"==typeof n[i]&&n[i];if(!l&&t)return t(e,!0);if(o)return o(e,!0);if(u&&"string"==typeof e)return u(e);var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}d.resolve=function(l){var t=a[e][1][l];return null!=t?t:l},d.cache={};var v=s[e]=new m.Module(e);a[e][0].call(v.exports,d,v,v.exports,this)}return s[e].exports;function d(e){var a=d.resolve(e);return!1===a?{}:m(a)}}m.isParcelRequire=!0,m.Module=function(e){this.id=e,this.bundle=m,this.exports={}},m.modules=a,m.cache=s,m.parent=o,m.register=function(e,l){a[e]=[function(e,a){a.exports=l},{}]},Object.defineProperty(m,"root",{get:function(){return n[i]}}),n[i]=m;for(var v=0;v<l.length;v++)m(l[v]);if(t){var d=m(t);"object"==typeof exports&&"undefined"!=typeof module?module.exports=d:"function"==typeof e&&e.amd?e(function(){return d}):r&&(this[r]=d)}}({aQ2OM:[function(e,a,l){var t=e("~tools/constants");let i=window,r=document;!function(e){let a=XMLHttpRequest.prototype,l=a.open,n=a.send,o=a.setRequestHeader;a.open=function(e,a){return this._method=e,this._url=a,this._requestHeaders={},this._startTime=new Date().toISOString(),l.apply(this,arguments)},a.setRequestHeader=function(e,a){return this._requestHeaders[e]=a,o.apply(this,arguments)},a.send=function(e){return this.addEventListener("load",function(){if("string"!=typeof this?._url)return;let a=this?._url?.length>0?this._url.toLowerCase():this._url;if(a&&a.includes(t.FILTER_SUBTITLE_IN_YOUTUBE_URL)){if(e&&"string"==typeof e)try{this._requestHeaders=e}catch(e){console.error("ERROR from inject.ts\u3002Request Header JSON decode failed, transfer_encoding field could be base64",e)}if(this.getAllResponseHeaders(),!this?.responseType.toLowerCase().includes("blob")&&!this?.responseType.toLowerCase().includes("arraybuffer")&&!this?.responseType.toLowerCase().includes("json")&&this?.responseText)try{let e=this.responseText;"object"!=typeof e&&"ok"!==e&&e?(JSON.parse(e),i.postMessage({postMsgType:t.SENT_YOUTUBE_SUBTITLE_API_URL,srtUrl:this._url},r.baseURI)):i.postMessage({postMsgType:t.INIT_SUBTITLENODES},r.baseURI)}catch(e){console.error("1ZIMU: Error in injectYoutube.ts\uff0cmay be too many requests!"),console.error(e)}}}),n.apply(this,arguments)}}(XMLHttpRequest)},{"~tools/constants":"DgB7r"}],DgB7r:[function(e,a,l){var t=e("@parcel/transformer-js/src/esmodule-helpers.js");t.defineInteropFlag(l),t.export(l,"SUBTITLE_LIST_PADDING_SIZE",()=>i),t.export(l,"SUBTITLE_LIST_WIDTH",()=>r),t.export(l,"SUBTITLE_LIST_HEIGHT",()=>n),t.export(l,"DRAGGABLE_HANDLE_HEIGHT",()=>o),t.export(l,"CLOSE_SVG_REM_COUNT",()=>s),t.export(l,"SUBTITLE_LIST_ROW_HEIGHT",()=>u),t.export(l,"BWP_VIDEO",()=>m),t.export(l,"VIDEO_PAUSE",()=>v),t.export(l,"KEY_DOWN",()=>d),t.export(l,"CLICK_SUBTITLE",()=>b),t.export(l,"SENT_BILIBILI_AI_SUBTITLE_URL",()=>N),t.export(l,"INIT_SUBTITLENODES",()=>c),t.export(l,"NO_SUBTITLENODES_DATA",()=>_),t.export(l,"FILTER_SUBTITLE_IN_WEBREQUEST",()=>T),t.export(l,"FILTER_SUBTITLE_IN_YOUTUBE_URL",()=>f),t.export(l,"SENT_YOUTUBE_SUBTITLE_API_URL",()=>E),t.export(l,"TOAST_CONTAINER_STYLE",()=>h),t.export(l,"NEXT",()=>p),t.export(l,"PRE",()=>S),t.export(l,"ADD",()=>x),t.export(l,"SUB",()=>L),t.export(l,"VIDEO_MASK",()=>I),t.export(l,"SUB_MASK",()=>A),t.export(l,"REPEAT",()=>g),t.export(l,"VARIABLE_REPEAT",()=>y),t.export(l,"FOLLOW_READ",()=>O),t.export(l,"FULL_MASK",()=>R),t.export(l,"SUBTITLE_LIST",()=>k),t.export(l,"SUBTITLE",()=>U),t.export(l,"ZHSUBTITLE",()=>D),t.export(l,"STORAGE_SHOWSUBTITLE",()=>B),t.export(l,"STORAGE_SHOWZHSUBTITLE",()=>M),t.export(l,"STORAGE_SHOWSUBTITLELIST",()=>G),t.export(l,"STORAGE_SHOWVIDEOMASK",()=>C),t.export(l,"STORAGE_SHOWSUBTITLELISTMASK",()=>H),t.export(l,"STORAGE_SHOWFLOATBALL",()=>w),t.export(l,"STORAGE_ALL_SHORTCUTS",()=>K),t.export(l,"STORAGE_VIDEO_MASK_HEIGHT",()=>P),t.export(l,"STORAGE_DEFAULT_VIDEO_MASK_HEIGHT",()=>F),t.export(l,"STORAGE_FOLLOW_READ_TIMES",()=>j),t.export(l,"STORAGE_DEFAULT_FOLLOW_READ_TIMES",()=>q),t.export(l,"STORAGE_FOLLOW_READ_LENGTH",()=>z),t.export(l,"STORAGE_DEFAULT_FOLLOW_READ_LENGTH",()=>V),t.export(l,"STORAGE_POST_IDLETIME_ACTIVETIME_LOCK",()=>W),t.export(l,"STORAGE_IDLETIME_VIDEO_ACTIVETIME",()=>Y),t.export(l,"STORAGE_IDLETIME_DRAGGABLEDICT_ACTIVETIME",()=>Z),t.export(l,"STORAGE_IDLETIME_DRAGGABLESUBTITLELIST_ACTIVETIME",()=>X),t.export(l,"STORAGE_IDLETIME_NEXTJSSUBTITLELIST_ACTIVETIME",()=>J),t.export(l,"STORAGE_AZURE_KEY_CODE",()=>Q),t.export(l,"STORAGE_AZURE_KEY_AREA",()=>$),t.export(l,"STORAGE_MASK_BACKDROP_BLUR_SHOW",()=>ee),t.export(l,"STORAGE_DEFAULT_MASK_BACKDROP_BLUR_SHOW",()=>ea),t.export(l,"STORAGE_MASK_BACKDROP_BLUR_COLOR",()=>el),t.export(l,"STORAGE_DEFAULT_MASK_BACKDROP_BLUR_COLOR",()=>et),t.export(l,"IDLETIME_STORAGE_DEFAULT_VALUE",()=>ei),t.export(l,"ALL_SHORT_CUTS",()=>er),t.export(l,"LIBRETRANSLATE_LANGUAGES",()=>en),t.export(l,"AZURE_LANGUAGES_TRANS",()=>eo),t.export(l,"AZURE_LANGUAGES",()=>es),t.export(l,"COLOR_PRIMARY",()=>eu),t.export(l,"FONT_SIZE",()=>em),t.export(l,"FONT_FAMILY",()=>ev),t.export(l,"FONT_WEIGHT",()=>ed),t.export(l,"LINE_HEIGHT",()=>eb),t.export(l,"ZIMU1_USESTORAGE_SYNC_JWT",()=>eN),t.export(l,"ZIMU1_USESTORAGE_SYNC_HEADIMGURL",()=>ec),t.export(l,"ZIMU1_USESTORAGE_SYNC_NICKNAME",()=>e_),t.export(l,"DRAGGABLE_NODE_CONTAINER_WIDTH",()=>eT),t.export(l,"DRAGGABLE_NODE_CONTAINER_HEIGHT",()=>ef),t.export(l,"DRAGGABLE_NODE_CONTAINER_X",()=>eE),t.export(l,"DRAGGABLE_NODE_CONTAINER_Y",()=>eh),t.export(l,"IDLE_TIME_OUT",()=>ep),t.export(l,"DARK_BG_COLOR",()=>eS);let i=5,r=300,n=500,o=16,s=2,u=36,m="bwp-video",v="VIDEO_PAUSE",d="KEY_DOWN",b="CLICK_SUBTITLE",N="SENT_BILIBILI_AI_SUBTITLE_URL",c="INIT_SUBTITLENODES",_="NO_SUBTITLENODES_DATA",T="api.bilibili.com/x/player/wbi/v2",f=".com/api/timedtext",E="SENT_YOUTUBE_SUBTITLE_API_URL",h=`
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
}`,p="K",S="J",x="I",L="U",I="H",A="L",g="R",y="Q",O="F",R="A",k="V",U="S",D="C",B="showSubtitle",M="showZhSubtitle",G="showSubtitleList",C="showVideoMask",H="showSubtitleListMask",w="showFloatBall",K="allShortcuts",P="videoMaskHeight",F=80,j="followReadTimes",q=3,z="followReadLength",V=1.5,W="storage_post_idletime_activetime_lock",Y="idleTimeVideoActivetime",Z="idleTimeDraggableDictActivetime",X="idleTimeDraggableSubListActivetime",J="idleTimeNextjsSubListActivetime",Q="storage_azure_key_code",$="storage_azure_key_area",ee="maskBackdropBlurPxValue",ea=!0,el="maskBackdropBlurColor",et="rgba(255, 255, 255, 0.3)",ei={default:""},er={next:p,pre:S,add:x,sub:L,videoMask:I,subMask:A,repeat:g,variableRepeat:y,followRead:O,fullMask:R,subtitleList:k,subtitle:U,zhSubtitle:D},en=[{value:"en",label:"English \u82f1\u8bed",chineseName:"\u82f1\u8bed"},{value:"sq",label:"Albanian \u963f\u5c14\u5df4\u5c3c\u4e9a\u8bed",chineseName:"\u963f\u5c14\u5df4\u5c3c\u4e9a\u8bed"},{value:"ar",label:"Arabic \u963f\u62c9\u4f2f\u8bed",chineseName:"\u963f\u62c9\u4f2f\u8bed"},{value:"az",label:"Azerbaijani \u963f\u585e\u62dc\u7586\u8bed",chineseName:"\u963f\u585e\u62dc\u7586\u8bed"},{value:"eu",label:"Basque \u5df4\u65af\u514b\u8bed",chineseName:"\u5df4\u65af\u514b\u8bed"},{value:"bn",label:"Bengali \u5b5f\u52a0\u62c9\u8bed",chineseName:"\u5b5f\u52a0\u62c9\u8bed"},{value:"bg",label:"Bulgarian \u4fdd\u52a0\u5229\u4e9a\u8bed",chineseName:"\u4fdd\u52a0\u5229\u4e9a\u8bed"},{value:"ca",label:"Catalan \u52a0\u6cf0\u7f57\u5c3c\u4e9a\u8bed",chineseName:"\u52a0\u6cf0\u7f57\u5c3c\u4e9a\u8bed"},{value:"zh",label:"Chinese \u4e2d\u6587",chineseName:"\u4e2d\u6587"},{value:"zt",label:"Chinese (traditional) \u7e41\u4f53\u4e2d\u6587",chineseName:"\u7e41\u4f53\u4e2d\u6587"},{value:"cs",label:"Czech \u6377\u514b\u8bed",chineseName:"\u6377\u514b\u8bed"},{value:"da",label:"Danish \u4e39\u9ea6\u8bed",chineseName:"\u4e39\u9ea6\u8bed"},{value:"nl",label:"Dutch \u8377\u5170\u8bed",chineseName:"\u8377\u5170\u8bed"},{value:"eo",label:"Esperanto \u4e16\u754c\u8bed",chineseName:"\u4e16\u754c\u8bed"},{value:"et",label:"Estonian \u7231\u6c99\u5c3c\u4e9a\u8bed",chineseName:"\u7231\u6c99\u5c3c\u4e9a\u8bed"},{value:"fi",label:"Finnish \u82ac\u5170\u8bed",chineseName:"\u82ac\u5170\u8bed"},{value:"fr",label:"French \u6cd5\u8bed",chineseName:"\u6cd5\u8bed"},{value:"gl",label:"Galician \u52a0\u5229\u897f\u4e9a\u8bed",chineseName:"\u52a0\u5229\u897f\u4e9a\u8bed"},{value:"de",label:"German \u5fb7\u8bed",chineseName:"\u5fb7\u8bed"},{value:"el",label:"Greek \u5e0c\u814a\u8bed",chineseName:"\u5e0c\u814a\u8bed"},{value:"he",label:"Hebrew \u5e0c\u4f2f\u6765\u8bed",chineseName:"\u5e0c\u4f2f\u6765\u8bed"},{value:"hi",label:"Hindi \u5370\u5730\u8bed",chineseName:"\u5370\u5730\u8bed"},{value:"hu",label:"Hungarian \u5308\u7259\u5229\u8bed",chineseName:"\u5308\u7259\u5229\u8bed"},{value:"id",label:"Indonesian \u5370\u5ea6\u5c3c\u897f\u4e9a\u8bed",chineseName:"\u5370\u5ea6\u5c3c\u897f\u4e9a\u8bed"},{value:"ga",label:"Irish \u7231\u5c14\u5170\u8bed",chineseName:"\u7231\u5c14\u5170\u8bed"},{value:"it",label:"Italian \u610f\u5927\u5229\u8bed",chineseName:"\u610f\u5927\u5229\u8bed"},{value:"ja",label:"Japanese \u65e5\u8bed",chineseName:"\u65e5\u8bed"},{value:"ko",label:"Korean \u97e9\u8bed",chineseName:"\u97e9\u8bed"},{value:"lv",label:"Latvian \u62c9\u8131\u7ef4\u4e9a\u8bed",chineseName:"\u62c9\u8131\u7ef4\u4e9a\u8bed"},{value:"lt",label:"Lithuanian \u7acb\u9676\u5b9b\u8bed",chineseName:"\u7acb\u9676\u5b9b\u8bed"},{value:"ms",label:"Malay \u9a6c\u6765\u8bed",chineseName:"\u9a6c\u6765\u8bed"},{value:"nb",label:"Norwegian \u632a\u5a01\u8bed",chineseName:"\u632a\u5a01\u8bed"},{value:"fa",label:"Persian \u6ce2\u65af\u8bed",chineseName:"\u6ce2\u65af\u8bed"},{value:"pl",label:"Polish \u6ce2\u5170\u8bed",chineseName:"\u6ce2\u5170\u8bed"},{value:"pt",label:"Portuguese \u8461\u8404\u7259\u8bed",chineseName:"\u8461\u8404\u7259\u8bed"},{value:"ro",label:"Romanian \u7f57\u9a6c\u5c3c\u4e9a\u8bed",chineseName:"\u7f57\u9a6c\u5c3c\u4e9a\u8bed"},{value:"ru",label:"Russian \u4fc4\u8bed",chineseName:"\u4fc4\u8bed"},{value:"sk",label:"Slovak \u65af\u6d1b\u4f10\u514b\u8bed",chineseName:"\u65af\u6d1b\u4f10\u514b\u8bed"},{value:"sl",label:"Slovenian \u65af\u6d1b\u6587\u5c3c\u4e9a\u8bed",chineseName:"\u65af\u6d1b\u6587\u5c3c\u4e9a\u8bed"},{value:"es",label:"Spanish \u897f\u73ed\u7259\u8bed",chineseName:"\u897f\u73ed\u7259\u8bed"},{value:"sv",label:"Swedish \u745e\u5178\u8bed",chineseName:"\u745e\u5178\u8bed"},{value:"tl",label:"Tagalog \u4ed6\u52a0\u7984\u8bed",chineseName:"\u4ed6\u52a0\u7984\u8bed"},{value:"th",label:"Thai \u6cf0\u8bed",chineseName:"\u6cf0\u8bed"},{value:"tr",label:"Turkish \u571f\u8033\u5176\u8bed",chineseName:"\u571f\u8033\u5176\u8bed"},{value:"uk",label:"Ukranian \u4e4c\u514b\u5170\u8bed",chineseName:"\u4e4c\u514b\u5170\u8bed"},{value:"ur",label:"Urdu \u4e4c\u5c14\u90fd\u8bed",chineseName:"\u4e4c\u5c14\u90fd\u8bed"}],eo=[{value:"af",label:"\u5357\u975e\u8377\u5170\u8bed Afrikaans"},{value:"am",label:"\u963f\u59c6\u54c8\u62c9\u8bed \u12a0\u121b\u122d\u129b"},{value:"ar",label:"\u963f\u62c9\u4f2f\u8bed \u0627\u0644\u0639\u0631\u0628\u064a\u0629"},{value:"as",label:"\u963f\u8428\u59c6\u8bed \u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be"},{value:"az",label:"\u963f\u585e\u62dc\u7586\u8bed Az\u0259rbaycan"},{value:"ba",label:"\u5df4\u4ec0\u57fa\u5c14\u8bed Bashkir"},{value:"bg",label:"\u4fdd\u52a0\u5229\u4e9a\u8bed \u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438"},{value:"bho",label:"Bhojpuri \u092d\u094b\u091c\u092a\u0941\u0930\u0940"},{value:"bn",label:"\u5b5f\u52a0\u62c9\u8bed \u09ac\u09be\u0982\u09b2\u09be"},{value:"bo",label:"\u85cf\u8bed \u0f56\u0f7c\u0f51\u0f0b\u0f66\u0f90\u0f51\u0f0b"},{value:"brx",label:"Bodo \u092c\u0921\u093c\u094b"},{value:"bs",label:"\u6ce2\u65af\u5c3c\u4e9a\u8bed Bosanski"},{value:"ca",label:"\u52a0\u6cf0\u7f57\u5c3c\u4e9a\u8bed Catal\xe0"},{value:"cs",label:"\u6377\u514b\u8bed \u010ce\u0161tina"},{value:"cy",label:"\u5a01\u5c14\u58eb\u8bed Cymraeg"},{value:"da",label:"\u4e39\u9ea6\u8bed Dansk"},{value:"de",label:"\u5fb7\u8bed Deutsch"},{value:"doi",label:"Dogri \u0921\u094b\u0917\u0930\u0940"},{value:"dsb",label:"\u4e0b\u7d22\u5e03\u8bed Dolnoserb\u0161\u0107ina"},{value:"dv",label:"\u8fea\u7ef4\u5e0c\u8bed \u078b\u07a8\u0788\u07ac\u0780\u07a8\u0784\u07a6\u0790\u07b0"},{value:"el",label:"\u5e0c\u814a\u8bed \u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"},{value:"en",label:"\u82f1\u8bed English"},{value:"es",label:"\u897f\u73ed\u7259\u8bed Espa\xf1ol"},{value:"et",label:"\u7231\u6c99\u5c3c\u4e9a\u8bed Eesti"},{value:"eu",label:"\u5df4\u65af\u514b\u8bed Euskara"},{value:"fa",label:"\u6ce2\u65af\u8bed \u0641\u0627\u0631\u0633\u06cc"},{value:"fi",label:"\u82ac\u5170\u8bed Suomi"},{value:"fil",label:"\u83f2\u5f8b\u5bbe\u8bed Filipino"},{value:"fj",label:"\u6590\u6d4e\u8bed Na Vosa Vakaviti"},{value:"fo",label:"\u6cd5\u7f57\u8bed F\xf8royskt"},{value:"fr",label:"\u6cd5\u8bed Fran\xe7ais"},{value:"fr-CA",label:"\u6cd5\u8bed (\u52a0\u62ff\u5927) Fran\xe7ais (Canada)"},{value:"ga",label:"\u7231\u5c14\u5170\u8bed Gaeilge"},{value:"gl",label:"\u52a0\u5229\u897f\u4e9a\u8bed Galego"},{value:"gom",label:"Konkani \u0915\u094b\u0902\u0915\u0923\u0940"},{value:"gu",label:"\u53e4\u5409\u62c9\u7279\u8bed \u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0"},{value:"ha",label:"\u8c6a\u8428\u8bed Hausa"},{value:"he",label:"\u5e0c\u4f2f\u6765\u8bed \u05e2\u05d1\u05e8\u05d9\u05ea"},{value:"hi",label:"\u5370\u5730\u8bed \u0939\u093f\u0928\u094d\u0926\u0940"},{value:"hne",label:"Chhattisgarhi \u091b\u0924\u094d\u0924\u0940\u0938\u0917\u0922\u093c\u0940"},{value:"hr",label:"\u514b\u7f57\u5730\u4e9a\u8bed Hrvatski"},{value:"hsb",label:"\u4e0a\u7d22\u5e03\u8bed Hornjoserb\u0161\u0107ina"},{value:"ht",label:"\u6d77\u5730\u514b\u91cc\u5965\u5c14\u8bed Haitian Creole"},{value:"hu",label:"\u5308\u7259\u5229\u8bed Magyar"},{value:"hy",label:"\u4e9a\u7f8e\u5c3c\u4e9a\u8bed \u0540\u0561\u0575\u0565\u0580\u0565\u0576"},{value:"id",label:"\u5370\u5ea6\u5c3c\u897f\u4e9a\u8bed Indonesia"},{value:"ig",label:"\u4f0a\u535a\u8bed \xc1s\u1ee5\u0300s\u1ee5\u0301 \xccgb\xf2"},{value:"ikt",label:"Inuinnaqtun Inuinnaqtun"},{value:"is",label:"\u51b0\u5c9b\u8bed \xcdslenska"},{value:"it",label:"\u610f\u5927\u5229\u8bed Italiano"},{value:"iu",label:"\u56e0\u7ebd\u7279\u8bed \u1403\u14c4\u1483\u144e\u1450\u1466"},{value:"iu-Latn",label:"Inuktitut (Latin) Inuktitut (Latin)"},{value:"ja",label:"\u65e5\u8bed \u65e5\u672c\u8a9e"},{value:"ka",label:"\u683c\u9c81\u5409\u4e9a\u8bed \u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8"},{value:"kk",label:"\u54c8\u8428\u514b\u8bed \u049a\u0430\u0437\u0430\u049b \u0422\u0456\u043b\u0456"},{value:"km",label:"\u9ad8\u68c9\u8bed \u1781\u17d2\u1798\u17c2\u179a"},{value:"kmr",label:"\u5e93\u5c14\u5fb7\u8bed (\u5317) Kurd\xee (Bakur)"},{value:"kn",label:"\u5361\u7eb3\u8fbe\u8bed \u0c95\u0ca8\u0ccd\u0ca8\u0ca1"},{value:"ko",label:"\u97e9\u8bed \ud55c\uad6d\uc5b4"},{value:"ks",label:"Kashmiri \u06a9\u0672\u0634\u064f\u0631"},{value:"ku",label:"\u5e93\u5c14\u5fb7\u8bed (\u4e2d) Kurd\xee (Nav\xeen)"},{value:"ky",label:"\u67ef\u5c14\u514b\u5b5c\u8bed \u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430"},{value:"ln",label:"\u6797\u52a0\u62c9\u8bed Ling\xe1la"},{value:"lo",label:"\u8001\u631d\u8bed \u0ea5\u0eb2\u0ea7"},{value:"lt",label:"\u7acb\u9676\u5b9b\u8bed Lietuvi\u0173"},{value:"lug",label:"Ganda Ganda"},{value:"lv",label:"\u62c9\u8131\u7ef4\u4e9a\u8bed Latvie\u0161u"},{value:"lzh",label:"Chinese (Literary) \u4e2d\u6587 (\u6587\u8a00\u6587)"},{value:"mai",label:"\u8fc8\u8482\u5229\u8bed \u092e\u0948\u0925\u093f\u0932\u0940"},{value:"mg",label:"\u9a6c\u62c9\u52a0\u65af\u8bed Malagasy"},{value:"mi",label:"\u6bdb\u5229\u8bed Te Reo M\u0101ori"},{value:"mk",label:"\u9a6c\u5176\u987f\u8bed \u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438"},{value:"ml",label:"\u9a6c\u62c9\u96c5\u62c9\u59c6\u8bed \u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02"},{value:"mn-Cyrl",label:"Mongolian (Cyrillic) \u041c\u043e\u043d\u0433\u043e\u043b"},{value:"mn-Mong",label:"Mongolian (Traditional) \u182e\u1823\u1829\u182d\u1823\u182f \u182c\u1821\u182f\u1821"},{value:"mni",label:"Manipuri \uabc3\uabe9\uabc7\uabe9\uabc2\uabe3\uabdf"},{value:"mr",label:"\u9a6c\u62c9\u5730\u8bed \u092e\u0930\u093e\u0920\u0940"},{value:"ms",label:"\u9a6c\u6765\u8bed Melayu"},{value:"mt",label:"\u9a6c\u8033\u4ed6\u8bed Malti"},{value:"mww",label:"\u82d7\u8bed Hmong Daw"},{value:"my",label:"\u7f05\u7538\u8bed \u1019\u103c\u1014\u103a\u1019\u102c"},{value:"nb",label:"\u4e66\u9762\u632a\u5a01\u8bed Norsk Bokm\xe5l"},{value:"ne",label:"\u5c3c\u6cca\u5c14\u8bed \u0928\u0947\u092a\u093e\u0932\u0940"},{value:"nl",label:"\u8377\u5170\u8bed Nederlands"},{value:"nso",label:"Sesotho sa Leboa Sesotho sa Leboa"},{value:"nya",label:"Nyanja Nyanja"},{value:"or",label:"\u5965\u91cc\u4e9a\u8bed \u0b13\u0b21\u0b3c\u0b3f\u0b06"},{value:"otq",label:"\u514b\u96f7\u5854\u7f57\u5965\u6258\u7c73\u8bed H\xf1\xe4h\xf1u"},{value:"pa",label:"\u65c1\u906e\u666e\u8bed \u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40"},{value:"pl",label:"\u6ce2\u5170\u8bed Polski"},{value:"prs",label:"\u8fbe\u91cc\u8bed \u062f\u0631\u06cc"},{value:"ps",label:"\u666e\u4ec0\u56fe\u8bed \u067e\u069a\u062a\u0648"},{value:"pt",label:"\u8461\u8404\u7259\u8bed (\u5df4\u897f) Portugu\xeas (Brasil)"},{value:"pt-PT",label:"\u8461\u8404\u7259\u8bed (\u8461\u8404\u7259) Portugu\xeas (Portugal)"},{value:"ro",label:"\u7f57\u9a6c\u5c3c\u4e9a\u8bed Rom\xe2n\u0103"},{value:"ru",label:"\u4fc4\u8bed \u0420\u0443\u0441\u0441\u043a\u0438\u0439"},{value:"run",label:"Rundi Rundi"},{value:"rw",label:"\u5362\u65fa\u8fbe\u8bed Kinyarwanda"},{value:"sd",label:"\u4fe1\u5fb7\u8bed \u0633\u0646\u068c\u064a"},{value:"si",label:"\u50e7\u4f3d\u7f57\u8bed \u0dc3\u0dd2\u0d82\u0dc4\u0dbd"},{value:"sk",label:"\u65af\u6d1b\u4f10\u514b\u8bed Sloven\u010dina"},{value:"sl",label:"\u65af\u6d1b\u6587\u5c3c\u4e9a\u8bed Sloven\u0161\u010dina"},{value:"sm",label:"\u8428\u6469\u4e9a\u8bed Gagana S\u0101moa"},{value:"sn",label:"\u7ecd\u7eb3\u8bed chiShona"},{value:"so",label:"\u7d22\u9a6c\u91cc\u8bed Soomaali"},{value:"sq",label:"\u963f\u5c14\u5df4\u5c3c\u4e9a\u8bed Shqip"},{value:"sr-Cyrl",label:"\u585e\u5c14\u7ef4\u4e9a\u8bed (\u897f\u91cc\u5c14\u6587) \u0421\u0440\u043f\u0441\u043a\u0438 (\u045b\u0438\u0440\u0438\u043b\u0438\u0446\u0430)"},{value:"sr-Latn",label:"\u585e\u5c14\u7ef4\u4e9a\u8bed (\u62c9\u4e01\u6587) Srpski (latinica)"},{value:"st",label:"Sesotho Sesotho"},{value:"sv",label:"\u745e\u5178\u8bed Svenska"},{value:"sw",label:"\u65af\u74e6\u5e0c\u91cc\u8bed Kiswahili"},{value:"ta",label:"\u6cf0\u7c73\u5c14\u8bed \u0ba4\u0bae\u0bbf\u0bb4\u0bcd"},{value:"te",label:"\u6cf0\u5362\u56fa\u8bed \u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"},{value:"th",label:"\u6cf0\u8bed \u0e44\u0e17\u0e22"},{value:"ti",label:"\u63d0\u683c\u5229\u5c3c\u4e9a\u8bed \u1275\u130d\u122d"},{value:"tk",label:"\u571f\u5e93\u66fc\u8bed T\xfcrkmen Dili"},{value:"tlh-Latn",label:"\u514b\u6797\u8d21\u8bed (\u62c9\u4e01\u6587) Klingon (Latin)"},{value:"tlh-Piqd",label:"\u514b\u6797\u8d21\u8bed (pIqaD) Klingon (pIqaD)"},{value:"tn",label:"Setswana Setswana"},{value:"to",label:"\u6c64\u52a0\u8bed Lea Fakatonga"},{value:"tr",label:"\u571f\u8033\u5176\u8bed T\xfcrk\xe7e"},{value:"tt",label:"\u9791\u977c\u8bed \u0422\u0430\u0442\u0430\u0440"},{value:"ty",label:"\u5854\u5e0c\u63d0\u8bed Reo Tahiti"},{value:"ug",label:"\u7ef4\u543e\u5c14\u8bed \u0626\u06c7\u064a\u063a\u06c7\u0631\u0686\u06d5"},{value:"uk",label:"\u4e4c\u514b\u5170\u8bed \u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"},{value:"ur",label:"\u4e4c\u5c14\u90fd\u8bed \u0627\u0631\u062f\u0648"},{value:"uz",label:"\u4e4c\u5179\u522b\u514b\u8bed O\u2018Zbek"},{value:"vi",label:"\u8d8a\u5357\u8bed Ti\u1ebfng Vi\u1ec7t"},{value:"xh",label:"\u79d1\u8428\u8bed isiXhosa"},{value:"yo",label:"\u7ea6\u9c81\u5df4\u8bed \xc8d\xe8 Yor\xf9b\xe1"},{value:"yua",label:"\u5c24\u5361\u7279\u514b\u739b\u96c5\u8bed Yucatec Maya"},{value:"yue",label:"\u7ca4\u8bed (\u7e41\u4f53) \u7cb5\u8a9e (\u7e41\u9ad4)"},{value:"zh-Hans",label:"\u4e2d\u6587 (\u7b80\u4f53) \u4e2d\u6587 (\u7b80\u4f53)"},{value:"zh-Hant",label:"\u4e2d\u6587 (\u7e41\u4f53) \u7e41\u9ad4\u4e2d\u6587 (\u7e41\u9ad4)"},{value:"zu",label:"\u7956\u9c81\u8bed Isi-Zulu"}],es={translation:{af:{name:"\u5357\u975e\u8377\u5170\u8bed",nativeName:"Afrikaans",dir:"ltr"},am:{name:"\u963f\u59c6\u54c8\u62c9\u8bed",nativeName:"\u12a0\u121b\u122d\u129b",dir:"ltr"},ar:{name:"\u963f\u62c9\u4f2f\u8bed",nativeName:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629",dir:"rtl"},as:{name:"\u963f\u8428\u59c6\u8bed",nativeName:"\u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be",dir:"ltr"},az:{name:"\u963f\u585e\u62dc\u7586\u8bed",nativeName:"Az\u0259rbaycan",dir:"ltr"},ba:{name:"\u5df4\u4ec0\u57fa\u5c14\u8bed",nativeName:"Bashkir",dir:"ltr"},bg:{name:"\u4fdd\u52a0\u5229\u4e9a\u8bed",nativeName:"\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438",dir:"ltr"},bho:{name:"Bhojpuri",nativeName:"\u092d\u094b\u091c\u092a\u0941\u0930\u0940",dir:"ltr"},bn:{name:"\u5b5f\u52a0\u62c9\u8bed",nativeName:"\u09ac\u09be\u0982\u09b2\u09be",dir:"ltr"},bo:{name:"\u85cf\u8bed",nativeName:"\u0f56\u0f7c\u0f51\u0f0b\u0f66\u0f90\u0f51\u0f0b",dir:"ltr"},brx:{name:"Bodo",nativeName:"\u092c\u0921\u093c\u094b",dir:"ltr"},bs:{name:"\u6ce2\u65af\u5c3c\u4e9a\u8bed",nativeName:"Bosanski",dir:"ltr"},ca:{name:"\u52a0\u6cf0\u7f57\u5c3c\u4e9a\u8bed",nativeName:"Catal\xe0",dir:"ltr"},cs:{name:"\u6377\u514b\u8bed",nativeName:"\u010ce\u0161tina",dir:"ltr"},cy:{name:"\u5a01\u5c14\u58eb\u8bed",nativeName:"Cymraeg",dir:"ltr"},da:{name:"\u4e39\u9ea6\u8bed",nativeName:"Dansk",dir:"ltr"},de:{name:"\u5fb7\u8bed",nativeName:"Deutsch",dir:"ltr"},doi:{name:"Dogri",nativeName:"\u0921\u094b\u0917\u0930\u0940",dir:"ltr"},dsb:{name:"\u4e0b\u7d22\u5e03\u8bed",nativeName:"Dolnoserb\u0161\u0107ina",dir:"ltr"},dv:{name:"\u8fea\u7ef4\u5e0c\u8bed",nativeName:"\u078b\u07a8\u0788\u07ac\u0780\u07a8\u0784\u07a6\u0790\u07b0",dir:"rtl"},el:{name:"\u5e0c\u814a\u8bed",nativeName:"\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",dir:"ltr"},en:{name:"\u82f1\u8bed",nativeName:"English",dir:"ltr"},es:{name:"\u897f\u73ed\u7259\u8bed",nativeName:"Espa\xf1ol",dir:"ltr"},et:{name:"\u7231\u6c99\u5c3c\u4e9a\u8bed",nativeName:"Eesti",dir:"ltr"},eu:{name:"\u5df4\u65af\u514b\u8bed",nativeName:"Euskara",dir:"ltr"},fa:{name:"\u6ce2\u65af\u8bed",nativeName:"\u0641\u0627\u0631\u0633\u06cc",dir:"rtl"},fi:{name:"\u82ac\u5170\u8bed",nativeName:"Suomi",dir:"ltr"},fil:{name:"\u83f2\u5f8b\u5bbe\u8bed",nativeName:"Filipino",dir:"ltr"},fj:{name:"\u6590\u6d4e\u8bed",nativeName:"Na Vosa Vakaviti",dir:"ltr"},fo:{name:"\u6cd5\u7f57\u8bed",nativeName:"F\xf8royskt",dir:"ltr"},fr:{name:"\u6cd5\u8bed",nativeName:"Fran\xe7ais",dir:"ltr"},"fr-CA":{name:"\u6cd5\u8bed (\u52a0\u62ff\u5927)",nativeName:"Fran\xe7ais (Canada)",dir:"ltr"},ga:{name:"\u7231\u5c14\u5170\u8bed",nativeName:"Gaeilge",dir:"ltr"},gl:{name:"\u52a0\u5229\u897f\u4e9a\u8bed",nativeName:"Galego",dir:"ltr"},gom:{name:"Konkani",nativeName:"\u0915\u094b\u0902\u0915\u0923\u0940",dir:"ltr"},gu:{name:"\u53e4\u5409\u62c9\u7279\u8bed",nativeName:"\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0",dir:"ltr"},ha:{name:"\u8c6a\u8428\u8bed",nativeName:"Hausa",dir:"ltr"},he:{name:"\u5e0c\u4f2f\u6765\u8bed",nativeName:"\u05e2\u05d1\u05e8\u05d9\u05ea",dir:"rtl"},hi:{name:"\u5370\u5730\u8bed",nativeName:"\u0939\u093f\u0928\u094d\u0926\u0940",dir:"ltr"},hne:{name:"Chhattisgarhi",nativeName:"\u091b\u0924\u094d\u0924\u0940\u0938\u0917\u0922\u093c\u0940",dir:"ltr"},hr:{name:"\u514b\u7f57\u5730\u4e9a\u8bed",nativeName:"Hrvatski",dir:"ltr"},hsb:{name:"\u4e0a\u7d22\u5e03\u8bed",nativeName:"Hornjoserb\u0161\u0107ina",dir:"ltr"},ht:{name:"\u6d77\u5730\u514b\u91cc\u5965\u5c14\u8bed",nativeName:"Haitian Creole",dir:"ltr"},hu:{name:"\u5308\u7259\u5229\u8bed",nativeName:"Magyar",dir:"ltr"},hy:{name:"\u4e9a\u7f8e\u5c3c\u4e9a\u8bed",nativeName:"\u0540\u0561\u0575\u0565\u0580\u0565\u0576",dir:"ltr"},id:{name:"\u5370\u5ea6\u5c3c\u897f\u4e9a\u8bed",nativeName:"Indonesia",dir:"ltr"},ig:{name:"\u4f0a\u535a\u8bed",nativeName:"\xc1s\u1ee5\u0300s\u1ee5\u0301 \xccgb\xf2",dir:"ltr"},ikt:{name:"Inuinnaqtun",nativeName:"Inuinnaqtun",dir:"ltr"},is:{name:"\u51b0\u5c9b\u8bed",nativeName:"\xcdslenska",dir:"ltr"},it:{name:"\u610f\u5927\u5229\u8bed",nativeName:"Italiano",dir:"ltr"},iu:{name:"\u56e0\u7ebd\u7279\u8bed",nativeName:"\u1403\u14c4\u1483\u144e\u1450\u1466",dir:"ltr"},"iu-Latn":{name:"Inuktitut (Latin)",nativeName:"Inuktitut (Latin)",dir:"ltr"},ja:{name:"\u65e5\u8bed",nativeName:"\u65e5\u672c\u8a9e",dir:"ltr"},ka:{name:"\u683c\u9c81\u5409\u4e9a\u8bed",nativeName:"\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8",dir:"ltr"},kk:{name:"\u54c8\u8428\u514b\u8bed",nativeName:"\u049a\u0430\u0437\u0430\u049b \u0422\u0456\u043b\u0456",dir:"ltr"},km:{name:"\u9ad8\u68c9\u8bed",nativeName:"\u1781\u17d2\u1798\u17c2\u179a",dir:"ltr"},kmr:{name:"\u5e93\u5c14\u5fb7\u8bed (\u5317)",nativeName:"Kurd\xee (Bakur)",dir:"ltr"},kn:{name:"\u5361\u7eb3\u8fbe\u8bed",nativeName:"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1",dir:"ltr"},ko:{name:"\u97e9\u8bed",nativeName:"\ud55c\uad6d\uc5b4",dir:"ltr"},ks:{name:"Kashmiri",nativeName:"\u06a9\u0672\u0634\u064f\u0631",dir:"rtl"},ku:{name:"\u5e93\u5c14\u5fb7\u8bed (\u4e2d)",nativeName:"Kurd\xee (Nav\xeen)",dir:"rtl"},ky:{name:"\u67ef\u5c14\u514b\u5b5c\u8bed",nativeName:"\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430",dir:"ltr"},ln:{name:"\u6797\u52a0\u62c9\u8bed",nativeName:"Ling\xe1la",dir:"ltr"},lo:{name:"\u8001\u631d\u8bed",nativeName:"\u0ea5\u0eb2\u0ea7",dir:"ltr"},lt:{name:"\u7acb\u9676\u5b9b\u8bed",nativeName:"Lietuvi\u0173",dir:"ltr"},lug:{name:"Ganda",nativeName:"Ganda",dir:"ltr"},lv:{name:"\u62c9\u8131\u7ef4\u4e9a\u8bed",nativeName:"Latvie\u0161u",dir:"ltr"},lzh:{name:"Chinese (Literary)",nativeName:"\u4e2d\u6587 (\u6587\u8a00\u6587)",dir:"ltr"},mai:{name:"\u8fc8\u8482\u5229\u8bed",nativeName:"\u092e\u0948\u0925\u093f\u0932\u0940",dir:"ltr"},mg:{name:"\u9a6c\u62c9\u52a0\u65af\u8bed",nativeName:"Malagasy",dir:"ltr"},mi:{name:"\u6bdb\u5229\u8bed",nativeName:"Te Reo M\u0101ori",dir:"ltr"},mk:{name:"\u9a6c\u5176\u987f\u8bed",nativeName:"\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438",dir:"ltr"},ml:{name:"\u9a6c\u62c9\u96c5\u62c9\u59c6\u8bed",nativeName:"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02",dir:"ltr"},"mn-Cyrl":{name:"Mongolian (Cyrillic)",nativeName:"\u041c\u043e\u043d\u0433\u043e\u043b",dir:"ltr"},"mn-Mong":{name:"Mongolian (Traditional)",nativeName:"\u182e\u1823\u1829\u182d\u1823\u182f \u182c\u1821\u182f\u1821",dir:"ltr"},mni:{name:"Manipuri",nativeName:"\uabc3\uabe9\uabc7\uabe9\uabc2\uabe3\uabdf",dir:"ltr"},mr:{name:"\u9a6c\u62c9\u5730\u8bed",nativeName:"\u092e\u0930\u093e\u0920\u0940",dir:"ltr"},ms:{name:"\u9a6c\u6765\u8bed",nativeName:"Melayu",dir:"ltr"},mt:{name:"\u9a6c\u8033\u4ed6\u8bed",nativeName:"Malti",dir:"ltr"},mww:{name:"\u82d7\u8bed",nativeName:"Hmong Daw",dir:"ltr"},my:{name:"\u7f05\u7538\u8bed",nativeName:"\u1019\u103c\u1014\u103a\u1019\u102c",dir:"ltr"},nb:{name:"\u4e66\u9762\u632a\u5a01\u8bed",nativeName:"Norsk Bokm\xe5l",dir:"ltr"},ne:{name:"\u5c3c\u6cca\u5c14\u8bed",nativeName:"\u0928\u0947\u092a\u093e\u0932\u0940",dir:"ltr"},nl:{name:"\u8377\u5170\u8bed",nativeName:"Nederlands",dir:"ltr"},nso:{name:"Sesotho sa Leboa",nativeName:"Sesotho sa Leboa",dir:"ltr"},nya:{name:"Nyanja",nativeName:"Nyanja",dir:"ltr"},or:{name:"\u5965\u91cc\u4e9a\u8bed",nativeName:"\u0b13\u0b21\u0b3c\u0b3f\u0b06",dir:"ltr"},otq:{name:"\u514b\u96f7\u5854\u7f57\u5965\u6258\u7c73\u8bed",nativeName:"H\xf1\xe4h\xf1u",dir:"ltr"},pa:{name:"\u65c1\u906e\u666e\u8bed",nativeName:"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40",dir:"ltr"},pl:{name:"\u6ce2\u5170\u8bed",nativeName:"Polski",dir:"ltr"},prs:{name:"\u8fbe\u91cc\u8bed",nativeName:"\u062f\u0631\u06cc",dir:"rtl"},ps:{name:"\u666e\u4ec0\u56fe\u8bed",nativeName:"\u067e\u069a\u062a\u0648",dir:"rtl"},pt:{name:"\u8461\u8404\u7259\u8bed (\u5df4\u897f)",nativeName:"Portugu\xeas (Brasil)",dir:"ltr"},"pt-PT":{name:"\u8461\u8404\u7259\u8bed (\u8461\u8404\u7259)",nativeName:"Portugu\xeas (Portugal)",dir:"ltr"},ro:{name:"\u7f57\u9a6c\u5c3c\u4e9a\u8bed",nativeName:"Rom\xe2n\u0103",dir:"ltr"},ru:{name:"\u4fc4\u8bed",nativeName:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",dir:"ltr"},run:{name:"Rundi",nativeName:"Rundi",dir:"ltr"},rw:{name:"\u5362\u65fa\u8fbe\u8bed",nativeName:"Kinyarwanda",dir:"ltr"},sd:{name:"\u4fe1\u5fb7\u8bed",nativeName:"\u0633\u0646\u068c\u064a",dir:"rtl"},si:{name:"\u50e7\u4f3d\u7f57\u8bed",nativeName:"\u0dc3\u0dd2\u0d82\u0dc4\u0dbd",dir:"ltr"},sk:{name:"\u65af\u6d1b\u4f10\u514b\u8bed",nativeName:"Sloven\u010dina",dir:"ltr"},sl:{name:"\u65af\u6d1b\u6587\u5c3c\u4e9a\u8bed",nativeName:"Sloven\u0161\u010dina",dir:"ltr"},sm:{name:"\u8428\u6469\u4e9a\u8bed",nativeName:"Gagana S\u0101moa",dir:"ltr"},sn:{name:"\u7ecd\u7eb3\u8bed",nativeName:"chiShona",dir:"ltr"},so:{name:"\u7d22\u9a6c\u91cc\u8bed",nativeName:"Soomaali",dir:"ltr"},sq:{name:"\u963f\u5c14\u5df4\u5c3c\u4e9a\u8bed",nativeName:"Shqip",dir:"ltr"},"sr-Cyrl":{name:"\u585e\u5c14\u7ef4\u4e9a\u8bed (\u897f\u91cc\u5c14\u6587)",nativeName:"\u0421\u0440\u043f\u0441\u043a\u0438 (\u045b\u0438\u0440\u0438\u043b\u0438\u0446\u0430)",dir:"ltr"},"sr-Latn":{name:"\u585e\u5c14\u7ef4\u4e9a\u8bed (\u62c9\u4e01\u6587)",nativeName:"Srpski (latinica)",dir:"ltr"},st:{name:"Sesotho",nativeName:"Sesotho",dir:"ltr"},sv:{name:"\u745e\u5178\u8bed",nativeName:"Svenska",dir:"ltr"},sw:{name:"\u65af\u74e6\u5e0c\u91cc\u8bed",nativeName:"Kiswahili",dir:"ltr"},ta:{name:"\u6cf0\u7c73\u5c14\u8bed",nativeName:"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",dir:"ltr"},te:{name:"\u6cf0\u5362\u56fa\u8bed",nativeName:"\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41",dir:"ltr"},th:{name:"\u6cf0\u8bed",nativeName:"\u0e44\u0e17\u0e22",dir:"ltr"},ti:{name:"\u63d0\u683c\u5229\u5c3c\u4e9a\u8bed",nativeName:"\u1275\u130d\u122d",dir:"ltr"},tk:{name:"\u571f\u5e93\u66fc\u8bed",nativeName:"T\xfcrkmen Dili",dir:"ltr"},"tlh-Latn":{name:"\u514b\u6797\u8d21\u8bed (\u62c9\u4e01\u6587)",nativeName:"Klingon (Latin)",dir:"ltr"},"tlh-Piqd":{name:"\u514b\u6797\u8d21\u8bed (pIqaD)",nativeName:"Klingon (pIqaD)",dir:"ltr"},tn:{name:"Setswana",nativeName:"Setswana",dir:"ltr"},to:{name:"\u6c64\u52a0\u8bed",nativeName:"Lea Fakatonga",dir:"ltr"},tr:{name:"\u571f\u8033\u5176\u8bed",nativeName:"T\xfcrk\xe7e",dir:"ltr"},tt:{name:"\u9791\u977c\u8bed",nativeName:"\u0422\u0430\u0442\u0430\u0440",dir:"ltr"},ty:{name:"\u5854\u5e0c\u63d0\u8bed",nativeName:"Reo Tahiti",dir:"ltr"},ug:{name:"\u7ef4\u543e\u5c14\u8bed",nativeName:"\u0626\u06c7\u064a\u063a\u06c7\u0631\u0686\u06d5",dir:"rtl"},uk:{name:"\u4e4c\u514b\u5170\u8bed",nativeName:"\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",dir:"ltr"},ur:{name:"\u4e4c\u5c14\u90fd\u8bed",nativeName:"\u0627\u0631\u062f\u0648",dir:"rtl"},uz:{name:"\u4e4c\u5179\u522b\u514b\u8bed",nativeName:"O\u2018Zbek",dir:"ltr"},vi:{name:"\u8d8a\u5357\u8bed",nativeName:"Ti\u1ebfng Vi\u1ec7t",dir:"ltr"},xh:{name:"\u79d1\u8428\u8bed",nativeName:"isiXhosa",dir:"ltr"},yo:{name:"\u7ea6\u9c81\u5df4\u8bed",nativeName:"\xc8d\xe8 Yor\xf9b\xe1",dir:"ltr"},yua:{name:"\u5c24\u5361\u7279\u514b\u739b\u96c5\u8bed",nativeName:"Yucatec Maya",dir:"ltr"},yue:{name:"\u7ca4\u8bed (\u7e41\u4f53)",nativeName:"\u7cb5\u8a9e (\u7e41\u9ad4)",dir:"ltr"},"zh-Hans":{name:"\u4e2d\u6587 (\u7b80\u4f53)",nativeName:"\u4e2d\u6587 (\u7b80\u4f53)",dir:"ltr"},"zh-Hant":{name:"\u4e2d\u6587 (\u7e41\u4f53)",nativeName:"\u7e41\u9ad4\u4e2d\u6587 (\u7e41\u9ad4)",dir:"ltr"},zu:{name:"\u7956\u9c81\u8bed",nativeName:"Isi-Zulu",dir:"ltr"}}},eu="#16a34a",em="21px",ev='ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',ed="700",eb="1.25",eN="zimu1_useStorage_sync_jwt",ec="zimu1_useStorage_sync_headimgurl",e_="zimu1_useStorage_sync_nickname",eT=1e3,ef=480,eE=150,eh=150,ep=30,eS="#1e1e1e"},{"@parcel/transformer-js/src/esmodule-helpers.js":"cHUbl"}],cHUbl:[function(e,a,l){l.interopDefault=function(e){return e&&e.__esModule?e:{default:e}},l.defineInteropFlag=function(e){Object.defineProperty(e,"__esModule",{value:!0})},l.exportAll=function(e,a){return Object.keys(e).forEach(function(l){"default"===l||"__esModule"===l||a.hasOwnProperty(l)||Object.defineProperty(a,l,{enumerable:!0,get:function(){return e[l]}})}),a},l.export=function(e,a,l){Object.defineProperty(e,a,{enumerable:!0,get:l})}},{}]},["aQ2OM"],"aQ2OM","parcelRequiree1df"),globalThis.define=a;