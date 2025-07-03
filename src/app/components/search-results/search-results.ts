import { Component, effect, inject, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Movie } from '../../models/movie.model';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card';
import { PaginatorModule } from 'primeng/paginator';
import { LanguageService } from '../../services/language.service';
import { ProgressSpinner } from 'primeng/progressspinner';
import { WishlistService } from '../../services/wishlist.service';
import { HeaderComponent } from '../header/header';
import { PosterUrlPipe } from '../../pipes/poster-url-pipe';
import { HeartIcon } from '../heart-icon/heart-icon';
import { MonthTranformPipe } from '../../pipes/month-tranform-pipe';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, MonthTranformPipe,HeartIcon,MovieCardComponent,PosterUrlPipe ,RouterModule,PaginatorModule,ProgressSpinner],
  templateUrl: './search-results.html',
  styleUrls: ['./search-results.scss']
})
export class SearchResultsComponent {
  private apiService = inject(ApiService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private languageService = inject(LanguageService);
  private wishlistService = inject(WishlistService);

  movies = signal<Movie[]>([]);
  searchQuery = signal('');
  totalRecords = signal(0);
  currentPage = signal(1);
  isLoading = signal(false);

  constructor() {
    this.route.queryParams.subscribe(params => {
      this.searchQuery.set(params['query'] || '');
      this.currentPage.set(params['page'] || 1);
      if (this.searchQuery()) {
        this.loadSearchResults();
      }
    });
    
    effect(() => {
    const lang = this.languageService.getCurrentLanguage()();

    if (this.searchQuery()) {
      this.loadSearchResults();
    }
  });
  }

  loadSearchResults() {
    this.isLoading.set(true);
    this.apiService.searchMovies(
      this.searchQuery(),
      this.languageService.getCurrentLanguage()(),
      this.currentPage()
    ).subscribe({
      next: (response) => {
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

   

  


  toggleWishlist(event: Event,movie:Movie) {
    
    
    event.stopPropagation();
    event.preventDefault();
    this.wishlistService.toggleWishlist(movie, 'movie');
  }

  isInWishlist(movie:Movie) {
    return this.wishlistService.isInWishlist(movie.id, 'movie');
  }
}