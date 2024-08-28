const BrandShowcase = () => {
  const brands = [
    {
      id: 1,
      name: "Logitech",
      logoUrl: "https://i.ibb.co/3s7ySzC/download.png",
    },
    {
      id: 2,
      name: "Epomaker",
      logoUrl: "https://i.ibb.co/410p3zv/download.png",
    },
    {
      id: 3,
      name: "Cosair",
      logoUrl: "https://i.ibb.co/YZcLwPh/download.png",
    },
    { id: 4, name: "Razer", logoUrl: "https://i.ibb.co/W2NVW9F/download.png" },
  ];

  return (
    <div className="my-8 ml-1">
      <h2 className="text-2xl md:text-4xl font-bold mb-5 md:mb-12">
        Top Featured Keyboard Brands
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="text-center border border-gray-300 rounded-lg p-4 hover:shadow-lg hover:transform hover:scale-105 transition-transform duration-200 ease-in-out"
          >
            <img
              src={brand.logoUrl}
              alt={brand.name}
              className="mx-auto mb-2 h-16"
            />
            <h3 className="text-lg font-semibold">{brand.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandShowcase;
