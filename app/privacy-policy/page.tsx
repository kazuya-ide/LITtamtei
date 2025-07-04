"use client";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-neutral-950 min-h-screen py-14 px-3">
      <div className="max-w-3xl mx-auto bg-neutral-900/90 rounded-2xl shadow-2xl px-6 md:px-10 py-12 border border-slate-700">
        <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-8 text-center drop-shadow tracking-tight">
          プライバシーポリシー
        </h1>
        <div className="text-gray-100 text-base md:text-lg leading-relaxed space-y-9">
          <section>
            <p>
              合同会社LIT（以下「当社」といいます）は、警備サービス事業における個人情報保護の重要性を認識し、個人情報保護に関する法令等を遵守し、以下の方針に基づきお客様および従業員の個人情報を適切に取り扱い、保護に努めます。
            </p>
          </section>

          {[
            { h: "1. 個人情報の取得について", t: "警備契約の締結・履行・お問い合わせ・求人応募等の際に、適法かつ公正な手段により個人情報を取得します。" },
            {
              h: "2. 個人情報の利用目的",
              t: (
                <ul className="list-disc list-inside pl-4 space-y-1 text-yellow-100">
                  <li>警備業務の受託・提供および履行管理</li>
                  <li>お問い合わせやご相談への対応</li>
                  <li>警備員採用選考および雇用管理</li>
                  <li>お客様へのご連絡、各種ご案内や資料送付</li>
                  <li>契約や法律に基づく手続きおよび履行</li>
                  <li>その他、ご本人の同意を得た目的での利用</li>
                </ul>
              )
            },
            { h: "3. 個人情報の第三者提供", t: "ご本人の同意がある場合、法令に基づく場合、または人命・身体・財産の保護のために緊急を要する場合を除き、個人情報を第三者に提供することはありません。" },
            { h: "4. 個人情報の管理", t: "取得した個人情報を正確かつ最新の内容に保つよう努め、不正アクセス・紛失・漏洩・改ざん・破壊等のリスクから守るため、適切な安全管理措置を講じます。" },
            { h: "5. 個人情報の開示・訂正・利用停止等", t: "ご本人または代理人から、個人情報の開示・訂正・追加・削除・利用停止・消去・第三者提供の停止等を求められた場合、法令に従い、適切かつ速やかに対応いたします。" },
            { h: "6. 委託先の管理", t: "業務委託により個人情報の取り扱いを外部委託する場合は、適切な委託先を選定し、契約等により個人情報の適正な管理を義務付けます。" },
            { h: "7. 法令・規範の遵守と見直し", t: "個人情報に関する法令・規範を遵守するとともに、社会情勢や技術の変化等に応じて、本ポリシーを適宜見直し、改善に努めます。" },
            { h: "8. Cookie（クッキー）の利用について", t: "サービス向上・利便性向上・サイトの利用状況分析のためCookie（クッキー）を利用することがあります。Cookieによって取得される情報には、個人を特定できる情報は含まれません。ご利用者様はブラウザの設定によりCookieの受け入れを拒否することも可能ですが、一部機能が正しくご利用いただけなくなる場合があります。" },
            {
              h: "9. アクセス解析ツールについて", t: (
                <>
                  当社WEBサイトでは、Google Analytics等のアクセス解析ツールを利用しています。これらツールはトラフィックデータの収集のためにCookieを使用することがあり、収集されるデータは匿名であり、個人を特定するものではありません。詳細はGoogle社のプライバシーポリシーをご参照ください。
                  <br />
                  <a href="https://policies.google.com/privacy?hl=ja" target="_blank" rel="noopener noreferrer" className="underline text-yellow-400">Google プライバシーポリシー</a>
                </>
              )
            },
            { h: "10. SNS等の外部サービスについて", t: "Instagram、X（旧Twitter）、LINE公式アカウント等のSNSサービスの埋め込みやシェアボタンを設置しています。これらのサービスをご利用の場合、各サービス運営会社がCookie等を通じてユーザー情報を取得する場合があります。取得された情報の取扱いについては、各SNSのプライバシーポリシー等をご確認ください。" },
            {
              h: "11. Google reCAPTCHAの利用について", t: (
                <>
                  セキュリティ向上やスパム防止のためにGoogle reCAPTCHAを利用しています。reCAPTCHAによって取得される情報は、Googleのプライバシーポリシーおよび利用規約に基づき利用されます。
                  <br />
                  <a href="https://policies.google.com/privacy?hl=ja" target="_blank" rel="noopener noreferrer" className="underline text-yellow-400">Google プライバシーポリシー</a><br />
                  <a href="https://policies.google.com/terms?hl=ja" target="_blank" rel="noopener noreferrer" className="underline text-yellow-400">Google 利用規約</a>
                </>
              )
            }
          ].map(({ h, t }) => (
            <section key={h}>
              <h2 className="text-xl md:text-2xl font-bold text-yellow-300 mb-2 border-l-4 border-yellow-400 pl-3">{h}</h2>
              <div>{t}</div>
            </section>
          ))}

          <section>
            <h2 className="text-xl md:text-2xl font-bold text-yellow-300 mb-2 border-l-4 border-yellow-400 pl-3">12. お問い合わせ窓口</h2>
            <p>個人情報の取扱いに関するご相談・お問い合わせ・開示請求等は、下記窓口までご連絡ください。</p>
            <div className="bg-neutral-800 border border-yellow-300/30 rounded-lg px-6 py-5 mt-3 text-sm text-gray-200">
              合同会社LIT（L security）<br />
              〒063-0061 北海道札幌市西区西町北１４丁目１−１５ ホクシンビル３F<br />
              TEL：<a href="tel:0112156432" className="underline text-yellow-300 ml-1">011-215-6432</a><br />
              E-mail：<a href="mailto:info@llc-lit.com" className="underline text-yellow-300 ml-1">info@llc-lit.com</a>
            </div>
          </section>
        </div>
        <div className="mt-10 text-xs text-gray-400 text-right">
          制定日：2024年6月18日<br />
          合同会社LIT　代表社員　堀内 勝
        </div>
      </div>
    </div>
  );
}
