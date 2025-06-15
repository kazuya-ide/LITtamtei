"use client";
import { Shield, Users, ActivitySquare, Building2, Monitor, AlertTriangle } from "lucide-react";

// サービス定義（iconは関数として記述）
const services = [
  {
    key: "traffic",
    title: "TRAFIC GUARDS",
    sub: "交通誘導",
    icon: () => <ActivitySquare className="text-yellow-400" size={36} />,
    desc: (
      <>
        道路工事・建設現場・イベント会場・駐車場などで車両や歩行者の安全な誘導を行います。<br />
        豊富な経験と確かな知識を持つスタッフが事故やトラブルを未然に防止し、地域社会の安全を守ります。
      </>
    ),
  },
  {
    key: "event",
    title: "EVENT SECURITY",
    sub: "イベント警備",
    icon: () => <Users className="text-yellow-400" size={36} />,
    desc: (
      <>
        コンサート・祭り・スポーツ大会などの大規模イベント会場での警備・雑踏整理を担当。<br />
        人流管理や不審者対応、会場内の巡回などで安全・安心なイベント運営をサポートします。
      </>
    ),
  },
  {
    key: "bodyguard",
    title: "BODY GUARD",
    sub: "要人警護／送迎依頼",
    icon: () => <Shield className="text-yellow-400" size={36} />,
    desc: (
      <>
        政財界・著名人・経営者などの身辺警護や送迎を経験豊富なスタッフが実施。<br />
        あらゆるリスクを想定し、安全・プライバシー・時間厳守に最大限配慮します。
      </>
    ),
  },
  {
    key: "alarm",
    title: "ALARM MONITORING",
    sub: "機械警備",
    icon: () => <Monitor className="text-yellow-400" size={36} />,
    desc: (
      <>
        最新の警報装置・監視システムを用い、24時間365日体制で施設・店舗・住居を遠隔監視。<br />
        異常時は即座に現場へ急行し、被害の最小化と迅速な対応を実現します。
      </>
    ),
  },
  {
    key: "facility",
    title: "FACILITY SECURITY",
    sub: "施設警備",
    icon: () => <Building2 className="text-yellow-400" size={36} />,
    desc: (
      <>
        オフィスビル・商業施設・学校・病院等の出入管理や巡回業務、開閉館・緊急時対応まで。<br />
        利用者の安心と資産保護、円滑な施設運営に貢献します。
      </>
    ),
  },
  {
    key: "risk",
    title: "RISK MANAGEMENT",
    sub: "安全統括マネジメント警備",
    icon: () => <AlertTriangle className="text-yellow-400" size={36} />,
    desc: (
      <>
        災害・事故・犯罪・テロ等のあらゆるリスクに対応。<br />
        危機管理計画の立案、現場調査、訓練、コンサルティングを含め、組織や施設の総合的なセキュリティ強化をサポートします。
      </>
    ),
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-neutral-900 py-16 px-4">
      <section className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-2 tracking-tighter drop-shadow-lg">
          事業情報
        </h1>
        <div className="inline-block bg-yellow-400/20 rounded-full px-4 py-1 mb-2">
          <span className="text-sm text-yellow-300 font-semibold">幅広い警備・リスク対応</span>
        </div>
        <p className="text-lg text-gray-200 mb-4">
          L securityでは幅広い警備・セキュリティサービスを提供し、<br className="hidden md:inline" />
          地域社会とお客様の安全・安心を全力で守ります。
        </p>
        <hr className="border-yellow-400 border-t-2 w-24 mx-auto my-8" />
      </section>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div
            key={service.key}
            className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl shadow-lg p-8 flex flex-col items-center gap-5 hover:scale-[1.03] hover:shadow-2xl transition-transform group"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-full bg-neutral-900 border-2 border-yellow-400 shadow-lg group-hover:bg-yellow-400 group-hover:text-neutral-900 transition">
              {service.icon()}
            </div>
            <div className="text-yellow-400 text-lg font-bold tracking-wider mt-2">{service.title}</div>
            <div className="text-gray-400 text-sm mb-2 border-b border-yellow-700 pb-1">{service.sub}</div>
            <div className="flex-1 text-gray-100 text-base leading-relaxed text-center">
              {service.desc}
            </div>
          </div>
        ))}
      </div>

      <section className="max-w-3xl mx-auto mt-20 text-center">
        <h2 className="text-2xl font-bold text-yellow-400 mb-4">ご相談・お問い合わせ</h2>
        <p className="text-gray-200 mb-6">
          各種警備やセキュリティ強化、危機管理のご相談はお気軽にお問い合わせください。
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-yellow-500 text-black font-bold rounded-full shadow hover:bg-yellow-600 transition"
        >
          お問い合わせページへ
        </a>
      </section>
    </div>
  );
}
