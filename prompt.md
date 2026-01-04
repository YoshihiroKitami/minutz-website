# Webサイト作成プロンプト（テンプレート）

このプロンプトを使用して、プロフェッショナルなサービス紹介Webサイトを作成してください。

---

## プロジェクト概要

**サービス名**: [サービス名を入力]
**サービス概要**: [サービスの簡単な説明]
**ターゲット顧客**: [想定する顧客層]

---

## 技術スタック

以下の技術スタックを使用して静的サイトを構築してください：

- **HTML/CSS/JavaScript** - 静的サイト（ビルドツール不要）
- **Tailwind CSS** - CDN経由（`https://cdn.tailwindcss.com`）
- **Lucide Icons** - アイコンライブラリ（`https://unpkg.com/lucide@latest`）
- **Google Fonts** - Noto Sans JP, Inter

---

## カラーテーマ

Tailwind設定で以下のカスタムカラーを定義してください：

```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#0F172A',    // Slate 900 - メインカラー（ヘッダー、ボタン等）
                secondary: '#14B8A6',  // Teal 500 - アクセントカラー（CTA、ハイライト）
                accent: '#F43F5E',     // Rose 500 - 強調カラー
            },
            fontFamily: {
                sans: ['Noto Sans JP', 'Inter', 'sans-serif'],
            }
        }
    }
}
```

### CSS変数（style.css）

```css
:root {
    --primary: #0F172A;
    --primary-foreground: #F8FAFC;
    --secondary: #14B8A6;
    --secondary-foreground: #FFFFFF;
    --accent: #F43F5E;
    --background: #F8FAFC;
    --foreground: #0F172A;
}
```

---

## ファイル構造

```
├── index.html          # トップページ
├── features.html       # 機能紹介
├── use-cases.html      # 導入ケース・活用シーン
├── pricing.html        # 料金プラン
├── cases.html          # 導入事例
├── faq.html            # よくある質問
├── style.css           # カスタムCSS（Tailwind拡張）
├── script.js           # 共通JavaScript
└── images/             # 画像アセット
```

---

## 共通コンポーネント

### ヘッダー

```html
<header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-5">
    <div class="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <!-- ロゴ -->
        <a href="index.html" class="flex items-center">
            <img src="images/logo.svg" alt="[サービス名]" class="h-12 logo-img">
        </a>

        <!-- デスクトップナビゲーション -->
        <nav class="hidden md:flex items-center gap-8">
            <a href="index.html" class="text-base font-bold text-slate-800 hover:text-secondary transition-colors">トップ</a>
            <a href="features.html" class="text-base font-bold text-slate-800 hover:text-secondary transition-colors">機能</a>
            <a href="use-cases.html" class="text-base font-bold text-slate-800 hover:text-secondary transition-colors">導入ケース</a>
            <a href="pricing.html" class="text-base font-bold text-slate-800 hover:text-secondary transition-colors">料金</a>
            <a href="cases.html" class="text-base font-bold text-slate-800 hover:text-secondary transition-colors">導入事例</a>
            <a href="faq.html" class="text-base font-bold text-slate-800 hover:text-secondary transition-colors">FAQ</a>
        </nav>

        <!-- CTAボタン -->
        <div class="hidden md:flex items-center gap-4">
            <a href="[お問い合わせURL]" target="_blank" rel="noopener noreferrer" class="bg-primary hover:bg-slate-800 text-white text-sm font-medium px-6 py-2.5 rounded-md shadow-lg shadow-primary/20 transition-all">
                資料請求・お問い合わせ
            </a>
        </div>

        <!-- モバイルメニューボタン -->
        <button id="mobile-menu-btn" class="md:hidden p-2 text-slate-600">
            <i data-lucide="menu" id="menu-icon"></i>
            <i data-lucide="x" id="close-icon" class="hidden"></i>
        </button>
    </div>

    <!-- モバイルナビゲーション -->
    <div id="mobile-menu" class="hidden md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-lg p-4 flex flex-col gap-4">
        <a href="index.html" class="block py-2 text-slate-600 font-medium">トップ</a>
        <a href="features.html" class="block py-2 text-slate-600 font-medium">機能</a>
        <a href="use-cases.html" class="block py-2 text-slate-600 font-medium">導入ケース</a>
        <a href="pricing.html" class="block py-2 text-slate-600 font-medium">料金</a>
        <a href="cases.html" class="block py-2 text-slate-600 font-medium">導入事例</a>
        <a href="faq.html" class="block py-2 text-slate-600 font-medium">FAQ</a>
        <div class="flex flex-col gap-3 mt-2 pt-4 border-t border-slate-100">
            <a href="[お問い合わせURL]" target="_blank" rel="noopener noreferrer" class="w-full text-center bg-primary text-white py-2 rounded-md">資料請求・お問い合わせ</a>
        </div>
    </div>
</header>
```

