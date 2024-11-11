const About = () => {
  return (
    <section id="about" className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-playfair font-bold mb-6">
              About <span className="text-secondary">SANGAM</span>
            </h2>
            <p className="text-lg mb-6">
              With decades of expertise in crafting exquisite gold jewelry, SANGAM has established itself as a premier wholesale jewelry manufacturer. Our commitment to quality and design excellence has made us a trusted partner for retail stores across the region.
            </p>
            <p className="text-lg mb-6">
              Each piece in our collection reflects our dedication to preserving traditional craftsmanship while embracing contemporary designs, ensuring that we meet the diverse needs of modern jewelry retailers.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-secondary text-4xl font-bold mb-2">25+</h3>
                <p className="text-sm">Years of Excellence</p>
              </div>
              <div>
                <h3 className="text-secondary text-4xl font-bold mb-2">1000+</h3>
                <p className="text-sm">Unique Designs</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800"
              alt="Jewelry Craftsmanship"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;