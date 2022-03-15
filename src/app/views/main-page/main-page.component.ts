import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Show } from 'src/app/models/show.model';
import { ShowsService } from 'src/app/services/shows/shows.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements OnInit {
  shows: Array<Show>;
  showsSub: Subscription;

  // Call the service to get access to the shows list.
  constructor(private showService: ShowsService) {}

  ngOnInit(): void {
    // Set 'shows' with values within the service.
    this.showsSub = this.showService.show.subscribe((show: Array<Show>) => {
      this.shows = show;
    });
    //Debug
    console.log(this.shows);
  }

  ngOnDestroy(): void {
    // Avoid subscription to continue without necessity and thus avoid memory loss.
    this.showsSub.unsubscribe();
  }
}
