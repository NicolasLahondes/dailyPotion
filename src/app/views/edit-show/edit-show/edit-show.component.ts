import { Component, OnInit } from '@angular/core';
import { Show } from '../../../models/show.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowsService } from 'src/app/services/shows/shows.service';

@Component({
  selector: 'app-edit-show',
  templateUrl: './edit-show.component.html',
  styleUrls: ['./edit-show.component.css'],
})
export class EditShowComponent implements OnInit {
  show: Show;
  constructor(
    private route: ActivatedRoute,
    private showService: ShowsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get the user to the edit part of a selected show
    const id = this.route.snapshot.params.id;
    this.showService
      .getShowById(+id)
      .then((showFound: Show) => (this.show = showFound));
  }
  // Return the user to the single show view after modifications done.
  askToEditShow(editedShow: Show) {
    this.showService.editShow(editedShow).then(() => {
      this.router.navigate(['show', editedShow.id]);
    });
  }
}
