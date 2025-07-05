import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Movie, MovieDetails, MovieResponse, Review, } from '../models/movie.model';
import {  TVShow, TVShowDetails, TVShowResponse } from '../models/tv-show-model';

import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private apiKey = environment.tmdbApiKey;
  private baseUrl = 'https://api.themoviedb.org/3';

  getNowPlayingMovies(page: number = 1, language: string = 'en') {
    return this.http.get<MovieResponse>(
      `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&page=${page}&language=${language}`
    );
  }

  getMovieDetails(id: number, language: string = 'en') {
    return this.http.get<MovieDetails>(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&language=${language}`
    );
  }

  getMovieRecommendations(id: number, language: string = 'en') {
    return this.http.get<MovieResponse>(
      `${this.baseUrl}/movie/${id}/recommendations?api_key=${this.apiKey}&language=${language}`
    );
  }

  getMovieReviews(id: number, language: string = 'en') {
    return this.http.get<{ results: Review[] }>(
      `${this.baseUrl}/movie/${id}/reviews?api_key=${this.apiKey}&language=${language}`
    );
  }

  searchMovies(query: string, language: string = 'en', page: number = 1) {
  return this.http.get<MovieResponse>(
    `${this.baseUrl}/search/movie?api_key=${this.apiKey}` +
    `&query=${encodeURIComponent(query)}` +
    `&language=${language}` +
    `&page=${page}`
  );
}

  getPopularTVShows(page: number = 1, language: string = 'en') {
    return this.http.get<TVShowResponse>(
      `${this.baseUrl}/tv/popular?api_key=${this.apiKey}&page=${page}&language=${language}`
    );
  }

  getTVShowDetails(id: number, language: string = 'en') {
    return this.http.get<TVShowDetails>(
      `${this.baseUrl}/tv/${id}?api_key=${this.apiKey}&language=${language}`
    );
  }

  getMovieVideo(id:number){
    return this.http.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${this.apiKey}`)
  }

}