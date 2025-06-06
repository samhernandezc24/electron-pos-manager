import { PaginadoOverlay } from '@renderer/utils/Paginator';
import { useEffect, useState } from 'react';
import { LuPencilLine, LuTrash2 } from 'react-icons/lu';

// const lstItems: any[] = [
// 	{
// 		idCliente: '1',
// 		razonSocial: 'Gordo y san Pancho S.A. de C.V.',
// 		rfc: 'GSP010101XX9',
// 		direccion: ''
// 	},
// 	{
// 		idCliente: '2',
// 		razonSocial: 'Codexart Development Innovating',
// 		rfc: 'CDX240997IG3',
// 		direccion: ''
// 	},
// 	{
// 		idCliente: '3',
// 		razonSocial: 'Celtax Academy S.A. DE C.V.',
// 		rfc: 'CXA020625QA7',
// 		direccion: ''
// 	},
// 	{
// 		idCliente: '4',
// 		razonSocial: 'GIRAFFE',
// 		rfc: 'GFF987655QA7',
// 		direccion: 'DATOS DE DIRECION ADICIONAL'
// 	}
// ];

export interface MCliente {
	idCliente: string;
	razonSocial: string;
	rfc: string;
	direccion: string;
}

export const Cliente = () => {
	const [lstItems, setClientes] = useState<MCliente[]>([]);

	useEffect(() => {
		// Llama a la API que definimos en preload.js
		window.api.getClientes().then((data: MCliente[]) => {
			setClientes(data);
			console.log(data)
		});
	}, []);

	return (
		<div className="cdx-header">
			<div className="cdx-header-title"> Clientes </div>

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
							{lstItems.length === 0 ? (
								<tr>
									<td colSpan={3} className="p-2 whitespace-nowrap text-center text-gray-500">
										No hay clientes registrados
									</td>
								</tr>
							) : (
								lstItems.map((item, index) => (
								<tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} `}>
									<td> {item.razonSocial} {/* Ajusta según tu estructura de datos */} </td>
									<td className="cdx-acciones">
										{/* Botones de acciones */}
										<button className="btn btn-sm"> {' '} <LuPencilLine className="icon-size-14" /> {' '} </button>
										<button className="btn btn-sm hover:!bg-red-600"> {' '} <LuTrash2 className="icon-size-14" /> {' '} </button>
									</td> 
									<td> {item.rfc} {/* Ajusta según tu estructura de datos */} </td>
									<td> {item.direccion} {/* Ajusta según tu estructura de datos */} </td>
								</tr>
							))
						)}
						</tbody>
					</table>
				</div>
			</div>

			<PaginadoOverlay></PaginadoOverlay>
		</div>
	)
}
