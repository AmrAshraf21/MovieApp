import { Component, Input, inject } from '@angular/core';
import { TVShow } from '../../models/tv-show-model';
import { WishlistService } from '../../services/wishlist.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { PosterUrlPipe } from '../../pipes/poster-url-pipe';
import { HeartIcon } from '../heart-icon/heart-icon';


import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@Component({
  selector: 'app-tv-show-card',
  standalone: true,
  imports: [CommonModule, ButtonModule,BadgeModule,
OverlayBadgeModule ,HeartIcon,RouterLink, PosterUrlPipe],
  templateUrl: './tv-shows-card.html',
  styleUrls: ['./tv-shows-card.scss']
})
export class TVShowCard {
  private wishlistService = inject(WishlistService);

  @Input() tvShow!: TVShow;

  

  toggleWishlist(event: Event) {
    event.stopPropagation();
    event.preventDefault();
    this.wishlistService.toggleWishlist(this.tvShow, 'tvshow');
  }

  isInWishlist(): boolean {
    return this.wishlistService.isInWishlist(this.tvShow.id, 'tvshow');
  }
}