import { Component, Input, inject } from '@angular/core';
import { Movie } from '../../models/movie.model';
import { WishlistService } from '../../services/wishlist.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { PosterUrlPipe } from '../../pipes/poster-url-pipe';
import { HeartIcon } from "../heart-icon/heart-icon";
import { MonthTranformPipe } from '../../pipes/month-tranform-pipe';
import { CalcPrecentageOfVoteAveragePipe } from '../../pipes/calc-precentage-of-vote-average-pipe';
// import { HeartIconComponent } from '../../icons/heart-icon.component';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, CalcPrecentageOfVoteAveragePipe,ButtonModule, MonthTranformPipe, RouterLink, PosterUrlPipe, HeartIcon],
  templateUrl: './movie-card.html',
  styleUrls: ['./movie-card.scss']
})
export class MovieCardComponent {
  private wishlistService = inject(WishlistService);

  @Input() movie!: Movie;


  toggleWishlist(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.wishlistService.toggleWishlist(this.movie, 'movie');
  }

  isInWishlist() {
    return this.wishlistService.isInWishlist(this.movie.id, 'movie');
  }
}