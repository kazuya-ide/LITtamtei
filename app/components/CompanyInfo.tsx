import Image from 'next/image';
import Link from 'next/link';

export default function CompanyInformation() {
  return (
    <div className="relative flex flex-col md:flex-row items-stretch w-full overflow-hidden">

      {/* Text Section (変更なし) */}
      <div className="relative w-full md:w-7/12 p-6 md:p-10 bg-yellow-500 order-1">
        {/* Angled cut overlay */}
        <div
          className="absolute top-0 right-0 bottom-0 left-auto w-48 bg-yellow-500 transform skew-x-[-20deg] origin-bottom-right shadow-none hidden md:block"
          style={{ zIndex: 1, right: '0px' }}
        />
        {/* Text Content */}
        <div className="relative" style={{ zIndex: 2 }}>
          {/* ... 省略 ... */}
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-3 md:mb-6">COMPANY</h1>
          <h1 className="text-3xl md:text-5xl font-bold text-black mb-4 md:mb-8">INFORMATION</h1>
          <h2 className="text-lg md:text-xl text-black mb-3 md:mb-4">企業情報</h2>
          <p className="text-sm text-black mb-1 md:mb-2">
            警護、警備においての最重要課題は
          </p>
          <p className="text-sm text-black mb-1 md:mb-2">
            顧客・契約先(クライアント)の安全保障です。
          </p>
          <p className="text-sm text-black mb-1 md:mb-2">
            それを維持管理するには警護に携わるスタッフの資質が大きく影響します。
          </p>
          <p className="text-sm text-black mb-3 md:mb-4">
            合同会社L.SECURITYは、常に「武道」を通し
            護身防衛能力の向上に努めています。
          </p>
          {/* More Button */}
          <div className="mt-6 md:mt-auto w-fit">
            <Link href="/" >
              <div className="group relative border border-black px-6 py-2 inline-block text-black hover:bg-black hover:text-yellow-500 transition-colors duration-300">
                <span className="mr-3">MORE</span>
                {/* ... SVG ... */}
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Image Section */}
      {/* ▼▼▼ md:block を追加してPCで表示させる ▼▼▼ */}
      <div className="hidden md:block md:relative md:w-6/12 md:order-2 bg-white">
      {/* ▲▲▲ ここまで変更 ▲▲▲ */}
        <Image
          src="/L-securiyロゴ_edited.png"
          alt="Security Image"
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

    </div>
  );
}