import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {

/**
 * 
 * @param {string} data
 * use @inject to add data from the movie object into the dialog modal in the movie-info-componenent.html.
 * 
 */

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string,
      content: string,
    }
  ) { }

  ngOnInit(): void { }

}
