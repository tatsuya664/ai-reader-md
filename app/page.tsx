"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    if (!url) return;
    setLoading(true);
    setMarkdown(""); // 前の結果をクリア
    try {
      const res = await fetch("/api/convert", {
        method: "POST",
        body: JSON.stringify({ url }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.content) {
        setMarkdown(data.content);
      } else {
        alert("エラー: " + (data.error || "変換に失敗しました"));
      }
    } catch (err) {
      alert("通信エラーが発生しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-12 text-slate-900">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-black text-blue-600">AI-Reader.md</h1>
          <p className="text-slate-500">WebサイトをAI（ChatGPT/Claude等）が読みやすいMarkdownに一瞬で変換</p>
        </header>

        <div className="flex flex-col sm:flex-row gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <input
            type="url"
            placeholder="https://news.yahoo.co.jp/articles/..."
            className="flex-1 rounded-lg border border-slate-300 p-3 outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            onClick={handleConvert}
            disabled={loading}
            className="rounded-lg bg-blue-600 px-8 py-3 font-bold text-white shadow-md hover:bg-blue-700 active:scale-95 transition-all disabled:bg-slate-400"
          >
            {loading ? "解析中..." : "Markdown変換"}
          </button>
        </div>

        {markdown && (
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <h2 className="font-bold text-slate-700">【抽出結果】</h2>
              <button
                onClick={() => {
                  navigator.clipboard.writeText(markdown);
                  alert("クリップボードにコピーしました！");
                }}
                className="bg-emerald-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-emerald-600 transition-colors shadow-sm"
              >
                AI用にコピーする
              </button>
            </div>
            <textarea
              className="h-[500px] w-full rounded-xl border border-slate-200 bg-white p-6 font-mono text-sm leading-relaxed shadow-inner outline-none focus:ring-2 focus:ring-blue-500"
              value={markdown}
              readOnly
            />
          </div>
        )}
      </div>
    </main>
  );
}