import { GetClientes } from '@shared/types'
import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    locale: navigator.language || 'es-ES',
    getClientes: (...args: Parameters<GetClientes>) => ipcRenderer.invoke('getClientes', ...args)
  })
} catch (error) {
  console.error(error)
}
