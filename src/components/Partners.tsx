import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Partners() {
  const { t } = useLanguage();
  const partners = [
    { name: 'Women in Business - Bocconi', logo: '/wib-logo.jpeg', link: null },
    { name: 'TEF - Tech Europe Foundation', logo: '/tech-logo.jpeg', link: null },
    { name: 'Bocconi Students Marketing Society', logo: '/bocconi-marketing.jpeg', link: null },
    { name: 'Orizon Europe', logo: '/orizon-logo.png', link: 'https://orizon.eu.com/' },
    { name: 'Entrepreneurship Club Bocconi Students', logo: '/bocconi-entrepreneurship.jpeg', link: null },
    { name: 'B4i - Bocconi for Innovation', logo: '/b4i-logo.jpeg', link: null },
  ];

  const doubledPartners = [...partners, ...partners];
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDraggingRef.current = true;
    startXRef.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftRef.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 2;
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.partners.title}
          </h2>
          <p className="text-lg text-gray-600">
            {t.partners.subtitle}
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-100 to-transparent z-10 pointer-events-none"></div>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide select-none cursor-grab active:cursor-grabbing scroll-smooth"
            style={{ userSelect: 'none', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {doubledPartners.map((partner, index) => {
              const content = (
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                  <div className="w-32 h-32 flex items-center justify-center">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                      draggable="false"
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
                    className="flex-shrink-0 mx-8 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    style={{ width: '220px', minWidth: '220px' }}
                    onClick={(e) => {
                      if (isDraggingRef.current) {
                        e.preventDefault();
                      }
                    }}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  style={{ width: '220px', minWidth: '220px' }}
                >
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
