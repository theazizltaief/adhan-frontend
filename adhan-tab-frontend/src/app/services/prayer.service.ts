import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class PrayerService {
  constructor(private http: HttpClient) {}
  getTimes(lat: number, lon: number, date?: string) {
    const params = new URLSearchParams();
    params.set('lat', String(lat));
    params.set('lon', String(lon));
    if (date) params.set('date', date);
    return this.http.get(`/api/PrayerTimes?${params.toString()}`);
  }
}
