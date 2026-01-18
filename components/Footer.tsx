
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-beigeGold/10 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex gap-8 mb-8">
          {/* Mock Social Icons */}
          {['github', 'linkedin', 'instagram'].map((platform) => (
            <div key={platform} className="w-10 h-10 border border-beigeGold/30 rounded-full flex items-center justify-center text-beigeGold hover:bg-beigeGold hover:text-primary transition-all cursor-pointer">
              <span className="sr-only">{platform}</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
          ))}
        </div>
        
        <p className="text-sm font-inter text-white/50 text-center">
          © 2026 THIRD-EYE Team | KIIT University
        </p>
        <p className="mt-2 text-beigeGold font-bebas tracking-widest text-sm">
          Developed by KIIT CS Team
        </p>
      </div>
    </footer>
  );
};

export default Footer;
