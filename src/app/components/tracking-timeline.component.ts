import { Component, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackingService } from './tracking.service';
import { EstadoEnvio } from '../models/estado-envio.dto';

@Component({
  selector: 'app-tracking-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tracking-timeline.component.html',
  styleUrls: ['./tracking-timeline.component.scss'],
})
export class TrackingTimelineComponent {

  estados: EstadoEnvio[] = [];

  constructor(private trackingService: TrackingService) {}

  ngOnInit(): void {
    this.trackingService.obtenerEstados().subscribe((data) => {
      this.estados = data;
    });
  }
  /*
  steps = signal<{ label: string; date: string }[]>([]);
  currentStep = signal(0);

  constructor(private trackingService: TrackingService) {
    this.loadSteps();
  }

  async loadSteps() {
    const result = await this.trackingService.getTrackingSteps();
    this.steps.set(result);
  }

  nextStep() {
    if (this.currentStep() < this.steps().length - 1) {
      this.currentStep.set(this.currentStep() + 1);
    }
  }

  prevStep() {
    if (this.currentStep() > 0) {
      this.currentStep.set(this.currentStep() - 1);
    }
  }*/
}
