import FeaturedProduct from "@/components/FeaturedProduct";
import Header from "@/components/Header";
import Service from "@/components/Service";
import BrandShowcase from "@/components/ui/BrandShow";
import CustomerReview from "@/components/ui/CustomerReview";
import CustomizeOptions from "@/components/ui/CustomizeOptions";
import MechanicalKey from "@/components/ui/MechanicalKey";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="mx-2">
        <Service />
        <FeaturedProduct />
        <BrandShowcase />
        <CustomerReview />
        <MechanicalKey />
        <CustomizeOptions />
      </div>
    </div>
  );
};

export default Home;
