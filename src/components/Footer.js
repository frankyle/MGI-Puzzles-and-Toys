import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold mb-2">MGI Smart Play</h3>
          <p className="text-sm">
            Creating fun, educational, and eco-friendly wooden toys that spark learning and creativity.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/products" className="hover:underline">Products</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Visit Us</h4>
          <p className="text-sm">
            📍 Mikocheni B, Dar es Salaam<br />
            📞 +255 712 345 678<br />
            📧 info@mgismartplay.com
          </p>
        </div>
      </div>

      <div className="text-center text-sm text-green-200 mt-6">
        &copy; {new Date().getFullYear()} MGI Smart Play. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