### フッター

```html
<footer class="bg-slate-900 text-slate-300 py-16">
    <div class="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div class="space-y-4">
            <div class="flex items-center text-white">
                <img src="images/logo.svg" alt="[サービス名]" class="h-10 brightness-0 invert">
            </div>
            <p class="text-sm leading-relaxed text-slate-400">
                [サービスのキャッチコピー]
            </p>
        </div>

        <div>
            <h4 class="text-white font-bold mb-4">サービス</h4>
            <ul class="space-y-2 text-sm">
                <li><a href="features.html" class="hover:text-white transition-colors">機能一覧</a></li>
                <li><a href="use-cases.html" class="hover:text-white transition-colors">導入ケース</a></li>
                <li><a href="pricing.html" class="hover:text-white transition-colors">料金プラン</a></li>
            </ul>
        </div>

        <div>
            <h4 class="text-white font-bold mb-4">サポート</h4>
            <ul class="space-y-2 text-sm">
                <li><a href="faq.html" class="hover:text-white transition-colors">よくある質問</a></li>
                <li><a href="[お問い合わせURL]" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">お問い合わせ</a></li>
            </ul>
        </div>

        <div>
            <h4 class="text-white font-bold mb-4">会社情報</h4>
            <ul class="space-y-2 text-sm">
                <li><a href="[会社概要URL]" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">会社概要</a></li>
                <li><a href="[プライバシーポリシーURL]" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">プライバシーポリシー</a></li>
                <li><a href="[利用規約URL]" target="_blank" rel="noopener noreferrer" class="hover:text-white transition-colors">サービス利用規約</a></li>
            </ul>
        </div>
    </div>
    <div class="container mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        © [年] [会社名]. All rights reserved.
    </div>
</footer>
```

---

## ページ構成

### index.html（トップページ）

1. **ヒーローセクション**
   - 背景画像（`background-image`で指定、オーバーレイ付き）
   - キャッチコピー（グラデーションテキスト使用）
   - サブコピー
   - CTAボタン（外部リンクの場合は`<a>`タグ使用）
   - メインビジュアル

2. **課題提起セクション**
   - 「こんな課題ありませんか？」形式
   - 3つの課題カード（画像付き、aspect-videoで16:9表示）

3. **ソリューション提示**
   - 課題解決の概要
   - 機能ページへの誘導

4. **選ばれる理由セクション**
   - 3〜4つの主要機能を交互レイアウトで紹介
   - 画像＋テキストの組み合わせ

5. **CTAセクション**
   - トライアル誘導
   - お問い合わせボタン（外部リンク）

### features.html（機能紹介）
- 機能の詳細説明
- スクリーンショットや図解

### use-cases.html（導入ケース）
- 業種・シーン別の活用方法
- ユースケースカード

### pricing.html（料金プラン）
- 料金テーブル
- プラン比較

### cases.html（導入事例）
- 顧客事例カード
- 導入効果の数値

### faq.html（よくある質問）
- アコーディオン形式のQ&A

---

## style.css

