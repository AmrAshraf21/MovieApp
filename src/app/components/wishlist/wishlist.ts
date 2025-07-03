// features/wishlist/pages/wishlist/wishlist.component.ts
import { Component, inject } from '@angular/core';
import { WishlistService } from '../../services/wishlist.service';
import { CommonModule } from '@angular/common';
import { TVShowCard } from '../../components/tv-shows-card/tv-shows-card';
import { DividerModule } from 'primeng/divider';
import { Movie } from '../../models/movie.model';
import { TVShow } from '../../models/tv-show-model';
import { Button } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { PosterUrlPipe } from '../../pipes/poster-url-pipe';
import { MonthTranformPipe } from '../../pipes/month-tranform-pipe';
import { MovieCardComponent } from "../movie-card/movie-card";
import { TrimStringPipe } from '../../pipes/trim-string-pipe';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [
    CommonModule,
    PosterUrlPipe,
    MonthTranformPipe,
    Button,
    RouterModule,
    DividerModule,
    TrimStringPipe,
    MovieCardComponent,
    TVShowCard
],
  templateUrl: './wishlist.html',
  styleUrls: ['./wishlist.scss']
})
export class WishlistComponent {
  private wishlistService = inject(WishlistService);

  wishlistItems = this.wishlistService.getWishlist();
  showAl = false;

  movies  = this.wishlistService.movies;
  tvShows  = this.wishlistService.tvShowsOnly;





  removeFromWishlist(id: number, type: 'movie' | 'tvshow') {
    this.wishlistService.removeFromWishlist(id, type);
  }

  clearWishlist() {
    this.wishlistService.clearWishlist();
  }

  toggleString(){
    this.showAl = !this.showAl;
  }

  // Helper methods to properly type the items
  asMovie(item: any): Movie {
    return {
      id: item.id,
      title: item.title || item.name,
      poster_path: item.poster_path,
      vote_average: item.vote_average,
      overview: '',
      backdrop_path: null,
      release_date: item.release_date || item.first_air_date,
      vote_count: 0,
      genre_ids: []
    };
  }

  asTVShow(item: any): TVShow {
    return {
      id: item.id,
      name: item.name || item.title,
      poster_path: item.poster_path,
      vote_average: item.vote_average,
      overview: '',
      backdrop_path: null,
      first_air_date: item.first_air_date || item.release_date,
      vote_count: 0,
      genre_ids: []
    };
  }
}