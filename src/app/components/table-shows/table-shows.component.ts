import { Component, Input, OnInit } from '@angular/core';
import { Show } from '../../models/show.model';

@Component({
  selector: 'app-table-shows',
  templateUrl: './table-shows.component.html',
  styleUrls: ['./table-shows.component.css'],
})
export class TableShowsComponent implements OnInit {
  @Input() shows: Array<Show>;

  constructor() {}

  ngOnInit(): void {}
}
