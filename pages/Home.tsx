
import React from 'react';
import { ICONS } from '../constants';
import { PageType } from '../types';

interface HomeProps {
  onNavigate: (page: PageType) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const cards = [
    { type: 'IMAGE' as const, icon: <ICONS.Image />, title: 'Image Detection', text: 'Analyze pixel artifacts and visual inconsistencies using CNNs.' },
    { type: 'VIDEO' as const, icon: <ICONS.Video />, title: 'Video Detection', text: 'Temporal analysis for lip-sync and blink-rate verification.' },
    { type: 'NEWS' as const, icon: <ICONS.News />, title: 'News Detection', text: 'NLP-based authenticity check and cross-verification.' },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
        <div className="animate-glow-pulse flex flex-col items-center gap-6">
          <div className="scale-150 transform mb-8">
            <ICONS.Logo />
          </div>
          <h1 className="font-bebas text-7xl md:text-9xl tracking-[0.2em] text-goldenrod text-center">
            THIRD-EYE
          </h1>
          <p className="font-inter text-lg md:text-xl tracking-widest text-beigeCream opacity-80 uppercase text-center max-w-2xl px-4">
            Unveil the Truth Behind Media
          </p>
        </div>
        
        <div className="absolute bottom-12 flex flex-col items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
          <span className="text-xs tracking-widest uppercase opacity-40">Scroll to Explore</span>
          <ICONS.Arrow />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-bebas text-4xl mb-6 text-white tracking-widest">Advanced Integrity Verification</h2>
          <p className="font-inter text-lg text-white/70 leading-relaxed">
            THIRD-EYE detects deepfakes in images, videos, and news using state-of-the-art machine learning models. 
            From generative adversarial network (GAN) artifacts to natural language inconsistencies, 
            our multi-modal fusion architecture provides high-precision authenticity reports for digital media.
          </p>
        </div>
      </section>

      {/* Model Cards Grid */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div 
              key={card.type}
              onClick={() => onNavigate(card.type)}
              className="group bg-secondary p-10 rounded-lg border border-beigeGold/10 hover:border-beigeGold/50 transition-all duration-500 cursor-pointer flex flex-col items-center text-center hover:-translate-y-2 shadow-2xl"
            >
              <div className="text-beigeGold group-hover:scale-110 transition-transform mb-6">
                {card.icon}
              </div>
              <h3 className="font-bebas text-3xl mb-4 tracking-widest">{card.title}</h3>
              <p className="text-white/60 font-inter text-sm mb-8 leading-relaxed">
                {card.text}
              </p>
              <button className="mt-auto px-6 py-2 border border-beigeGold text-beigeGold font-bebas tracking-widest text-sm group-hover:bg-beigeGold group-hover:text-primary transition-all">
                UPLOAD & ANALYZE
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
