import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableShowsComponent } from './table-shows.component';

describe('TableShowsComponent', () => {
  let component: TableShowsComponent;
  let fixture: ComponentFixture<TableShowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableShowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
