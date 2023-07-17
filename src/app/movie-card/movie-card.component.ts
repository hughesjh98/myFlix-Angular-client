import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MovieInfoComponent } from '../movie-info/movie-info.component';



@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  movies: any[] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) { }

  //once the page loads getMovies() will fetch all of the movies and store them in the movies array.
  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((response: any) => {
      this.movies = response;
      // console.log(this.movies);
      return this.movies;
    })
  }

  /**
   * 
   * @param name 
   * @param description 
   * param data will be passed into the dialog when opened.
   */

  getGenre(name: string, description: string): void {
    this.dialog.open(MovieInfoComponent, {
      data: {
        title: name,
        content: description,
      }
    })
  }

  /**
 * 
 * @param name 
 * @param bio 
 *  param data will be passed into the dialog when opened.
 */

  getDirector(name: string, bio: string): void {
    this.dialog.open(MovieInfoComponent, {
      data: {
        title: name,
        content: bio,
      }
    })
  }

  /**
 * 
 * @param description 
 * param data will be passed into the dialog when opened.
 */

  getSynopsis(description: string): void {
    this.dialog.open(MovieInfoComponent, {
      data: {
        title: "Description",
        content: description,
      }
    })
  }


  /**
   * 
   * @param {string} id 
   * movies will be added/deleted to the users favorite movie array. 
   * isFavorite is created to check if the movie has been added. 
   */

  addFavorite(id: string): void {
    this.fetchApiData.addFavoriteMovie(id).subscribe((Response: any) => {
      this.snackBar.open('added to favorites', 'OK', {
        duration: 2000
      })
    })
  }

  isFavorite(id: string): boolean {
    return this.fetchApiData.isFavoriteMovie(id)
  }

  removeFavorite(id: string): void {
    this.fetchApiData.deleteFavoriteMovie(id).subscribe((Response: any) => {
      this.snackBar.open('removed to favorites', 'OK', {
        duration: 2000
      })
    })
  }
}
