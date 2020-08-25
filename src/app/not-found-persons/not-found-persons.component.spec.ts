import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundPersonsComponent } from './not-found-persons.component';

describe('NotFoundPersonsComponent', () => {
  let component: NotFoundPersonsComponent;
  let fixture: ComponentFixture<NotFoundPersonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotFoundPersonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPersonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
