import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(https://i.ibb.co/Gcm6g3F/Header.jpg)" }}
      ></div>
      <div className="z-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Unlock Excellence in Every Keystroke
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Discover the best keyboards for every need
        </p>
        <div className="flex flex-row items-center justify-center gap-4">
          <Link
            to="/products"
            className="mt-4 text-black bg-[#BBBAF8] px-6 py-2 rounded transition-colors hover:bg-[#9c9af6]"
          >
            Shop Now
          </Link>
          <Link
            to="/about"
            className="mt-4 text-black bg-[#BBBAF8] px-6 py-2 rounded transition-colors hover:bg-[#9c9af6]"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
