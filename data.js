// =============================================================================
// DATA.JS - Datos del Dashboard de Facturación
// =============================================================================
// INSTRUCCIONES DE USO:
// 1. Actualice el array "ventas" con los registros diarios de ventas.
// 2. Actualice el objeto "presupuestos" con los presupuestos mensuales por local.
// 3. Cada registro de venta debe tener los campos indicados en el ejemplo.
// 4. Las fechas deben estar en formato "YYYY-MM-DD".
// =============================================================================

// -----------------------------------------------------------------------------
// PRESUPUESTOS - Presupuesto mensual por local
// Formato: presupuestos[local][mes_numero] = importe_presupuestado
// Mes: 1=Enero, 2=Febrero, 3=Marzo, etc.
// -----------------------------------------------------------------------------
const presupuestos = {
  "MG": {
    1: 850000,  2: 820000,  3: 900000,  4: 870000,
    5: 920000,  6: 950000,  7: 940000,  8: 960000,
    9: 930000, 10: 980000, 11:1000000, 12:1050000
  },
  "LOMAS": {
    1: 520000,  2: 500000,  3: 550000,  4: 530000,
    5: 560000,  6: 580000,  7: 570000,  8: 590000,
    9: 565000, 10: 600000, 11: 620000, 12: 650000
  },
  "GUILLON": {
    1: 480000,  2: 460000,  3: 510000,  4: 490000,
    5: 520000,  6: 540000,  7: 530000,  8: 545000,
    9: 525000, 10: 555000, 11: 575000, 12: 600000
  },
  "JAGUEL": {
    1: 390000,  2: 375000,  3: 415000,  4: 400000,
    5: 425000,  6: 440000,  7: 435000,  8: 445000,
    9: 430000, 10: 455000, 11: 470000, 12: 490000
  },
  "DISTRI": {
    1: 300000,  2: 290000,  3: 320000,  4: 310000,
    5: 330000,  6: 345000,  7: 340000,  8: 350000,
    9: 335000, 10: 360000, 11: 375000, 12: 390000
  },
  "FRQ": {
    1: 150000,  2: 140000,  3: 160000,  4: 155000,
    5: 165000,  6: 170000,  7: 168000,  8: 172000,
    9: 165000, 10: 178000, 11: 185000, 12: 195000
  }
};

// -----------------------------------------------------------------------------
// ARTÍCULOS - Catálogo de productos (para referencia)
// Formato: { codigo, descripcion, costo_promedio }
// -----------------------------------------------------------------------------
const catalogo = [
  { codigo: "ART001", descripcion: "Resma A4 80gr (500 hojas)", costo_promedio: 420 },
  { codigo: "ART002", descripcion: "Carpeta Archivadora A4", costo_promedio: 320 },
  { codigo: "ART003", descripcion: "Bolígrafo Azul Pack x10", costo_promedio: 180 },
  { codigo: "ART004", descripcion: "Cuaderno Tapa Dura A5", costo_promedio: 280 },
  { codigo: "ART005", descripcion: "Tóner HP LaserJet 85A", costo_promedio: 2800 },
  { codigo: "ART006", descripcion: "Papel Fotográfico A4 Glossy", costo_promedio: 650 },
  { codigo: "ART007", descripcion: "Marcador Permanente Pack x5", costo_promedio: 220 },
  { codigo: "ART008", descripcion: "Tijera Profesional Acero", costo_promedio: 380 },
  { codigo: "ART009", descripcion: "Cinta Adhesiva Transparente x6", costo_promedio: 190 },
  { codigo: "ART010", descripcion: "Post-it Notas Adhesivas Pack", costo_promedio: 310 },
  { codigo: "ART011", descripcion: "Calculadora Científica", costo_promedio: 1200 },
  { codigo: "ART012", descripcion: "Engrapadora Metálica", costo_promedio: 580 },
  { codigo: "ART013", descripcion: "Separadores Plásticos x5", costo_promedio: 145 },
  { codigo: "ART014", descripcion: "Resaltador Fluor Pack x6", costo_promedio: 260 },
  { codigo: "ART015", descripcion: "Perforadora 2 Hoyos", costo_promedio: 490 },
  { codigo: "ART016", descripcion: "Sobre Manila A4 Pack x50", costo_promedio: 350 },
  { codigo: "ART017", descripcion: "Portafolio Ejecutivo A4", costo_promedio: 720 },
  { codigo: "ART018", descripcion: "Tinta Epson 664 Negro", costo_promedio: 1450 },
  { codigo: "ART019", descripcion: "Lápiz Grafito HB Pack x12", costo_promedio: 170 },
  { codigo: "ART020", descripcion: "Pizarrón Blanco 60x90cm", costo_promedio: 3200 }
];

