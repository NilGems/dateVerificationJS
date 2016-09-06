/**
 * dateVerificationJS is a date validation library
 * https://github.com/NilGems/dateVerificationJS
 *
 * Copyright 2016, Niladri Shekhar Mondal
 * Licensed under the MIT license.
 * Version: 1.0.0
 * Build date: 06 September 2016
**/
Object.defineProperty(Object.prototype,"dateVerificationJS",{value:function(){"use strict";var e,r,t,i=this,a=window.dateVerificationJS_self_alert?window.dateVerificationJS_self_alert:!0,m="undefined"!=typeof i.date?i.date.toString():!1,N="object"==typeof i.range?i.range:!1,u=/^(\d{2}-\d{2}-\d{4})$/gi.test(m)?m.split("-"):null,n="object"!=typeof N||isNaN(Number(N.max))?null:N.max,b="object"!=typeof N||isNaN(Number(N.min))?1800:N.min,o=[0,31,28,31,30,31,30,31,31,30,31,30,31],d={s:null,y:null,m:null,d:null,main:null};return m?(o[2]=!isNaN(Number(u[2]))&&(Number(u[2])%4===0&&Number(u[2])%100||Number(u[2])%400===0)?29:28,u&&!isNaN(Number(u[2]))&&Number(u[2])>b&&(n>=Number(u[2])&&n||!n)?e=Number(u[2]):(d.s=!0,u?isNaN(Number(u[2]))?d.y=2:Number(u[2])<b?d.y=3:n&&Number(u[2])>n&&(d.y=4):d.main=1),u&&!isNaN(Number(u[1]))&&Number(u[1])>0&&Number(u[1])<=12?r=Number(u[1]):(d.s=!0,u?(isNaN(Number(u[1]))||Number(u[1])<=0||Number(u[1])>12)&&(d.m=5):d.main=1),u&&!isNaN(Number(u[0]))&&Number(u[0])>0&&Number(u[0])<=31&&Number(u[0])<=o[Number(r)]?t=Number(u[0]):(d.s=!0,u?isNaN(Number(u[0]))||Number(u[0])<=0||Number(u[0])>31?d.d=6:Number(u[0])>Number(o[Number(r)])&&(d.d=7):d.main=1),d.s?d.main?d.main:d.y?d.y:d.m?d.m:d.d?d.d:void 0:!1):(console.log("Error on dateValidate: date not found. Please go to https://github.com/NilGems/dateVerificationJS and read documents."),void(a&&alert("dateVerificationJS can not find any data. Please go to https://github.com/NilGems/dateVerificationJS and read documents.")))}});
