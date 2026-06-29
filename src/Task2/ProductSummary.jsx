import { useState } from "react";
import { useProductStore } from "./productStore";
import RemoveModal from "./RemoveModal";

function ProductSummary() {
  const cart = useProductStore(
    (state) => state.cart
  );

  const removeFromCart = useProductStore(
    (state) => state.removeFromCart
  );

  const moveToWishlist = useProductStore(
    (state) => state.moveToWishlist
  );

  const total = useProductStore((state) =>
    state.getTotalCost()
  );

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        Product Summary
      </h2>

      <table className="border w-full">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Qty</th>
            <th className="border p-2">Subtotal</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">
                {item.name}
              </td>

              <td className="border p-2">
                ₹ {item.price}
              </td>

              <td className="border p-2">
                {item.qty}
              </td>

              <td className="border p-2">
                ₹ {item.price * item.qty}
              </td>

              <td className="border p-2">
                <button
                  onClick={() =>
                    setSelectedProduct(item)
                  }
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="mt-4 text-lg font-semibold">
        Total Cost : ₹ {total}
      </h3>

      {selectedProduct && (
        <RemoveModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onRemove={() => {
            removeFromCart(selectedProduct.id);
            setSelectedProduct(null);
          }}
          onWishlist={() => {
            moveToWishlist(selectedProduct);
            setSelectedProduct(null);
          }}
        />
      )}
    </div>
  );
}

export default ProductSummary;