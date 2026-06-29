import { useProductStore } from "./productStore";
import { products } from "./products";

function ProductList() {
  const addToCart = useProductStore(
    (state) => state.addToCart
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        Product List
      </h2>

      {products.map((product) => (
        <div
          key={product.id}
          className="border p-4 mb-3 rounded"
        >
          <h3 className="font-semibold">
            {product.name}
          </h3>

          <p className="my-2">
            ₹ {product.price}
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;