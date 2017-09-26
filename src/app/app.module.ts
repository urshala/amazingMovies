import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MdCardModule} from "@angular/material";

import { AppComponent } from './app.component';
import {MovieApiService} from "./services/movie-api.service";
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import {HttpModule} from "@angular/http";
import {ParticlesModule} from "angular-particle";
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import {RouterModule, Routes} from "@angular/router";
import { UpcomingMoviesComponent } from './components/upcoming-movies/upcoming-movies.component';
import { SimilarMoviesComponent } from './components/similar-movies/similar-movies.component';
import { TopRatedComponent } from './components/top-rated/top-rated.component';

const appRoutes: Routes = [
  /*{ path: '' , component:HomeComponent},*/
  { path: 'search', component:SearchComponent},
  { path: 'upcoming', component: UpcomingMoviesComponent},
  { path: 'top-movies', component: TopRatedComponent},
  { path: 'search/:id', component:MovieDetailComponent},
  { path: 'similar/:id', component: SimilarMoviesComponent},
  { path: '', component: HomeComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    MovieDetailComponent,
    UpcomingMoviesComponent,
    SimilarMoviesComponent,
    TopRatedComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ParticlesModule,
    MdCardModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MovieApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
