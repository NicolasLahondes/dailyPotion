import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, NgModel } from '@angular/forms';

@Component({
  selector: 'app-errors-form',
  templateUrl: './errors-form.component.html',
  styleUrls: ['./errors-form.component.css'],
})
export class ErrorsFormComponent implements OnInit {
  @Input() control: AbstractControl | NgModel;
  @Input() controlLabel: string;

  constructor() {}

  ngOnInit(): void {}
}