```css
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap');

:root {
    --primary: #0F172A;
    --primary-foreground: #F8FAFC;
    --secondary: #14B8A6;
    --secondary-foreground: #FFFFFF;
    --accent: #F43F5E;
    --background: #F8FAFC;
    --foreground: #0F172A;
}

body {
    font-family: 'Noto Sans JP', 'Inter', sans-serif;
    color: var(--foreground);
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 700;
    letter-spacing: -0.025em;
}

/* アニメーション */
.fade-in {
    animation: fadeIn 1s ease-out forwards;
}

.slide-up {
    animation: slideUp 0.8s ease-out forwards;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* スクロールバー */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
}
```

---

## script.js

```javascript
document.addEventListener('DOMContentLoaded', () => {
    // ヘッダースクロールエフェクト
    const header = document.querySelector('header');

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-3');
                header.classList.remove('bg-transparent', 'py-5');
            } else {
                header.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-sm', 'py-3');
                header.classList.add('bg-transparent', 'py-5');
            }
        });
    }

    // モバイルメニュートグル
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');

            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                menuIcon.classList.add('hidden');
                closeIcon.classList.remove('hidden');
            } else {
                mobileMenu.classList.add('hidden');
                menuIcon.classList.remove('hidden');
                closeIcon.classList.add('hidden');
            }
        });
    }

    // Lucide Icons初期化
    if (window.lucide) {
        lucide.createIcons();
    }
});
```

---

## デザインパターン

### カードコンポーネント（アイコン版）

```html
<div class="bg-white rounded-xl border-none shadow-lg hover:shadow-xl transition-shadow duration-300 p-8">
    <div class="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mb-6 text-rose-500">
        <i data-lucide="[アイコン名]" class="w-10 h-10"></i>
    </div>
    <h3 class="text-xl font-bold text-slate-900 mb-3">[タイトル]</h3>
    <p class="text-slate-600 leading-relaxed">[説明文]</p>
</div>
```

### カードコンポーネント（画像版）

```html
<div class="bg-white rounded-xl border-none shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
    <div class="w-full aspect-video">
        <img src="images/[画像ファイル名].jpg" alt="[画像の説明]" class="w-full h-full object-cover">
    </div>
    <div class="p-8">
        <h3 class="text-xl font-bold text-slate-900 mb-3">[タイトル]</h3>
        <p class="text-slate-600 leading-relaxed">[説明文]</p>
    </div>
</div>
```

### CTAボタン

```html
<!-- プライマリボタン（外部リンク） -->
<a href="[リンク先URL]" target="_blank" rel="noopener noreferrer" class="bg-primary hover:bg-slate-800 text-white shadow-xl shadow-primary/20 h-14 px-8 text-lg rounded-md font-medium flex items-center justify-center gap-2 transition-all">
    [ボタンテキスト]
    <i data-lucide="arrow-right" class="w-5 h-5"></i>
</a>

<!-- セカンダリボタン -->
<a href="[リンク先URL]" class="border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 h-14 px-10 text-lg rounded-md font-medium transition-all flex items-center justify-center">
    [ボタンテキスト]
</a>
```

### セクションヘッダー

```html
<div class="text-center max-w-3xl mx-auto mb-16">
    <span class="text-secondary font-bold tracking-wider uppercase text-sm">[英語ラベル]</span>
    <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
        [セクションタイトル]
    </h2>
    <p class="text-slate-600">
        [セクション説明]
    </p>
</div>
```

### グラデーションテキスト

```html
<span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
    [グラデーションテキスト]
</span>
```

### ヒーローセクション背景画像

```html
<section class="relative pt-10 pb-20 md:pt-20 md:pb-32 overflow-hidden">
    <div class="absolute inset-0 -z-10 bg-cover bg-center" style="background-image: url('images/[背景画像].jpg')">
        <div class="absolute inset-0 bg-white/30"></div>  <!-- オーバーレイ（透明度調整可） -->
    </div>

    <div class="container mx-auto px-4 md:px-8">
        <!-- コンテンツ -->
    </div>
</section>
```

---

## 画像最適化

Webサイトのパフォーマンス向上のため、画像は以下のように最適化してください。

### macOSの場合（sipsコマンド）

