import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CustomNextArrow, CustomPrevArrow } from "@/utils/CustomArrow";

const reviews = [
  {
    id: 1,
    name: "Ethan Clark",
    review: "This keyboard has changed my life 💕✌️",
    image: "https://i.ibb.co/xCtq9Gd/download.jpg",
    keyboard: "https://i.ibb.co/t4KDVZ9/download.jpg",
  },
  {
    id: 2,
    name: "Olivia Martinez",
    review: "Amazing build quality and just wow 😍😍",
    image: "https://i.ibb.co/WVWhWHd/download.jpg",
    keyboard: "https://i.ibb.co/VYYptvF/download.jpg",
  },
  {
    id: 3,
    name: "Liam Davis",
    review: "Highly recommend this product, worth every penny 🥰🙂‍",
    image: "https://i.ibb.co/bLXnFPn/download.jpg",
    keyboard: "https://i.ibb.co/4FFFp16/images.jpg",
  },
  {
    id: 4,
    name: "Sophia Johnson",
    review: "The best keyboard I've ever used, perfect for gaming 👌👌",
    image: "https://i.ibb.co/StRKzLh/download.jpg",
    keyboard: "https://i.ibb.co/Chy4f2P/images.jpg",
  },
  {
    id: 5,
    name: "Warner Lee",
    review: "Fantastic service and quality, would buy again 🔥🔥",
    image: "https://i.ibb.co/XJnbFz2/download.jpg",
    keyboard: "https://i.ibb.co/9wT4Y75/images.jpg",
  },
];

const CustomerReview = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="my-20">
      <h2 className="text-2xl md:text-4xl font-bold mb-5 md:mb-12">
        What Our Customers Are Saying
      </h2>
      <div className="mx-auto max-w-2xl p-4 border border-gray-200 bg-white shadow-lg rounded-lg">
        <Slider {...settings}>
          {reviews.map((review) => (
            <div key={review.id} className="text-center p-2">
              <img
                src={review.image}
                className="mx-auto mb-4 rounded-full h-24 w-24 object-cover"
              />

              <h3 className="text-xl font-bold mb-2">{review.name}</h3>
              <img
                src={review.keyboard}
                className="mx-auto mb-4 w-96 h-44 object-cover rounded"
              />
              <p className="text-gray-700">{review.review}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CustomerReview;
