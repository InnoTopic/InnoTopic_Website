declare global {
  interface Window {
    ai: IAiFeatures;
  }
}

export interface IAiFeatures {
  createTextSession: () => Promise<IAiSession>;
  canCreateTextSession: () => Promise<string>;
}

export interface IAiSession {
  prompt: (text: string) => Promise<string>;
  destroy: () => void; // Check it return non promise value
}