// -----------------------------------------------------------------------------
// VENTAS - Registros de ventas diarias
// Formato de cada registro:
// {
//   fecha:     "YYYY-MM-DD",         // Fecha de la venta
//   local:     "Nombre del Local",    // Nombre del local (debe coincidir con presupuestos)
//   vendedor:  "Nombre Apellido",     // Nombre completo del vendedor
//   articulo:  "ARTXXX",             // Código del artículo (del catálogo)
//   cantidad:  N,                    // Cantidad vendida
//   importe:   N,                    // Importe total de venta (precio x cantidad)
//   costo:     N                     // Costo total (costo unitario x cantidad)
// }
// -----------------------------------------------------------------------------
const ventas = [

  // ============================================================
  // ENERO 2026
  // ============================================================

  // --- Casa Central - Enero ---
  { fecha: "2026-01-02", local: "MG", vendedor: "Ana García", articulo: "ART001", cantidad: 50, importe: 37500, costo: 21000 },
  { fecha: "2026-01-02", local: "MG", vendedor: "Carlos López", articulo: "ART005", cantidad: 8, importe: 30400, costo: 22400 },
  { fecha: "2026-01-03", local: "MG", vendedor: "Ana García", articulo: "ART002", cantidad: 30, importe: 15600, costo: 9600 },
  { fecha: "2026-01-03", local: "MG", vendedor: "María Rodríguez", articulo: "ART018", cantidad: 12, importe: 23400, costo: 17400 },
  { fecha: "2026-01-05", local: "MG", vendedor: "Carlos López", articulo: "ART020", cantidad: 5, importe: 22500, costo: 16000 },
  { fecha: "2026-01-06", local: "MG", vendedor: "Ana García", articulo: "ART011", cantidad: 15, importe: 27000, costo: 18000 },
  { fecha: "2026-01-07", local: "MG", vendedor: "María Rodríguez", articulo: "ART003", cantidad: 40, importe: 10400, costo: 7200 },
  { fecha: "2026-01-08", local: "MG", vendedor: "Carlos López", articulo: "ART006", cantidad: 20, importe: 18000, costo: 13000 },
  { fecha: "2026-01-09", local: "MG", vendedor: "Ana García", articulo: "ART017", cantidad: 10, importe: 14000, costo: 7200 },
  { fecha: "2026-01-10", local: "MG", vendedor: "María Rodríguez", articulo: "ART012", cantidad: 18, importe: 16200, costo: 10440 },
  { fecha: "2026-01-12", local: "MG", vendedor: "Carlos López", articulo: "ART001", cantidad: 60, importe: 45000, costo: 25200 },
  { fecha: "2026-01-13", local: "MG", vendedor: "Ana García", articulo: "ART010", cantidad: 25, importe: 11250, costo: 7750 },
  { fecha: "2026-01-14", local: "MG", vendedor: "María Rodríguez", articulo: "ART005", cantidad: 6, importe: 22800, costo: 16800 },
  { fecha: "2026-01-15", local: "MG", vendedor: "Carlos López", articulo: "ART014", cantidad: 30, importe: 12000, costo: 7800 },
  { fecha: "2026-01-16", local: "MG", vendedor: "Ana García", articulo: "ART004", cantidad: 20, importe: 12000, costo: 5600 },
  { fecha: "2026-01-19", local: "MG", vendedor: "María Rodríguez", articulo: "ART008", cantidad: 15, importe: 9750, costo: 5700 },
  { fecha: "2026-01-20", local: "MG", vendedor: "Carlos López", articulo: "ART018", cantidad: 8, importe: 15600, costo: 11600 },
  { fecha: "2026-01-21", local: "MG", vendedor: "Ana García", articulo: "ART015", cantidad: 12, importe: 9600, costo: 5880 },
  { fecha: "2026-01-22", local: "MG", vendedor: "María Rodríguez", articulo: "ART006", cantidad: 15, importe: 13500, costo: 9750 },
  { fecha: "2026-01-23", local: "MG", vendedor: "Carlos López", articulo: "ART001", cantidad: 45, importe: 33750, costo: 18900 },
  { fecha: "2026-01-26", local: "MG", vendedor: "Ana García", articulo: "ART019", cantidad: 35, importe: 9450, costo: 5950 },
  { fecha: "2026-01-27", local: "MG", vendedor: "María Rodríguez", articulo: "ART011", cantidad: 8, importe: 14400, costo: 9600 },
  { fecha: "2026-01-28", local: "MG", vendedor: "Carlos López", articulo: "ART009", cantidad: 50, importe: 14500, costo: 9500 },
  { fecha: "2026-01-29", local: "MG", vendedor: "Ana García", articulo: "ART016", cantidad: 20, importe: 11000, costo: 7000 },
  { fecha: "2026-01-30", local: "MG", vendedor: "María Rodríguez", articulo: "ART020", cantidad: 3, importe: 13500, costo: 9600 },

  // --- Sucursal Norte - Enero ---
  { fecha: "2026-01-02", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART001", cantidad: 30, importe: 22500, costo: 12600 },
  { fecha: "2026-01-03", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART005", cantidad: 5, importe: 19000, costo: 14000 },
  { fecha: "2026-01-05", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART003", cantidad: 25, importe: 6500, costo: 4500 },
  { fecha: "2026-01-06", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART010", cantidad: 20, importe: 9000, costo: 6200 },
  { fecha: "2026-01-07", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART018", cantidad: 7, importe: 13650, costo: 10150 },
  { fecha: "2026-01-08", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART002", cantidad: 18, importe: 9360, costo: 5760 },
  { fecha: "2026-01-09", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART006", cantidad: 12, importe: 10800, costo: 7800 },
  { fecha: "2026-01-12", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART011", cantidad: 8, importe: 14400, costo: 9600 },
  { fecha: "2026-01-13", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART004", cantidad: 15, importe: 9000, costo: 4200 },
  { fecha: "2026-01-14", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART014", cantidad: 22, importe: 8800, costo: 5720 },
  { fecha: "2026-01-15", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART001", cantidad: 35, importe: 26250, costo: 14700 },
  { fecha: "2026-01-16", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART017", cantidad: 6, importe: 8400, costo: 4320 },
  { fecha: "2026-01-19", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART012", cantidad: 10, importe: 9000, costo: 5800 },
  { fecha: "2026-01-20", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART007", cantidad: 20, importe: 8000, costo: 4400 },
  { fecha: "2026-01-21", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART005", cantidad: 4, importe: 15200, costo: 11200 },
  { fecha: "2026-01-22", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART019", cantidad: 28, importe: 7560, costo: 4760 },
  { fecha: "2026-01-23", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART013", cantidad: 30, importe: 6450, costo: 4350 },
  { fecha: "2026-01-26", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART009", cantidad: 35, importe: 10150, costo: 6650 },
  { fecha: "2026-01-27", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART016", cantidad: 15, importe: 8250, costo: 5250 },
  { fecha: "2026-01-28", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART001", cantidad: 25, importe: 18750, costo: 10500 },
  { fecha: "2026-01-29", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART015", cantidad: 8, importe: 6400, costo: 3920 },
  { fecha: "2026-01-30", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART018", cantidad: 5, importe: 9750, costo: 7250 },

  // --- Sucursal Sur - Enero ---
  { fecha: "2026-01-02", local: "GUILLON", vendedor: "Ana García", articulo: "ART001", cantidad: 28, importe: 21000, costo: 11760 },
  { fecha: "2026-01-03", local: "GUILLON", vendedor: "Carlos López", articulo: "ART005", cantidad: 4, importe: 15200, costo: 11200 },
  { fecha: "2026-01-06", local: "GUILLON", vendedor: "Ana García", articulo: "ART003", cantidad: 22, importe: 5720, costo: 3960 },
  { fecha: "2026-01-07", local: "GUILLON", vendedor: "Carlos López", articulo: "ART010", cantidad: 18, importe: 8100, costo: 5580 },
  { fecha: "2026-01-08", local: "GUILLON", vendedor: "Ana García", articulo: "ART018", cantidad: 6, importe: 11700, costo: 8700 },
  { fecha: "2026-01-09", local: "GUILLON", vendedor: "Carlos López", articulo: "ART006", cantidad: 10, importe: 9000, costo: 6500 },
  { fecha: "2026-01-12", local: "GUILLON", vendedor: "Ana García", articulo: "ART002", cantidad: 15, importe: 7800, costo: 4800 },
  { fecha: "2026-01-13", local: "GUILLON", vendedor: "Carlos López", articulo: "ART014", cantidad: 20, importe: 8000, costo: 5200 },
  { fecha: "2026-01-14", local: "GUILLON", vendedor: "Ana García", articulo: "ART011", cantidad: 7, importe: 12600, costo: 8400 },
  { fecha: "2026-01-15", local: "GUILLON", vendedor: "Carlos López", articulo: "ART001", cantidad: 32, importe: 24000, costo: 13440 },
  { fecha: "2026-01-16", local: "GUILLON", vendedor: "Ana García", articulo: "ART012", cantidad: 9, importe: 8100, costo: 5220 },
  { fecha: "2026-01-19", local: "GUILLON", vendedor: "Carlos López", articulo: "ART004", cantidad: 14, importe: 8400, costo: 3920 },
  { fecha: "2026-01-20", local: "GUILLON", vendedor: "Ana García", articulo: "ART017", cantidad: 5, importe: 7000, costo: 3600 },
  { fecha: "2026-01-21", local: "GUILLON", vendedor: "Carlos López", articulo: "ART007", cantidad: 18, importe: 7200, costo: 3960 },
  { fecha: "2026-01-22", local: "GUILLON", vendedor: "Ana García", articulo: "ART009", cantidad: 30, importe: 8700, costo: 5700 },
  { fecha: "2026-01-23", local: "GUILLON", vendedor: "Carlos López", articulo: "ART019", cantidad: 25, importe: 6750, costo: 4250 },
  { fecha: "2026-01-26", local: "GUILLON", vendedor: "Ana García", articulo: "ART016", cantidad: 12, importe: 6600, costo: 4200 },
  { fecha: "2026-01-27", local: "GUILLON", vendedor: "Carlos López", articulo: "ART005", cantidad: 3, importe: 11400, costo: 8400 },
  { fecha: "2026-01-28", local: "GUILLON", vendedor: "Ana García", articulo: "ART013", cantidad: 25, importe: 5375, costo: 3625 },
  { fecha: "2026-01-29", local: "GUILLON", vendedor: "Carlos López", articulo: "ART015", cantidad: 7, importe: 5600, costo: 3430 },
  { fecha: "2026-01-30", local: "GUILLON", vendedor: "Ana García", articulo: "ART008", cantidad: 12, importe: 7800, costo: 4560 },

  // --- Sucursal Este - Enero ---
  { fecha: "2026-01-02", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART001", cantidad: 22, importe: 16500, costo: 9240 },
  { fecha: "2026-01-03", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART005", cantidad: 3, importe: 11400, costo: 8400 },
  { fecha: "2026-01-06", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART018", cantidad: 5, importe: 9750, costo: 7250 },
  { fecha: "2026-01-07", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART003", cantidad: 18, importe: 4680, costo: 3240 },
  { fecha: "2026-01-08", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART010", cantidad: 15, importe: 6750, costo: 4650 },
  { fecha: "2026-01-09", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART006", cantidad: 8, importe: 7200, costo: 5200 },
  { fecha: "2026-01-12", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART002", cantidad: 12, importe: 6240, costo: 3840 },
  { fecha: "2026-01-13", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART011", cantidad: 5, importe: 9000, costo: 6000 },
  { fecha: "2026-01-14", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART014", cantidad: 16, importe: 6400, costo: 4160 },
  { fecha: "2026-01-15", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART001", cantidad: 20, importe: 15000, costo: 8400 },
  { fecha: "2026-01-16", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART004", cantidad: 12, importe: 7200, costo: 3360 },
  { fecha: "2026-01-19", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART015", cantidad: 6, importe: 4800, costo: 2940 },
  { fecha: "2026-01-20", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART012", cantidad: 8, importe: 7200, costo: 4640 },
  { fecha: "2026-01-21", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART007", cantidad: 15, importe: 6000, costo: 3300 },
  { fecha: "2026-01-22", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART016", cantidad: 10, importe: 5500, costo: 3500 },
  { fecha: "2026-01-23", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART019", cantidad: 20, importe: 5400, costo: 3400 },
  { fecha: "2026-01-26", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART009", cantidad: 25, importe: 7250, costo: 4750 },
  { fecha: "2026-01-27", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART013", cantidad: 20, importe: 4300, costo: 2900 },
  { fecha: "2026-01-28", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART017", cantidad: 4, importe: 5600, costo: 2880 },
  { fecha: "2026-01-29", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART008", cantidad: 10, importe: 6500, costo: 3800 },
  { fecha: "2026-01-30", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART018", cantidad: 4, importe: 7800, costo: 5800 },

  // ============================================================
  // FEBRERO 2026
  // ============================================================

  // --- Casa Central - Febrero ---
  { fecha: "2026-02-02", local: "MG", vendedor: "Ana García", articulo: "ART001", cantidad: 55, importe: 41250, costo: 23100 },
  { fecha: "2026-02-02", local: "MG", vendedor: "Carlos López", articulo: "ART005", cantidad: 9, importe: 34200, costo: 25200 },
  { fecha: "2026-02-03", local: "MG", vendedor: "María Rodríguez", articulo: "ART018", cantidad: 10, importe: 19500, costo: 14500 },
  { fecha: "2026-02-04", local: "MG", vendedor: "Ana García", articulo: "ART002", cantidad: 28, importe: 14560, costo: 8960 },
  { fecha: "2026-02-05", local: "MG", vendedor: "Carlos López", articulo: "ART006", cantidad: 18, importe: 16200, costo: 11700 },
  { fecha: "2026-02-06", local: "MG", vendedor: "María Rodríguez", articulo: "ART011", cantidad: 12, importe: 21600, costo: 14400 },
  { fecha: "2026-02-09", local: "MG", vendedor: "Ana García", articulo: "ART020", cantidad: 4, importe: 18000, costo: 12800 },
  { fecha: "2026-02-10", local: "MG", vendedor: "Carlos López", articulo: "ART003", cantidad: 35, importe: 9100, costo: 6300 },
  { fecha: "2026-02-11", local: "MG", vendedor: "María Rodríguez", articulo: "ART014", cantidad: 28, importe: 11200, costo: 7280 },
  { fecha: "2026-02-12", local: "MG", vendedor: "Ana García", articulo: "ART017", cantidad: 8, importe: 11200, costo: 5760 },
  { fecha: "2026-02-13", local: "MG", vendedor: "Carlos López", articulo: "ART001", cantidad: 50, importe: 37500, costo: 21000 },
  { fecha: "2026-02-16", local: "MG", vendedor: "María Rodríguez", articulo: "ART010", cantidad: 22, importe: 9900, costo: 6820 },
  { fecha: "2026-02-17", local: "MG", vendedor: "Ana García", articulo: "ART012", cantidad: 15, importe: 13500, costo: 8700 },
  { fecha: "2026-02-18", local: "MG", vendedor: "Carlos López", articulo: "ART005", cantidad: 7, importe: 26600, costo: 19600 },
  { fecha: "2026-02-19", local: "MG", vendedor: "María Rodríguez", articulo: "ART004", cantidad: 18, importe: 10800, costo: 5040 },
  { fecha: "2026-02-20", local: "MG", vendedor: "Ana García", articulo: "ART015", cantidad: 10, importe: 8000, costo: 4900 },
  { fecha: "2026-02-23", local: "MG", vendedor: "Carlos López", articulo: "ART018", cantidad: 9, importe: 17550, costo: 13050 },
  { fecha: "2026-02-24", local: "MG", vendedor: "María Rodríguez", articulo: "ART008", cantidad: 14, importe: 9100, costo: 5320 },
  { fecha: "2026-02-25", local: "MG", vendedor: "Ana García", articulo: "ART009", cantidad: 45, importe: 13050, costo: 8550 },
  { fecha: "2026-02-26", local: "MG", vendedor: "Carlos López", articulo: "ART016", cantidad: 18, importe: 9900, costo: 6300 },
  { fecha: "2026-02-27", local: "MG", vendedor: "María Rodríguez", articulo: "ART019", cantidad: 30, importe: 8100, costo: 5100 },

  // --- Sucursal Norte - Febrero ---
  { fecha: "2026-02-02", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART001", cantidad: 32, importe: 24000, costo: 13440 },
  { fecha: "2026-02-03", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART005", cantidad: 6, importe: 22800, costo: 16800 },
  { fecha: "2026-02-04", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART018", cantidad: 8, importe: 15600, costo: 11600 },
  { fecha: "2026-02-05", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART003", cantidad: 28, importe: 7280, costo: 5040 },
  { fecha: "2026-02-06", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART010", cantidad: 18, importe: 8100, costo: 5580 },
  { fecha: "2026-02-09", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART006", cantidad: 14, importe: 12600, costo: 9100 },
  { fecha: "2026-02-10", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART002", cantidad: 20, importe: 10400, costo: 6400 },
  { fecha: "2026-02-11", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART011", cantidad: 9, importe: 16200, costo: 10800 },
  { fecha: "2026-02-12", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART014", cantidad: 25, importe: 10000, costo: 6500 },
  { fecha: "2026-02-13", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART001", cantidad: 38, importe: 28500, costo: 15960 },
  { fecha: "2026-02-16", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART004", cantidad: 16, importe: 9600, costo: 4480 },
  { fecha: "2026-02-17", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART017", cantidad: 7, importe: 9800, costo: 5040 },
  { fecha: "2026-02-18", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART012", cantidad: 11, importe: 9900, costo: 6380 },
  { fecha: "2026-02-19", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART007", cantidad: 22, importe: 8800, costo: 4840 },
  { fecha: "2026-02-20", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART009", cantidad: 38, importe: 11020, costo: 7220 },
  { fecha: "2026-02-23", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART016", cantidad: 14, importe: 7700, costo: 4900 },
  { fecha: "2026-02-24", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART019", cantidad: 30, importe: 8100, costo: 5100 },
  { fecha: "2026-02-25", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART013", cantidad: 28, importe: 6020, costo: 4060 },
  { fecha: "2026-02-26", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART015", cantidad: 9, importe: 7200, costo: 4410 },
  { fecha: "2026-02-27", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART008", cantidad: 12, importe: 7800, costo: 4560 },

  // --- Sucursal Sur - Febrero ---
  { fecha: "2026-02-02", local: "GUILLON", vendedor: "Ana García", articulo: "ART001", cantidad: 25, importe: 18750, costo: 10500 },
  { fecha: "2026-02-03", local: "GUILLON", vendedor: "Carlos López", articulo: "ART005", cantidad: 5, importe: 19000, costo: 14000 },
  { fecha: "2026-02-04", local: "GUILLON", vendedor: "Ana García", articulo: "ART018", cantidad: 7, importe: 13650, costo: 10150 },
  { fecha: "2026-02-05", local: "GUILLON", vendedor: "Carlos López", articulo: "ART003", cantidad: 20, importe: 5200, costo: 3600 },
  { fecha: "2026-02-06", local: "GUILLON", vendedor: "Ana García", articulo: "ART010", cantidad: 16, importe: 7200, costo: 4960 },
  { fecha: "2026-02-09", local: "GUILLON", vendedor: "Carlos López", articulo: "ART006", cantidad: 11, importe: 9900, costo: 7150 },
  { fecha: "2026-02-10", local: "GUILLON", vendedor: "Ana García", articulo: "ART002", cantidad: 14, importe: 7280, costo: 4480 },
  { fecha: "2026-02-11", local: "GUILLON", vendedor: "Carlos López", articulo: "ART011", cantidad: 6, importe: 10800, costo: 7200 },
  { fecha: "2026-02-12", local: "GUILLON", vendedor: "Ana García", articulo: "ART014", cantidad: 18, importe: 7200, costo: 4680 },
  { fecha: "2026-02-13", local: "GUILLON", vendedor: "Carlos López", articulo: "ART001", cantidad: 30, importe: 22500, costo: 12600 },
  { fecha: "2026-02-16", local: "GUILLON", vendedor: "Ana García", articulo: "ART004", cantidad: 13, importe: 7800, costo: 3640 },
  { fecha: "2026-02-17", local: "GUILLON", vendedor: "Carlos López", articulo: "ART017", cantidad: 5, importe: 7000, costo: 3600 },
  { fecha: "2026-02-18", local: "GUILLON", vendedor: "Ana García", articulo: "ART012", cantidad: 8, importe: 7200, costo: 4640 },
  { fecha: "2026-02-19", local: "GUILLON", vendedor: "Carlos López", articulo: "ART007", cantidad: 16, importe: 6400, costo: 3520 },
  { fecha: "2026-02-20", local: "GUILLON", vendedor: "Ana García", articulo: "ART009", cantidad: 28, importe: 8120, costo: 5320 },
  { fecha: "2026-02-23", local: "GUILLON", vendedor: "Carlos López", articulo: "ART016", cantidad: 11, importe: 6050, costo: 3850 },
  { fecha: "2026-02-24", local: "GUILLON", vendedor: "Ana García", articulo: "ART019", cantidad: 22, importe: 5940, costo: 3740 },
  { fecha: "2026-02-25", local: "GUILLON", vendedor: "Carlos López", articulo: "ART013", cantidad: 22, importe: 4730, costo: 3190 },
  { fecha: "2026-02-26", local: "GUILLON", vendedor: "Ana García", articulo: "ART015", cantidad: 6, importe: 4800, costo: 2940 },
  { fecha: "2026-02-27", local: "GUILLON", vendedor: "Carlos López", articulo: "ART008", cantidad: 11, importe: 7150, costo: 4180 },

  // --- Sucursal Este - Febrero ---
  { fecha: "2026-02-02", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART001", cantidad: 20, importe: 15000, costo: 8400 },
  { fecha: "2026-02-03", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART005", cantidad: 4, importe: 15200, costo: 11200 },
  { fecha: "2026-02-04", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART018", cantidad: 6, importe: 11700, costo: 8700 },
  { fecha: "2026-02-05", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART003", cantidad: 16, importe: 4160, costo: 2880 },
  { fecha: "2026-02-06", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART010", cantidad: 14, importe: 6300, costo: 4340 },
  { fecha: "2026-02-09", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART006", cantidad: 9, importe: 8100, costo: 5850 },
  { fecha: "2026-02-10", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART002", cantidad: 11, importe: 5720, costo: 3520 },
  { fecha: "2026-02-11", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART011", cantidad: 6, importe: 10800, costo: 7200 },
  { fecha: "2026-02-12", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART014", cantidad: 14, importe: 5600, costo: 3640 },
  { fecha: "2026-02-13", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART001", cantidad: 18, importe: 13500, costo: 7560 },
  { fecha: "2026-02-16", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART004", cantidad: 11, importe: 6600, costo: 3080 },
  { fecha: "2026-02-17", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART015", cantidad: 7, importe: 5600, costo: 3430 },
  { fecha: "2026-02-18", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART012", cantidad: 7, importe: 6300, costo: 4060 },
  { fecha: "2026-02-19", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART007", cantidad: 14, importe: 5600, costo: 3080 },
  { fecha: "2026-02-20", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART009", cantidad: 22, importe: 6380, costo: 4180 },
  { fecha: "2026-02-23", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART016", cantidad: 9, importe: 4950, costo: 3150 },
  { fecha: "2026-02-24", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART019", cantidad: 18, importe: 4860, costo: 3060 },
  { fecha: "2026-02-25", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART013", cantidad: 18, importe: 3870, costo: 2610 },
  { fecha: "2026-02-26", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART017", cantidad: 5, importe: 7000, costo: 3600 },
  { fecha: "2026-02-27", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART008", cantidad: 9, importe: 5850, costo: 3420 },

  // ============================================================
  // MARZO 2026
  // ============================================================

  // --- Casa Central - Marzo ---
  { fecha: "2026-03-02", local: "MG", vendedor: "Ana García", articulo: "ART001", cantidad: 60, importe: 45000, costo: 25200 },
  { fecha: "2026-03-02", local: "MG", vendedor: "Carlos López", articulo: "ART005", cantidad: 10, importe: 38000, costo: 28000 },
  { fecha: "2026-03-03", local: "MG", vendedor: "María Rodríguez", articulo: "ART018", cantidad: 14, importe: 27300, costo: 20300 },
  { fecha: "2026-03-04", local: "MG", vendedor: "Ana García", articulo: "ART020", cantidad: 6, importe: 27000, costo: 19200 },
  { fecha: "2026-03-05", local: "MG", vendedor: "Carlos López", articulo: "ART002", cantidad: 35, importe: 18200, costo: 11200 },
  { fecha: "2026-03-06", local: "MG", vendedor: "María Rodríguez", articulo: "ART011", cantidad: 16, importe: 28800, costo: 19200 },
  { fecha: "2026-03-09", local: "MG", vendedor: "Ana García", articulo: "ART006", cantidad: 22, importe: 19800, costo: 14300 },
  { fecha: "2026-03-10", local: "MG", vendedor: "Carlos López", articulo: "ART003", cantidad: 42, importe: 10920, costo: 7560 },
  { fecha: "2026-03-11", local: "MG", vendedor: "María Rodríguez", articulo: "ART014", cantidad: 32, importe: 12800, costo: 8320 },
  { fecha: "2026-03-12", local: "MG", vendedor: "Ana García", articulo: "ART017", cantidad: 12, importe: 16800, costo: 8640 },
  { fecha: "2026-03-13", local: "MG", vendedor: "Carlos López", articulo: "ART001", cantidad: 65, importe: 48750, costo: 27300 },
  { fecha: "2026-03-16", local: "MG", vendedor: "María Rodríguez", articulo: "ART010", cantidad: 28, importe: 12600, costo: 8680 },
  { fecha: "2026-03-17", local: "MG", vendedor: "Ana García", articulo: "ART012", cantidad: 20, importe: 18000, costo: 11600 },
  { fecha: "2026-03-18", local: "MG", vendedor: "Carlos López", articulo: "ART005", cantidad: 8, importe: 30400, costo: 22400 },
  { fecha: "2026-03-19", local: "MG", vendedor: "María Rodríguez", articulo: "ART004", cantidad: 22, importe: 13200, costo: 6160 },
  { fecha: "2026-03-20", local: "MG", vendedor: "Ana García", articulo: "ART015", cantidad: 14, importe: 11200, costo: 6860 },
  { fecha: "2026-03-23", local: "MG", vendedor: "Carlos López", articulo: "ART018", cantidad: 11, importe: 21450, costo: 15950 },
  { fecha: "2026-03-24", local: "MG", vendedor: "María Rodríguez", articulo: "ART008", cantidad: 18, importe: 11700, costo: 6840 },
  { fecha: "2026-03-25", local: "MG", vendedor: "Ana García", articulo: "ART009", cantidad: 55, importe: 15950, costo: 10450 },
  { fecha: "2026-03-25", local: "MG", vendedor: "Carlos López", articulo: "ART016", cantidad: 22, importe: 12100, costo: 7700 },

  // --- Sucursal Norte - Marzo ---
  { fecha: "2026-03-02", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART001", cantidad: 38, importe: 28500, costo: 15960 },
  { fecha: "2026-03-03", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART005", cantidad: 7, importe: 26600, costo: 19600 },
  { fecha: "2026-03-04", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART018", cantidad: 9, importe: 17550, costo: 13050 },
  { fecha: "2026-03-05", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART003", cantidad: 32, importe: 8320, costo: 5760 },
  { fecha: "2026-03-06", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART010", cantidad: 22, importe: 9900, costo: 6820 },
  { fecha: "2026-03-09", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART006", cantidad: 16, importe: 14400, costo: 10400 },
  { fecha: "2026-03-10", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART002", cantidad: 24, importe: 12480, costo: 7680 },
  { fecha: "2026-03-11", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART011", cantidad: 10, importe: 18000, costo: 12000 },
  { fecha: "2026-03-12", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART014", cantidad: 28, importe: 11200, costo: 7280 },
  { fecha: "2026-03-13", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART001", cantidad: 42, importe: 31500, costo: 17640 },
  { fecha: "2026-03-16", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART004", cantidad: 18, importe: 10800, costo: 5040 },
  { fecha: "2026-03-17", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART017", cantidad: 8, importe: 11200, costo: 5760 },
  { fecha: "2026-03-18", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART012", cantidad: 13, importe: 11700, costo: 7540 },
  { fecha: "2026-03-19", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART007", cantidad: 25, importe: 10000, costo: 5500 },
  { fecha: "2026-03-20", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART009", cantidad: 42, importe: 12180, costo: 7980 },
  { fecha: "2026-03-23", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART016", cantidad: 16, importe: 8800, costo: 5600 },
  { fecha: "2026-03-24", local: "LOMAS", vendedor: "Juan Martínez", articulo: "ART019", cantidad: 35, importe: 9450, costo: 5950 },
  { fecha: "2026-03-25", local: "LOMAS", vendedor: "Laura Fernández", articulo: "ART013", cantidad: 30, importe: 6450, costo: 4350 },

  // --- Sucursal Sur - Marzo ---
  { fecha: "2026-03-02", local: "GUILLON", vendedor: "Ana García", articulo: "ART001", cantidad: 32, importe: 24000, costo: 13440 },
  { fecha: "2026-03-03", local: "GUILLON", vendedor: "Carlos López", articulo: "ART005", cantidad: 6, importe: 22800, costo: 16800 },
  { fecha: "2026-03-04", local: "GUILLON", vendedor: "Ana García", articulo: "ART018", cantidad: 8, importe: 15600, costo: 11600 },
  { fecha: "2026-03-05", local: "GUILLON", vendedor: "Carlos López", articulo: "ART003", cantidad: 26, importe: 6760, costo: 4680 },
  { fecha: "2026-03-06", local: "GUILLON", vendedor: "Ana García", articulo: "ART010", cantidad: 20, importe: 9000, costo: 6200 },
  { fecha: "2026-03-09", local: "GUILLON", vendedor: "Carlos López", articulo: "ART006", cantidad: 13, importe: 11700, costo: 8450 },
  { fecha: "2026-03-10", local: "GUILLON", vendedor: "Ana García", articulo: "ART002", cantidad: 17, importe: 8840, costo: 5440 },
  { fecha: "2026-03-11", local: "GUILLON", vendedor: "Carlos López", articulo: "ART011", cantidad: 8, importe: 14400, costo: 9600 },
  { fecha: "2026-03-12", local: "GUILLON", vendedor: "Ana García", articulo: "ART014", cantidad: 22, importe: 8800, costo: 5720 },
  { fecha: "2026-03-13", local: "GUILLON", vendedor: "Carlos López", articulo: "ART001", cantidad: 36, importe: 27000, costo: 15120 },
  { fecha: "2026-03-16", local: "GUILLON", vendedor: "Ana García", articulo: "ART004", cantidad: 16, importe: 9600, costo: 4480 },
  { fecha: "2026-03-17", local: "GUILLON", vendedor: "Carlos López", articulo: "ART017", cantidad: 6, importe: 8400, costo: 4320 },
  { fecha: "2026-03-18", local: "GUILLON", vendedor: "Ana García", articulo: "ART012", cantidad: 10, importe: 9000, costo: 5800 },
  { fecha: "2026-03-19", local: "GUILLON", vendedor: "Carlos López", articulo: "ART007", cantidad: 20, importe: 8000, costo: 4400 },
  { fecha: "2026-03-20", local: "GUILLON", vendedor: "Ana García", articulo: "ART009", cantidad: 32, importe: 9280, costo: 6080 },
  { fecha: "2026-03-23", local: "GUILLON", vendedor: "Carlos López", articulo: "ART016", cantidad: 13, importe: 7150, costo: 4550 },
  { fecha: "2026-03-24", local: "GUILLON", vendedor: "Ana García", articulo: "ART019", cantidad: 28, importe: 7560, costo: 4760 },
  { fecha: "2026-03-25", local: "GUILLON", vendedor: "Carlos López", articulo: "ART015", cantidad: 8, importe: 6400, costo: 3920 },

  // --- Sucursal Este - Marzo ---
  { fecha: "2026-03-02", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART001", cantidad: 26, importe: 19500, costo: 10920 },
  { fecha: "2026-03-03", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART005", cantidad: 5, importe: 19000, costo: 14000 },
  { fecha: "2026-03-04", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART018", cantidad: 7, importe: 13650, costo: 10150 },
  { fecha: "2026-03-05", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART003", cantidad: 20, importe: 5200, costo: 3600 },
  { fecha: "2026-03-06", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART010", cantidad: 17, importe: 7650, costo: 5270 },
  { fecha: "2026-03-09", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART006", cantidad: 10, importe: 9000, costo: 6500 },
  { fecha: "2026-03-10", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART002", cantidad: 13, importe: 6760, costo: 4160 },
  { fecha: "2026-03-11", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART011", cantidad: 7, importe: 12600, costo: 8400 },
  { fecha: "2026-03-12", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART014", cantidad: 17, importe: 6800, costo: 4420 },
  { fecha: "2026-03-13", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART001", cantidad: 22, importe: 16500, costo: 9240 },
  { fecha: "2026-03-16", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART004", cantidad: 14, importe: 8400, costo: 3920 },
  { fecha: "2026-03-17", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART015", cantidad: 8, importe: 6400, costo: 3920 },
  { fecha: "2026-03-18", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART012", cantidad: 9, importe: 8100, costo: 5220 },
  { fecha: "2026-03-19", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART007", cantidad: 18, importe: 7200, costo: 3960 },
  { fecha: "2026-03-20", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART009", cantidad: 28, importe: 8120, costo: 5320 },
  { fecha: "2026-03-23", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART016", cantidad: 11, importe: 6050, costo: 3850 },
  { fecha: "2026-03-24", local: "JAGUEL", vendedor: "María Rodríguez", articulo: "ART019", cantidad: 22, importe: 5940, costo: 3740 },
  { fecha: "2026-03-25", local: "JAGUEL", vendedor: "Juan Martínez", articulo: "ART013", cantidad: 24, importe: 5160, costo: 3480 }
];
