import HeroFullscreen from "../components/HeroFullscreen";

import InfidelityCasePricing from "../components/InfidelityCasePricing";
import TestimonialsAccordion from "@/app/components/TestimonialsAccordion";
import AboutDetective from "../components/AboutDetective";
import ServiceCards from "../components/ServiceCards";
import Reasons from "../components/Reasons";
import ConsultNow from "../components/ConsultNow";
export default function Page() {
  return (
    <>
      <HeroFullscreen />
      <AboutDetective/>
            <Reasons/>
      <ServiceCards/>
      <TestimonialsAccordion/>


<InfidelityCasePricing/>
<ConsultNow/>
    </>
  );
}
