import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private audio: HTMLAudioElement | null = null;

  playAudio(fileUrl: string): void {
    if (this.audio) {
      this.audio.pause();
    }
    
    this.audio = new Audio(fileUrl);
    this.audio.play().catch((err) => console.error('Error playing audio:', err));
  }

  pauseAudio(): void {
    this.audio?.pause();
  }

  stopAudio(): void {
    if (this.audio) {
      this.audio.pause();
      this.audio.currentTime = 0;
    }
  }
}
