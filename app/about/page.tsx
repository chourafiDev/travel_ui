import Banner2 from "@/components/elements/Banner-2";
import BottomContact from "@/components/ui/BottomContact";
import Services from "@/components/elements/Services";
import Divider from "@/components/ui/Divider";
import Map from "@/components/elements/Map";

const page = () => {
  return (
    <main>
      <Banner2 />
      <div className="flex justify-center mb-6 pt-16">
        <Divider />
      </div>
      <Services />
      <Map />
      <BottomContact />
    </main>
  );
};

export default page;
