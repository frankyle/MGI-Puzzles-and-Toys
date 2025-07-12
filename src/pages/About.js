import React from 'react';
import {
  FaGraduationCap,
  FaShieldAlt,
  FaLeaf,
  FaLightbulb,
  FaUsers,
  FaMapMarkerAlt
} from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      <main className="max-w-6xl mx-auto px-4 py-10 space-y-12">
        {/* Hero Section */}
        <section className="relative text-center">
          <h1 className="text-4xl font-bold text-green-700 mb-4">About Us</h1>
          <div className="relative h-60 bg-green-100 rounded-xl flex items-center justify-center">
            <div className="flex flex-col items-center z-10">
              <FaMapMarkerAlt className="text-green-700 text-4xl mb-2" />
              <span className="text-lg font-medium text-green-800">Tanzania</span>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Our Story</h2>
          <p className="text-gray-700 leading-relaxed">
            MGI Smart Play was founded with a vision to support children's learning through hands-on,
            meaningful play. We saw a gap in the market for educational toys that are not only fun and
            safe, but also made with love and sustainability in mind. From humble beginnings in our
            local workshop, we've grown into a brand trusted by parents, teachers, and caregivers across Tanzania.
          </p>
        </section>

        {/* Our Mission */}
        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            To inspire curiosity, creativity, and lifelong learning in children through high-quality,
            handcrafted educational toys. We believe that smart play leads to smart minds.
          </p>
        </section>

        {/* Our Vision */}
        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">Our Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            To become Africa’s leading brand in educational play by creating safe, sustainable, and
            locally made wooden toys that empower every child to explore their potential through learning and joy.
          </p>
        </section>

        {/* Core Values */}
        <section>
          <h2 className="text-2xl font-semibold text-green-700 mb-6">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center bg-green-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <FaGraduationCap className="text-3xl text-green-600 mb-2" />
              <h3 className="font-semibold text-lg mb-1">Education</h3>
              <p className="text-sm text-gray-600">
                Every product we make is designed to teach something meaningful.
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-green-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <FaShieldAlt className="text-3xl text-green-600 mb-2" />
              <h3 className="font-semibold text-lg mb-1">Safety</h3>
              <p className="text-sm text-gray-600">
                We use child-safe materials, rounded edges, and non-toxic paints.
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-green-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <FaLeaf className="text-3xl text-green-600 mb-2" />
              <h3 className="font-semibold text-lg mb-1">Sustainability</h3>
              <p className="text-sm text-gray-600">
                Wooden materials and eco-conscious practices are at our core.
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-green-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <FaLightbulb className="text-3xl text-green-600 mb-2" />
              <h3 className="font-semibold text-lg mb-1">Creativity</h3>
              <p className="text-sm text-gray-600">
                We foster open-ended play that builds imagination and problem-solving.
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-green-50 p-6 rounded-lg shadow hover:shadow-md transition">
              <FaUsers className="text-3xl text-green-600 mb-2" />
              <h3 className="font-semibold text-lg mb-1">Community</h3>
              <p className="text-sm text-gray-600">
                We support local talent and partner with schools and parents.
              </p>
            </div>
          </div>
        </section>

        {/* Come Visit Us */}
        <section className="bg-green-100 p-6 rounded-xl text-center shadow-md">
          <h2 className="text-xl font-bold text-green-800 mb-2">Come See for Yourself</h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            Visit our store in Mikocheni B, Dar es Salaam to explore our full range of toys and talk to our passionate team.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
