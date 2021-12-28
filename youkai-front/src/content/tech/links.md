---
title: このアプリを作るに当たっての技術リンク集
---
 
## Vuex on Nuxt

以下、一個目の `vuex-module-decorators` と、Staticな感じでやるのがいいのかな。 

- NuxtでTypeScriptを使うときのVeux.storeの設定方法
  - https://blog.28go.jp/2019/06/nuxttypescriptstore.html
- Nuxt.js + TypeScript + Vuexをvuex-module-decoratorsでがっちりインテリセンスを効かせる
  - https://qiita.com/azukiazusa/items/a50b1ffe05d9937a4db0
  - ほぼ「コレのマネ」で実現した
- Typed Vuex
  - https://typed-vuex.roe.dev/getting-started/getting-started-nuxt
- Vuexの代わりにnuxt-typed-vuexを用いて型の恩恵を受ける
  - https://qiita.com/y-temp4/items/08e131b8b053f401d996
- NuxtJSとvuex-module-decoratorsを使用した動的なvuexストアモジュール
  - https://www.webdevqa.jp.net/ja/typescript/nuxtjs%E3%81%A8vuexmoduledecorators%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%97%E3%81%9F%E5%8B%95%E7%9A%84%E3%81%AAvuex%E3%82%B9%E3%83%88%E3%82%A2%E3%83%A2%E3%82%B8%E3%83%A5%E3%83%BC%E3%83%AB/813984528/
  - なぜか、上記の記事群で動かなかったのを、この記事の `name: 'CommonModule',` を見て「大文字小文字か！」と気づいて解決した


## Vuex単体

- 30分で基礎がしっかりわかる【Vuex】-入門
  - https://qiita.com/moyegogo1020/items/0b471e08a227a26cb31b
- Vuex公式 - Store
  - https://typescript.nuxtjs.org/ja/cookbook/store/

## Markdown/Blog記事化

- Nuxt/content
  - https://content.nuxtjs.org/
- nuxt/contentでMarkdownのブログを作る
  - https://www.evoworx.co.jp/blog/nuxt-content-blog/

## gzipをJavaScriptで扱う方法

- JavaScriptで手軽にgzip圧縮できるライブラリ使ってみた【zlib.js】
  - https://pisuke-code.com/javascript-usage-of-zlib-js/


## web workers

- Nuxt + Typescript で worker-loader を使う
  - https://kitsune-gadget.hatenablog.com/entry/2020/05/16/211426
- Nuxt.tsでWeb Workersを使う【Nuxt.js + TypeScript】
  - https://xor.hateblo.jp/entry/20201010/1602309600
