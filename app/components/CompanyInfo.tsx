import Image from 'next/image';
import Link from 'next/link';

export default function CompanyInformation() {
  return (
    <section className="flex flex-col md:flex-row w-full bg-[#ededed]">
      {/* テキスト */}
      <div className="flex-1 flex flex-col justify-center px-8 py-10 bg-[#ededed]">
        <span className="text-xs font-bold uppercase text-[#bbb] tracking-widest mb-2">
          COMPANY INFORMATION
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#232323] mb-3">
          グループについて
        </h2>
        <p className="text-lg text-[#666] mb-5">
          LITグループは多様な分野のプロフェッショナルが集い、地域社会の未来を支えます。
        </p>
        <ul className="mb-8 space-y-2">
          <li className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-[#bbb] mr-3"></span>
            <span className="font-semibold text-[#232323]">
              建設・不動産（北海工務店）
            </span>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-[#bbb] mr-3"></span>
            <span className="font-semibold text-[#232323]">
              食・飲食サービス（味扉）
            </span>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-[#bbb] mr-3"></span>
            <span className="font-semibold text-[#232323]">
              IT・セキュリティ（L.SECURITY）
            </span>
          </li>
        </ul>
        <Link
          href="/group-companies"
          className="inline-block px-7 py-2 rounded-full bg-[#ededed] text-[#232323] font-bold hover:bg-[#232323] hover:text-white transition"
        >
          OUR GROUP COMPANIES
        </Link>
      </div>
      {/* イメージ */}
      <div className="flex-1 relative min-h-[320px] hidden md:block bg-[#ededed]">
        <Image
          src="/ビジネス握手.jpg"
          alt="Group Overview"
          fill
          style={{
            objectFit: 'cover',
            borderRadius: "1.5rem",
            filter: "grayscale(1)",
            backgroundColor: "#ededed",
          }}
        />
      </div>
    </section>
  );
}
