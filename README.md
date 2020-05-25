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

1.3 Bond BBTについてサポート

0.0.1.2 READMEなど細かい修正

0.0.1.1 Chromeアプリストアに公開するに当たって発見された問題の修正

0.0.1.0 初期リリース


# Chromeウェブストアの概要文
## 日本語

AC downloadは、BBT大学、BBT大学院のAirCampusポータルの視聴画面にダウンロード機能追加します。

Chromeウェブストアにて販売していますが、無料で試用することができます。ソースは、GitHub で公開しています。
AirCampusの仕様の変更により使えなくなってしまうことがあるかもしれません。

今後どのような機能を拡張していくべきかの資料とするためにGoogle Tag ManagerとGoogle Analyticsを利用します。

### ホームページのURL
https://github.com/takuya-o/ACdownload

## プライバシー
### 単一用途
AirCampusポータルのダウンロード機能を提供します。
### 権限
#### ホスト
AirCampusポータルへリンクを追加するためにホストに対して権限を要求します。
#### リモートコード
AirCampusポータルへの接続するために、BBTから送られくるHTML表示時に実行されるコードの一部を本拡張機能でも実行します。
また、今後どのような機能を拡張していくべきかの資料とするためにGoogle Tag ManagerとGoogle Analyticsを利用します。


## 英語

AC download adds a download capability to the video screen of the AirCampus portal by BBT University and BBT Graduate School.

It is sold at the Chrome Web Store, but you can try it for free. The source is available on GitHub.
It may become unusable due to changes in AirCampus specifications.

It uses Google Tag Manager and Google Analytics as research for what features should be expanded in the future.

