"use client";
import { useState } from "react";
import Particles from "react-tsparticles";

// 選択肢
const categories = [
  { value: "法人", label: "法人（法人警備のご相談）" },
  { value: "個人", label: "個人（個人警備のご相談）" },
  { value: "求職", label: "採用・求職について" },
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.category) {
      setError("必須項目を入力してください。");
      return;
    }
    setSubmitted(true);
    setError(null);
    // API送信はここ
  };

  const handleReset = () => setSubmitted(false);

  return (
    <div className="relative min-h-screen bg-neutral-950 py-20 px-4 flex items-center overflow-x-hidden">
      <Particles
        className="fixed inset-0 z-0 pointer-events-none"
        id="tsparticles"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 30,
          particles: {
            number: { value: 55, density: { enable: true, area: 900 } },
            color: { value: ["#fff", "#3b82f6", "#60a5fa"] }, // 青系
            opacity: { value: 0.20 },
            size: { value: { min: 1.5, max: 3 } },
            move: { enable: true, speed: 0.25, direction: "none", outModes: "out" },
            links: { enable: false },
          },
          detectRetina: true,
        }}
      />

      <section className="relative max-w-2xl w-full mx-auto rounded-3xl bg-neutral-900/95 shadow-2xl border border-blue-400/20 p-10 md:p-14 transition-all duration-300 z-10">
        {/* ↓ここ（border-blue, box-shadow青系に） */}
        <div
          className="absolute inset-0 rounded-3xl pointer-events-none border-2 border-blue-400/10"
          style={{ boxShadow: "0 0 120px #38bdf820" }}
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-400 mb-10 border-l-4 border-blue-400 pl-6 drop-shadow-lg tracking-wide relative z-10">
          応募フォーム
        </h1>

        {submitted ? (
          <div className="text-neutral-100 text-xl md:text-2xl font-bold py-10 z-10 relative space-y-6">
            <div className="text-green-300 text-2xl font-bold text-center mb-8">
              ご応募ありがとうございました。<br />
              担当者より追ってご連絡いたします。
            </div>
            <div className="bg-neutral-800/90 rounded-2xl p-8 shadow-md border border-blue-200/30 space-y-5">
              <div>
                <span className="font-semibold text-blue-400">お名前：</span>
                <span>{form.name}</span>
              </div>
              <div>
                <span className="font-semibold text-blue-400">メールアドレス：</span>
                <span>{form.email}</span>
              </div>
              <div>
                <span className="font-semibold text-blue-400">電話番号：</span>
                <span>{form.tel || <span className="text-gray-400">未入力</span>}</span>
              </div>
              <div>
                <span className="font-semibold text-blue-400">応募内容：</span>
                <span>{categories.find(c => c.value === form.category)?.label}</span>
              </div>
              {form.message && (
                <div>
                  <span className="font-semibold text-blue-400">備考・ご質問：</span>
                  <div className="mt-2 text-neutral-100 whitespace-pre-wrap">
                    {form.message}
                  </div>
                </div>
              )}
            </div>
            <button
              onClick={handleReset}
              className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white text-lg font-bold rounded-full shadow hover:scale-105 hover:brightness-110 transition-all duration-200"
            >
              再入力する
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
            <div>
              <label className="block text-blue-200 font-semibold mb-2 text-lg">
                お名前 <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                className="w-full px-6 py-4 rounded-xl bg-neutral-800/80 text-blue-100 text-lg placeholder:text-neutral-400 border border-blue-400/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                placeholder="例：山田太郎"
                required
              />
            </div>
            <div>
              <label className="block text-blue-200 font-semibold mb-2 text-lg">
                メールアドレス <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                className="w-full px-6 py-4 rounded-xl bg-neutral-800/80 text-blue-100 text-lg placeholder:text-neutral-400 border border-blue-400/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                placeholder="info@example.com"
                required
              />
            </div>
            <div>
              <label className="block text-blue-200 font-semibold mb-2 text-lg">
                電話番号
              </label>
              <input
                type="tel"
                className="w-full px-6 py-4 rounded-xl bg-neutral-800/80 text-blue-100 text-lg placeholder:text-neutral-400 border border-blue-400/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition"
                value={form.tel}
                onChange={e => setForm({ ...form, tel: e.target.value })}
                placeholder="例：090-1234-5678"
              />
            </div>
            <div>
              <label className="block text-blue-200 font-semibold mb-2 text-lg">
                応募内容 <span className="text-red-400">*</span>
              </label>
              <div className="flex flex-col gap-3">
                {categories.map(option => (
                  <label key={option.value} className="inline-flex items-center gap-2 cursor-pointer text-lg text-blue-100">
                    <input
                      type="radio"
                      name="category"
                      value={option.value}
                      checked={form.category === option.value}
                      onChange={e => setForm({ ...form, category: e.target.value })}
                      className="accent-blue-400 w-5 h-5 border-blue-400/10"
                      required
                    />
                    <span className="font-medium">{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-blue-200 font-semibold mb-2 text-lg">
                備考・ご質問
              </label>
              <textarea
                className="w-full px-6 py-4 rounded-xl bg-neutral-800/80 text-blue-100 text-lg placeholder:text-neutral-400 border border-blue-400/10 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none transition"
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                placeholder="ご質問や補足があればご記入ください（任意）"
                rows={5}
              />
            </div>
            {error && (
              <div className="text-red-400 text-base font-bold">{error}</div>
            )}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-white font-extrabold rounded-full py-4 mt-4 text-xl shadow-lg hover:scale-105 hover:brightness-110 transition-all duration-200"
            >
              送信する
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
