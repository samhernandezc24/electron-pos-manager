// context_db.ts
import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(__dirname, '..', 'AppDB.db');
const context = new Database(dbPath);
    
// Crear tabla si no existe
context.prepare(`
    CREATE TABLE IF NOT EXISTS "Clientes" (
        "IdCliente" TEXT NOT NULL,
        "RazonSocial" TEXT,
        "RFC" TEXT,
        "Direccion" TEXT,
        PRIMARY KEY ("IdCliente")
    );
`).run();
    
export default context;
