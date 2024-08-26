import { TProduct } from "@/types/Product";
import StarRating from "@/utils/StarRating";

const ProductCard = ({ product }: { product: TProduct }) => {
  return (
    <div className="md:w-[440px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition transform hover:-translate-y-0.5 hover:scale-102 hover:shadow-lg">
      <div>
        <img
          className="rounded-t-lg w-[440px] transition-opacity hover:opacity-90"
          src="https://i.ibb.co/M7sHSSh/corsair-k100-keyboard-Reviewer-Photo-SOURCE-Eric-Ravenscraft.webp"
          alt={product.name}
        />
      </div>
      <div className="p-5">
        <div>
          <h5 className="mb-2 text-md md:text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
        </div>
        <div>
          <h5 className="mb-2 text-md md:text-lg font-semibold text-gray-700 dark:text-gray-300">
            Brand:{" "}
            <span className="font-normal text-gray-600 dark:text-gray-400">
              {product.brand}
            </span>
          </h5>
        </div>
        <div>
          <p className="mb-2 text-md md:text-lg font-semibold text-gray-700 dark:text-gray-300">
            Quantity:{" "}
            <span className="font-normal text-gray-600 dark:text-gray-400">
              {product.quantity}
            </span>
          </p>
        </div>
        <div>
          <p className="mb-2 text-md md:text-lg font-semibold text-gray-700 dark:text-gray-300">
            Price:{" "}
            <span className="font-bold text-gray-900 dark:text-white">
              ${product.price}
            </span>
          </p>
        </div>
        <StarRating rating={product.rating} />
        <button className="mt-4 bg-[#BBBAF8] px-6 py-2 rounded transition-colors hover:bg-[#9c9af6]">
          See Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
