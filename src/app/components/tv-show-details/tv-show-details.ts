import { Component, inject, signal } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { WishlistService } from '../../services/wishlist.service';
import { TVShowDetails } from '../../models/tv-show-model';
import { PosterUrlPipe } from '../../pipes/poster-url-pipe';

//PrimeNg
import { ImageModule } from 'primeng/image';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DatePipe } from '@angular/common';
import { TabsModule } from 'primeng/tabs';



@Component({
  selector: 'app-tv-show-details',
  imports: [
    ImageModule,
    PosterUrlPipe,
    ProgressSpinnerModule,
    DatePipe,
    TabsModule


  ],
  templateUrl: './tv-show-details.html',
  styleUrl: './tv-show-details.scss'
})
export class TvShowDetails  {
private apiService = inject(ApiService);
  private languageService = inject(LanguageService);
  private route = inject(ActivatedRoute);
  private wishlistService = inject(WishlistService);

  tvShow = signal<TVShowDetails | null>(null);
  
  isLoading = signal(false);

ngOnInit(){
  this.route.params.subscribe((params)=>{
      this.loadTvShowDetails(params['id']);
      
  })
  }
  loadTvShowDetails(id:number){
    this.isLoading.set(true);
    this.apiService.getTVShowDetails(id,this.languageService.getCurrentLanguage()()).subscribe(res=>{
      this.tvShow.set(res);
    this.isLoading.set(false);
      console.log(this.tvShow());
      
    })
  }


}






// export interface TVShow {
//   id: number;
//   name: string;
//   overview: string;
//   poster_path: string | null;
//   backdrop_path: string | null;
//   first_air_date: string;
//   vote_average: number;
//   vote_count: number;
//   genre_ids?: number[];
// }

// export interface TVShowDetails extends TVShow {
//   genres: { id: number; name: string }[];
//   number_of_episodes: number;
//   number_of_seasons: number;
//   status: string;
//   tagline: string;
//   seasons: {
//     air_date: string;
//     episode_count: number;
//     id: number;
//     name: string;
//     overview: string;
//     poster_path: string | null;
//     season_number: number;
//   }[];
// }

// export interface TVShowResponse {
//   page: number;
//   results: TVShow[];
//   total_pages: number;
//   total_results: number;
// }