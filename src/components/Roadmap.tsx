"use client";

import React, { useEffect, useState } from 'react';

const roadmapData = [
  { date: "Q1 2025", title: "Launch of Full Version with Merchant Integrations", description: "This will integrate our payment system with multiple merchants across the globe, expanding our reach." },
  { date: "Q4 2024", title: "Public Beta Release of NovaPay", description: "Experience the first public beta of NovaPay with enhanced features and UI improvements." },
  { date: "October 8, 2024", title: "End of Hackathon Colosseum", description: "A culmination of innovative ideas presented by talented developers." },
  { date: "September 8, 2024", title: "Presentation of NovaPay at Solana Training Defense", description: "Demonstrating the security and scalability of NovaPay on the Solana network." },
  { date: "September 2, 2024", title: "Start of Hackathon Colosseum", description: "Kickstarting a major event to bring together the brightest minds in blockchain development." },
];

const Roadmap = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      roadmapData.forEach((_, index) => {
        const element = document.getElementById(`roadmap-item-${index}`);
        const elementPosition = element?.getBoundingClientRect().top + scrollY - windowHeight / 1.3;

        if (scrollY > elementPosition) {
          setVisibleIndex((prevIndex) => Math.max(prevIndex, index));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="roadmap" className="relative border shadow  bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 rounded-3xl mb-14">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/path/to/your/background-pattern.png')] opacity-5 pointer-events-none"></div>
      <h2 className="text-5xl font-extrabold text-center mb-16 tracking-wider text-white">
        Roadmap
      </h2>
      <div className="relative max-w-7xl mx-auto px-8">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-px h-full bg-gradient-to-b from-transparent via-gray-700 to-transparent"></div>
        </div>
        <div className="space-y-16 relative z-10">
          {roadmapData.map((event, index) => (
            <div
              key={index}
              id={`roadmap-item-${index}`}
              className={`flex items-center transition-transform duration-1000 ease-out transform ${visibleIndex >= index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              ${index % 2 === 0 ? 'justify-start pr-16' : 'justify-end pl-16'}`}
            >
              <div className={`relative  flex items-center w-full sm:w-1/2 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-24 h-24 p-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl transform transition-transform duration-500 hover:scale-125 hover:rotate-6">
                  <span className="text-lg font-bold text-white">{event.date}</span>
                </div>
                <div className={`relative p-8 ml-8 rounded-2xl shadow-lg bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 transform transition-transform duration-500 hover:scale-105 hover:rotate-3 ${index % 2 === 0 ? 'ml-8' : 'mr-8'} ${index % 2 === 0 ? '' : 'text-right'}`}>
                  <h3 className="text-2xl font-semibold text-blue-200 mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-300">{event.description}</p>
                </div>
                {/* Decorative Connecting Line */}

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Roadmap;
