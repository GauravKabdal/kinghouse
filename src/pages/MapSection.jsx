const MapSection = () => {
  return (
    <section id="location" className="py-16 bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold text-blue-900">Find Us Here</h2>
        <p className="text-gray-600 mt-2">
          Visit Kingsukh Guest House — Barhanti’s perfect retreat.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl shadow-lg max-w-7xl mx-auto">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.501598139083!2d86.8572154743861!3d23.586337295056868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1752431582037!5m2!1sen!2sin" 
          width="1300" 
          height="450" 
          style={{border:0}} 
          allowFullScreen="" 
          loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  );
};

export default MapSection;
