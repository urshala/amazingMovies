import { Component, OnInit } from '@angular/core';
import {MovieApiService} from "../../services/movie-api.service";
import { ActivatedRoute, Router} from "@angular/router";
import { Location } from "@angular/common";


const imageUrl: string= 'https://image.tmdb.org/t/p/w780';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  searchedResult;
  id:number;
  posterUrl: string = imageUrl;
  constructor(private movieSearch: MovieApiService,
              private route: ActivatedRoute,
              private location: Location,
              private  router: Router) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap(res => this.movieSearch.getMovie(+ res.get('id')))
      .subscribe(movie => {this.searchedResult = movie;});



  }

  goBack(){
    this.location.back();
  }


}
