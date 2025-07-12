import React from "react";
import { Link } from "react-router-dom";
import BannerImage from '../images/hero/smartplay1.png';


import AlphabetPuzzleImg from '../images/products/Alphabet_Puzzle.jpg';
import AnimalSorterImg from '../images/products/DIY Montessori Toys.jpg';
import WoodenAbacusImg from '../images/products/Abacus1.jpg';


const Home = () => {
  return (
    <div className="text-gray-800 space-y-16 pb-10">

      {/* Hero Section */}
       <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-24 px-4"
      style={{
        backgroundImage: `url(${BannerImage})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-20 h-full">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
          Discover Smart Play for Brighter Minds
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mb-6">
          High-quality, eco-friendly wooden toys, puzzles & games crafted to spark creativity, learning, and joy — trusted by families & educators across Tanzania.
        </p>
        <Link to="/products">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg rounded-lg transition shadow-lg">
            Browse Our Collection
          </button>
        </Link>
      </div>
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
<section className="bg-gray-100 py-14 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-green-700 mb-10">
      Featured Wooden Toys
    </h2>

    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      {[
        {
          name: "Alphabet Puzzle",
          description: "Helps children recognize letters, spell words, and build literacy skills.",
          img: AlphabetPuzzleImg,
        },
        {
          name: "Animal Sorter",
          description: "Encourages shape recognition, motor skills, and animal matching.",
          img: AnimalSorterImg,
        },
        {
          name: "Wooden Abacus",
          description: "Classic counting tool that teaches math through play and color.",
          img: WoodenAbacusImg,
        },
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold text-green-800 mb-2">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-10">
      <Link to="/products">
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-base rounded-lg transition shadow">
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
