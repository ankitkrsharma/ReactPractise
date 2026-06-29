import { useCartStore } from "./cartStore";

function Products() {
  const addProduct = useCartStore(
    (state) => state.addProduct
  );

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
    },
    {
      id: 3,
      name: "Headphone",
      price: 3000,
    },
  ];

  return (
    <>
      <h2>Products</h2>

      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <p>₹{product.price}</p>

          <button
            onClick={() => addProduct(product)}
          >
            Add To Cart
          </button>
        </div>
      ))}
    </>
  );
}

export default Products;