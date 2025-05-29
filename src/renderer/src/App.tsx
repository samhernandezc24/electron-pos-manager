import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import { Content, RootLayout, Sidebar } from './components'

function App() {
  return (
    <HashRouter>
      <RootLayout>
        <Sidebar className="p-2">
          <nav className="flex flex-col space-y-2">
            <Link to="/usuarios" className="hover:underline">
              Usuarios
            </Link>
            <Link to="/clientes" className="hover:underline">
              Clientes
            </Link>
            <Link to="/productos" className="hover:underline">
              Productos
            </Link>
            <Link to="/pos" className="hover:underline">
              Punto de Venta
            </Link>
            <Link to="/reportes" className="hover:underline">
              Reportes
            </Link>
          </nav>
        </Sidebar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20 p-4">
          <Routes>
            <Route path="/usuarios" element={<div>Usuarios Page</div>} />
            <Route path="/clientes" element={<div>Clientes Page</div>} />
            <Route path="/productos" element={<div>Productos Page</div>} />
            <Route path="/pos" element={<div>Punto de Venta Page</div>} />
            <Route path="/reportes" element={<div>Reportes Page</div>} />
            <Route path="*" element={<div>Bienvenido al Panel</div>} />
          </Routes>
        </Content>
      </RootLayout>
    </HashRouter>
  )
}

export default App
