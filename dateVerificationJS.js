/**
 * dateVerificationJS is a date validation library
 * https://github.com/NilGems/dateVerificationJS
 *
 * Copyright 2016, Niladri Shekhar Mondal
 * Licensed under the MIT license.
 * Version: 1.0.1
 * Build date: 01 October 2016
**/
Object.defineProperty(Object.prototype,"dateVerificationJS",{value:function(){"use strict";var e,t,r,i,a,m,u,N,n,o,b=this,d=[0,31,28,31,30,31,30,31,31,30,31,30,31],s={s:null,y:null,m:null,d:null,main:null};try{if("object"!=typeof this)throw"Error on dateValidate: date not found. Please go to https://github.com/NilGems/dateVerificationJS and read documents.";if(e=window.dateVerificationJS_self_alert?window.dateVerificationJS_self_alert:!0,t="undefined"!=typeof b.date?b.date.toString():!1,r="object"==typeof b.range?b.range:!1,u=/^(\d{2}-\d{2}-\d{4})$/gi.test(t),i=u?t.split("-"):null,a="object"!=typeof r||isNaN(Number(r.max))?null:r.max,m="object"!=typeof r||isNaN(Number(r.min))?1800:r.min,!t)throw"Error on dateValidate: date not found. Please go to https://github.com/NilGems/dateVerificationJS and read documents.";if(!u){s.s=!0;var f=/^(\d{2})/gi.test(t),l=/^(\d{2}-\d{2})/gi.test(t),c=/^(\d{2}-\d{2}-\d{4})/gi.test(t);f?l?c||(s.main=2):s.main=5:s.main=1}s.s||(d[2]=s.s||isNaN(Number(i[2]))||!(Number(i[2])%4===0&&Number(i[2])%100||Number(i[2])%400===0)?28:29,!s.s&&i&&!isNaN(Number(i[2]))&&Number(i[2])>m&&(a>=Number(i[2])&&a||!a)?N=Number(i[2]):(s.s=!0,i?isNaN(Number(i[2]))?s.y=2:Number(i[2])<m?s.y=3:a&&Number(i[2])>a&&(s.y=4):s.main=1),!s.s&&i&&!isNaN(Number(i[1]))&&Number(i[1])>0&&Number(i[1])<=12?n=Number(i[1]):(s.s=!0,i?(isNaN(Number(i[1]))||Number(i[1])<=0||Number(i[1])>12)&&(s.m=5):s.main=1),!s.s&&i&&!isNaN(Number(i[0]))&&Number(i[0])>0&&Number(i[0])<=31&&Number(i[0])<=d[Number(n)]?o=Number(i[0]):(s.s=!0,i?isNaN(Number(i[0]))||Number(i[0])<=0||Number(i[0])>31?s.d=6:Number(i[0])>Number(d[Number(n)])&&(s.d=7):s.main=1))}catch(s){throw s}finally{if("object"!=typeof b||!s.s)return"object"==typeof b&&u?!1:1;if(s.main)return s.main;if(s.y)return s.y;if(s.m)return s.m;if(s.d)return s.d}}});
