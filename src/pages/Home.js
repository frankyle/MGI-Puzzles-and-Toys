import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-gray-800 space-y-16 pb-10">

      {/* Hero Section */}
      <section className="bg-green-100 py-12 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4">
          Welcome to MGI Smart Play
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Inspiring creativity, learning, and joy through beautifully crafted wooden toys, puzzles, and games.
        </p>
        <img
          src="https://via.placeholder.com/800x300?text=MGI+Smart+Play+Banner"
          alt="MGI Smart Play"
          className="mx-auto my-6 rounded-xl shadow-md w-full max-w-3xl object-cover"
        />
        <Link to="/products">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
            Explore Our Products
          </button>
        </Link>
      </section>

      {/* About Snippet */}
      <section className="max-w-5xl mx-auto px-4 text-center space-y-4">
        <h2 className="text-2xl font-semibold text-green-600">Who We Are</h2>
        <p>
          MGI Smart Play is a local initiative offering eco-friendly educational toys
          that support early childhood learning. Our handmade wooden puzzles and games
          help spark imagination and build essential skills.
        </p>
        <Link to="/about" className="text-green-700 underline hover:text-green-900">
          Learn more about us →
        </Link>
      </section>

      {/* Product Highlights */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center text-green-700 mb-6">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "Alphabet Puzzle",
                img: "https://via.placeholder.com/300x200?text=Alphabet+Puzzle",
              },
              {
                name: "Animal Sorter",
                img: "https://via.placeholder.com/300x200?text=Animal+Sorter",
              },
              {
                name: "Wooden Abacus",
                img: "https://via.placeholder.com/300x200?text=Abacus",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-green-800">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/products">
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-5xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-2xl font-semibold text-green-700">Why Choose MGI Smart Play?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
          <div>
            <h3 className="font-semibold text-green-600">🎓 Educational Focus</h3>
            <p>Each toy is crafted to help children learn letters, numbers, colors, logic, and coordination.</p>
          </div>
          <div>
            <h3 className="font-semibold text-green-600">🌱 Eco-Friendly Materials</h3>
            <p>Our products are made from natural wood and painted with non-toxic finishes.</p>
          </div>
          <div>
            <h3 className="font-semibold text-green-600">🧠 Creativity & Play</h3>
            <p>We believe kids learn best through hands-on play that’s also fun and imaginative.</p>
          </div>
          <div>
            <h3 className="font-semibold text-green-600">🤝 Locally Handcrafted</h3>
            <p>We proudly produce locally and support small-scale artisans and educators.</p>
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="bg-green-600 text-white text-center py-10 px-4 rounded-lg shadow-inner">
        <h2 className="text-2xl font-bold mb-2">Come Visit Our Store</h2>
        <p className="max-w-xl mx-auto">
          Experience the joy of Smart Play in person! Our friendly team is ready to welcome you
          and help you explore our full range of products.
        </p>
        <Link to="/contact">
          <button className="mt-4 bg-white text-green-700 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100">
            Get Directions
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
