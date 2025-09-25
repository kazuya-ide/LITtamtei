// app/contact/page.tsx
"use client";
import { useState } from "react";
import Particles from "react-tsparticles";

const categories = [
  { value: "浮気", label: "浮気調査のご相談" },
  { value: "素行", label: "素行調査のご相談" },
  { value: "企業、個人信用", label: "企業、個人信用調査のご相談" },
  { value: "その他", label: "その他" },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    tel: "",
    category: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);
    if (!form.name || !form.email || !form.category) {
      setError("必須項目を入力してください。");
      setIsSending(false);
      return;
    }
    setError(null);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.message || "送信に失敗しました。");
        setIsSending(false);
        return;
      }
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("送信中にエラーが発生しました。");
      setIsSending(false);
    }
  };

  const handleReset = () => {
    setForm({ name: "", email: "", tel: "", category: "", message: "" });
    setSubmitted(false);
    setIsSending(false);
  };

  return (
    <div className="relative min-h-screen bg-base py-20 px-4 flex items-center overflow-x-hidden">
      <Particles className="fixed inset-0 z-0 pointer-events-none" />
      <section className="relative max-w-2xl w-full mx-auto rounded-3xl bg-white p-10 md:p-14 shadow-2xl border border-base-foreground/10 z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-base-foreground mb-10 tracking-wide">
          応募フォーム
        </h1>
        {submitted ? (
          <div className="text-center space-y-8">
            <div className="text-green-600 text-xl font-bold">
              ご応募ありがとうございました。担当者より追ってご連絡いたします。
            </div>
            <button
              onClick={handleReset}
              className="px-8 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white text-lg font-bold rounded-full shadow hover:scale-105 transition"
            >
              再入力する
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <input
              type="text"
              placeholder="お名前 *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-6 py-4 rounded-xl bg-base border border-base-foreground/20 text-base-foreground placeholder:text-muted-foreground focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition"
              required
            />
            <input
              type="email"
              placeholder="メールアドレス *"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-6 py-4 rounded-xl bg-base border border-base-foreground/20 text-base-foreground placeholder:text-muted-foreground focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition"
              required
            />
            <input
              type="tel"
              placeholder="電話番号"
              value={form.tel}
              onChange={(e) => setForm({ ...form, tel: e.target.value })}
              className="w-full px-6 py-4 rounded-xl bg-base border border-base-foreground/20 text-base-foreground placeholder:text-muted-foreground focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition"
            />
            <div className="space-y-3">
              {categories.map((c) => (
                <label
                  key={c.value}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="category"
                    value={c.value}
                    checked={form.category === c.value}
                    onChange={(e) =>
                      setForm({ ...form, category: e.target.value })
                    }
                    className="accent-blue-500 w-5 h-5"
                    required
                  />
                  <span className="text-base-foreground font-medium">
                    {c.label}
                  </span>
                </label>
              ))}
            </div>
            <textarea
              placeholder="備考・ご質問"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-6 py-4 rounded-xl bg-base border border-base-foreground/20 text-base-foreground placeholder:text-muted-foreground focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition"
              rows={5}
            />
            {error && <div className="text-red-500 font-bold">{error}</div>}
            <button
              type="submit"
              disabled={isSending}
              className={`w-full py-4 rounded-full font-bold text-white shadow-lg transition-all ${
                isSending
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:scale-105 hover:brightness-110"
              }`}
            >
              {isSending ? "送信中..." : "送信する"}
            </button>

            {/* プライバシー注記 */}
            <p className="mt-6 text-xs leading-relaxed text-neutral-500">
              ※ いただいたご相談内容は厳重に管理し、目的外利用はいたしません。
              状況により弁護士同席や警察相談のご案内も可能です。
            </p>
          </form>
        )}
      </section>
    </div>
  );
}
