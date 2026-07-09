import{b as m1}from"./chunk-DD7ZP3AU.js";import{$a as r1,$b as S,Fb as o1,Ha as e1,R as L2,W as U,Wb as v2,Xb as t1,Za as d2,_b as c2,fa as l1,fb as s1,tb as i1,xb as f1,yb as n1}from"./chunk-UUABHUB6.js";import{a as c1,b as a1}from"./chunk-UUTQQLSI.js";function y2(c,l){(l==null||l>c.length)&&(l=c.length);for(var a=0,e=Array(l);a<l;a++)e[a]=c[a];return e}function c3(c){if(Array.isArray(c))return c}function a3(c){if(Array.isArray(c))return y2(c)}function l3(c,l){if(!(c instanceof l))throw new TypeError("Cannot call a class as a function")}function z1(c,l){for(var a=0;a<l.length;a++){var e=l[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,j1(e.key),e)}}function e3(c,l,a){return l&&z1(c.prototype,l),a&&z1(c,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function e2(c,l){var a=typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(!a){if(Array.isArray(c)||(a=O2(c))||l&&c&&typeof c.length=="number"){a&&(c=a);var e=0,r=function(){};return{s:r,n:function(){return e>=c.length?{done:!0}:{done:!1,value:c[e++]}},e:function(n){throw n},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s,i=!0,f=!1;return{s:function(){a=a.call(c)},n:function(){var n=a.next();return i=n.done,n},e:function(n){f=!0,s=n},f:function(){try{i||a.return==null||a.return()}finally{if(f)throw s}}}}function u(c,l,a){return(l=j1(l))in c?Object.defineProperty(c,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[l]=a,c}function r3(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function s3(c,l){var a=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(a!=null){var e,r,s,i,f=[],n=!0,t=!1;try{if(s=(a=a.call(c)).next,l===0){if(Object(a)!==a)return;n=!1}else for(;!(n=(e=s.call(a)).done)&&(f.push(e.value),f.length!==l);n=!0);}catch(z){t=!0,r=z}finally{try{if(!n&&a.return!=null&&(i=a.return(),Object(i)!==i))return}finally{if(t)throw r}}return f}}function i3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function p1(c,l){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);l&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),a.push.apply(a,e)}return a}function o(c){for(var l=1;l<arguments.length;l++){var a=arguments[l]!=null?arguments[l]:{};l%2?p1(Object(a),!0).forEach(function(e){u(c,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):p1(Object(a)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(a,e))})}return c}function o2(c,l){return c3(c)||s3(c,l)||O2(c,l)||i3()}function k(c){return a3(c)||r3(c)||O2(c)||f3()}function n3(c,l){if(typeof c!="object"||!c)return c;var a=c[Symbol.toPrimitive];if(a!==void 0){var e=a.call(c,l||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(c)}function j1(c){var l=n3(c,"string");return typeof l=="symbol"?l:l+""}function i2(c){"@babel/helpers - typeof";return i2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},i2(c)}function O2(c,l){if(c){if(typeof c=="string")return y2(c,l);var a={}.toString.call(c).slice(8,-1);return a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set"?Array.from(c):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?y2(c,l):void 0}}var u1=function(){},q2={},V1={},_1=null,$1={mark:u1,measure:u1};try{typeof window<"u"&&(q2=window),typeof document<"u"&&(V1=document),typeof MutationObserver<"u"&&(_1=MutationObserver),typeof performance<"u"&&($1=performance)}catch{}var o3=q2.navigator||{},M1=o3.userAgent,L1=M1===void 0?"":M1,H=q2,d=V1,d1=_1,a2=$1,A8=!!H.document,B=!!d.documentElement&&!!d.head&&typeof d.addEventListener=="function"&&typeof d.createElement=="function",X1=~L1.indexOf("MSIE")||~L1.indexOf("Trident/"),h2,t3=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,m3=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,Y1={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},z3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},K1=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],g="classic",Q="duotone",Q1="sharp",J1="sharp-duotone",Z1="chisel",c4="etch",a4="graphite",l4="jelly",e4="jelly-duo",r4="jelly-fill",s4="notdog",i4="notdog-duo",f4="slab",n4="slab-press",o4="thumbprint",t4="utility",m4="utility-duo",z4="utility-fill",p4="whiteboard",p3="Classic",u3="Duotone",M3="Sharp",L3="Sharp Duotone",d3="Chisel",v3="Etch",h3="Graphite",C3="Jelly",g3="Jelly Duo",x3="Jelly Fill",S3="Notdog",N3="Notdog Duo",b3="Slab",y3="Slab Press",w3="Thumbprint",k3="Utility",A3="Utility Duo",P3="Utility Fill",T3="Whiteboard",u4=[g,Q,Q1,J1,Z1,c4,a4,l4,e4,r4,s4,i4,f4,n4,o4,t4,m4,z4,p4],P8=(h2={},u(u(u(u(u(u(u(u(u(u(h2,g,p3),Q,u3),Q1,M3),J1,L3),Z1,d3),c4,v3),a4,h3),l4,C3),e4,g3),r4,x3),u(u(u(u(u(u(u(u(u(h2,s4,S3),i4,N3),f4,b3),n4,y3),o4,w3),t4,k3),m4,A3),z4,P3),p4,T3)),F3={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},B3={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},D3=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),H3={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},M4=["fak","fa-kit","fakd","fa-kit-duotone"],v1={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},R3=["kit"],E3="kit",U3="kit-duotone",I3="Kit",W3="Kit Duotone",T8=u(u({},E3,I3),U3,W3),O3={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},q3={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},G3={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},h1={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},C2,l2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},j3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],V3="classic",_3="duotone",$3="sharp",X3="sharp-duotone",Y3="chisel",K3="etch",Q3="graphite",J3="jelly",Z3="jelly-duo",c0="jelly-fill",a0="notdog",l0="notdog-duo",e0="slab",r0="slab-press",s0="thumbprint",i0="utility",f0="utility-duo",n0="utility-fill",o0="whiteboard",t0="Classic",m0="Duotone",z0="Sharp",p0="Sharp Duotone",u0="Chisel",M0="Etch",L0="Graphite",d0="Jelly",v0="Jelly Duo",h0="Jelly Fill",C0="Notdog",g0="Notdog Duo",x0="Slab",S0="Slab Press",N0="Thumbprint",b0="Utility",y0="Utility Duo",w0="Utility Fill",k0="Whiteboard",F8=(C2={},u(u(u(u(u(u(u(u(u(u(C2,V3,t0),_3,m0),$3,z0),X3,p0),Y3,u0),K3,M0),Q3,L0),J3,d0),Z3,v0),c0,h0),u(u(u(u(u(u(u(u(u(C2,a0,C0),l0,g0),e0,x0),r0,S0),s0,N0),i0,b0),f0,y0),n0,w0),o0,k0)),A0="kit",P0="kit-duotone",T0="Kit",F0="Kit Duotone",B8=u(u({},A0,T0),P0,F0),B0={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},D0={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},w2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},H0=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],L4=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(j3,H0),R0=["solid","regular","light","thin","duotone","brands","semibold"],d4=[1,2,3,4,5,6,7,8,9,10],E0=d4.concat([11,12,13,14,15,16,17,18,19,20]),U0=["aw","fw","pull-left","pull-right"],I0=[].concat(k(Object.keys(D0)),R0,U0,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",l2.GROUP,l2.SWAP_OPACITY,l2.PRIMARY,l2.SECONDARY]).concat(d4.map(function(c){return"".concat(c,"x")})).concat(E0.map(function(c){return"w-".concat(c)})),W0={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},T="___FONT_AWESOME___",k2=16,v4="fa",h4="svg-inline--fa",W="data-fa-i2svg",A2="data-fa-pseudo-element",O0="data-fa-pseudo-element-pending",G2="data-prefix",j2="data-icon",C1="fontawesome-i2svg",q0="async",G0=["HTML","HEAD","STYLE","SCRIPT"],C4=["::before","::after",":before",":after"],g4=(function(){try{return!0}catch{return!1}})();function J(c){return new Proxy(c,{get:function(a,e){return e in a?a[e]:a[g]}})}var x4=o({},Y1);x4[g]=o(o(o(o({},{"fa-duotone":"duotone"}),Y1[g]),v1.kit),v1["kit-duotone"]);var j0=J(x4),P2=o({},H3);P2[g]=o(o(o(o({},{duotone:"fad"}),P2[g]),h1.kit),h1["kit-duotone"]);var g1=J(P2),T2=o({},w2);T2[g]=o(o({},T2[g]),G3.kit);var V2=J(T2),F2=o({},B0);F2[g]=o(o({},F2[g]),O3.kit);var D8=J(F2),V0=t3,S4="fa-layers-text",_0=m3,$0=o({},F3),H8=J($0),X0=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],g2=z3,Y0=[].concat(k(R3),k(I0)),X=H.FontAwesomeConfig||{};function K0(c){var l=d.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function Q0(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}d&&typeof d.querySelector=="function"&&(x1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],x1.forEach(function(c){var l=o2(c,2),a=l[0],e=l[1],r=Q0(K0(a));r!=null&&(X[e]=r)}));var x1,N4={styleDefault:"solid",familyDefault:g,cssPrefix:v4,replacementClass:h4,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};X.familyPrefix&&(X.cssPrefix=X.familyPrefix);var V=o(o({},N4),X);V.autoReplaceSvg||(V.observeMutations=!1);var p={};Object.keys(N4).forEach(function(c){Object.defineProperty(p,c,{enumerable:!0,set:function(a){V[c]=a,Y.forEach(function(e){return e(p)})},get:function(){return V[c]}})});Object.defineProperty(p,"familyPrefix",{enumerable:!0,set:function(l){V.cssPrefix=l,Y.forEach(function(a){return a(p)})},get:function(){return V.cssPrefix}});H.FontAwesomeConfig=p;var Y=[];function J0(c){return Y.push(c),function(){Y.splice(Y.indexOf(c),1)}}var D=k2,A={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Z0(c){if(!(!c||!B)){var l=d.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;for(var a=d.head.childNodes,e=null,r=a.length-1;r>-1;r--){var s=a[r],i=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(e=s)}return d.head.insertBefore(l,e),c}}var c6="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function S1(){for(var c=12,l="";c-- >0;)l+=c6[Math.random()*62|0];return l}function _(c){for(var l=[],a=(c||[]).length>>>0;a--;)l[a]=c[a];return l}function _2(c){return c.classList?_(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(l){return l})}function b4(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function a6(c){return Object.keys(c||{}).reduce(function(l,a){return l+"".concat(a,'="').concat(b4(c[a]),'" ')},"").trim()}function t2(c){return Object.keys(c||{}).reduce(function(l,a){return l+"".concat(a,": ").concat(c[a].trim(),";")},"")}function $2(c){return c.size!==A.size||c.x!==A.x||c.y!==A.y||c.rotate!==A.rotate||c.flipX||c.flipY}function l6(c){var l=c.transform,a=c.containerWidth,e=c.iconWidth,r={transform:"translate(".concat(a/2," 256)")},s="translate(".concat(l.x*32,", ").concat(l.y*32,") "),i="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),f="rotate(".concat(l.rotate," 0 0)"),n={transform:"".concat(s," ").concat(i," ").concat(f)},t={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:n,path:t}}function e6(c){var l=c.transform,a=c.width,e=a===void 0?k2:a,r=c.height,s=r===void 0?k2:r,i=c.startCentered,f=i===void 0?!1:i,n="";return f&&X1?n+="translate(".concat(l.x/D-e/2,"em, ").concat(l.y/D-s/2,"em) "):f?n+="translate(calc(-50% + ".concat(l.x/D,"em), calc(-50% + ").concat(l.y/D,"em)) "):n+="translate(".concat(l.x/D,"em, ").concat(l.y/D,"em) "),n+="scale(".concat(l.size/D*(l.flipX?-1:1),", ").concat(l.size/D*(l.flipY?-1:1),") "),n+="rotate(".concat(l.rotate,"deg) "),n}var r6=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function y4(){var c=v4,l=h4,a=p.cssPrefix,e=p.replacementClass,r=r6;if(a!==c||e!==l){var s=new RegExp("\\.".concat(c,"\\-"),"g"),i=new RegExp("\\--".concat(c,"\\-"),"g"),f=new RegExp("\\.".concat(l),"g");r=r.replace(s,".".concat(a,"-")).replace(i,"--".concat(a,"-")).replace(f,".".concat(e))}return r}var N1=!1;function x2(){p.autoAddCss&&!N1&&(Z0(y4()),N1=!0)}var s6={mixout:function(){return{dom:{css:y4,insertCss:x2}}},hooks:function(){return{beforeDOMElementCreation:function(){x2()},beforeI2svg:function(){x2()}}}},F=H||{};F[T]||(F[T]={});F[T].styles||(F[T].styles={});F[T].hooks||(F[T].hooks={});F[T].shims||(F[T].shims=[]);var w=F[T],w4=[],k4=function(){d.removeEventListener("DOMContentLoaded",k4),f2=1,w4.map(function(l){return l()})},f2=!1;B&&(f2=(d.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(d.readyState),f2||d.addEventListener("DOMContentLoaded",k4));function i6(c){B&&(f2?setTimeout(c,0):w4.push(c))}function Z(c){var l=c.tag,a=c.attributes,e=a===void 0?{}:a,r=c.children,s=r===void 0?[]:r;return typeof c=="string"?b4(c):"<".concat(l," ").concat(a6(e),">").concat(s.map(Z).join(""),"</").concat(l,">")}function b1(c,l,a){if(c&&c[l]&&c[l][a])return{prefix:l,iconName:a,icon:c[l][a]}}var f6=function(l,a){return function(e,r,s,i){return l.call(a,e,r,s,i)}},S2=function(l,a,e,r){var s=Object.keys(l),i=s.length,f=r!==void 0?f6(a,r):a,n,t,z;for(e===void 0?(n=1,z=l[s[0]]):(n=0,z=e);n<i;n++)t=s[n],z=f(z,l[t],t,l);return z};function A4(c){return k(c).length!==1?null:c.codePointAt(0).toString(16)}function y1(c){return Object.keys(c).reduce(function(l,a){var e=c[a],r=!!e.icon;return r?l[e.iconName]=e.icon:l[a]=e,l},{})}function B2(c,l){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=a.skipHooks,r=e===void 0?!1:e,s=y1(l);typeof w.hooks.addPack=="function"&&!r?w.hooks.addPack(c,y1(l)):w.styles[c]=o(o({},w.styles[c]||{}),s),c==="fas"&&B2("fa",l)}var K=w.styles,n6=w.shims,P4=Object.keys(V2),o6=P4.reduce(function(c,l){return c[l]=Object.keys(V2[l]),c},{}),X2=null,T4={},F4={},B4={},D4={},H4={};function t6(c){return~Y0.indexOf(c)}function m6(c,l){var a=l.split("-"),e=a[0],r=a.slice(1).join("-");return e===c&&r!==""&&!t6(r)?r:null}var R4=function(){var l=function(s){return S2(K,function(i,f,n){return i[n]=S2(f,s,{}),i},{})};T4=l(function(r,s,i){if(s[3]&&(r[s[3]]=i),s[2]){var f=s[2].filter(function(n){return typeof n=="number"});f.forEach(function(n){r[n.toString(16)]=i})}return r}),F4=l(function(r,s,i){if(r[i]=i,s[2]){var f=s[2].filter(function(n){return typeof n=="string"});f.forEach(function(n){r[n]=i})}return r}),H4=l(function(r,s,i){var f=s[2];return r[i]=i,f.forEach(function(n){r[n]=i}),r});var a="far"in K||p.autoFetchSvg,e=S2(n6,function(r,s){var i=s[0],f=s[1],n=s[2];return f==="far"&&!a&&(f="fas"),typeof i=="string"&&(r.names[i]={prefix:f,iconName:n}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:f,iconName:n}),r},{names:{},unicodes:{}});B4=e.names,D4=e.unicodes,X2=m2(p.styleDefault,{family:p.familyDefault})};J0(function(c){X2=m2(c.styleDefault,{family:p.familyDefault})});R4();function Y2(c,l){return(T4[c]||{})[l]}function z6(c,l){return(F4[c]||{})[l]}function I(c,l){return(H4[c]||{})[l]}function E4(c){return B4[c]||{prefix:null,iconName:null}}function p6(c){var l=D4[c],a=Y2("fas",c);return l||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function R(){return X2}var U4=function(){return{prefix:null,iconName:null,rest:[]}};function u6(c){var l=g,a=P4.reduce(function(e,r){return e[r]="".concat(p.cssPrefix,"-").concat(r),e},{});return u4.forEach(function(e){(c.includes(a[e])||c.some(function(r){return o6[e].includes(r)}))&&(l=e)}),l}function m2(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=l.family,e=a===void 0?g:a,r=j0[e][c];if(e===Q&&!c)return"fad";var s=g1[e][c]||g1[e][r],i=c in w.styles?c:null,f=s||i||null;return f}function M6(c){var l=[],a=null;return c.forEach(function(e){var r=m6(p.cssPrefix,e);r?a=r:e&&l.push(e)}),{iconName:a,rest:l}}function w1(c){return c.sort().filter(function(l,a,e){return e.indexOf(l)===a})}var k1=L4.concat(M4);function z2(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=l.skipLookups,e=a===void 0?!1:a,r=null,s=w1(c.filter(function(M){return k1.includes(M)})),i=w1(c.filter(function(M){return!k1.includes(M)})),f=s.filter(function(M){return r=M,!K1.includes(M)}),n=o2(f,1),t=n[0],z=t===void 0?null:t,m=u6(s),L=o(o({},M6(i)),{},{prefix:m2(z,{family:m})});return o(o(o({},L),h6({values:c,family:m,styles:K,config:p,canonical:L,givenPrefix:r})),L6(e,r,L))}function L6(c,l,a){var e=a.prefix,r=a.iconName;if(c||!e||!r)return{prefix:e,iconName:r};var s=l==="fa"?E4(r):{},i=I(e,r);return r=s.iconName||i||r,e=s.prefix||e,e==="far"&&!K.far&&K.fas&&!p.autoFetchSvg&&(e="fas"),{prefix:e,iconName:r}}var d6=u4.filter(function(c){return c!==g||c!==Q}),v6=Object.keys(w2).filter(function(c){return c!==g}).map(function(c){return Object.keys(w2[c])}).flat();function h6(c){var l=c.values,a=c.family,e=c.canonical,r=c.givenPrefix,s=r===void 0?"":r,i=c.styles,f=i===void 0?{}:i,n=c.config,t=n===void 0?{}:n,z=a===Q,m=l.includes("fa-duotone")||l.includes("fad"),L=t.familyDefault==="duotone",M=e.prefix==="fad"||e.prefix==="fa-duotone";if(!z&&(m||L||M)&&(e.prefix="fad"),(l.includes("fa-brands")||l.includes("fab"))&&(e.prefix="fab"),!e.prefix&&d6.includes(a)){var h=Object.keys(f).find(function(x){return v6.includes(x)});if(h||t.autoFetchSvg){var v=D3.get(a).defaultShortPrefixId;e.prefix=v,e.iconName=I(e.prefix,e.iconName)||e.iconName}}return(e.prefix==="fa"||s==="fa")&&(e.prefix=R()||"fas"),e}var C6=(function(){function c(){l3(this,c),this.definitions={}}return e3(c,[{key:"add",value:function(){for(var a=this,e=arguments.length,r=new Array(e),s=0;s<e;s++)r[s]=arguments[s];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(f){a.definitions[f]=o(o({},a.definitions[f]||{}),i[f]),B2(f,i[f]);var n=V2[g][f];n&&B2(n,i[f]),R4()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(s){var i=r[s],f=i.prefix,n=i.iconName,t=i.icon,z=t[2];a[f]||(a[f]={}),z.length>0&&z.forEach(function(m){typeof m=="string"&&(a[f][m]=t)}),a[f][n]=t}),a}}])})(),A1=[],G={},j={},g6=Object.keys(j);function x6(c,l){var a=l.mixoutsTo;return A1=c,G={},Object.keys(j).forEach(function(e){g6.indexOf(e)===-1&&delete j[e]}),A1.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(a[i]=r[i]),i2(r[i])==="object"&&Object.keys(r[i]).forEach(function(f){a[i]||(a[i]={}),a[i][f]=r[i][f]})}),e.hooks){var s=e.hooks();Object.keys(s).forEach(function(i){G[i]||(G[i]=[]),G[i].push(s[i])})}e.provides&&e.provides(j)}),a}function D2(c,l){for(var a=arguments.length,e=new Array(a>2?a-2:0),r=2;r<a;r++)e[r-2]=arguments[r];var s=G[c]||[];return s.forEach(function(i){l=i.apply(null,[l].concat(e))}),l}function O(c){for(var l=arguments.length,a=new Array(l>1?l-1:0),e=1;e<l;e++)a[e-1]=arguments[e];var r=G[c]||[];r.forEach(function(s){s.apply(null,a)})}function E(){var c=arguments[0],l=Array.prototype.slice.call(arguments,1);return j[c]?j[c].apply(null,l):void 0}function H2(c){c.prefix==="fa"&&(c.prefix="fas");var l=c.iconName,a=c.prefix||R();if(l)return l=I(a,l)||l,b1(I4.definitions,a,l)||b1(w.styles,a,l)}var I4=new C6,S6=function(){p.autoReplaceSvg=!1,p.observeMutations=!1,O("noAuto")},N6={i2svg:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return B?(O("beforeI2svg",l),E("pseudoElements2svg",l),E("i2svg",l)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=l.autoReplaceSvgRoot;p.autoReplaceSvg===!1&&(p.autoReplaceSvg=!0),p.observeMutations=!0,i6(function(){y6({autoReplaceSvgRoot:a}),O("watch",l)})}},b6={icon:function(l){if(l===null)return null;if(i2(l)==="object"&&l.prefix&&l.iconName)return{prefix:l.prefix,iconName:I(l.prefix,l.iconName)||l.iconName};if(Array.isArray(l)&&l.length===2){var a=l[1].indexOf("fa-")===0?l[1].slice(3):l[1],e=m2(l[0]);return{prefix:e,iconName:I(e,a)||a}}if(typeof l=="string"&&(l.indexOf("".concat(p.cssPrefix,"-"))>-1||l.match(V0))){var r=z2(l.split(" "),{skipLookups:!0});return{prefix:r.prefix||R(),iconName:I(r.prefix,r.iconName)||r.iconName}}if(typeof l=="string"){var s=R();return{prefix:s,iconName:I(s,l)||l}}}},b={noAuto:S6,config:p,dom:N6,parse:b6,library:I4,findIconDefinition:H2,toHtml:Z},y6=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=l.autoReplaceSvgRoot,e=a===void 0?d:a;(Object.keys(w.styles).length>0||p.autoFetchSvg)&&B&&p.autoReplaceSvg&&b.dom.i2svg({node:e})};function p2(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return Z(e)})}}),Object.defineProperty(c,"node",{get:function(){if(B){var e=d.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function w6(c){var l=c.children,a=c.main,e=c.mask,r=c.attributes,s=c.styles,i=c.transform;if($2(i)&&a.found&&!e.found){var f=a.width,n=a.height,t={x:f/n/2,y:.5};r.style=t2(o(o({},s),{},{"transform-origin":"".concat(t.x+i.x/16,"em ").concat(t.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:l}]}function k6(c){var l=c.prefix,a=c.iconName,e=c.children,r=c.attributes,s=c.symbol,i=s===!0?"".concat(l,"-").concat(p.cssPrefix,"-").concat(a):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:o(o({},r),{},{id:i}),children:e}]}]}function A6(c){var l=["aria-label","aria-labelledby","title","role"];return l.some(function(a){return a in c})}function K2(c){var l=c.icons,a=l.main,e=l.mask,r=c.prefix,s=c.iconName,i=c.transform,f=c.symbol,n=c.maskId,t=c.extra,z=c.watchable,m=z===void 0?!1:z,L=e.found?e:a,M=L.width,h=L.height,v=[p.replacementClass,s?"".concat(p.cssPrefix,"-").concat(s):""].filter(function(P){return t.classes.indexOf(P)===-1}).filter(function(P){return P!==""||!!P}).concat(t.classes).join(" "),x={children:[],attributes:o(o({},t.attributes),{},{"data-prefix":r,"data-icon":s,class:v,role:t.attributes.role||"img",viewBox:"0 0 ".concat(M," ").concat(h)})};!A6(t.attributes)&&!t.attributes["aria-hidden"]&&(x.attributes["aria-hidden"]="true"),m&&(x.attributes[W]="");var C=o(o({},x),{},{prefix:r,iconName:s,main:a,mask:e,maskId:n,transform:i,symbol:f,styles:o({},t.styles)}),N=e.found&&a.found?E("generateAbstractMask",C)||{children:[],attributes:{}}:E("generateAbstractIcon",C)||{children:[],attributes:{}},y=N.children,q=N.attributes;return C.children=y,C.attributes=q,f?k6(C):w6(C)}function P1(c){var l=c.content,a=c.width,e=c.height,r=c.transform,s=c.extra,i=c.watchable,f=i===void 0?!1:i,n=o(o({},s.attributes),{},{class:s.classes.join(" ")});f&&(n[W]="");var t=o({},s.styles);$2(r)&&(t.transform=e6({transform:r,startCentered:!0,width:a,height:e}),t["-webkit-transform"]=t.transform);var z=t2(t);z.length>0&&(n.style=z);var m=[];return m.push({tag:"span",attributes:n,children:[l]}),m}function P6(c){var l=c.content,a=c.extra,e=o(o({},a.attributes),{},{class:a.classes.join(" ")}),r=t2(a.styles);r.length>0&&(e.style=r);var s=[];return s.push({tag:"span",attributes:e,children:[l]}),s}var N2=w.styles;function R2(c){var l=c[0],a=c[1],e=c.slice(4),r=o2(e,1),s=r[0],i=null;return Array.isArray(s)?i={tag:"g",attributes:{class:"".concat(p.cssPrefix,"-").concat(g2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(g2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(p.cssPrefix,"-").concat(g2.PRIMARY),fill:"currentColor",d:s[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:l,height:a,icon:i}}var T6={found:!1,width:512,height:512};function F6(c,l){!g4&&!p.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function E2(c,l){var a=l;return l==="fa"&&p.styleDefault!==null&&(l=R()),new Promise(function(e,r){if(a==="fa"){var s=E4(c)||{};c=s.iconName||c,l=s.prefix||l}if(c&&l&&N2[l]&&N2[l][c]){var i=N2[l][c];return e(R2(i))}F6(c,l),e(o(o({},T6),{},{icon:p.showMissingIcons&&c?E("missingIconAbstract")||{}:{}}))})}var T1=function(){},U2=p.measurePerformance&&a2&&a2.mark&&a2.measure?a2:{mark:T1,measure:T1},$='FA "7.2.0"',B6=function(l){return U2.mark("".concat($," ").concat(l," begins")),function(){return W4(l)}},W4=function(l){U2.mark("".concat($," ").concat(l," ends")),U2.measure("".concat($," ").concat(l),"".concat($," ").concat(l," begins"),"".concat($," ").concat(l," ends"))},Q2={begin:B6,end:W4},r2=function(){};function F1(c){var l=c.getAttribute?c.getAttribute(W):null;return typeof l=="string"}function D6(c){var l=c.getAttribute?c.getAttribute(G2):null,a=c.getAttribute?c.getAttribute(j2):null;return l&&a}function H6(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(p.replacementClass)}function R6(){if(p.autoReplaceSvg===!0)return s2.replace;var c=s2[p.autoReplaceSvg];return c||s2.replace}function E6(c){return d.createElementNS("http://www.w3.org/2000/svg",c)}function U6(c){return d.createElement(c)}function O4(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=l.ceFn,e=a===void 0?c.tag==="svg"?E6:U6:a;if(typeof c=="string")return d.createTextNode(c);var r=e(c.tag);Object.keys(c.attributes||[]).forEach(function(i){r.setAttribute(i,c.attributes[i])});var s=c.children||[];return s.forEach(function(i){r.appendChild(O4(i,{ceFn:e}))}),r}function I6(c){var l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var s2={replace:function(l){var a=l[0];if(a.parentNode)if(l[1].forEach(function(r){a.parentNode.insertBefore(O4(r),a)}),a.getAttribute(W)===null&&p.keepOriginalSource){var e=d.createComment(I6(a));a.parentNode.replaceChild(e,a)}else a.remove()},nest:function(l){var a=l[0],e=l[1];if(~_2(a).indexOf(p.replacementClass))return s2.replace(l);var r=new RegExp("".concat(p.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var s=e[0].attributes.class.split(" ").reduce(function(f,n){return n===p.replacementClass||n.match(r)?f.toSvg.push(n):f.toNode.push(n),f},{toNode:[],toSvg:[]});e[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",s.toNode.join(" "))}var i=e.map(function(f){return Z(f)}).join(`
`);a.setAttribute(W,""),a.innerHTML=i}};function B1(c){c()}function q4(c,l){var a=typeof l=="function"?l:r2;if(c.length===0)a();else{var e=B1;p.mutateApproach===q0&&(e=H.requestAnimationFrame||B1),e(function(){var r=R6(),s=Q2.begin("mutate");c.map(r),s(),a()})}}var J2=!1;function G4(){J2=!0}function I2(){J2=!1}var n2=null;function D1(c){if(d1&&p.observeMutations){var l=c.treeCallback,a=l===void 0?r2:l,e=c.nodeCallback,r=e===void 0?r2:e,s=c.pseudoElementsCallback,i=s===void 0?r2:s,f=c.observeMutationsRoot,n=f===void 0?d:f;n2=new d1(function(t){if(!J2){var z=R();_(t).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!F1(m.addedNodes[0])&&(p.searchPseudoElements&&i(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&p.searchPseudoElements&&i([m.target],!0),m.type==="attributes"&&F1(m.target)&&~X0.indexOf(m.attributeName))if(m.attributeName==="class"&&D6(m.target)){var L=z2(_2(m.target)),M=L.prefix,h=L.iconName;m.target.setAttribute(G2,M||z),h&&m.target.setAttribute(j2,h)}else H6(m.target)&&r(m.target)})}}),B&&n2.observe(n,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function W6(){n2&&n2.disconnect()}function O6(c){var l=c.getAttribute("style"),a=[];return l&&(a=l.split(";").reduce(function(e,r){var s=r.split(":"),i=s[0],f=s.slice(1);return i&&f.length>0&&(e[i]=f.join(":").trim()),e},{})),a}function q6(c){var l=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",r=z2(_2(c));return r.prefix||(r.prefix=R()),l&&a&&(r.prefix=l,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=z6(r.prefix,c.innerText)||Y2(r.prefix,A4(c.innerText))),!r.iconName&&p.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function G6(c){var l=_(c.attributes).reduce(function(a,e){return a.name!=="class"&&a.name!=="style"&&(a[e.name]=e.value),a},{});return l}function j6(){return{iconName:null,prefix:null,transform:A,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function H1(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=q6(c),e=a.iconName,r=a.prefix,s=a.rest,i=G6(c),f=D2("parseNodeAttributes",{},c),n=l.styleParser?O6(c):[];return o({iconName:e,prefix:r,transform:A,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:n,attributes:i}},f)}var V6=w.styles;function j4(c){var l=p.autoReplaceSvg==="nest"?H1(c,{styleParser:!1}):H1(c);return~l.extra.classes.indexOf(S4)?E("generateLayersText",c,l):E("generateSvgReplacementMutation",c,l)}function _6(){return[].concat(k(M4),k(L4))}function R1(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!B)return Promise.resolve();var a=d.documentElement.classList,e=function(m){return a.add("".concat(C1,"-").concat(m))},r=function(m){return a.remove("".concat(C1,"-").concat(m))},s=p.autoFetchSvg?_6():K1.concat(Object.keys(V6));s.includes("fa")||s.push("fa");var i=[".".concat(S4,":not([").concat(W,"])")].concat(s.map(function(z){return".".concat(z,":not([").concat(W,"])")})).join(", ");if(i.length===0)return Promise.resolve();var f=[];try{f=_(c.querySelectorAll(i))}catch{}if(f.length>0)e("pending"),r("complete");else return Promise.resolve();var n=Q2.begin("onTree"),t=f.reduce(function(z,m){try{var L=j4(m);L&&z.push(L)}catch(M){g4||M.name==="MissingIcon"&&console.error(M)}return z},[]);return new Promise(function(z,m){Promise.all(t).then(function(L){q4(L,function(){e("active"),e("complete"),r("pending"),typeof l=="function"&&l(),n(),z()})}).catch(function(L){n(),m(L)})})}function $6(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;j4(c).then(function(a){a&&q4([a],l)})}function X6(c){return function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(l||{}).icon?l:H2(l||{}),r=a.mask;return r&&(r=(r||{}).icon?r:H2(r||{})),c(e,o(o({},a),{},{mask:r}))}}var Y6=function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.transform,r=e===void 0?A:e,s=a.symbol,i=s===void 0?!1:s,f=a.mask,n=f===void 0?null:f,t=a.maskId,z=t===void 0?null:t,m=a.classes,L=m===void 0?[]:m,M=a.attributes,h=M===void 0?{}:M,v=a.styles,x=v===void 0?{}:v;if(l){var C=l.prefix,N=l.iconName,y=l.icon;return p2(o({type:"icon"},l),function(){return O("beforeDOMElementCreation",{iconDefinition:l,params:a}),K2({icons:{main:R2(y),mask:n?R2(n.icon):{found:!1,width:null,height:null,icon:{}}},prefix:C,iconName:N,transform:o(o({},A),r),symbol:i,maskId:z,extra:{attributes:h,styles:x,classes:L}})})}},K6={mixout:function(){return{icon:X6(Y6)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=R1,a.nodeCallback=$6,a}}},provides:function(l){l.i2svg=function(a){var e=a.node,r=e===void 0?d:e,s=a.callback,i=s===void 0?function(){}:s;return R1(r,i)},l.generateSvgReplacementMutation=function(a,e){var r=e.iconName,s=e.prefix,i=e.transform,f=e.symbol,n=e.mask,t=e.maskId,z=e.extra;return new Promise(function(m,L){Promise.all([E2(r,s),n.iconName?E2(n.iconName,n.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var h=o2(M,2),v=h[0],x=h[1];m([a,K2({icons:{main:v,mask:x},prefix:s,iconName:r,transform:i,symbol:f,maskId:t,extra:z,watchable:!0})])}).catch(L)})},l.generateAbstractIcon=function(a){var e=a.children,r=a.attributes,s=a.main,i=a.transform,f=a.styles,n=t2(f);n.length>0&&(r.style=n);var t;return $2(i)&&(t=E("generateAbstractTransformGrouping",{main:s,transform:i,containerWidth:s.width,iconWidth:s.width})),e.push(t||s.icon),{children:e,attributes:r}}}},Q6={mixout:function(){return{layer:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,s=r===void 0?[]:r;return p2({type:"layer"},function(){O("beforeDOMElementCreation",{assembler:a,params:e});var i=[];return a(function(f){Array.isArray(f)?f.map(function(n){i=i.concat(n.abstract)}):i=i.concat(f.abstract)}),[{tag:"span",attributes:{class:["".concat(p.cssPrefix,"-layers")].concat(k(s)).join(" ")},children:i}]})}}}},J6={mixout:function(){return{counter:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,s=r===void 0?null:r,i=e.classes,f=i===void 0?[]:i,n=e.attributes,t=n===void 0?{}:n,z=e.styles,m=z===void 0?{}:z;return p2({type:"counter",content:a},function(){return O("beforeDOMElementCreation",{content:a,params:e}),P6({content:a.toString(),title:s,extra:{attributes:t,styles:m,classes:["".concat(p.cssPrefix,"-layers-counter")].concat(k(f))}})})}}}},Z6={mixout:function(){return{text:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?A:r,i=e.classes,f=i===void 0?[]:i,n=e.attributes,t=n===void 0?{}:n,z=e.styles,m=z===void 0?{}:z;return p2({type:"text",content:a},function(){return O("beforeDOMElementCreation",{content:a,params:e}),P1({content:a,transform:o(o({},A),s),extra:{attributes:t,styles:m,classes:["".concat(p.cssPrefix,"-layers-text")].concat(k(f))}})})}}},provides:function(l){l.generateLayersText=function(a,e){var r=e.transform,s=e.extra,i=null,f=null;if(X1){var n=parseInt(getComputedStyle(a).fontSize,10),t=a.getBoundingClientRect();i=t.width/n,f=t.height/n}return Promise.resolve([a,P1({content:a.innerHTML,width:i,height:f,transform:r,extra:s,watchable:!0})])}}},V4=new RegExp('"',"ug"),E1=[1105920,1112319],U1=o(o(o(o({},{FontAwesome:{normal:"fas",400:"fas"}}),B3),W0),q3),W2=Object.keys(U1).reduce(function(c,l){return c[l.toLowerCase()]=U1[l],c},{}),c8=Object.keys(W2).reduce(function(c,l){var a=W2[l];return c[l]=a[900]||k(Object.entries(a))[0][1],c},{});function a8(c){var l=c.replace(V4,"");return A4(k(l)[0]||"")}function l8(c){var l=c.getPropertyValue("font-feature-settings").includes("ss01"),a=c.getPropertyValue("content"),e=a.replace(V4,""),r=e.codePointAt(0),s=r>=E1[0]&&r<=E1[1],i=e.length===2?e[0]===e[1]:!1;return s||i||l}function e8(c,l){var a=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(l),r=isNaN(e)?"normal":e;return(W2[a]||{})[r]||c8[a]}function I1(c,l){var a="".concat(O0).concat(l.replace(":","-"));return new Promise(function(e,r){if(c.getAttribute(a)!==null)return e();var s=_(c.children),i=s.filter(function(u2){return u2.getAttribute(A2)===l})[0],f=H.getComputedStyle(c,l),n=f.getPropertyValue("font-family"),t=n.match(_0),z=f.getPropertyValue("font-weight"),m=f.getPropertyValue("content");if(i&&!t)return c.removeChild(i),e();if(t&&m!=="none"&&m!==""){var L=f.getPropertyValue("content"),M=e8(n,z),h=a8(L),v=t[0].startsWith("FontAwesome"),x=l8(f),C=Y2(M,h),N=C;if(v){var y=p6(h);y.iconName&&y.prefix&&(C=y.iconName,M=y.prefix)}if(C&&!x&&(!i||i.getAttribute(G2)!==M||i.getAttribute(j2)!==N)){c.setAttribute(a,N),i&&c.removeChild(i);var q=j6(),P=q.extra;P.attributes[A2]=l,E2(C,M).then(function(u2){var J4=K2(o(o({},q),{},{icons:{main:u2,mask:U4()},prefix:M,iconName:N,extra:P,watchable:!0})),M2=d.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(M2,c.firstChild):c.appendChild(M2),M2.outerHTML=J4.map(function(Z4){return Z(Z4)}).join(`
`),c.removeAttribute(a),e()}).catch(r)}else e()}else e()})}function r8(c){return Promise.all([I1(c,"::before"),I1(c,"::after")])}function s8(c){return c.parentNode!==document.head&&!~G0.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(A2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}var i8=function(l){return!!l&&C4.some(function(a){return l.includes(a)})},f8=function(l){if(!l)return[];var a=new Set,e=l.split(/,(?![^()]*\))/).map(function(n){return n.trim()});e=e.flatMap(function(n){return n.includes("(")?n:n.split(",").map(function(t){return t.trim()})});var r=e2(e),s;try{for(r.s();!(s=r.n()).done;){var i=s.value;if(i8(i)){var f=C4.reduce(function(n,t){return n.replace(t,"")},i);f!==""&&f!=="*"&&a.add(f)}}}catch(n){r.e(n)}finally{r.f()}return a};function W1(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(B){var a;if(l)a=c;else if(p.searchPseudoElementsFullScan)a=c.querySelectorAll("*");else{var e=new Set,r=e2(document.styleSheets),s;try{for(r.s();!(s=r.n()).done;){var i=s.value;try{var f=e2(i.cssRules),n;try{for(f.s();!(n=f.n()).done;){var t=n.value,z=f8(t.selectorText),m=e2(z),L;try{for(m.s();!(L=m.n()).done;){var M=L.value;e.add(M)}}catch(v){m.e(v)}finally{m.f()}}}catch(v){f.e(v)}finally{f.f()}}catch(v){p.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(i.href," (").concat(v.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(v){r.e(v)}finally{r.f()}if(!e.size)return;var h=Array.from(e).join(", ");try{a=c.querySelectorAll(h)}catch{}}return new Promise(function(v,x){var C=_(a).filter(s8).map(r8),N=Q2.begin("searchPseudoElements");G4(),Promise.all(C).then(function(){N(),I2(),v()}).catch(function(){N(),I2(),x()})})}}var n8={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=W1,a}}},provides:function(l){l.pseudoElements2svg=function(a){var e=a.node,r=e===void 0?d:e;p.searchPseudoElements&&W1(r)}}},O1=!1,o8={mixout:function(){return{dom:{unwatch:function(){G4(),O1=!0}}}},hooks:function(){return{bootstrap:function(){D1(D2("mutationObserverCallbacks",{}))},noAuto:function(){W6()},watch:function(a){var e=a.observeMutationsRoot;O1?I2():D1(D2("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},q1=function(l){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return l.toLowerCase().split(" ").reduce(function(e,r){var s=r.toLowerCase().split("-"),i=s[0],f=s.slice(1).join("-");if(i&&f==="h")return e.flipX=!0,e;if(i&&f==="v")return e.flipY=!0,e;if(f=parseFloat(f),isNaN(f))return e;switch(i){case"grow":e.size=e.size+f;break;case"shrink":e.size=e.size-f;break;case"left":e.x=e.x-f;break;case"right":e.x=e.x+f;break;case"up":e.y=e.y-f;break;case"down":e.y=e.y+f;break;case"rotate":e.rotate=e.rotate+f;break}return e},a)},t8={mixout:function(){return{parse:{transform:function(a){return q1(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-transform");return r&&(a.transform=q1(r)),a}}},provides:function(l){l.generateAbstractTransformGrouping=function(a){var e=a.main,r=a.transform,s=a.containerWidth,i=a.iconWidth,f={transform:"translate(".concat(s/2," 256)")},n="translate(".concat(r.x*32,", ").concat(r.y*32,") "),t="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),z="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(n," ").concat(t," ").concat(z)},L={transform:"translate(".concat(i/2*-1," -256)")},M={outer:f,inner:m,path:L};return{tag:"g",attributes:o({},M.outer),children:[{tag:"g",attributes:o({},M.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:o(o({},e.icon.attributes),M.path)}]}]}}}},b2={x:0,y:0,width:"100%",height:"100%"};function G1(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function m8(c){return c.tag==="g"?c.children:[c]}var z8={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-mask"),s=r?z2(r.split(" ").map(function(i){return i.trim()})):U4();return s.prefix||(s.prefix=R()),a.mask=s,a.maskId=e.getAttribute("data-fa-mask-id"),a}}},provides:function(l){l.generateAbstractMask=function(a){var e=a.children,r=a.attributes,s=a.main,i=a.mask,f=a.maskId,n=a.transform,t=s.width,z=s.icon,m=i.width,L=i.icon,M=l6({transform:n,containerWidth:m,iconWidth:t}),h={tag:"rect",attributes:o(o({},b2),{},{fill:"white"})},v=z.children?{children:z.children.map(G1)}:{},x={tag:"g",attributes:o({},M.inner),children:[G1(o({tag:z.tag,attributes:o(o({},z.attributes),M.path)},v))]},C={tag:"g",attributes:o({},M.outer),children:[x]},N="mask-".concat(f||S1()),y="clip-".concat(f||S1()),q={tag:"mask",attributes:o(o({},b2),{},{id:N,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,C]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:m8(L)},q]};return e.push(P,{tag:"rect",attributes:o({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(N,")")},b2)}),{children:e,attributes:r}}}},p8={provides:function(l){var a=!1;H.matchMedia&&(a=H.matchMedia("(prefers-reduced-motion: reduce)").matches),l.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:o(o({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=o(o({},s),{},{attributeName:"opacity"}),f={tag:"circle",attributes:o(o({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||f.children.push({tag:"animate",attributes:o(o({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:o(o({},i),{},{values:"1;0;1;1;0;1;"})}),e.push(f),e.push({tag:"path",attributes:o(o({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:o(o({},i),{},{values:"1;0;0;0;0;1;"})}]}),a||e.push({tag:"path",attributes:o(o({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:o(o({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},u8={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-symbol"),s=r===null?!1:r===""?!0:r;return a.symbol=s,a}}}},M8=[s6,K6,Q6,J6,Z6,n8,o8,t8,z8,p8,u8];x6(M8,{mixoutsTo:b});var R8=b.noAuto,_4=b.config,E8=b.library,$4=b.dom,X4=b.parse,U8=b.findIconDefinition,I8=b.toHtml,Y4=b.icon,W8=b.layer,L8=b.text,d8=b.counter;var v8=["*"],h8=(()=>{class c{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(a){_4.autoAddCss=a,this._autoAddCss=a}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(e){return new(e||c)};static \u0275prov=L2({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),C8=(()=>{class c{definitions={};addIcons(...a){for(let e of a){e.prefix in this.definitions||(this.definitions[e.prefix]={}),this.definitions[e.prefix][e.iconName]=e;for(let r of e.icon[2])typeof r=="string"&&(this.definitions[e.prefix][r]=e)}}addIconPacks(...a){for(let e of a){let r=Object.keys(e).map(s=>e[s]);this.addIcons(...r)}}getIconDefinition(a,e){return a in this.definitions&&e in this.definitions[a]?this.definitions[a][e]:null}static \u0275fac=function(e){return new(e||c)};static \u0275prov=L2({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),g8=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},x8=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},Q4=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),S8=c=>{let l=Q4(c.rotate),a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:l,"fa-rotate-by":c.rotate!=null&&!l,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(e=>a[e]?e:null).filter(e=>e!=null)},Z2=new WeakSet,K4="fa-auto-css";function N8(c,l){if(!l.autoAddCss||Z2.has(c))return;if(c.getElementById(K4)!=null){l.autoAddCss=!1,Z2.add(c);return}let a=c.createElement("style");a.setAttribute("type","text/css"),a.setAttribute("id",K4),a.innerHTML=$4.css();let e=c.head.childNodes,r=null;for(let s=e.length-1;s>-1;s--){let i=e[s],f=i.nodeName.toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(r=i)}c.head.insertBefore(a,r),l.autoAddCss=!1,Z2.add(c)}var b8=c=>c.prefix!==void 0&&c.iconName!==void 0,y8=(c,l)=>b8(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:l,iconName:c},w8=(()=>{class c{stackItemSize=c2("1x");size=c2();_effect=t1(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(e){return new(e||c)};static \u0275dir=r1({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return c})(),k8=(()=>{class c{size=c2();classes=v2(()=>{let a=this.size(),e=a?{[`fa-${a}`]:!0}:{};return a1(c1({},e),{"fa-stack":!0})});static \u0275fac=function(e){return new(e||c)};static \u0275cmp=d2({type:c,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(e,r){e&2&&o1(r.classes())},inputs:{size:[1,"size"]},ngContentSelectors:v8,decls:1,vars:0,template:function(e,r){e&1&&(f1(),n1(0))},encapsulation:2,changeDetection:0})}return c})(),a5=(()=>{class c{icon=S();title=S();animation=S();mask=S();flip=S();size=S();pull=S();border=S();inverse=S();symbol=S();rotate=S();fixedWidth=S();transform=S();a11yRole=S();renderedIconHTML=v2(()=>{let a=this.icon()??this.config.fallbackIcon;if(!a)return x8(),"";let e=this.findIconDefinition(a);if(!e)return"";let r=this.buildParams();N8(this.document,this.config);let s=Y4(e,r);return this.sanitizer.bypassSecurityTrustHtml(s.html.join(`
`))});document=U(l1);sanitizer=U(m1);config=U(h8);iconLibrary=U(C8);stackItem=U(w8,{optional:!0});stack=U(k8,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(a){let e=y8(a,this.config.defaultPrefix);if("icon"in e)return e;let r=this.iconLibrary.getIconDefinition(e.prefix,e.iconName);return r??(g8(e),null)}buildParams(){let a=this.fixedWidth(),e={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof a=="boolean"?a:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},r=this.transform(),s=typeof r=="string"?X4.transform(r):r,i=this.mask(),f=i!=null?this.findIconDefinition(i):null,n={},t=this.a11yRole();t!=null&&(n.role=t);let z={};return e.rotate!=null&&!Q4(e.rotate)&&(z["--fa-rotate-angle"]=`${e.rotate}`),{title:this.title(),transform:s,classes:S8(e),mask:f??void 0,symbol:this.symbol(),attributes:n,styles:z}}static \u0275fac=function(e){return new(e||c)};static \u0275cmp=d2({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(e,r){e&2&&(i1("innerHTML",r.renderedIconHTML(),e1),s1("title",r.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(e,r){},encapsulation:2,changeDetection:0})}return c})();var r5={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]};var s5={prefix:"fas",iconName:"boxes-stacked",icon:[512,512,[62625,"boxes","boxes-alt"],"f468","M224 0l0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-64 32 0c35.3 0 64 28.7 64 64l0 128c0 5.5-.7 10.9-2 16l-252 0c-1.3-5.1-2-10.5-2-16l0-128c0-35.3 28.7-64 64-64l32 0zm96 512c-11.2 0-21.8-2.9-31-8 9.5-16.5 15-35.6 15-56l0-128c0-20.4-5.5-39.5-15-56 9.2-5.1 19.7-8 31-8l32 0 0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-64 32 0c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64l-128 0zM0 320c0-35.3 28.7-64 64-64l32 0 0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-64 32 0c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 320z"]};var i5={prefix:"fas",iconName:"user-shield",icon:[576,512,[],"f505","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l251.5 0C261 469.4 240 414.5 240 356.4l0-31.1c0-7.3 1-14.5 2.9-21.3l-48.6 0zm251 184.5l-13.3 6.3 0-188.1 96 32 0 19.6c0 55.8-32.2 106.5-82.7 130.3zM421.9 259.5l-112 37.3c-13.1 4.4-21.9 16.6-21.9 30.4l0 31.1c0 74.4 43 142.1 110.2 173.7l18.5 8.7c4.8 2.2 10 3.4 15.2 3.4s10.5-1.2 15.2-3.4l18.5-8.7C533 500.3 576 432.6 576 358.2l0-31.1c0-13.8-8.8-26-21.9-30.4l-112-37.3c-6.6-2.2-13.7-2.2-20.2 0z"]};var f5={prefix:"fas",iconName:"clipboard-list",icon:[384,512,[],"f46d","M311.4 32l8.6 0c35.3 0 64 28.7 64 64l0 352c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l8.6 0C83.6 12.9 104.3 0 128 0L256 0c23.7 0 44.4 12.9 55.4 32zM248 112c13.3 0 24-10.7 24-24s-10.7-24-24-24L136 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l112 0zM128 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm32 0c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0c-13.3 0-24 10.7-24 24zm0 128c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0c-13.3 0-24 10.7-24 24zM96 416a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]};var n5={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]};var o5={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M505 273c9.4-9.4 9.4-24.6 0-33.9L361 95c-6.9-6.9-17.2-8.9-26.2-5.2S320 102.3 320 112l0 80-112 0c-26.5 0-48 21.5-48 48l0 32c0 26.5 21.5 48 48 48l112 0 0 80c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2L505 273zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]};var t5={prefix:"fas",iconName:"cube",icon:[512,512,[],"f1b2","M224.3-2.5c19.8-11.4 44.2-11.4 64 0L464.2 99c19.8 11.4 32 32.6 32 55.4l0 203c0 22.9-12.2 44-32 55.4L288.3 514.5c-19.8 11.4-44.2 11.4-64 0L48.5 413c-19.8-11.4-32-32.6-32-55.4l0-203c0-22.9 12.2-44 32-55.4L224.3-2.5zm207.8 360l0-166.1-143.8 83 0 166.1 143.8-83z"]};var m5={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"]};var z5={prefix:"fas",iconName:"store",icon:[512,512,[],"f54e","M30.7 72.3C37.6 48.4 59.5 32 84.4 32l344 0c24.9 0 46.8 16.4 53.8 40.3l23.4 80.2c12.8 43.7-20.1 87.5-65.6 87.5-26.3 0-49.4-14.9-60.8-37.1-11.6 21.9-34.6 37.1-61.4 37.1-26.6 0-49.7-15-61.3-37-11.6 22-34.7 37-61.3 37-26.8 0-49.8-15.1-61.4-37.1-11.4 22.1-34.5 37.1-60.8 37.1-45.6 0-78.4-43.7-65.6-87.5L30.7 72.3zM96.4 352l320 0 0-66.4c7.6 1.6 15.5 2.4 23.5 2.4 14.3 0 28-2.6 40.5-7.2l0 151.2c0 26.5-21.5 48-48 48l-352 0c-26.5 0-48-21.5-48-48l0-151.2c12.5 4.6 26.1 7.2 40.5 7.2 8.1 0 15.9-.8 23.5-2.4l0 66.4z"]};var p5={prefix:"fas",iconName:"arrow-left",icon:[512,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 105.4-105.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};var u5={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M0 188.6C0 84.4 86 0 192 0S384 84.4 384 188.6c0 119.3-120.2 262.3-170.4 316.8-11.8 12.8-31.5 12.8-43.3 0-50.2-54.5-170.4-197.5-170.4-316.8zM192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z"]};var M5={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]};var L5={prefix:"fas",iconName:"table-cells-large",icon:[448,512,["th-large"],"f009","M384 96l-128 0 0 128 128 0 0-128zm64 128l0 192c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 128zM64 288l0 128 128 0 0-128-128 0zm128-64l0-128-128 0 0 128 128 0zm64 64l0 128 128 0 0-128-128 0z"]};var d5={prefix:"fas",iconName:"cart-shopping",icon:[640,512,[128722,"shopping-cart"],"f07a","M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]};export{a5 as a,r5 as b,s5 as c,i5 as d,f5 as e,n5 as f,o5 as g,t5 as h,m5 as i,z5 as j,p5 as k,u5 as l,M5 as m,L5 as n,d5 as o};
