"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    tel: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 仮のsubmit、API連携時は置き換え
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("必須項目を入力してください。");
      return;
    }
    setSubmitted(true);
    setError(null);
    // ここでAPI等に送信処理
    // await fetch('/api/contact', { method: 'POST', ... })
  };

  return (
    <div className="min-h-screen bg-neutral-900 py-16 px-4">
      <section className="max-w-lg mx-auto bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-yellow-700 mb-8 border-l-4 border-yellow-400 pl-3">
          応募フォーム
        </h1>

        {submitted ? (
          <div className="text-green-600 text-lg font-bold text-center py-16">
            ご応募ありがとうございました。<br />
            担当者より追ってご連絡いたします。
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-800 font-semibold mb-1">
                お名前 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-yellow-400"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-1">
                メールアドレス <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-yellow-400"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-1">
                電話番号
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-yellow-400"
                value={form.tel}
                onChange={e => setForm({ ...form, tel: e.target.value })}
                placeholder="例：090-1234-5678"
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-1">
                応募内容・ご質問 <span className="text-red-500">*</span>
              </label>
              <textarea
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-yellow-400"
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                required
                rows={5}
              />
            </div>
            {error && (
              <div className="text-red-600 text-sm font-bold">{error}</div>
            )}
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black font-bold rounded py-3 hover:bg-yellow-600 transition"
            >
              送信する
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
