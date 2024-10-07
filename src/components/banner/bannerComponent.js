import React from 'react';

const BannerComponent = () => {
  return (
    <section className="w-full h-[400px] flex items-center justify-center py-2 md:py-24 lg:py-32 xl:py-48 bg-black">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Erlebe das ultimative Quad-Abenteuer
            </h1>
            <p className="mx-auto  text-gray-300 md:text-xl">
              Entdecke atemberaubende Landschaften und spüre den Nervenkitzel auf vier Rädern.
            </p>
          </div>
          <div className="space-x-4">
            <a href="#" className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Jetzt buchen</a>
            <a href="#" className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-black">
              Mehr erfahren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerComponent;