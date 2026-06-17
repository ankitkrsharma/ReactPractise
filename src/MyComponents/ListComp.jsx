function ListComp() {
  const products = [
    { id: 1, name: "Laptop", price: 50000, inStock: true },
    { id: 2, name: "Mobile", price: 20000, inStock: false },
    { id: 3, name: "Headphones", price: 3000, inStock: true },
  ];

  return (
    <>
      <h2>Product List</h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
            width: "250px",
          }}
        >
          <h3>{product.name}</h3>
          <p>Product ID: {product.id}</p>
          <p>Price: ₹{product.price}</p>

          {product.inStock ? (
            <button>Add to Cart</button>
          ) : (
            <p style={{ color: "red" }}>Out of Stock</p>
          )}
        </div>
      ))}
    </>
  );
}

export default ListComp;