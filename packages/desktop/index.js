// Main index file for desktop package
import { invoke } from '@tauri-apps/api/core';

// Export any functions that might be useful for the frontend
export const sayHello = async () => {
  return await invoke('say_hello');
};
