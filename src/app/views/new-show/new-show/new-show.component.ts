import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShowsService } from '../../../services/shows/shows.service';
import { Show } from '../../../models/show.model';

@Component({
  selector: 'app-new-show',
  templateUrl: './new-show.component.html',
  styleUrls: ['./new-show.component.css'],
})
export class NewShowComponent implements OnInit {
  constructor(private showService: ShowsService, private router: Router) {}

  ngOnInit(): void {}

  // Call the 'addShow" function inside show.service to add a new show inside the service.
  addShow(showToAdd: Show) {
    this.showService
      .addShow(showToAdd)
      .then(() => {
        this.router.navigateByUrl('/home');
      })
      .catch(() => {});
  }
}
