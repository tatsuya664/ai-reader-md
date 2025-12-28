import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI-Reader.md | WebサイトをAI用Markdownに一瞬で変換",
  description: "Webサイトから広告やノイズを除去し、ChatGPTやClaudeが読みやすいMarkdown形式に変換する無料ツールです。技術記事やニュースの解析に最適。",
  keywords: ["AI", "Markdown", "変換", "スクレイピング", "ChatGPT", "Claude", "Gemini","本文抽出","プロンプト"],
  verification: {
    google: "Taj3YFPakjSrUdzb41Ca6VwJ9JR5Sd4lLI4JEY9ZJsQ",
  },
  authors: [{ name: "Tatsuya Kawashima" }],
  openGraph: {
    title: "AI-Reader.md",
    description: "AIが読みやすいクリーンなMarkdownを、URLひとつで生成。",
    type: "website",
    url: "https://ai-reader-md.vercel.app/", 
    siteName: "AI-Reader.md",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Reader.md",
    description: "WebサイトをAI用Markdownに一瞬で変換",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
