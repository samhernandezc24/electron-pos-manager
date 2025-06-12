import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    ping: () => ipcRenderer.invoke('ping')
  })
} catch (error) {
  console.error(error)
}
