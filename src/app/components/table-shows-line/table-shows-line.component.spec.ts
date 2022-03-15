import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowsLineComponent } from './table-shows-line.component';

describe('TableShowsLineComponent', () => {
  let component: TableShowsLineComponent;
  let fixture: ComponentFixture<TableShowsLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableShowsLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowsLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
