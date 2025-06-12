const loadClientes = async () => {
  const clientes = await window.context.getClientes()
  return clientes
}
