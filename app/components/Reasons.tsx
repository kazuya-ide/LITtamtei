// app/components/Reasons.tsx
import { FaYenSign, FaFileAlt, FaEnvelope, FaBalanceScale, FaHeart, FaBullhorn } from "react-icons/fa";

const reasons = [
  {
    id: 1,
    title: "低料金設定 & 完全成功報酬",
    desc: "だから安心してご依頼いただけます。徹底した料金管理と完全成功報酬制により、無駄のないご提案を行っています。",
    icon: <FaYenSign className="w-10 h-10 text-emerald-700" />,
  },
  {
    id: 2,
    title: "圧倒的なスピード感と調査力",
    desc: "全国どこでも対応可能。正確かつ迅速な調査で、お客様のご要望に応えます。調査後のフォローも万全です。",
    icon: <FaFileAlt className="w-10 h-10 text-emerald-700" />,
  },
  {
    id: 3,
    title: "相談員に会わずに簡単依頼",
    desc: "新しいシステムでオンライン相談が可能。来社不要でご依頼いただけるため、気軽にご利用いただけます。",
    icon: <FaEnvelope className="w-10 h-10 text-emerald-700" />,
  },
  {
    id: 4,
    title: "弁護士との連携で安心",
    desc: "専門弁護士と連携し、法的に有効な証拠収集をサポート。安心感のある体制でご依頼にお応えします。",
    icon: <FaBalanceScale className="w-10 h-10 text-emerald-700" />,
  },
  {
    id: 5,
    title: "調査終了後のサポートも充実",
    desc: "心理的なケアや今後の生活設計に向けたアドバイスまで。調査後もお客様を支え続けます。",
    icon: <FaHeart className="w-10 h-10 text-emerald-700" />,
  },
  {
    id: 6,
    title: "調査にかける熱意が違う",
    desc: "お客様一人ひとりに真摯に向き合い、徹底した調査を実施。熱意と誠実さが私たちの強みです。",
    icon: <FaBullhorn className="w-10 h-10 text-emerald-700" />,
  },
];

export default function Reasons() {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* 見出し */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-emerald-900 mb-4">
          L secret serviceが選ばれる理由
        </h2>
        <p className="text-gray-600 mb-10">
          私たちは料金の透明性、スピード感、アフターサポートまで、安心してご依頼いただける体制を整えています。
        </p>

        {/* 理由リスト */}
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((r) => (
            <div key={r.id} className="flex gap-6 items-start">
              <div className="flex-shrink-0 bg-emerald-50 p-4 rounded-full shadow">
                {r.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-emerald-800 mb-2">
                  {r.title}
                </h3>
                <p className="text-sm text-gray-700">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
