import Header from "../components/Header";
import SectionBanner from "../components/SectionBanner";
import SectionBooks from "../components/SectionBooks";
import SectionWis from "../components/SectionWis";


export default function LandingPage() {
  return (
   <div>
    <>
    <Header />
    <SectionWis />
    <SectionBooks />
    <SectionBanner />
    </>
   </div>

  );
}