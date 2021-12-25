# GCPインスタンス 初期手動作業手順

GCPインスタンスでこのアプリケーションを起こす時の、プロビジョニング前までの手動作業を記す。

なお「GCPインスタンスで動かし続ける」かは、また考える。

## 前提となる知識

- https://sava.cloud/gce-always-free/
- https://qiita.com/riku-shiru/items/a870edd9dc0b132e092c

## GCPでファイアウォールルールを定義し

### GCPでファイアウォールルールを定義

コンソールから、

メニュー > VPCネットワーク > ファイアウォールルール

を選び、「ファイアウォールルールを作成」する。

その際、「ターゲットタグ」を指定する。

### GCEインスタンスにポート開放

GCEインスタンスに「作成したターゲットタグ」指定する。

### インスタンス内のsshdの設定を変更する

```bash
sudo vi /etc/ssh/sshd_config
# Port の設定値を変更

sudo systemctl restart sshd
```

これでポートが変わる…ので、GCPのコンソールから入れなく成る。

sshしたい場合「SSH->ブラウザウィンドウでカスタムポートを開く」でポートを指定し接続するように。

### ライブラリ更新

```bash
sudo apt-get update
sudo apt-get dist-upgrade
sudo apt-get autoremove
```

## ansible導入

```bash
sudo apt-get install ansible git
```

## ansible実行

```bash
git clone https://github.com/kazuhito-m/youkai-password-challenge.git
cd ./youkai*/env/production/provisioning
ansible-playbook -v -i hosts -c local main.yml
```

## 作業メモ

```bash

```
