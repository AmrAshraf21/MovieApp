import { Routes } from '@angular/router';
import { MoviesListComponent } from './components/movie-list/movie-list';
import { MovieDetailsComponent } from './components/movie-details/movie-details';
import { TVShowsListComponent } from './components/tv-shows-list/tv-shows-list';
// import { TVShowDetailsComponent } from './features/tv-shows/pages/tv-show-details/tv-show-details.component';
import { WishlistComponent } from './components/wishlist/wishlist';
import { SearchResultsComponent } from './components/search-results/search-results';

export const routes: Routes = [
    //   { path: '', redirectTo: 'movies', pathMatch: 'full' },
    //   { path: 'movies', component: MoviesListComponent },
    //   { path: 'movies/search', component: SearchResultsComponent },
    //   { path: 'movies/:id', component: MovieDetailsComponent },
    //   { path: 'tv-shows', component: TVShowsListComponent },
    //   { path: 'tv-shows/:id', component: TVShowDetailsComponent },
    //   { path: 'wishlist', component: WishlistComponent },
    //   { path: '**', redirectTo: 'movies' }


    { path: '', redirectTo: 'movies', pathMatch: 'full' },
    { path: 'movies', loadComponent: () => import('./components/movie-list/movie-list').then(x => x.MoviesListComponent), pathMatch: 'full' },
    { path: 'movies/search', loadComponent: () => import('./components/search-results/search-results').then(x => x.SearchResultsComponent), pathMatch: 'full' },
    { path: 'movies/:id', loadComponent: () => import('./components/movie-details/movie-details').then(x => x.MovieDetailsComponent), pathMatch: 'full' },
    { path: 'tv-shows', loadComponent: () => import('./components/tv-shows-list/tv-shows-list').then(x => x.TVShowsListComponent), pathMatch: 'full' },
    { path: 'tv-shows/:id', loadComponent: () => import('./components/tv-show-details/tv-show-details').then(x => x.TvShowDetails), pathMatch: 'full' },
    { path: 'wishlist', loadComponent: () => import('./components/wishlist/wishlist').then(x => x.WishlistComponent), pathMatch: 'full' },
    { path: '**', redirectTo: 'movies' }




];