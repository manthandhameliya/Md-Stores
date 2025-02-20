const IProduct = {
  id: 0, // Product ka unique identifier
  title: "", // Product ka title ya name
  image: undefined, // Product ki images
  slug: "", // URL-friendly unique identifier for the product
  price: 0, // Product ki price
  category: "", // Product ka category name
  description: "", // Product ka detailed description
  size: [], // Product ke available sizes
  color: [], // Product ke available colors
  qty: 0, // Available quantity of the product
  discount: undefined // Discount on product (optional)
};

// cart data types
const Cart = {
  id: 0, // Product ka unique identifier
  title: "", // Product ka title ya name
  image: undefined, // Product ki images
  slug: "", // URL-friendly unique identifier for the product
  price: 0, // Product ki price
  size: [], // Product ke available sizes
  color: [], // Product ke available colors
  qty: 0, // Available quantity of the product
  discount: undefined, // Discount on product (optional)
  uuid: undefined // Unique identifier for the cart item
};