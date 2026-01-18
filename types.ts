
export type PageType = 'HOME' | 'IMAGE' | 'VIDEO' | 'NEWS' | 'ABOUT';

export interface DetectionResult {
  verdict: 'REAL' | 'FAKE';
  confidence: number;
  report: string[];
  type: PageType;
}

export interface NavItem {
  label: string;
  type: PageType;
}
