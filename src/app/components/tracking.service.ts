// src/app/components/tracking.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EstadoEnvio } from '../models/estado-envio.dto';
//import { estadosMock } from './mock-estados-envio';
import { estadosMock } from '../models/mock-estados-envio';

@Injectable({ providedIn: 'root' })
export class TrackingService {
  getTrackingSteps(): Promise<{ label: string; date: string }[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve([
          { label: 'Recibimos tu envío', date: '16/02/2024 11:55 a.m.' },
          { label: 'Bodega de origen', date: '16/02/2024 06:04 p.m.' },
          { label: 'Viajando', date: '17/02/2024 12:04 a.m.' },
          { label: 'Bodega de destino', date: '17/02/2024 05:04 a.m.' },
          { label: 'Entregado', date: '17/02/2024 8 a.m. - 10 a.m.' }
        ]);
      }, 1000); // Simula una llamada a backend de 1 segundo
    });
  }

  obtenerEstados(): Observable<EstadoEnvio> {
  //obtenerEstados(): Observable<EstadoEnvio[]> {
    console.log('estadosMock', estadosMock);
    var result = this.getEstadoPorNombre('Envio-Exitoso');
    console.log('result', result);
    return of(result);
    // return of(estadosMock);
  }

  getEstadoPorNombre(estadoBuscado: string): any | null {
  return estadosMock.find(e => e.estado === estadoBuscado) || null;
}


  
}
