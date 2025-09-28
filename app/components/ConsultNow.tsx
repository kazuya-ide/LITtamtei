// app/components/ConsultNow.tsx
"use client";

export default function ConsultNow() {
  return (
    <section className="w-full bg-white py-16"> {/* ← 上下に余白を追加 */}
      <div className="mx-auto max-w-5xl px-4">
        {/* カード */}
        <div className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-white shadow-md">
          {/* デコレーション */}
          <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-emerald-100/30 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-emerald-50/40 blur-2xl" />

          <div className="relative grid gap-8 p-6 md:grid-cols-5 md:p-10">
            {/* 見出し＋説明 */}
            <div className="md:col-span-3">
              <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-900 ring-1 ring-emerald-200">
                秘密厳守・匿名相談可
              </span>
              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-emerald-900 md:text-3xl">
                今すぐL secret serviceにご相談ください
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700 md:text-base">
                警察OBの実地経験と弁護士連携で、法的に有効な証拠収集と安心のサポートを。
                ご状況を丁寧にヒアリングし、最適なプランと概算費用をご案内します。
              </p>

              {/* 信頼ラベル */}
              <ul className="mt-5 flex flex-wrap gap-2 text-xs text-emerald-900">
                <li className="rounded-full bg-emerald-50 px-3 py-1 ring-1 ring-emerald-200">見積り無料</li>
                <li className="rounded-full bg-emerald-50 px-3 py-1 ring-1 ring-emerald-200">24時間受付</li>
                <li className="rounded-full bg-emerald-50 px-3 py-1 ring-1 ring-emerald-200">個人情報厳重管理</li>
              </ul>
            </div>

            {/* CTA ボタン群 */}
            <div className="md:col-span-2">
              <div className="flex flex-col gap-3">
                <a
                  href="/contact"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                  お問い合わせフォームへ
                </a>

                <a
                  href="tel:0112156432"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-emerald-900 ring-1 ring-emerald-300 shadow-sm hover:bg-emerald-50 focus:outline-none focus:ring-4 focus:ring-emerald-200"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M6.6 3.5l2.1 3.6a2 2 0 01-.3 2.3l-.8.8a14 14 0 006.2 6.2l.8-.8a2 2 0 012.3-.3l3.6 2.1a1.8 1.8 0 01.9 1.9l-.2 1.2a2.2 2.2 0 01-2.2 1.8 18.5 18.5 0 01-16.1-16.1A2.2 2.2 0 015 2.7l1.2-.2a1.8 1.8 0 011.9.9z"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  011-215-6432 に今すぐ電話
                </a>

                <p className="mt-1 text-[12px] leading-relaxed text-neutral-500">
                  受付：24時間／年中無休（お電話が難しい場合はフォームをご利用ください）
                </p>
              </div>
            </div>
          </div>

          {/* プライバシー注記 */}
          <div className="relative border-t border-emerald-100/70 px-6 py-4 md:px-10">
            <p className="text-xs text-neutral-500">
              ※ いただいたご相談内容は厳重に管理し、目的外利用はいたしません。状況により弁護士同席や警察相談のご案内も可能です。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
