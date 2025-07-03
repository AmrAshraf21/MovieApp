import { computed, effect, Injectable, signal } from '@angular/core';
import { Movie } from '../models/movie.model';
import { TVShow } from '../models/tv-show-model';
import { WishlistItem } from '../models/wishlist-item.model';

@Injectable({ providedIn: 'root' })
export class WishlistService {


  private wishlistItems = signal<WishlistItem[]>(this.loadFromStorage());
  public wishListCount = signal<number>(this.wishlistItems().length);


  constructor() {
    effect(() => {
      this.wishListCount.set(this.wishlistItems().length);
      localStorage.setItem('wishlist', JSON.stringify(this.wishlistItems()));
    })
  }

  movies = computed(() => {

    return this.wishlistItems().filter(item => item.type === 'movie')
  }
  );

  tvShowsOnly = computed(() => {
   return this.wishlistItems().filter(x => x.type === 'tvshow');
  })


  getWishlist() {
    return this.wishlistItems.asReadonly();
  }

  getWishlistCount() {
    return this.wishlistItems().length;
  }
  private loadFromStorage(): WishlistItem[] {
    try {
      const data = localStorage.getItem('wishlist');
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }


  addToWishlist(item: Movie | TVShow, type: 'movie' | 'tvshow') {
    const currentItems = this.wishlistItems();


    if (!currentItems.some(i => i.id === item.id && i.type === type)) {
      const wishlistItem: any = {
        id: item.id,
        type,
        overview: item.overview,
        poster_path: item.poster_path,
        vote_average: item.vote_average,
        vote_count: item.vote_count,
        ...(type === 'movie' ? {
          title: (item as Movie).title,
          release_date: (item as Movie).release_date
        } : {
          name: (item as TVShow).name,
          first_air_date: (item as TVShow).first_air_date
        })
      };
      this.wishlistItems.update(items => [...items, wishlistItem]);
    }
  }

  removeFromWishlist(id: number, type: 'movie' | 'tvshow') {
    this.wishlistItems.update(items =>
      items.filter(item => !(item.id === id && item.type === type))
    );
  }

  isInWishlist(id: number, type: 'movie' | 'tvshow'): boolean {
    return this.wishlistItems().some(item => item.id === id && item.type === type);
  }

  toggleWishlist(item: Movie | TVShow, type: 'movie' | 'tvshow') {
    if (this.isInWishlist(item.id, type)) {
      this.removeFromWishlist(item.id, type);
    } else {
      this.addToWishlist(item, type);
    }
  }

  clearWishlist() {
    this.wishlistItems.set([]);
  }
}