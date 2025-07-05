import { Component, inject, signal } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { LanguageService } from '../../services/language.service';
import { RouterLink, RouterModule } from '@angular/router';
import { TabsModule } from 'primeng/tabs';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import {  DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TabPanel, TabView } from 'primeng/tabview';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ToolbarModule } from 'primeng/toolbar';


import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule ,SelectModule,TabsModule,ToolbarModule,RouterModule,RouterLink, OverlayBadgeModule,FormsModule,TabView,TabPanel,AutoCompleteModule, BadgeModule,ButtonModule,DropdownModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  private wishlistService = inject(WishlistService);
  private languageService = inject(LanguageService);

  wishlistCount = this.wishlistService.wishListCount;
  currentLanguage = this.languageService.getCurrentLanguage();
  supportedLanguages = this.languageService.getSupportedLanguages();

  navItems: MenuItem[] = [
    { label: 'Movies', routerLink: 'movies',icon:'pi pi-home' },
    { label: 'TV Shows', routerLink: 'tv-shows',icon:'pi pi-video' },
    { 
      label: 'Wishlist', 
      routerLink: '/wishlist',
      icon:'pi pi-heart-fill',
      badge: this.wishlistCount.toString(),
      badgeStyleClass: 'p-badge-danger'
    }
  ];

  changeLanguage(lang:any) {
    this.languageService.setLanguage(lang);
  }
}