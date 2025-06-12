import { GetClientes } from '@shared/types'

declare global {
  interface Window {
    // electron: ElectronAPI
    context: {
      locale: string
      getClientes: GetClientes
    }
  }
}
