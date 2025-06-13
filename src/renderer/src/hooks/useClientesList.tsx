import { clientesAtom, selectedRowIndexAtom } from '@/store'
import { useAtom, useAtomValue } from 'jotai'

export const useClientesList = ({ onSelect }: { onSelect?: (cliente: any) => void }) => {
  const clientes = useAtomValue(clientesAtom)

  const [selectedRowIndex, setSelectedRowIndex] = useAtom(selectedRowIndexAtom)

  const handleRowSelect = (index: number) => async () => {
    setSelectedRowIndex(index)
    onSelect?.(clientes[index])
  }

  return {
    clientes,
    selectedRowIndex,
    handleRowSelect
  }
}
