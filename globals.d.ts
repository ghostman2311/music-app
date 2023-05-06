declare module "*.css";

type AudioContextType = typeof AudioContext;

interface Window extends Window {
  webkitAudioContext: AudioContextType;
}
