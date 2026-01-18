
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 max-w-4xl mx-auto">
      <h1 className="font-bebas text-6xl text-beigeGold mb-12 tracking-widest text-center">About THIRD-EYE</h1>
      
      <div className="space-y-12 text-white/80 font-inter leading-relaxed">
        <section>
          <h2 className="font-bebas text-3xl text-white mb-6 tracking-widest">Our Mission</h2>
          <p>
            In an era of rapid AI advancement, the line between reality and digital fabrication is blurring. 
            THIRD-EYE was established at KIIT University to safeguard the integrity of digital media. 
            Our platform serves as a forensic shield, providing journalists, legal teams, and the general public 
            with high-precision tools to verify images, videos, and news reports.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-bebas text-3xl text-white mb-6 tracking-widest">The Technology</h2>
            <p className="text-sm">
              We leverage multi-modal fusion architectures, combining Convolutional Neural Networks (CNNs) 
              for spatial analysis and Long Short-Term Memory (LSTM) networks for temporal consistency check. 
              Our models are trained on datasets containing millions of real and AI-generated samples, 
              ensuring resilience against the latest GAN-based manipulations.
            </p>
          </div>
          <div className="bg-secondary p-8 border border-beigeGold/20 rounded-xl">
            <h3 className="font-bebas text-xl text-beigeGold mb-4 tracking-widest">Model Stack</h3>
            <ul className="space-y-2 text-xs uppercase tracking-widest text-white/60">
              <li>• XceptionNet (Visual Artifacts)</li>
              <li>• BERT & RoBERTa (NLP Auth)</li>
              <li>• EfficientNet-B7 (Spatial Features)</li>
              <li>• ResNet-LSTM (Temporal Continuity)</li>
            </ul>
          </div>
        </section>

        <section className="text-center pt-12 border-t border-white/10">
          <h2 className="font-bebas text-4xl text-beigeGold mb-8 tracking-widest">Developed by KIIT CS Team</h2>
          <p className="max-w-xl mx-auto mb-12 opacity-60 italic">
            "Combining engineering excellence with ethical AI development to build a more trustworthy internet."
          </p>
          <div className="flex justify-center gap-12 grayscale opacity-50">
             {/* Mock Partner Logos or Team Icons */}
             <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center font-bebas">KIIT</div>
             <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center font-bebas">CS</div>
             <div className="w-16 h-16 border border-white/10 rounded-full flex items-center justify-center font-bebas">AI</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
