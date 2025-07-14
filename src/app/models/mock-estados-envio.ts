// mock-estados-envio.ts
import { EstadoEnvio } from './estado-envio.dto';

const formato = (offsetHoras: number): string => {
  const fecha = new Date(Date.now() + offsetHoras * 3600 * 1000);
  return fecha.toLocaleString('es-CO', {
    hour12: true,
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const estadosMock: EstadoEnvio[] = [
  {
    estado: 'Envio-Exitoso',
    recibimosTuEnvio: formato(-72),
    bodegaOrigen: formato(-70),
    viajando: formato(-48),
    bodegaDestino: formato(-24),
    entregado: formato(-2),
  },
  {
    estado: 'Pre-Guia',
    porIniciar: formato(-100),
    recibimosTuEnvio: formato(-80),
    bodegaOrigen: formato(-60),
    viajando: formato(-48),
    bodegaDestino: formato(-24),
    entregado: formato(-1),
  },
  {
    estado: 'Entrega-Fallida',
    recibimosTuEnvio: formato(-90),
    bodegaOrigen: formato(-70),
    viajando: formato(-50),
    bodegaDestino: formato(-30),
    primerIntento: formato(-2),
  },
  {
    estado: 'Entrega-Oficina',
    recibimosTuEnvio: formato(-85),
    bodegaOrigen: formato(-65),
    viajando: formato(-45),
    bodegaDestino: formato(-25),
    reclamarOficina: formato(-1),
  },
];
