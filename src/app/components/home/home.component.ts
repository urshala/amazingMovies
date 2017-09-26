import { Component, OnInit } from '@angular/core';
import { MovieApiService } from "../../services/movie-api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  background;
  container_div;
  title = 'Amazing movies';
  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;
  backgroundImage :string;

  constructor(private movieApi: MovieApiService) { }

  ngOnInit() {
    this.background = this.movieApi.getHomePageMovie();
    console.log('NgOnInit init');
    this.myStyle = {
      'position': 'relative',
      'width': '100%',
      'height': '90%',
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
      'opacity':1,
      'color':'green',

    };

    this.myParams = {

      "particles": {
      "number": {
        "value": 80,

      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.5,
          "random": false,
      },
      "size": {
        "value": 7.891850086415761,
          "random": true,

      },
      "line_linked": {
        "enable": false

      },
      "move": {
        "enable": true,
          "speed": 2,
      }
    },
      "interactivity": {
      "detect_on": "canvas",
        "events": {
        "onhover": {
          "enable": false,
        }
      }

    }

    };

    this.backgroundImage = this.movieApi.getHomePageMovie();

  }


}
