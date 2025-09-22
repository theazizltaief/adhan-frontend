import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-adhan-player',
  template: `
    <div>
      <button (click)="play()">Jouer l'Adhan</button>
      <audio #audio controls preload="auto">
        <source [src]="soundUrl" type="audio/mpeg" />
      </audio>
    </div>
  `
})
export class AdhanPlayerComponent {
  @Input() soundUrl = '/public/adhan.mp3'; // mets ton mp3 dans assets
  @ViewChild('audio') audioRef!: ElementRef<HTMLAudioElement>;

  async play() {
    try {
      const audio = this.audioRef.nativeElement;
      // Important : must be triggered par interaction utilisateur au moins une fois
      await audio.play();
    } catch (err) {
      console.error('Impossible de jouer l\'audio', err);
    }
  }
}
