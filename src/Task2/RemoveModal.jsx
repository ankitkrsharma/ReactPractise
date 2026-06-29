function RemoveModal({
  product,
  onClose,
  onRemove,
  onWishlist,
}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-5 rounded border">
        <h3 className="font-bold mb-4">
          {product.name}
        </h3>

        <p className="mb-4">
          Quantity: {product.qty}
        </p>

        <div className="flex gap-2">
          <button
            onClick={onWishlist}
            className="bg-yellow-500 text-white px-3 py-1 rounded"
          >
            Move To Wishlist
          </button>

          <button
            onClick={onRemove}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove One
          </button>

          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-3 py-1 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default RemoveModal;