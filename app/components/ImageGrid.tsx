import Image from "next/image";

const cards = [
  {
    img: "/asset4_150x150.svg",
    yellowText: "TRAFIC GUARDS",
    whiteText: "交通誘導"
  },
  {
    img: "/asset6_150x150.svg",
    yellowText: "EVENT SECURITY",
    whiteText: "イベント警備"
  },
  {
    img: "/asset3_150x150.svg",
    yellowText: "BODY GUARD",
    whiteText: "要人警護、送迎依頼"
  },
  {
    img: "/アセット 1.png",
    yellowText: "ALARM MONITORING",
    whiteText: "機械警備"
  },
  {
    img: "/名称未設定-2.png",
    yellowText: "FACILITY SECURITY",
    whiteText: "施設警備"
  },
  {
    img: "/名称未設定-3.png",
    yellowText: "RISK MANAGEMENT",
    whiteText: "安全統括マネジメント警備"
  },
];

export default function CardGrid() {
  return (
    <div className="w-full px-[10%] py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="
              rounded-2xl
              shadow-xl
              overflow-hidden
              flex flex-col items-center
              bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950
              border border-yellow-100/10
              transition-all duration-200
              hover:scale-[1.03] hover:shadow-yellow-400/10
              group
              "
          >
            {/* 画像エリアはそのまま比率を維持 */}
            <div className="w-full aspect-square bg-neutral-800 flex items-center justify-center border-b-2 border-yellow-400/20 group-hover:border-yellow-400/40 transition">
              <Image
                src={card.img}
                alt={card.yellowText}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            {/* テキストエリアに装飾のみ追加 */}
            <div className="w-full flex flex-col items-center py-6 px-4 bg-neutral-900/70 backdrop-blur-md">
              <div className="text-lg font-bold mb-2 bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 text-transparent bg-clip-text drop-shadow-[0_0_10px_#fde04755] tracking-wide">
                {card.yellowText}
              </div>
              <div className="text-gray-100 text-base text-center drop-shadow-sm">
                {card.whiteText}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