```bash
# PNG → JPEG変換 + リサイズ + 圧縮（品質80%、横幅800px）
sips -s format jpeg -s formatOptions 80 -Z 800 [元ファイル].png --out [出力ファイル].jpg
```

### 推奨サイズ

| 用途 | 横幅 | 品質 | 形式 |
|------|------|------|------|
| ヒーロー背景 | 1920px | 70-80% | JPEG |
| カード画像 | 800px | 80% | JPEG |
| OG画像 | 1200px | 80% | JPEG |
| ロゴ・アイコン | - | - | SVG/PNG |

---

## 作成手順

1. 上記のファイル構造に従ってファイルを作成
2. 共通コンポーネント（ヘッダー・フッター）を各HTMLファイルに配置
3. style.cssとscript.jsを作成
4. 各ページのコンテンツを[プレースホルダー]に従って入力
5. 画像をimages/ディレクトリに配置
6. ローカルサーバーで動作確認

---

## SEO対策

各HTMLファイルの`<head>`内に以下のSEOメタタグを追加してください。

### 基本メタタグ（全ページ共通）

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[ページタイトル]｜[サービス名] - [キャッチコピー]</title>
    <meta name="description" content="[120文字程度のページ説明。ターゲットキーワードを自然に含める]">
    <meta name="keywords" content="[キーワード1],[キーワード2],[キーワード3],...">
    <meta name="author" content="[会社名]">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="[ページの正規URL]">

    <!-- Open Graph / SNS共有用 -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="[ページタイトル]｜[サービス名]">
    <meta property="og:description" content="[SNS共有時の説明文]">
    <meta property="og:url" content="[ページURL]">
    <meta property="og:site_name" content="[サービス名]">
    <meta property="og:image" content="[OG画像URL（1200x630px推奨）]">
    <meta property="og:locale" content="ja_JP">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="[ページタイトル]｜[サービス名]">
    <meta name="twitter:description" content="[Twitter共有時の説明文]">
    <meta name="twitter:image" content="[OG画像URL]">

    <!-- 以下、既存のscriptタグ等 -->
</head>
```

### トップページ用 構造化データ（JSON-LD）

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "[サービス名]",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "description": "[サービスの説明]",
    "offers": {
        "@type": "Offer",
        "price": "[最低価格]",
        "priceCurrency": "JPY"
    },
    "provider": {
        "@type": "Organization",
        "name": "[会社名]",
        "url": "[会社URL]"
    }
}
</script>
```

### 料金ページ用 構造化データ（JSON-LD）

```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "[サービス名]",
    "description": "[サービスの説明]",
    "brand": {
        "@type": "Brand",
        "name": "[サービス名]"
    },
    "offers": [
        {
            "@type": "Offer",
            "name": "[プラン名1]",
            "price": "[価格]",
            "priceCurrency": "JPY",
            "priceValidUntil": "[有効期限 YYYY-MM-DD]"
        },
        {
            "@type": "Offer",
            "name": "[プラン名2]",
            "price": "[価格]",
            "priceCurrency": "JPY",
            "priceValidUntil": "[有効期限 YYYY-MM-DD]"
        }
    ]
}
</script>
```

### SEOチェックリスト

- [ ] 各ページに固有のtitleタグを設定（30〜60文字）
- [ ] 各ページに固有のmeta descriptionを設定（80〜120文字）
- [ ] ターゲットキーワードをtitle・descriptionに含める
- [ ] canonical URLを正しく設定
- [ ] OG画像（1200x630px）を用意し、images/og-image.jpg として配置
- [ ] 構造化データをトップページ・料金ページに追加
- [ ] 画像のalt属性を適切に設定
- [ ] 見出しタグ（h1〜h6）を階層的に使用

---

## 注意事項

- 全ページで同じヘッダー・フッターを使用（変更時は全ファイル更新が必要）
- 外部リンクは適切なURLに置き換え
- 画像はimages/ディレクトリに配置
- レスポンシブ対応済み（モバイル・タブレット・デスクトップ）
- 日本語サイトのため、alt属性やコメントも日本語で記述
