import { Component, OnInit } from '@angular/core';
import {MovieApiService} from "../../services/movie-api.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {
  topMovies: Array<string>;
  constructor(private movieApi: MovieApiService, private route: Router) { }

  ngOnInit() {
    this.movieApi.getTopRated()
      .subscribe(res => this.topMovies = res.results);
  }

  gotoDetail(id:number){
    this.route.navigate(['search',id]);
  }
}
