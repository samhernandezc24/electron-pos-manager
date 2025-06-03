import { LuBuilding, LuCircleDollarSign, LuCircleUser, LuClipboardPenLine, LuHouse, LuPrinterCheck } from "react-icons/lu";
import { HashRouter, Link, Route, Routes } from 'react-router-dom';
import { Cliente } from './components/Clientes';
import { Content, RootLayout, Sidebar } from './layout';

function App() {
  return (
    <HashRouter>
      <RootLayout>
        <Sidebar className="p-2">
          <nav className="flex flex-col space-y-2">
            <Link to="/*" className="p-1 hover:underline flex flex-row items-center">
              <LuHouse className="pr-2 icon-size-32"/> Dashboard
            </Link>
            <Link to="/pos" className="p-1 hover:underline flex flex-row items-center">
              <LuCircleDollarSign className="pr-2 icon-size-32"/> Punto de Venta
            </Link>
            <Link to="/usuarios" className="p-1 hover:underline flex flex-row items-center">
              <LuCircleUser className="pr-2 icon-size-32"/> Usuarios
            </Link>
            <Link to="/clientes" className="p-1 hover:underline flex flex-row items-center">
              <LuBuilding className="pr-2 icon-size-32"/> Clientes
            </Link>
            <Link to="/productos" className="p-1 hover:underline flex flex-row items-center">
              <LuClipboardPenLine className="pr-2 icon-size-32"/> Productos
            </Link>
            <Link to="/reportes" className="p-1 hover:underline flex flex-row items-center">
              <LuPrinterCheck  className="pr-2 icon-size-32"/> Reportes
            </Link>
          </nav>
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20 p-4">
          <Routes>
            <Route path="*" element={<div>Bienvenido al Panel</div>} />
            <Route path="/pos" element={<div>Punto de Venta Page</div>} />
            <Route path="/usuarios" element={<div>Usuarios Page</div>} />
            <Route path="/clientes" element={<Cliente></Cliente>} />
            <Route path="/productos" element={<div>Productos Page</div>} />
            <Route path="/reportes" element={<div>Reportes Page</div>} />
          </Routes>
        </Content>
      </RootLayout>
    </HashRouter>
  )
}

export default App
