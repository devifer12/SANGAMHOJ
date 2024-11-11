const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-playfair font-bold text-secondary mb-4">SANGAM</h3>
            <p className="text-sm mb-2">HOUSE OF JEWELS LLP</p>
            <p className="text-sm text-gray-400">
              Crafting excellence in gold jewelry since 1998
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-secondary">Home</a></li>
              <li><a href="#collections" className="hover:text-secondary">Collections</a></li>
              <li><a href="#about" className="hover:text-secondary">About</a></li>
              <li><a href="#contact" className="hover:text-secondary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Business Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Monday - Friday: 10:00 AM - 7:00 PM</li>
              <li>Saturday: 10:00 AM - 5:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} SANGAM HOUSE OF JEWELS LLP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;