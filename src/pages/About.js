import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 text-gray-800 space-y-12">

      {/* Page Heading */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-2">About MGI Smart Play</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Building minds through play — one puzzle, game, and toy at a time.
        </p>
      </div>

      {/* Our Story */}
      <section>
        <h3 className="text-2xl font-semibold text-green-600 mb-2">Our Story</h3>
        <p className="text-gray-700">
          MGI Smart Play was founded with a vision to support children's learning through hands-on,
          meaningful play. We saw a gap in the market for educational toys that are not only fun and
          safe, but also made with love and sustainability in mind. From humble beginnings in our
          local workshop, we've grown into a brand trusted by parents, teachers, and caregivers
          across Tanzania.
        </p>
      </section>

      {/* Mission */}
      <section>
        <h3 className="text-2xl font-semibold text-green-600 mb-2">Our Mission</h3>
        <p className="text-gray-700">
          To inspire curiosity, creativity, and lifelong learning in children through high-quality,
          handcrafted educational toys. We believe that smart play leads to smart minds.
        </p>
      </section>

      {/* Core Values */}
      <section>
        <h3 className="text-2xl font-semibold text-green-600 mb-4">Our Core Values</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Education:</strong> Every product we make is designed to teach something meaningful.</li>
          <li><strong>Safety:</strong> We use child-safe materials, rounded edges, and non-toxic paints.</li>
          <li><strong>Sustainability:</strong> Wooden materials and eco-conscious practices are at our core.</li>
          <li><strong>Creativity:</strong> We foster open-ended play that builds imagination and problem-solving.</li>
          <li><strong>Community:</strong> We support local talent and partner with schools and parents.</li>
        </ul>
      </section>

      {/* Visit Us CTA */}
      <section className="text-center bg-green-100 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-green-700 mb-2">Come See for Yourself</h3>
        <p className="text-gray-700">
          Visit our store in Mikocheni B, Dar es Salaam to explore our full range of toys and talk to our passionate team.
        </p>
      </section>
    </div>
  );
};

export default About;

