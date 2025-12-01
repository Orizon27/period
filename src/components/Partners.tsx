export default function Partners() {
  const partners = [
    { name: 'Bocconi Students Marketing Society', logo: '/Capture d\'écran 2025-12-01 à 15.00.34.png', link: null },
    { name: 'Orizon Europe', logo: '/Final Orizon Europe with background.png', link: 'https://orizon.eu.com/' },
    { name: 'Entrepreneurship Club Bocconi Students', logo: '/1637431672857.jpeg', link: null },
  ];

  const doubledPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Partners
          </h2>
          <p className="text-lg text-gray-600">
            Organizations helping us make a difference
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-100 to-transparent z-10"></div>

          <div className="flex animate-scroll">
            {doubledPartners.map((partner, index) => {
              const content = (
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden bg-white flex items-center justify-center p-2">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-sm font-semibold text-gray-800 text-center">
                    {partner.name}
                  </p>
                </div>
              );

              if (partner.link) {
                return (
                  <a
                    key={index}
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 mx-8 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                    style={{ width: '200px' }}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  style={{ width: '200px' }}
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
