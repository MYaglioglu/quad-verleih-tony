import React, { useState, useEffect, useCallback } from 'react';
import './heroComponent.css'; // Stelle sicher, dass diese Datei existiert und korrekt importiert wird
import logo from './../../assets/img/logo.jpeg'; // Stelle sicher, dass diese Datei existiert und korrekt importiert wird
import logoNoBg from './../../assets/img/logoNoBg.png'; // Stelle sicher, dass diese Datei existiert und korrekt importiert wird

const images = [
  require('./../../assets/img/preview/gal1.jpeg'),
  require('./../../assets/img/preview/gal2.jpeg'),
  require('./../../assets/img/preview/gal3.jpeg'),
];

export default function HeroComponent() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const goToNextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, []);

  const goToImage = useCallback((index) => {
    setCurrentImageIndex(index);
  }, []);

  useEffect(() => {
    const timer = setInterval(goToNextImage, 5000); // Wechselt das Bild alle 5 Sekunden

    return () => clearInterval(timer);
  }, [goToNextImage]);

  useEffect(() => {
    // Simuliert einen Ladevorgang
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <div className="relative w-full h-auto bg-gradient-to-b from-black to-gray-100 flex flex-col justify-center items-center">
      {isLoading && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
      <div className="relative w-full mt-12 max-w-5xl aspect-video shadow-xl rounded-lg overflow-hidden ">
        {images.map((src, index) => (
          <img
            key={index} // Verwende den Index als Schlüssel
            src={src}
            alt={`Quad Modell ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
      
      <div className="flex justify-center mt-6 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-10 h-10 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-black border-2 border-white shadow-lg scale-110'
                : 'bg-gray-600 hover:bg-gray-800'
            }`}
            aria-label={`Quad Modell ${index + 1} auswählen`}
          />
        ))}
      </div>
      <p className="mt-4 text-lg font-semibold text-black">
        {currentImageIndex === 0 && "Sport Quad: Für Geschwindigkeitsliebhaber"}
        {currentImageIndex === 1 && "Gelände Quad: Meistert jedes Terrain"}
        {currentImageIndex === 2 && "Familien Quad: Sicher und komfortabel"}
        {currentImageIndex === 3 && "Offroad Quad: Für extreme Abenteuer"}
      </p>
    </div>
  );
}
