import { MCliente } from '@shared/models'
import { GetClientes } from '@shared/types'
import Database from 'better-sqlite3'
import path from 'path'

const dbPath = path.join(__dirname, '..', 'AppDB.db')
const db = new Database(dbPath)
db.prepare(
  `
  CREATE TABLE IF NOT EXISTS Clientes (
    idCliente INTEGER PRIMARY KEY AUTOINCREMENT,
    razonSocial TEXT NOT NULL,
    rfc TEXT NOT NULL,
    direccion TEXT
  )
`
).run()

export const getClientes: GetClientes = async () => {
  const stmt = db.prepare('SELECT * FROM Clientes')
  const clientes: MCliente[] = stmt.all()
  console.log('[getClientes] Clientes fetched:', clientes)
  return clientes
}
