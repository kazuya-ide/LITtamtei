"use client";
import { Shield, Users, ActivitySquare, Building2, Monitor, AlertTriangle } from "lucide-react";

const services = [
  {
    key: "traffic",
    title: "TRAFIC GUARDS",
    sub: "交通誘導",
    icon: () => <ActivitySquare className="text-yellow-400" size={36} />,
    desc: (
      <>
        道路工事・建設現場・イベント・駐車場などで車両や歩行者を安全に誘導します。<br />
        経験豊富な警備員が事故やトラブルを未然に防止し、地域社会の安心を守ります。
      </>
    ),
    bullet: [
      "通学路・市街地・夜間も実績豊富",
      "現場ごとに柔軟な人員配置",
    ]
  },
  {
    key: "event",
    title: "EVENT SECURITY",
    sub: "イベント警備",
    icon: () => <Users className="text-yellow-400" size={36} />,
    desc: (
      <>
        コンサート・祭り・スポーツ大会などの大規模イベントで警備・雑踏整理を担当。<br />
        人流管理や不審者対応、安全・快適な運営をサポートします。
      </>
    ),
    bullet: [
      "会場内外の巡回",
      "入退場管理、案内誘導",
    ]
  },
  {
    key: "bodyguard",
    title: "BODY GUARD",
    sub: "要人警護／送迎依頼",
    icon: () => <Shield className="text-yellow-400" size={36} />,
    desc: (
      <>
        政財界・著名人などの身辺警護や送迎。<br />
        リスク対策、安全・プライバシーに最大限配慮します。
      </>
    ),
    bullet: [
      "目立ちすぎない警護",
      "送迎・ホテル等幅広く対応",
    ]
  },
  {
    key: "alarm",
    title: "ALARM MONITORING",
    sub: "機械警備",
    icon: () => <Monitor className="text-yellow-400" size={36} />,
    desc: (
      <>
        最新の警報・監視システムで24時間遠隔監視。<br />
        異常時は即現場急行、被害最小化・迅速対応。
      </>
    ),
    bullet: [
      "防犯カメラ・センサー提案",
      "火災・水漏れ等マルチ監視",
    ]
  },
  {
    key: "facility",
    title: "FACILITY SECURITY",
    sub: "施設警備",
    icon: () => <Building2 className="text-yellow-400" size={36} />,
    desc: (
      <>
        オフィスビル・商業施設・学校・病院などで出入管理や巡回・緊急時対応。<br />
        利用者の安心と資産保護、円滑な運営をサポートします。
      </>
    ),
    bullet: [
      "24h常駐や深夜のみ可",
      "災害・防災訓練も対応",
    ]
  },
  {
    key: "risk",
    title: "RISK MANAGEMENT",
    sub: "安全統括マネジメント警備",
    icon: () => <AlertTriangle className="text-yellow-400" size={36} />,
    desc: (
      <>
        災害・事故・犯罪・テロ等のリスク対応。<br />
        危機管理計画・訓練・コンサルで強い組織を支援します。
      </>
    ),
    bullet: [
      "BCP（事業継続計画）策定支援",
      "リスクアセスメント実施",
    ]
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-neutral-950 py-16 px-4">
      {/* ヒーロー・リード文 */}
      <section className="max-w-6xl mx-auto mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tighter drop-shadow-md">
          事業情報
        </h1>
        <div className="inline-block bg-slate-700/40 rounded-full px-4 py-1 mb-3">
          <span className="text-xs text-gray-200 tracking-wide">警備・リスク管理の多様な領域に対応</span>
        </div>
        <p className="text-base md:text-lg text-gray-200 mb-4">
          L securityは多彩な警備・セキュリティ領域を網羅。<br className="hidden md:inline" />
          地域社会・法人・個人の安全・安心を全力で守ります。
        </p>
        <hr className="border-slate-700 border-t-2 w-16 mx-auto my-7" />
      </section>

      {/* サービスカード */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.key}
            className="
              bg-gradient-to-br from-neutral-950 via-neutral-900 to-slate-900 
              rounded-2xl shadow-lg p-8 flex flex-col items-center gap-4
              border border-slate-700 hover:border-yellow-300 
              hover:scale-105 hover:shadow-yellow-300/10 transition-all
              group"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-slate-800 border border-slate-700 mb-2">
              {service.icon()}
            </div>
            <div className="text-yellow-300 text-base font-bold tracking-wider">
              {service.title}
            </div>
            <div className="text-white/80 text-xs mb-1">{service.sub}</div>
            <div className="flex-1 text-white text-sm leading-relaxed text-center mb-1">
              {service.desc}
            </div>
            <ul className="list-disc list-inside text-slate-300 text-xs text-left font-semibold pl-3 space-y-0.5">
              {service.bullet && service.bullet.map((b, idx) => (
                <li key={idx}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* お問い合わせ案内 */}
      <section className="max-w-3xl mx-auto mt-20 text-center">
        <h2 className="text-xl font-bold text-white mb-4">ご相談・お問い合わせ</h2>
        <p className="text-slate-200 mb-6">
          警備や危機管理について、<br />
          まずはお気軽にご相談ください。
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-yellow-400 text-black font-extrabold text-base rounded-full shadow hover:bg-yellow-300 transition"
        >
          お問い合わせページへ
        </a>
      </section>
    </div>
  );
}
