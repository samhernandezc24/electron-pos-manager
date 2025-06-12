import { clientesMock } from '@/store/mocks'
import { ComponentProps } from 'react'
import { LuPencilLine, LuTrash2 } from 'react-icons/lu'

export type ClienteListProps = ComponentProps<'div'> & {
  onSelect?: (cliente: (typeof clientesMock)[0]) => void
}

export const ClienteList = ({ onSelect, className, ...props }: ClienteListProps) => {
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

        <div className="cdx-content">
          <div className="cdx-content-container-table">
            <table className="cdx-content-table">
              <thead className="bg-gray-50">
                <tr>
                  <th> Razón social </th>
                  <th> Acciones </th>
                  <th> RFC </th>
                  <th> Dirección </th>
                  <th> Teléfono </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {clientesMock.length > 0 ? (
                  clientesMock.map((cliente) => (
                    <tr
                      key={cliente.idCliente}
                      className="hover:bg-gray-50 transition-colors"
                      onClick={() => onSelect?.(cliente)}
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
                      <td>{cliente.telefono}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="p-2 whitespace-nowrap text-center text-gray-500">
                      No hay clientes registrados
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
