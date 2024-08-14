export const inventariosOptions = {
  title: 'Inventarios',
  submenu: {
    title: 'Inventarios',
    items: [
      {
        label: 'Facturación',
      },
      {
        label: 'Devol. Notas Deb/Cred',
        options: [
          { label: 'Nota Credito' },
          { label: 'Devolucion Compras' },
          { label: 'Nota Debito' },
        ],
      },
      {
        label: 'Movimiento Kardex',
      },
      {
        label: 'Referencias',
      },
      {
        label: 'Grupos',
      },
      {
        label: 'Subgrupos',
      },
      {
        label: 'Divisiones',
      },
      {
        label: 'Otras interfaces',
        options: [
          { label: 'Importar Facturacion' },
          { label: 'Facturar Afiliaciones' },
        ],
      },
      {
        label: 'Presentaciones',
      },
      {
        label: 'Almacenes',
      },
      {
        label: 'Unificar Productos',
      },
      {
        label: 'Crear Cliente FE ERP',
      },
    ],
  },
};
