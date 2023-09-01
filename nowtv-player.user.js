// ==UserScript==
// @name         NowTV Video Player
// @namespace    https://nowtv.com
// @version      0.1
// @description  try to take over the world!
// @author       Bryan de Jong
// @match        *://nowtv.com/*/playback/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=userscript.zone
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
    [data-test-id="video-player-controls"] {
    	background-color: rgba(0,0,0,0);
    }`);
})();
