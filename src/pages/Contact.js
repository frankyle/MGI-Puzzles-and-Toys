import React from "react";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 text-gray-800 space-y-10">
      <h2 className="text-3xl font-bold text-green-700 text-center mb-4">Contact Us</h2>

      {/* Contact Info */}
      <div className="text-center space-y-2 text-gray-700">
        <p><strong>📍 Location:</strong> Mikocheni B, Dar es Salaam, Tanzania</p>
        <p><strong>📞 Phone:</strong> +255 712 345 678</p>
        <p><strong>📧 Email:</strong> info@mgismartplay.com</p>
        <p><strong>🕘 Opening Hours:</strong> Mon–Sat: 8:00 AM – 6:00 PM</p>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-lg rounded-xl p-6 space-y-4">
        <h3 className="text-xl font-semibold text-green-600">Send Us a Message</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Google Map Embed */}
      <div className="rounded-xl overflow-hidden shadow-md">
        <iframe
          title="MGI Smart Play Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.9932087286573!2d39.254658!3d-6.751969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4c2d18b58c0b%3A0x2dbf2320f98e7ea2!2sMikocheni%2C%20Dar%20es%20Salaam!5e0!3m2!1sen!2stz!4v1693323123456!5m2!1sen!2stz"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className="w-full h-[300px] border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
