import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryEventsComponent } from './category-events.component';

describe('CategoryEventsComponent', () => {
  let component: CategoryEventsComponent;
  let fixture: ComponentFixture<CategoryEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryEventsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
