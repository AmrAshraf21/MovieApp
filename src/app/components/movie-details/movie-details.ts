import { Component, effect, inject, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { LanguageService } from '../../services/language.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MovieDetails, Movie, Review } from '../../models/movie.model';
import { CommonModule } from '@angular/common';
import { WishlistService } from '../../services/wishlist.service';
import { MovieCardComponent } from '../movie-card/movie-card';
import { TabViewModule } from 'primeng/tabview';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { ChangeDetectorRef } from '@angular/core';
import { PosterUrlPipe } from '../../pipes/poster-url-pipe';
import { ProgressSpinner } from 'primeng/progressspinner';
import { Tag } from 'primeng/tag';
import { ImageModule } from 'primeng/image';
import { SafePipe } from '../../pipes/safe-pipe';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [
  CommonModule,
    MovieCardComponent,
    TabViewModule,
    DividerModule,
    ButtonModule,
    PosterUrlPipe,
    ProgressSpinner,
    RouterModule,
    Tag,
    ImageModule,
    SafePipe
  ],
  templateUrl: './movie-details.html',
  styleUrls: ['./movie-details.scss']
})
export class MovieDetailsComponent {
  private apiService = inject(ApiService);
  private languageService = inject(LanguageService);
  private route = inject(ActivatedRoute);
  private wishlistService = inject(WishlistService);
  private cdr = inject(ChangeDetectorRef);


  movie = signal<MovieDetails | null>(null);
  recommendedMovies = signal<Movie[]>([]);
  reviews = signal<Review[]>([]);
  isLoading = signal(false);

  trailerUrl: string | null = null;
  // showTrailer: boolean = false;
  showTrailer = signal(false);



  // constructor() {
  //   this.route.params.subscribe(params => {
  //     this.loadMovieDetails(params['id']);
  //   });

    // effect(()=>{
    //  const lang =  this.languageService.getCurrentLanguage();
    //   if (this.movie()) {
    //     this.loadMovieDetails(this.movie()!.id);
    //   }
    // })
    
    
  // }

  ngOnInit(){
     this.route.params.subscribe(params => {
       
      this.loadMovieDetails(params['id']);
      // this.loadMovieVideo(params['id']);
    });
    
  }

  loadMovieDetails(id: number) {
    this.isLoading.set(true);
    
    this.apiService.getMovieDetails(id, this.languageService.getCurrentLanguage()())
      .subscribe(movie => {
        
        
        this.movie.set(movie);
        this.isLoading.set(false);
      });

    this.apiService.getMovieRecommendations(id, this.languageService.getCurrentLanguage()())
      .subscribe(response => {
        this.recommendedMovies.set(response.results);
      });

    this.apiService.getMovieReviews(id, this.languageService.getCurrentLanguage()())
      .subscribe(response => {
        
        this.reviews.set(response.results);
      });
  }

  toggleWishlist() {
    if (this.movie()) {
      this.wishlistService.toggleWishlist(this.movie()!, 'movie');
    }
  }

  isInWishlist(): boolean {
    return this.movie() ? this.wishlistService.isInWishlist(this.movie()!.id, 'movie') : false;
  }

  openTrailerModal(id:number) {
    this.apiService.getMovieVideo(id).subscribe((data:any) => {
      const trailer = data.results.find(
        (v: any) => v.site === 'YouTube' && v.type === 'Trailer'
      );

      if (trailer) {
        this.trailerUrl = `https://www.youtube.com/embed/${trailer.key}`;
       this.showTrailer.set(true);
        // this.showTrailer = true;
        // this.cdr.detectChanges();
      }
    });
  }

  closeTrailerModal() {
    this.showTrailer.set(false);
    this.trailerUrl = null;
  }

  // loadMovieVideo(id:number){
  //   this.apiService.getMovieVideo(id).subscribe((data:any)=>{
  //     console.log(data.results);
      
  //     const isTrailerExist = data.results.find((e:any)=>
  //       e.site ==='YouTube' && e.type==='Trailer'
  //     )
  //     if(isTrailerExist){
  //       this.video = `https://www.youtube.com/embed/${isTrailerExist.key}`
        
  //     }else{
  //       this.video = null
  //     }
      
  //   })
  // }
}