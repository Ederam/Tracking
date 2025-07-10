import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 importa CommonModule
import { signal } from '@angular/core';



@Component({
  selector: 'app-tracking-timeline',
  standalone: true,
  imports: [CommonModule], // 👈 agrégalo aquí
  templateUrl: './tracking-timeline.component.html',
  styleUrls: ['./tracking-timeline.component.scss'],
})
export class TrackingTimelineComponent {
  steps = [
    { label: 'Recibimos tu envío', date: '16/02/2024 11:55 a.m.' },
    { label: 'Bodega de origen', date: '16/02/2024 06:04 p.m.' },
    { label: 'Viajando', date: '17/02/2024 12:04 a.m.' },
    { label: 'Bodega de destino', date: '17/02/2024 05:04 a.m.' },
    { label: 'Entregado', date: '17/02/2024 8 a.m. - 10 a.m.' }
  ];

  //currentStep = 0;
  currentStep = signal(0);


  nextStep() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
}
