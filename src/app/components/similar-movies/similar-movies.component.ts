import { Component, OnInit } from '@angular/core';
import  { MovieApiService } from "../../services/movie-api.service";
import { ActivatedRoute, Router} from "@angular/router";

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-similar-movies',
  templateUrl: './similar-movies.component.html',
  styleUrls: ['./similar-movies.component.css']
})
export class SimilarMoviesComponent implements OnInit {
  similarMovies;
  similarTo:string;
  constructor(private movieApi: MovieApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getSimilarMovies();
    this.route.params.forEach(res => this.similarTo = res.movie)
  }


  getSimilarMovies(){
    this.route.paramMap
      .switchMap(params => this.movieApi.getSimilarMovies(+ params.get('id')))
      .subscribe(res => this.similarMovies = res.results);
  }

  gotoDetail(id:number){
    this.router.navigate(['search', id]);

  }
}
