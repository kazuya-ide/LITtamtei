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
    yellowText: "BODY　GUARD",
    whiteText: "要人警護、送迎依頼"
  },
  {
    img: "/アセット 1.png",
    yellowText: "ALARM　MONITARING",
    whiteText: "機械警備"
  },
  {
    img: "/名称未設定-2.png",
    yellowText: "FACILITY SECURITY",
    whiteText: "施設警備"
  },
  {
    img: "/名称未設定-3.png",
    yellowText: "RISK　MANEGEMENT",
    whiteText: "安全統括マネジメント警備"
  },
];

export default function CardGrid() {
  return (
    <div className="w-full px-[10%] py-8">
      {/* グリッドの列数設定を変更！ */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-neutral-900 rounded-2xl shadow-lg overflow-hidden flex flex-col items-center"
          >
            <div className="w-full aspect-square bg-neutral-800 flex items-center justify-center">
              <Image
                src={card.img}
                alt={card.yellowText}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full flex flex-col items-center py-6 px-4">
              <div className="text-yellow-400 text-lg font-bold mb-2">
                {card.yellowText}
              </div>
              <div className="text-white text-base text-center">
                {card.whiteText}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
