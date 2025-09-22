import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocationService {
  getPosition(): Promise<{ lat: number; lon: number; }> {
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) return reject('Geolocation not supported');
      navigator.geolocation.getCurrentPosition(
        pos => resolve({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
        err => reject(err)
      );
    });
  }
}
