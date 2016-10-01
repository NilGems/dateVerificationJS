/**
 * dateVerificationJS is a date validation library
 * https://github.com/NilGems/dateVerificationJS
 *
 * Copyright 2016, Niladri Shekhar Mondal
 * Licensed under the MIT license.
 * Version: 1.0.1
 * Build date: 01 October 2016
**/
Object.defineProperty(Object.prototype,"dateVerificationJS",{value:function(){"use strict";var e,t,r,i,u,m,a,N,n,o,b,s=[0,31,28,31,30,31,30,31,31,30,31,30,31],d={s:null,y:null,m:null,d:null,main:null};e=this;try{if("object"!=typeof this)throw"Error on dateValidate: date not found. Please go to https://github.com/NilGems/dateVerificationJS and read documents.";if(t=window.dateVerificationJS_self_alert?window.dateVerificationJS_self_alert:!0,r="undefined"!=typeof e.date?e.date.toString():!1,i="object"==typeof e.range?e.range:!1,N=/^(\d{2}-\d{2}-\d{4})$/gi.test(r),u=N?r.split("-"):null,m="object"!=typeof i||isNaN(Number(i.max))?null:i.max,a="object"!=typeof i||isNaN(Number(i.min))?1800:i.min,!r)throw"Error on dateValidate: date not found. Please go to https://github.com/NilGems/dateVerificationJS and read documents.";N||(d.s=!0,d.main=1),s[2]=d.s||isNaN(Number(u[2]))||!(Number(u[2])%4===0&&Number(u[2])%100||Number(u[2])%400===0)?28:29,!d.s&&u&&!isNaN(Number(u[2]))&&Number(u[2])>a&&(m>=Number(u[2])&&m||!m)?n=Number(u[2]):(d.s=!0,u?isNaN(Number(u[2]))?d.y=2:Number(u[2])<a?d.y=3:m&&Number(u[2])>m&&(d.y=4):d.main=1),!d.s&&u&&!isNaN(Number(u[1]))&&Number(u[1])>0&&Number(u[1])<=12?o=Number(u[1]):(d.s=!0,u?(isNaN(Number(u[1]))||Number(u[1])<=0||Number(u[1])>12)&&(d.m=5):d.main=1),!d.s&&u&&!isNaN(Number(u[0]))&&Number(u[0])>0&&Number(u[0])<=31&&Number(u[0])<=s[Number(o)]?b=Number(u[0]):(d.s=!0,u?isNaN(Number(u[0]))||Number(u[0])<=0||Number(u[0])>31?d.d=6:Number(u[0])>Number(s[Number(o)])&&(d.d=7):d.main=1)}catch(d){throw d}finally{if("object"!=typeof this||!d.s)return"object"==typeof this?!1:1;if(d.main)return d.main;if(d.y)return d.y;if(d.m)return d.m;if(d.d)return d.d}}});
