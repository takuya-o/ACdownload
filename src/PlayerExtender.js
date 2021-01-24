"use strict";
class PlayerExstender {
    constructor() {
        console.log("--- Start PlayerExtender ---");
        PlayerExstender.setDownloadable();
    }
    static setDownloadable(retry = PlayerExstender.RETRY_MAX) {
        const videos = document.querySelectorAll('video[controlslist~="nodownload"]');
        if (videos.length === 0) {
            if (retry !== PlayerExstender.RETRY_MAX && document.querySelectorAll("span.wapper-img").length !== 0) {
                console.log("Retry End: no video.");
            }
            else if (retry > 0) {
                console.log("Retry get video", retry);
                setTimeout(PlayerExstender.setDownloadable, PlayerExstender.RETRY_WAIT, --retry);
            }
            else {
                console.log("Retry over: Cannot get video.");
            }
            return;
        }
        Array.prototype.forEach.call(videos, function (video) {
            const orgControl = video.getAttribute('controlslist');
            if (orgControl) {
                if (orgControl === "nodownload") {
                    video.removeAttribute("controlsllist");
                }
                else {
                    video.setAttribute('controlslist', orgControl.replace(/nodownload/, ""));
                }
            }
            console.log("OK: Video downloader");
        });
    }
}
PlayerExstender.RETRY_MAX = 10;
PlayerExstender.RETRY_WAIT = 1000;
new PlayerExstender();
