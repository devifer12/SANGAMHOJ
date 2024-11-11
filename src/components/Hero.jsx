import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1920"
          alt="Luxury Jewelry"
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white max-w-4xl px-4"
        >
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-4">
            <span className="text-secondary drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] tracking-wider">
              SANGAM
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-montserrat tracking-wider mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            HOUSE OF JEWELS LLP
          </p>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
            Crafting timeless elegance through exceptional gold jewelry designs
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;