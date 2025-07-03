import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private currentLanguage = signal<string>('en');
  private supportedLanguages = ['en', 'ar', 'fr', 'zh'];

  getCurrentLanguage() {
    return this.currentLanguage.asReadonly();
  }

  getSupportedLanguages() {
    return this.supportedLanguages;
  }

  setLanguage(lang: string) {
    if (this.supportedLanguages.includes(lang)) {
      this.currentLanguage.set(lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  }

  isRTL() {
    return this.currentLanguage() === 'ar';
  }
}