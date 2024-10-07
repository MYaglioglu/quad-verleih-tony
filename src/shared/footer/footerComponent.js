import React from 'react'

const FooterComponent = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Über uns</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="/about" className="text-base text-gray-300 hover:text-white">
                      Unser Team
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-base text-gray-300 hover:text-white">
                      Unsere Geschichte
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Angebote</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="/quads" className="text-base text-gray-300 hover:text-white">
                      Quad-Modelle
                    </a>
                  </li>
                  <li>
                    <a href="/tours" className="text-base text-gray-300 hover:text-white">
                      Geführte Touren
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Rechtliches</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="/privacy" className="text-base text-gray-300 hover:text-white">
                      Datenschutz
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="text-base text-gray-300 hover:text-white">
                      AGB
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Kontakt</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="/contact" className="text-base text-gray-300 hover:text-white">
                      Kontaktformular
                    </a>
                  </li>
                  <li>
                    <a href="tel:+491234567890" className="text-base text-gray-300 hover:text-white">
                      +49 123 456 7890
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Social Media</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="/privacy" className="text-base text-gray-300 hover:text-white">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="text-base text-gray-300 hover:text-white">
                      TikTok
                    </a>
                  </li>
                </ul>
              </div>
              
            </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2024 Quad Verleih Tony. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent