"use strict";
class PlayerExstender {
    constructor() {
        console.log("--- Start PlayerExtender ---");
        PlayerExstender.setDownloadable();
    }
    static setDownloadable(retry = PlayerExstender.RETRY_MAX) {
        const videos = document.querySelectorAll('video');
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
            const orgControls = video.getAttribute('controls')
            if(orgControls) { //controls属性が有った
              const orgControlsList = video.getAttribute('controlslist')
              if (orgControlsList) {
                if (orgControlsList === "nodownload") { //controlslistはnodownloadだけ
                  video.removeAttribute("controlsllist") //全部けしちゃう
                } else { //他のオプションも有った
                  video.setAttribute('controlslist', orgControlsList.replace(/nodownload/, ""))
                }
              }
            } else { //controls属性が無い 当然controlslistも無い 2021/06/06発見
              video.setAttribute('controls',"")
            }
            console.log("OK: Video downloader")
        });
    }
}
PlayerExstender.RETRY_MAX = 10;
PlayerExstender.RETRY_WAIT = 1000;
new PlayerExstender();
