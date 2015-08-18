// -*- coding: utf-8-unix -*-
(function() {
  console.log("--- Start ACdownload ---");
  var ContentScript = Class.create({
    initialize: function() {
      window.addEventListener("load", function(evt) {
        this.start();
      }.bind(this));
    },
    start: function() {
      //視聴画面の時
      var settings = this.getSettings();
      if ( settings ) { //セッティング情報が見つかったら
        //Videoダウンロード表示
        this.getVideoSources(settings);
      } else {
        console.log("Can not find settings."); //failsafe
      }
    },
    getSettings: function () { //ACのsetting情報を取得する
      var settings;
      var elements = window.document.getElementsByTagName("script");
      console.log("ACdownload: getSettings" + elements.length );
      for (var i = 0; i < elements.length; i++) {
        var text = elements[i].innerText;
        if (text) {
          var match = text.match(/var settings = ({.*});/);
          if (match) {
            settings = JSON.parse(match[1]);
            console.log("ACdownload: getSettings found setting.");
            break;
          }
        }
      }
      return settings;
    },
    getVideoSources: function(settings) {
      var sources;
      //映像ファイル情報取得
      sources = settings.playlist.sources; //[].file & .label
      if ( sources ) {
        var tab=document.getElementById('content-tab1'); //概要タブ
        if (tab) { //入れるの早すぎると消されるがリロードで出てくる
          for(var i=0; i<sources.length; i++ ) {
            console.log("ACdownload: Video source " + sources[i].label );
            var title = sources[i].file.match(".+/(.+?)([\?#;].*)?$")[1];
            var titles = window.document.getElementsByTagName("title");
            if (titles) {
              title = titles[0].innerText.replace(/ の配信は.*から/,"")
                .replace(/ /g,"") + " " + title;
            }
            var aElement = document.createElement("a");
            aElement.setAttribute("href", sources[i].file);
            aElement.setAttribute("download", title);
            aElement.innerHTML = sources[i].label;
            tab.insert({top: aElement});
          }
        }
      } else {
        console.log("ACdownload: Video source informatin"); //failsafe
      }
    },
    end: function() {
    }
  });
  new ContentScript();
})();
