import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-16 pb-10 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">

        {/* Brand Section */}
        <div className="md:col-span-1">
          <h2 className="text-xl font-bold mb-4">Kingsukh Guest House</h2>
          <p className="text-gray-300 mb-4">
            Nestled in the heart of nature, Kingsukh Guest House offers comfort, luxury, and warm hospitality to make your stay unforgettable.
          </p>
          <a href="#contact">
            <button className="bg-blue-600 hover:bg-white hover:text-blue-600 border border-blue-600 text-white px-5 py-2 rounded-full font-medium transition duration-300">
              Book Now
            </button>
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#rooms" className="hover:text-white">Rooms & Amenities</a></li>
            <li><a href="#gallery" className="hover:text-white">Gallery</a></li>
            <li><a href="#services" className="hover:text-white">Our Services</a></li>
            <li><a href="#contact" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>24/7 Room Service</li>
            <li>Restaurant Facility</li>
            <li>Tour Guide Support</li>
            <li>High Class Security</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-gray-300 mb-2">
            Beside Barshal Water Tank, <br />
            Manpur, Barhanti, West Bengal 723156
          </p>
          <p className="text-gray-300 mb-2">📧 kkghosh0099@gmail.com</p>
          <p className="text-gray-300 mb-4">📞 +91 9007062180</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-2 text-xl text-white">
            <a href="https://facebook.com" className="hover:text-blue-400" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" className="hover:text-pink-500" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-500" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com" className="hover:text-sky-400" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-blue-800 pt-6 text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} Kingsukh Guest House. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
