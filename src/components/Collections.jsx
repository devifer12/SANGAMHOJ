import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const collections = [
  {
    id: 'traditional',
    title: 'Traditional Set',
    photos: [
      { src: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=600' },
      { src: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=600' },
      { src: 'https://images.unsplash.com/photo-1610223515982-5bae48b7c2c2?auto=format&fit=crop&w=600' },
    ]
  },
  {
    id: 'bridal',
    title: 'Bridal Set',
    photos: [
      { src: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=600' },
      { src: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=600' },
      { src: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600' },
    ]
  },
];

const Collections = () => {
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="collections" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-playfair font-bold text-center mb-12">
          Our <span className="text-secondary">Collections</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="collection-card bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
              onClick={() => {
                setSelectedCollection(collection);
                setIsOpen(true);
              }}
            >
              <img
                src={collection.photos[0].src}
                alt={collection.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-playfair font-semibold text-primary">
                  {collection.title}
                </h3>
                <p className="text-gray-600 mt-2">
                  Click to view collection
                </p>
              </div>
            </div>
          ))}
        </div>

        {selectedCollection && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={selectedCollection.photos}
          />
        )}
      </div>
    </section>
  );
};

export default Collections;