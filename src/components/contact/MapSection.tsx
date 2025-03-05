
const MapSection = () => {
  return (
    <section className="mb-16">
      <div className="container-custom">
        <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242118.17004058767!2d73.72287834426496!3d18.524564859944176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1621843865028!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="TVM IT Solutions Location"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
