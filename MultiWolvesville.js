// ==UserScript==
// @name        Multi wolvesville
// @namespace   https://github.com/ThebestkillerTBK/UserScripts
// @match       *://*.wolvesville.com/*
// @grant       none
// @version     1.0
// @author      ThebestkillerTBK
// @license     GPL-3.0 License
// @description Allows you open multiple WOV game pages in one browser.
// @run-at      document-start
// @homepageURL  https://github.com/ThebestkillerTBK/UserScripts
// ==/UserScript==

(function() {
	'use strict';
	var orignalSetItem = localStorage.setItem;
	localStorage.setItem = function(k,v){
		if(k == "open-page") {
			localStorage.removeItem(k);
			console.log("Tried to detect multi window, blocked");
			return;
		}
		orignalSetItem.apply(this,arguments);
	}
})(); 