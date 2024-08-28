import FeaturedProduct from "@/components/FeaturedProduct";
import Header from "@/components/Header";
import Service from "@/components/Service";
import BrandShowcase from "@/components/ui/BrandShow";
import CustomerReview from "@/components/ui/CustomerReview";

const Home = () => {
  return (
    <div className="mx-2">
      <Header />
      <Service />
      <FeaturedProduct />
      <BrandShowcase />
      <CustomerReview />
    </div>
  );
};

export default Home;
