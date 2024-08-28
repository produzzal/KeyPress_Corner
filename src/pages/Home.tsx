import FeaturedProduct from "@/components/FeaturedProduct";
import Header from "@/components/Header";
import Service from "@/components/Service";
import BrandShowcase from "@/components/ui/BrandShow";

const Home = () => {
  return (
    <div className="mx-2">
      <Header />
      <Service />
      <FeaturedProduct />
      <BrandShowcase />
    </div>
  );
};

export default Home;
