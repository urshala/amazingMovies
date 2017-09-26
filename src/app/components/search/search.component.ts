import {Component, Input, OnInit} from '@angular/core';
import {Subject} from "rxjs/Subject";


import { MovieApiService } from "../../services/movie-api.service";

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/distinctUntilChanged';

import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  private searchTerms = new Subject<string>();
  results;
  background:string;

  constructor(private movieSearch: MovieApiService, private router: Router) { }

  ngOnInit() {
    this.background ='assets/minions.jpg';
    this.results = this.searchTerms
     .debounceTime(400) //wait for 400ms before putting the searchterm to stream
     .distinctUntilChanged()
     .switchMap(res => res ? this.movieSearch.searchMovie(res) : Observable.of([])); //send the search results or an empty array

  }

  search(terms){
    this.searchTerms.next(terms);

  }

  goToDetail(id:number){
    this.router.navigate(['/search', id]);
  }


}
