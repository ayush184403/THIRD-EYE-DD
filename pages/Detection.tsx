
import React, { useState, useRef } from 'react';
import { PageType, DetectionResult } from '../types';

interface DetectionPageProps {
  type: 'IMAGE' | 'VIDEO' | 'NEWS';
  onBack: () => void;
}

const DetectionPage: React.FC<DetectionPageProps> = ({ type, onBack }) => {
  const [file, setFile] = useState<File | null>(null);
  const [newsText, setNewsText] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<DetectionResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const configs = {
    IMAGE: {
      title: 'Image Detection',
      accept: 'image/*',
      desc: 'Deepfake images use GANs/AI to swap faces or manipulate visuals, creating highly realistic fakes. THIRD-EYE analyzes pixel artifacts, lighting inconsistencies, and biological signals like unnatural edges via CNNs like XceptionNet for 95%+ accuracy.',
      limit: '10MB',
    },
    VIDEO: {
      title: 'Video Detection',
      accept: 'video/mp4',
      desc: 'Deepfake videos manipulate faces and audio sync via AI. THIRD-EYE checks frame inconsistencies, lip-sync deviations, and biometric cues such as micro-expressions and head tilts using temporal CNN-LSTM models.',
      limit: '50MB',
    },
    NEWS: {
      title: 'News Detection',
      accept: 'image/*,video/mp4',
      desc: 'Fake news spreads manipulated text or media to mislead public opinion. THIRD-EYE uses NLP (BERT-like) models and multimodal fusion to detect sensationalism, source mismatch, and cross-verification with authoritative databases.',
      limit: '50MB',
    }
  };

  const config = configs[type];

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const startAnalysis = () => {
    if (type !== 'NEWS' && !file) return;
    if (type === 'NEWS' && !newsText && !file) return;

    setIsAnalyzing(true);
    setResult(null);

    // Simulated API call with 3s delay
    setTimeout(() => {
      const isFake = Math.random() > 0.5;
      const confidence = 85 + Math.random() * 14;
      
      const reports: Record<string, string[]> = {
        IMAGE: [
          'Facial landmarks consistency: High',
          'Pixel-level noise distribution: Anomalous',
          'Lighting direction mismatch: Detected',
          'Frequency domain artifacts: Present'
        ],
        VIDEO: [
          'Average Frame Confidence: 94.2%',
          'Lip-sync temporal alignment: Low',
          'Blink rate pattern: Unnatural',
          'Micro-expression continuity: Disrupted'
        ],
        NEWS: [
          'Source reliability check: Verified (External)',
          'Sensationalism index: 12% (Normal)',
          'Textual bias detection: Minimal',
          'Contextual cross-reference: Mismatch found'
        ]
      };

      setResult({
        verdict: isFake ? 'FAKE' : 'REAL',
        confidence: Number(confidence.toFixed(2)),
        report: reports[type],
        type: type as PageType,
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const reset = () => {
    setFile(null);
    setResult(null);
    setNewsText('');
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 max-w-4xl mx-auto">
      <button 
        onClick={onBack}
        className="text-beigeGold mb-12 flex items-center gap-2 hover:translate-x-[-5px] transition-transform font-bebas tracking-widest"
      >
        ← Back to Home
      </button>

      <section className="mb-16">
        <h1 className="font-bebas text-5xl md:text-6xl text-beigeGold mb-6 tracking-widest">{config.title}</h1>
        <div className="space-y-4 text-white/70 font-inter leading-relaxed text-sm md:text-base">
          <p>{config.desc}</p>
        </div>
      </section>

      {!result && !isAnalyzing && (
        <section className="space-y-8 animate-slide-up">
          {type === 'NEWS' && (
            <textarea 
              placeholder="Paste article text or URL here..."
              className="w-full h-48 bg-secondary border border-beigeGold/20 rounded-lg p-6 text-white focus:border-beigeGold focus:ring-1 focus:ring-beigeGold outline-none transition-all font-inter"
              value={newsText}
              onChange={(e) => setNewsText(e.target.value)}
            />
          )}

          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-beigeGold/20 rounded-xl p-16 flex flex-col items-center justify-center cursor-pointer hover:border-beigeGold/50 transition-all bg-secondary/20 group"
          >
            <input 
              type="file" 
              ref={fileInputRef} 
              hidden 
              accept={config.accept} 
              onChange={handleFileSelect}
            />
            <div className="mb-4 text-beigeGold group-hover:scale-110 transition-transform">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <p className="font-bebas text-xl tracking-widest text-beigeCream">
              {file ? file.name : `UPLOAD ${type} (<${config.limit})`}
            </p>
            <p className="text-white/40 text-xs mt-2 font-inter uppercase tracking-widest">
              Drag & drop or click to select
            </p>
          </div>

          <button 
            disabled={type !== 'NEWS' ? !file : (!file && !newsText)}
            onClick={startAnalysis}
            className={`w-full py-5 rounded-lg font-bebas text-2xl tracking-[0.3em] transition-all shadow-xl
              ${(type !== 'NEWS' ? file : (file || newsText)) 
                ? 'bg-beigeGold text-primary hover:scale-[1.02] hover:shadow-beigeGold/20' 
                : 'bg-white/10 text-white/20 cursor-not-allowed'}`}
          >
            ACTIVATE THIRD-EYE
          </button>
        </section>
      )}

      {isAnalyzing && (
        <div className="flex flex-col items-center justify-center py-24 space-y-8 animate-pulse">
          <div className="w-24 h-24 border-4 border-beigeGold/20 border-t-beigeGold rounded-full animate-spin"></div>
          <p className="font-bebas text-3xl tracking-widest text-beigeGold">ANALYZING ARTIFACTS...</p>
          <div className="max-w-xs w-full h-1 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-beigeGold animate-[loading_3s_ease-in-out_infinite]"></div>
          </div>
        </div>
      )}

      {result && (
        <section className="bg-secondary rounded-2xl p-8 md:p-12 border border-beigeGold/30 animate-slide-up">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
            <div>
              <h3 className="text-white/50 font-inter text-xs uppercase tracking-[0.2em] mb-2">Analysis Complete</h3>
              <div className="flex items-center gap-4">
                <div className={`px-8 py-2 rounded-full font-bebas text-3xl tracking-widest ${
                  result.verdict === 'REAL' ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'
                }`}>
                  {result.verdict}
                </div>
                <p className="font-bebas text-4xl text-beigeGold">{result.confidence}% Confidence</p>
              </div>
            </div>
            <button onClick={reset} className="text-white/40 hover:text-beigeGold text-xs font-inter uppercase tracking-widest transition-colors underline decoration-dotted">
              Run Another Test
            </button>
          </div>

          <div className="mb-10">
            <div className="w-full h-3 bg-white/10 rounded-full mb-2">
              <div 
                className={`h-full rounded-full transition-all duration-1000 ${result.verdict === 'REAL' ? 'bg-green-500' : 'bg-beigeGold'}`}
                style={{ width: `${result.confidence}%` }}
              ></div>
            </div>
            <p className="text-[10px] text-white/30 uppercase tracking-widest text-right">Probability Distribution Scale</p>
          </div>

          <div className="space-y-8">
            <h4 className="font-bebas text-xl tracking-widest text-beigeCream border-b border-white/10 pb-2">Forensic Report Highlights</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {result.report.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/70 font-inter text-sm bg-black/30 p-4 rounded-lg border border-white/5">
                  <span className="w-1.5 h-1.5 bg-beigeGold rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 flex gap-4 flex-col sm:flex-row">
            <button className="flex-1 bg-white/5 border border-white/10 py-4 font-bebas tracking-widest hover:bg-white/10 transition-all">
              DOWNLOAD PDF REPORT
            </button>
            <button className="flex-1 bg-beigeGold text-primary py-4 font-bebas tracking-widest hover:brightness-110 transition-all">
              SHARE AUTHENTICITY BADGE
            </button>
          </div>
        </section>
      )}
    </div>
  );
};

export default DetectionPage;
