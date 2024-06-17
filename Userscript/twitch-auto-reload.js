// ==UserScript==
// @name         Twitch Player Reload
// @namespace    http://github.com/stevenya97
// @version      0.1
// @description  reload on player #1000 error
// @license      MIT
// @author       Steven Y
// @match        https://www.twitch.tv/*
// @icon         https://icons.duckduckgo.com/ip2/github.com.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    function checkStatus()
    {
        var error_box = document.querySelector("div[aria-labelledby='content-overlay-gate-text']");
        if (error_box) {
            if (error_box.innerText.search(/\#\d000/g)) {
                if (error_box.querySelector("button")){
                    error_box.querySelector("button").click();
                    console.log("Twitch player error detected...reloading");
                    console.log(error_box);
                }
            }
        }
    }
    window.onload = function () {
        setInterval(checkStatus, 1000);
    }
})();
