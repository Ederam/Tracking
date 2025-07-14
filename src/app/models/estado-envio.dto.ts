export interface EstadoEnvio {
estado: EstadoEnvioTipo;
  porIniciar?: string;
  recibimosTuEnvio?: string;
  bodegaOrigen?: string;
  viajando?: string;
  bodegaDestino?: string;
  primerIntento?: string;
  reclamarOficina?: string;
  entregado?: string;
}

// estado-envio.model.ts
export type EstadoEnvioTipo = 
  | 'Envio-Exitoso'
  | 'Pre-Guia'
  | 'Entrega-Fallida'
  | 'Entrega-Oficina';
