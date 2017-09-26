import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { MovieApiService } from "./services/movie-api.service";
import {SearchComponent} from "./components/search/search.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Amazing movies';
  myStyle: object = {};
  myParams: object = {};
  move:object={};
  width: number = 100;
  height: number = 100;
  backgroundImage :string;

  constructor(private movieApi: MovieApiService){
    console.log('Constructor init');
  }

  ngOnInit() {
    console.log('NgOnInit init');
    this.myStyle = {
      'position': 'relative',
      'width': '100%',
      'height': '89%',
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
      //'background':'black',
      'opacity':1,
      'color':'green',
      /*'z-index':-1,*/
    };

    this.myParams = {
      particles: {
        number: {
          value: 100,
        },
        color: {
          value: '#ff0000'
        },
        shape: {
          type: 'circle',
        },
        /*move:{
          enable:true,
          speed:3,
          out_mode:'out',
        },
        onclick:{
          enable: true,
          mode:'push',
        },*/
      }
    };
    this.backgroundImage = this.movieApi.getHomePageMovie();

  }


}
