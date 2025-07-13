import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[35%_65%] gap-8">
        
        {/* Left - Contact Info */}
        <div className="bg-white/60 backdrop-blur-md border border-blue-200 shadow-lg rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Contact Info</h3>
            <div className="space-y-4 text-blue-900 text-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-600" />
                <p>
                  Beside Barshal Water Tank, Manpur, Barhanti,
                  <br />
                  West Bengal 723156
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600" />
                <a href="mailto:kkghosh0099@gmail.com">kkghosh0099@gmail.com</a>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-600" />
                <a href="tel:+919007062180">+91 9007062180</a>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-4 text-blue-600 text-xl">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        {/* Right - Form */}
        <div className="bg-white/60 backdrop-blur-md border border-blue-200 shadow-lg rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-blue-900 mb-6">Send a Message</h3>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <input type="text" placeholder="First Name" className="border-b border-gray-300 focus:outline-none py-2 bg-transparent" />
            <input type="text" placeholder="Last Name" className="border-b border-gray-300 focus:outline-none py-2 bg-transparent" />
            <input type="email" placeholder="Email Address" className="border-b border-gray-300 focus:outline-none py-2 bg-transparent" />
            <input type="text" placeholder="Mobile Number" className="border-b border-gray-300 focus:outline-none py-2 bg-transparent" />
            <textarea
              rows="4"
              placeholder="Write your message here..."
              className="border-b border-gray-300 focus:outline-none py-2 bg-transparent col-span-full"
            ></textarea>

            <div className="col-span-full">
              <button
                type="submit"
                className="bg-blue-600 text-white font-medium py-2 px-6 rounded-full hover:bg-white hover:text-blue-600 border border-blue-600 transition duration-300"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
