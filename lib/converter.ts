import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';
import TurndownService from 'turndown';

export async function convertWebToMarkdown(url: string) {
  try {
    // 1. サイトのHTMLを取得（ブラウザのふりをするためのUser-Agentを設定）
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`アクセス失敗 (Status: ${response.status})`);
    }

    const html = await response.text();

    // 2. JSDOMで仮想環境を作成し、Readabilityで本文のみを抽出
    const dom = new JSDOM(html, { url });
    const reader = new Readability(dom.window.document);
    const article = reader.parse();

    if (!article) {
      throw new Error('記事の内容を解析できませんでした。');
    }

    // 3. TurndownでHTMLをMarkdown形式に変換
    const turndownService = new TurndownService({
      headingStyle: 'atx',
      codeBlockStyle: 'fenced'
    });
    
    const markdown = turndownService.turndown(article.content);

    return {
      title: article.title,
      content: markdown,
    };
  } catch (error: any) {
    console.error('Error in converter:', error.message);
    throw error;
  }
}