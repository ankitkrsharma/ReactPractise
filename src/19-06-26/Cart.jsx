import { useCartStore } from "./cartStore";

function Cart() {
  const cart = useCartStore(
    (state) => state.cart
  );

  const removeProduct = useCartStore(
    (state) => state.removeProduct
  );

  const totalCost = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <>
      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          {item.name} - ₹{item.price}

          <button
            onClick={() =>
              removeProduct(item.id)
            }
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{totalCost}</h3>
    </>
  );
}

export default Cart;