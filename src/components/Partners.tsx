import { useEffect, useRef, useState } from 'react';

export default function Partners() {
  const partners = [
    { name: 'Women in Business - Bocconi', logo: '/wib___women_in_business_bocconi_female_students_association_logo.jpeg', link: null },
    { name: 'TEF - Tech Europe Foundation', logo: '/tech_europe_foundation_logo.jpeg', link: null },
    { name: 'Bocconi Students Marketing Society', logo: '/1631311647680.jpeg', link: null },
    { name: 'Orizon Europe', logo: '/Final Orizon Europe with background.png', link: 'https://orizon.eu.com/' },
    { name: 'Entrepreneurship Club Bocconi Students', logo: '/1637431672857.jpeg', link: null },
    { name: 'B4i - Bocconi for Innovation', logo: '/b4i_bocconi_for_innovation_logo.jpeg', link: null },
  ];

  const doubledPartners = [...partners, ...partners];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const handleMouseDown = (e: MouseEvent) => {
      setIsDragging(true);
      setStartX(e.clientX);
      if (animationRef.current !== null) {
        cancelAnimationFrame(animationRef.current);
      }
      slider.style.animationPlayState = 'paused';
      const transform = window.getComputedStyle(slider).transform;
      if (transform !== 'none') {
        const matrix = new DOMMatrix(transform);
        setPrevTranslate(matrix.m41);
        setCurrentTranslate(matrix.m41);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      const currentX = e.clientX;
      const diff = currentX - startX;
      const newTranslate = prevTranslate + diff;
      setCurrentTranslate(newTranslate);

      if (slider) {
        slider.style.transform = `translateX(${newTranslate}px)`;
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setPrevTranslate(currentTranslate);
      if (slider) {
        slider.style.animation = 'none';
        setTimeout(() => {
          if (slider) {
            slider.style.animation = '';
          }
        }, 10);
      }
    };

    const handleMouseLeave = () => {
      if (isDragging) {
        setIsDragging(false);
        setPrevTranslate(currentTranslate);
        if (slider) {
          slider.style.animation = 'none';
          setTimeout(() => {
            if (slider) {
              slider.style.animation = '';
            }
          }, 10);
        }
      }
    };

    slider.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isDragging, startX, currentTranslate, prevTranslate]);

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
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-100 to-transparent z-10 pointer-events-none"></div>

          <div
            ref={scrollRef}
            className={`flex animate-scroll select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ userSelect: 'none' }}
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
                      if (isDragging) {
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
