import React from "react";

const products = [
  {
    id: 1,
    name: "Alphabet Puzzle Board",
    description: "Helps children learn letters, colors, and hand-eye coordination.",
    image: "https://via.placeholder.com/300x200?text=Alphabet+Puzzle",
  },
  {
    id: 2,
    name: "Animal Shape Sorter",
    description: "Fun shape-matching game that builds fine motor skills.",
    image: "https://via.placeholder.com/300x200?text=Animal+Sorter",
  },
  {
    id: 3,
    name: "Counting Beads Abacus",
    description: "Classic wooden abacus for basic counting and color recognition.",
    image: "https://via.placeholder.com/300x200?text=Abacus",
  },
  {
    id: 4,
    name: "Tic Tac Toe Game",
    description: "A fun and simple strategy game for two players.",
    image: "https://via.placeholder.com/300x200?text=Tic+Tac+Toe",
  },
  {
    id: 5,
    name: "Number Puzzle Board",
    description: "Teaches number sequencing and early math concepts.",
    image: "https://via.placeholder.com/300x200?text=Number+Puzzle",
  },
  {
    id: 6,
    name: "Wooden Clock Toy",
    description: "Interactive way for children to learn how to tell time.",
    image: "https://via.placeholder.com/300x200?text=Clock+Toy",
  },
];

const Products = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 text-gray-800">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
        Explore Our Smart Play Products
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        All our toys are designed to encourage learning through play. Crafted with care,
        each product is made from safe, sustainable materials and built to inspire.
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-800">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="text-center mt-12">
        <p className="text-lg font-semibold text-gray-700">
          Want to see them in action?
        </p>
        <p className="text-green-600">
          Visit our shop in Mikocheni B, Dar es Salaam to explore more!
        </p>
      </div>
    </div>
  );
};

export default Products;
