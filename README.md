# AI-Reader.md

**Webサイトのノイズを排除し、AIが最も理解しやすいMarkdown形式へ一瞬で変換するツール。**

![Next.js](https://img.shields.io/badge/Next.js-15-black) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-blue) ![License](https://img.shields.io/badge/License-MIT-green)

> **Note**
> **本プロジェクトの開発について**
> 初期実装や一部ロジックの検討に生成AIを活用していますが、設計・要件定義・調整・デバッグは自身で行っています。

---

## 🚀 サービス概要
ChatGPTやClaudeなどのLLMにWebサイトの情報を読み込ませる際、広告やサイドメニューなどの「ノイズ」が精度を下げてしまう課題を解決します。
本ツールは、Webページの本文のみを抽出し、構造化されたMarkdown形式に変換。AIへのコンテキスト投入を最適化します。

### 主な機能
- **本文抽出エンジン**: `mozilla/readability` を採用し、主要な記事コンテンツのみを正確に特定。
- **高速変換**: HTMLを即座にMarkdownへパース。
- **LaTeX対応**: 数式等が含まれる技術記事も、構造を維持したまま変換可能。
- **ワンクリック・コピー**: AIへのペーストに特化した「AI用にコピー」機能を搭載。

## 🛠 技術スタック
量産性とパフォーマンスを両立するため、以下のモダンなスタックを採用しています。

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Backend**: Next.js API Routes (Serverless Functions)
- **Libraries**:
    - `jsdom`: サーバーサイドでのDOMシミュレーション
    - `@mozilla/readability`: 本文抽出ロジック
    - `turndown`: HTML to Markdown 変換

## 💡 技術的な工夫
- **CORS回避**: クライアントサイドでのfetch制限を回避するため、Next.jsのAPI Routeをプロキシとして利用し、サーバーサイドでスクレイピングを実行。
- **User-Agent最適化**: 特定のサイトでのアクセス拒否を防ぐため、リクエストヘッダーの最適化を実施。

## 📦 開発者向けセットアップ

```bash
# クローン
git clone [https://github.com/あなたのユーザー名/ai-reader-md.git](https://github.com/あなたのユーザー名/ai-reader-md.git)

# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev