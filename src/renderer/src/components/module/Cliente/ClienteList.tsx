import { useClientesList } from '@/hooks/useClientesList'
import { loadClientesAtom } from '@/store'
import { PaginadoOverlay } from '@renderer/utils/Paginator'
import { useSetAtom } from 'jotai'
import { ComponentProps, useEffect } from 'react'
import { LuPencilLine, LuTrash2 } from 'react-icons/lu'

export type ClienteListProps = ComponentProps<'div'> & {
  onSelect?: (cliente: any) => void
}

export const ClienteList = ({ onSelect, className, ...props }: ClienteListProps) => {
  const { clientes, selectedRowIndex, handleRowSelect } = useClientesList({ onSelect })
  const loadClientes = useSetAtom(loadClientesAtom)

  useEffect(() => {
    loadClientes()
  }, [loadClientes])

  if (!clientes) return null

  return (
    <div className="cdx-header" {...props}>
      <div className="cdx-header-title">Clientes</div>

      <div className="cdx-header-buscador">
        <div className="ml-auto">
          <input
            type="text"
            className="border bg-white rounded-sm focus:border-blue-600 text-black border-gray-600 px-2 py-1"
            placeholder="Buscar cliente... "
          />
        </div>
      </div>

      <div className="cdx-content">
        <div className="cdx-content-container-table">
          <table className="cdx-content-table">
            <thead className="bg-gray-50">
              <tr>
                <th> Razón social </th>
                <th> Acciones </th>
                <th> RFC </th>
                <th> Dirección </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {clientes.length > 0 ? (
                clientes.map((cliente, index) => {
                  const isSelected = index === selectedRowIndex
                  return (
                    <tr
                      key={cliente.idCliente}
                      className={`transition-colors ${isSelected ? 'bg-blue-50 border-l-4 border-blue-600' : 'hover:bg-gray-50'}`}
                      onClick={handleRowSelect(index)}
                    >
                      <td>{cliente.razonSocial}</td>
                      <td className="cdx-acciones">
                        <button className="btn btn-sm">
                          <LuPencilLine className="icon-size-14" />
                        </button>
                        <button className="btn btn-sm hover:!bg-red-600">
                          <LuTrash2 className="icon-size-14" />
                        </button>
                      </td>
                      <td>{cliente.rfc}</td>
                      <td>{cliente.direccion}</td>
                    </tr>
                  )
                })
              ) : (
                <tr>
                  <td colSpan={5} className="p-2 text-center text-gray-500">
                    No hay clientes registrados
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <PaginadoOverlay></PaginadoOverlay>
    </div>
  )
}
