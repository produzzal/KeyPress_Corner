import { RootState } from "@/redux/store";
import StarRating from "@/utils/StarRating";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const selectedProduct = useSelector(
    (state: RootState) => state.product.selectedProduct
  );
  if (!selectedProduct) {
    return <div className="text-center text-gray-500">No products found</div>;
  }
  return (
    <div>
      <div className="md:w-[440px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 transition transform hover:-translate-y-0.5 hover:scale-102 hover:shadow-lg">
        <div>
          <img
            className="rounded-t-lg w-[440px] transition-opacity hover:opacity-90"
            src="https://i.ibb.co/M7sHSSh/corsair-k100-keyboard-Reviewer-Photo-SOURCE-Eric-Ravenscraft.webp"
            alt={selectedProduct.name}
          />
        </div>
        <div className="p-5">
          <div>
            <h5 className="mb-2 text-md md:text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              {selectedProduct.name}
            </h5>
          </div>
          <div>
            <h5 className="mb-2 text-md md:text-lg font-semibold text-gray-700 dark:text-gray-300">
              Brand:{" "}
              <span className="font-normal text-gray-600 dark:text-gray-400">
                {selectedProduct.brand}
              </span>
            </h5>
          </div>
          <div>
            <p className="mb-2 text-md md:text-lg font-semibold text-gray-700 dark:text-gray-300">
              Quantity:{" "}
              <span className="font-normal text-gray-600 dark:text-gray-400">
                {selectedProduct.quantity}
              </span>
            </p>
          </div>
          <div>
            <p className="mb-2 text-md md:text-lg font-semibold text-gray-700 dark:text-gray-300">
              Price:{" "}
              <span className="font-bold text-gray-900 dark:text-white">
                ${selectedProduct.price}
              </span>
            </p>
          </div>
          <StarRating rating={selectedProduct.rating} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
