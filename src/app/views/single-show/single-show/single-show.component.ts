import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Remark } from 'src/app/models/remark.model';
import { Show } from 'src/app/models/show.model';
import { ShowsService } from 'src/app/services/shows/shows.service';

@Component({
  selector: 'app-single-show',
  templateUrl: './single-show.component.html',
  styleUrls: ['./single-show.component.css'],
})
export class SingleShowComponent implements OnInit {
  show: Show;
  remarks: Array<Remark>;
  constructor(
    private showService: ShowsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get the good show to display from the service according to it's id.

    const id = this.route.snapshot.params.id;
    this.showService
      .getShowById(+id)
      .then((show: Show) => {
        this.show = show;
      })
      .catch((err) => {});
  }
}
