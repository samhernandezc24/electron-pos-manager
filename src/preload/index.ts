import { contextBridge, ipcRenderer } from 'electron';

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('api', {
    // TODO:
    getClientes: () => ipcRenderer.invoke('get-clientes'),
  });
} catch (error) {
  console.error(error)
}
