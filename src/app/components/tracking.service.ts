// src/app/components/tracking.service.ts
import { Injectable } from '@angular/core';

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
}
