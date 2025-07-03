import { Component, effect, inject, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { LanguageService } from '../../services/language.service';
import {  TVShowCard } from '../tv-shows-card/tv-shows-card';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { TVShow } from '../../models/tv-show-model';
import { ProgressSpinner } from 'primeng/progressspinner';


@Component({
  selector: 'app-tv-shows-list',
  standalone: true,
  imports: [CommonModule, TVShowCard, PaginatorModule, ProgressSpinner],
templateUrl: './tv-shows-list.html',
  styleUrls: ['./tv-shows-list.scss']
})
export class TVShowsListComponent {
  private apiService = inject(ApiService);
  private languageService = inject(LanguageService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  tvShows = signal<TVShow[]>([]);
  totalRecords = signal(0);
  currentPage = signal(1);
  isLoading = signal(false);

  constructor() {
    this.route.queryParams.subscribe(params => {
      this.currentPage.set(params['page'] || 1);
      
    });
    effect(()=>{
     const lang =  this.languageService.getCurrentLanguage()();
      this.loadTVShows();
    })
   
  }

  loadTVShows() {
    this.isLoading.set(true);
    this.apiService.getPopularTVShows(
      this.currentPage(),
      this.languageService.getCurrentLanguage()()
    ).subscribe({
      next: (response) => {
        console.log(response);
        
        this.tvShows.set(response.results);
        this.totalRecords.set(response.total_results);
        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  onPageChange(event: any) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page: event.page + 1 },
      queryParamsHandling: 'merge'
    });
  }
}