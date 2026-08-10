import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'rpg-theme';
  private themeSubject = new BehaviorSubject<Theme>(this.detectInitial());
  theme$ = this.themeSubject.asObservable();

  private detectInitial(): Theme {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored === 'dark') return 'dark';
      if (stored === 'light') return 'light';
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    } catch (e) {
      // ignore
    }
    return 'light';
  }

  init() {
    // Apply currently detected theme
    this.apply(this.themeSubject.value);
  }

  get(): Theme {
    return this.themeSubject.value;
  }

  set(theme: Theme) {
    this.themeSubject.next(theme);
    try { localStorage.setItem(this.storageKey, theme); } catch (e) {}
    this.apply(theme);
  }

  toggle() {
    const next: Theme = this.get() === 'dark' ? 'light' : 'dark';
    this.set(next);
    return next;
  }

  private apply(theme: Theme) {
    if (typeof document === 'undefined') return;
    if (theme === 'dark') document.documentElement.classList.add('theme-dark');
    else document.documentElement.classList.remove('theme-dark');
  }
}
