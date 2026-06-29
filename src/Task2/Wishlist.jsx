import { useProductStore } from "./productStore";

function Wishlist() {
  const wishlist = useProductStore(
    (state) => state.wishlist
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">
        Wishlist
      </h2>

      <table className="border w-full">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Price</th>
          </tr>
        </thead>

        <tbody>
          {wishlist.map((item) => (
            <tr key={item.id}>
              <td className="border p-2">
                {item.name}
              </td>

              <td className="border p-2">
                ₹ {item.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Wishlist;