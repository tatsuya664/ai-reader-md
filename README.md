# AI-Reader.md

**Webサイトのノイズを排除し、AIが最も理解しやすいMarkdown形式へ一瞬で変換するツール。**

[🚀 ライブデモを見る](https://ai-reader-md.vercel.app)

![Next.js](https://img.shields.io/badge/Next.js-15-black) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-blue) ![Vercel](https://img.shields.io/badge/Vercel-Deployed-black)

> **Note**
> **本プロジェクトの開発について**
> 初期実装や一部ロジックの検討に生成AIを活用していますが、全体の設計・要件定義・環境構築・デバッグおよび技術選定（jsdomからlinkedomへの移行等）は自身で行っています。

---

## 🚀 サービス概要
ChatGPTやClaudeなどのLLMにWebサイトの情報を読み込ませる際、広告やサイドメニューなどの「ノイズ」が精度を下げてしまう課題を解決します。
本ツールは、Webページの本文のみを抽出し、構造化されたMarkdown形式に変換。AIへのコンテキスト投入を最適化します。

### 主な機能
- **本文抽出エンジン**: `mozilla/readability` と `linkedom` を採用し、サーバーレス環境での高速な解析を実現。
- **SEO最適化**: メタデータおよびサイトマップを構築済み。
- **高速変換**: HTMLを即座にMarkdownへパース。
- **ワンクリック・コピー**: AIへのペーストに特化した「AI用にコピー」機能を搭載。

## 🛠 技術スタック
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes (Serverless Functions)
- **Deployment**: Vercel
- **Libraries**:
    - `linkedom`: サーバーサイドでの軽量DOM解析（jsdomの代替）
    - `@mozilla/readability`: 本文抽出ロジック
    - `turndown`: HTML to Markdown 変換

## 💡 技術的な工夫と解決した課題
- **CORS回避**: Next.jsのAPI Routeをプロキシとして利用し、サーバーサイドでスクレイピングを実行。
- **互換性解決**: Vercel環境における `jsdom` のESM互換エラーに対し、より軽量で互換性の高い `linkedom` へ移行することで安定動作を実現。
- **SEO対策**: Google Search Console 登録済み。適切なメタタグ設定により検索流入を考慮。

## 📦 セットアップ

```bash
# 1. リポジトリをクローン
git clone [https://github.com/tatsuya664/ai-reader-md.git](https://github.com/tatsuya664/ai-reader-md.git)

# 2. プロジェクトディレクトリに移動
cd ai-reader-md

# 3. 依存関係のインストール
npm install

# 4. 開発サーバーの起動
npm run dev