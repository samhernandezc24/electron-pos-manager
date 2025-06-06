import { index } from './index.ts';

declare global {
  interface Window {
    // electron: ElectronAPI
    api : index
  }
}
