
import React from 'react';

export const ICONS = {
  Logo: () => (
    <svg viewBox="0 0 100 100" className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" stroke="#D4AF37" strokeWidth="2" opacity="0.3" />
      <path d="M10 50C10 50 25 20 50 20C75 20 90 50 90 50C90 50 75 80 50 80C25 80 10 50 10 50Z" stroke="#D4AF37" strokeWidth="4" />
      <circle cx="50" cy="50" r="12" fill="#D4AF37" />
      <circle cx="50" cy="50" r="18" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4 4" />
    </svg>
  ),
  Image: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  Video: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  News: () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 4v4h4" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12h10M7 16h10" />
    </svg>
  ),
  Arrow: () => (
    <svg className="w-6 h-6 animate-bounce" fill="none" stroke="#D4AF37" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  )
};

export const NAV_ITEMS = [
  { label: 'Home', type: 'HOME' as const },
  { label: 'Image Detection', type: 'IMAGE' as const },
  { label: 'Video Detection', type: 'VIDEO' as const },
  { label: 'News Detection', type: 'NEWS' as const },
  { label: 'About', type: 'ABOUT' as const },
];
