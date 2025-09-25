// app/components/FooterWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer/Footer";
import TanteiFooter from "./TanteiFooter";

export default function FooterWrapper() {
  const pathname = usePathname();
  const isTantei = pathname.startsWith("/tantei");

  return isTantei ? <TanteiFooter /> : <Footer />;
}
