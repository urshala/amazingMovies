import { Component, OnInit } from '@angular/core';
import { MovieApiService } from "../../services/movie-api.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css']
})
export class UpcomingMoviesComponent implements OnInit {
  upcomingMovies;
  constructor(private movieApi: MovieApiService,
              private route: Router ) { }

  ngOnInit() {
    this.getUpComingMovies();
  }

  getUpComingMovies(){
      this.movieApi.getUpComingMovies()
        .subscribe(res => this.upcomingMovies = res);

  }

  gotoDetail(id:number){
    this.route.navigate(['search', id]);
  }
}
