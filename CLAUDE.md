# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

MinutzのサービスサイトのWebサイト。AI同時翻訳サービス「Minutz」の紹介・販促用静的サイト。

## 技術スタック

- **HTML/CSS/JavaScript** - 静的サイト（ビルドツール不要）
- **Tailwind CSS** - CDN経由で読み込み（`cdn.tailwindcss.com`）
- **Lucide Icons** - アイコンライブラリ（CDN経由）
- **Google Fonts** - Noto Sans JP, Inter

## ローカル開発

ビルドプロセスなし。HTMLファイルを直接ブラウザで開くか、ローカルサーバーで配信。

```bash
# 例: Python簡易サーバー
python -m http.server 8000
```

## ファイル構造

```
├── index.html          # トップページ
├── features.html       # 機能紹介
├── use-cases.html      # 導入ケース
├── pricing.html        # 料金プラン
├── cases.html          # 導入事例
├── faq.html            # よくある質問
├── style.css           # カスタムCSS（Tailwind拡張）
├── script.js           # 共通JavaScript
└── images/             # 画像アセット
```

## カラーテーマ

Tailwind設定で定義：
- `primary`: #0F172A（Slate 900）
- `secondary`: #14B8A6（Teal 500）
- `accent`: #F43F5E（Rose 500）

## 共通コンポーネント

各HTMLファイルに同じヘッダー・フッターが含まれる。変更時は全ファイルを更新する必要あり。

### ナビゲーション構造
- Desktop Nav: `nav.hidden.md:flex`
- Mobile Nav: `#mobile-menu`（`#mobile-menu-btn`でトグル）

## 注意事項

- 外部リンク（お問い合わせ等）は `https://obot-ai.com/contact/` を使用
- 画像は `images/` ディレクトリに配置
- 日本語サイトのため、コメントやalt属性も日本語で記述
