# AirCampus Portal Download Extender

AirCampusポータルの映像ファイルをダウンロードできるようにするChrome拡張

## ビルド方法

crxmakeがある環境で、crxmakeに--key-outputオプションをつけて秘密キーACdownload.pemを作ってから、./build.rbする。


## インストール方法

1. Chromeウェブストアから「AirCampus Portal Download Extender」をインストールする。
   URL http://chrome.google.com/webstore/detailbihgcnpallfieghidgdfcnhdhjaamgkl

## 使い方

1. ChromeブラウザーでAirCampusポータルで、視聴すると「概要」タブの講師の情報の上に「224k」など通信帯域ごとにダウンロードのリンクが表示されます。

## 開発

* 主な開発や課題管理はプライベートのgitlabでやっていて、githubは泥臭いものを減らした公開用です。

## リリースノート

### 0.0.1.2
* READMEなど細かい修正

### 0.0.1.1
* Chromeアプリストアに公開するに当たって発見された問題の修正

### 0.0.1.0
* 初期リリース
