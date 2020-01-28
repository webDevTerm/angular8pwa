import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {


  movies: any[];
  constructor(private service: MoviesService) { }

  ngOnInit() {
      this.service.searchMovies('spiderman');

  }

}
