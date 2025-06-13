import { MCliente } from '@shared/models'
import { atom } from 'jotai'

export const clientesAtom = atom<MCliente[]>([])

export const loadClientesAtom = atom(null, async (_get, set) => {
  try {
    const clientes = await window.context.getClientes()
    set(clientesAtom, clientes)
  } catch (error) {
    console.error('[loadClientesAtom] Error loading clientes:', error)
    set(clientesAtom, [])
  }
})

export const selectedRowIndexAtom = atom<number | null>(null)
