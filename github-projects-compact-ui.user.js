// ==UserScript==
// @name         Github Projects Compact UI
// @namespace    https://github.com
// @version      0.1
// @description  try to take over the world!
// @author       Bryan de Jong
// @match        *://github.com/users/*/projects/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=userscript.zone
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle(`
    .AppHeader .AppHeader-globalBar { padding: 4px !important; }

    [data-testid="board-view-column"] > :first-child > div {
    	padding: 4px 8px;
    }`);
})();
