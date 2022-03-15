import { Component, Input, OnInit } from '@angular/core';
import { ShowsService } from '../../services/shows/shows.service';

@Component({
  selector: '[app-table-shows-line]',
  templateUrl: './table-shows-line.component.html',
  styleUrls: ['./table-shows-line.component.css'],
})
export class TableShowsLineComponent implements OnInit {
  @Input() id: number;
  @Input() titleToDown: string;
  @Input() seasonsNumber: number;
  @Input() firstRelease: Date;
  @Input() synopsis: string;
  @Input() review: string;
  @Input() photoPath: string;

  constructor(private showService: ShowsService) {}

  ngOnInit(): void {}

// call showService function "deleteShow" on click

  onClickDeleteShow() {
    this.showService.deleteShow(this.id);
  }
}
