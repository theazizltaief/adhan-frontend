import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';
import { PrayerService } from '../services/prayer.service';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
      <h1>Adhan Tab</h1>
      <button (click)="enable()">Activer Adhan</button>
      <div *ngIf="times">
        <h2>Horaires pour {{ times.data.date.readable || 'aujourd\'hui' }}</h2>
        <ul>
          <li>Fajr: {{ times.data.timings.Fajr }}</li>
          <li>Dhuhr: {{ times.data.timings.Dhuhr }}</li>
          <li>Asr: {{ times.data.timings.Asr }}</li>
          <li>Maghrib: {{ times.data.timings.Maghrib }}</li>
          <li>Isha: {{ times.data.timings.Isha }}</li>
        </ul>
      </div>
    </div>
  `
})
export class HomeComponent implements OnInit {
  times: any;
  constructor(private loc: LocationService, private prayer: PrayerService) {}

  ngOnInit() {}

  async enable() {
    try {
      const pos = await this.loc.getPosition();
      this.prayer.getTimes(pos.lat, pos.lon).subscribe((res:any) => {
        this.times = res;
        // ici tu peux planifier timers et afficher player
        console.log('times', res);
      });
    } catch (err) {
      alert('Impossible d\'obtenir la position: ' + JSON.stringify(err));
    }
  }
}
