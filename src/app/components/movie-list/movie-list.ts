import { Component, effect, inject, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { LanguageService } from '../../services/language.service';
import { MovieCardComponent } from '../movie-card/movie-card';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Movie } from '../../models/movie.model';
import { ProgressSpinner } from 'primeng/progressspinner';
import { CarouselModule } from 'primeng/carousel';



@Component({
  selector: 'app-movies-list',
  standalone: true,
  imports: [
    CommonModule,
    MovieCardComponent,
    PaginatorModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    CarouselModule,
    ProgressSpinner,
  ],
  templateUrl: './movie-list.html',
  styleUrls: ['./movie-list.scss']
})
export class MoviesListComponent {
  private apiService = inject(ApiService);
  private languageService = inject(LanguageService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  movies = signal<Movie[]>([]);
  totalRecords = signal(0);
  currentPage = signal(1);
  searchQuery = signal('');
  isLoading = signal(false);

  constructor() {
    this.route.queryParams.subscribe(params => {
      this.currentPage.set(params['page'] || 1);
    });

    effect(() => {
      const lang = this.languageService.getCurrentLanguage()();
      this.loadMovies();
    });
  }

  loadMovies() {
    this.isLoading.set(true);
    this.apiService.getNowPlayingMovies(this.currentPage(),this.languageService.getCurrentLanguage()()).subscribe({
      next: (response) => {
        console.log(response);
        
        this.movies.set(response.results);
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

  searchMovies() {
    if (this.searchQuery().trim()) {
      this.router.navigate(['/movies/search'], {
        queryParams: { query: this.searchQuery() }
      });
    }
  }
}