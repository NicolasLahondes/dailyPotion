import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Show } from 'src/app/models/show.model';
import { Remark } from 'src/app/models/remark.model';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css'],
})
export class ShowFormComponent implements OnInit {
  @Input() name: string;
  @Input() submitLabel: string;
  @Input() showToEdit: Show;

  @Output() formSubmitted: EventEmitter<Show>;

  showForm: FormGroup;

  show: Show;
  constructor(private fb: FormBuilder) {
    this.formSubmitted = new EventEmitter<Show>();
  }

  ngOnInit(): void {

    // Initialize form validators at launch
    this.initForm();

    // Set default values of new show
    if (this.showToEdit) {
      this.show = this.showToEdit;
    } else {
      this.show = new Show(
        '',
        new Date(Date.now()),
        0,
        '',
        '',
        '',
        new Array<Remark>()
      );
    }
  }

  // Send show if valid

  onSubmitShowForm() {
    if (this.showForm.valid) {
      this.formSubmitted.emit(this.show);
    }
  }

  // Declare form validators
  private initForm() {
    this.showForm = this.fb.group({
      showName: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      title: new FormControl(null, [Validators.required]),
      pitch: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(900),
      ]),

      review: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5),
      ]),

      image: new FormControl(null, [Validators.required]),
    });
  }
}
