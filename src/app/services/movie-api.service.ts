import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";


const apiKey: string = 'e22405fabf959948112ced6cd8b7fec9';
const url: string = 'https://api.themoviedb.org/3/search/movie?api_key=' + apiKey;
const imageUrl: string= 'https://image.tmdb.org/t/p/w780';
const upComingMoviesUrl:string = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US`;

const backgrounds = [

  {name:'Sucide squad', poster:'/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg'},
  {name: 'Spider-Man: Homecoming', poster:'/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg'},
  {name: 'Spider-Man 3', poster: '/sqZKCRYGovZ8aN99VVJSdL8Ja9k.jpg'},
  {name: 'Now you see me 2', poster:'/hU0E130tsGdsYa4K9lc3Xrn5Wyt.jpg'},
  {name: 'Jungle Book', poster:'/vOipe2myi26UDwP978hsYOrnUWC.jpg'},
  {name: 'Mechanic', poster:'/tgfRDJs5PFW20Aoh1orEzuxW8cN.jpg'},
  { name: 'Batman Vs Superman', poster: '/cGOPbv9wA5gEejkUN892JrveARt.jpg'},
  {name:'Mad Max', poster:'/kqjL17yufvn9OVLyXYpvtyrFfak.jpg'},
  {name:'Captain America', poster:'/5N20rQURev5CNDcMjHVUZhpoCNC.jpg'},
  {name:'Jurrasic World', poster:'/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg'},
  {name:'Furious 7', poster:'/dCgm7efXDmiABSdWDHBDBx2jwmn.jpg'},
  {name:'Terminator', poster:'/5JU9ytZJyR3zmClGmVm9q4Geqbd.jpg'},
  {name:'', poster:'/uX7LXnsC7bZJZjn048UCOwkPXWJ.jpg'}


];
@Injectable()
export class MovieApiService {


  constructor(private http: Http) {
  }

  //get movies for home-page
  getHomePageMovie() {
    let randomInt: number = Math.floor(Math.random() * backgrounds.length);
    let moviePoster: string = backgrounds[randomInt].poster;
    return `${imageUrl}${moviePoster}`;
  }

  searchMovie(searchTerm): Observable<any> {
    let queryUrl = `${url}&query=${searchTerm}`;
    return this.http.get(queryUrl)
      .map(res => res.json().results);
  }

  //get Detail about a movie
  getMovie(id: number) {
    let queryUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US&append_to_response=credits`;
    return this.http.get(queryUrl)
      .map(res => res.json());
  }


  //get the list of upcoming movies
  getUpComingMovies() {
    return this.http.get(upComingMoviesUrl)
      .map(res => res.json().results);
  }


  //get similar movies to this movie
  getSimilarMovies(id: number) {
    let queryUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US`;
    return this.http.get(queryUrl)
      .map(res => res.json());

  }

  //get top rated movies
  getTopRated(){
    let queryUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;
    return this.http.get(queryUrl)
      .map(res => res.json());
  }
}


