import React from 'react';
import './aboutComponent.css';
import logo from '../../assets/img/logo.jpeg';
import about from '../../assets/img/about.jpeg';

const AboutComponent = () => {
  return (
    <main className=" bg-gradient-to-b from-gray-100 to-black ">
       <div  className="pt--20 relative w-full h-auto ">
        <img className=" object-center object-fill w-full h-[400px]"
          src={logo}
          alt="Quadverleih Tony"
          priority
        />
      </div>
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Über Quadverleih Tony</h1>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
            <img
              src={about}
              alt="Quadverleih Tony Team"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
            />
            <div className="space-y-4 py-6">
              <p className="text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Willkommen bei Quadverleih Tony - Ihrem zuverlässigen Partner für aufregende Quad-Abenteuer seit 2005.
                Unser Familienunternehmen hat es sich zur Aufgabe gemacht, Ihnen unvergessliche Erlebnisse in der Natur zu bieten.
              </p>
              <p className="text-black  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Mit unserer Flotte von top-gewarteten Quads und unseren erfahrenen Guides garantieren wir Ihnen
                sichere und spannende Touren durch die schönsten Landschaften der Region.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 text-white">Warum Quadverleih Tony?</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-6 flex flex-col items-center text-center space-y-2 bg-white rounded-lg shadow-md">
              <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path>
              </svg>
              <h3 className="text-xl font-bold">Erfahrung</h3>
              <p className="text-gray-500">Über 15 Jahre Erfahrung in der Quad-Branche</p>
            </div>
            <div className="p-6 flex flex-col items-center text-center space-y-2 bg-white rounded-lg shadow-md">
              <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-3-3h-4a3 3 0 00-3 3v2h5zM9 20H4v-2a3 3 0 013-3h4a3 3 0 013 3v2H9z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 10a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <h3 className="text-xl font-bold">Kundenzufriedenheit</h3>
              <p className="text-gray-500">Tausende zufriedene Kunden und positive Bewertungen</p>
            </div>
            <div className="p-6 flex flex-col items-center text-center space-y-2 bg-white rounded-lg shadow-md">
              <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path>
              </svg>
              <h3 className="text-xl font-bold">Flexibilität</h3>
              <p className="text-gray-500">Individuelle Touren und flexible Buchungsoptionen</p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 text-white">Unser Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Tony Müller", role: "Gründer & Geschäftsführer" },
              { name: "Lisa Schmidt", role: "Chefmechanikerin" },
              { name: "Max Weber", role: "Leiter der Tourenguides" },
            ].map((member) => (
              <div key={member.name} className="p-6 flex flex-col items-center text-center space-y-2 bg-white rounded-lg shadow-md">
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt={member.name}
                  className="rounded-full"
                />
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl text-center mb-8">Kontaktieren Sie uns</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 flex flex-col items-center text-center space-y-2 bg-white rounded-lg shadow-md">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path>
              </svg>
              <h3 className="text-lg font-semibold">Adresse</h3>
              <p className="text-gray-500">Quadstraße 123, 12345 Quadstadt</p>
            </div>
            <div className="p-6 flex flex-col items-center text-center space-y-2 bg-white rounded-lg shadow-md">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path>
              </svg>
              <h3 className="text-lg font-semibold">Telefon</h3>
              <p className="text-gray-500">+49 123 456789</p>
            </div>
            <div className="p-6 flex flex-col items-center text-center space-y-2 bg-white rounded-lg shadow-md">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path>
              </svg>
              <h3 className="text-lg font-semibold">E-Mail</h3>
              <p className="text-gray-500">info@quadverleih-tony.de</p>
            </div>
            <div className="p-6 flex flex-col items-center text-center space-y-2 bg-white rounded-lg shadow-md">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"></path>
              </svg>
              <h3 className="text-lg font-semibold">Öffnungszeiten</h3>
              <p className="text-gray-500">Mo-Fr: 9-18 Uhr<br />Sa-So: 10-16 Uhr</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutComponent;