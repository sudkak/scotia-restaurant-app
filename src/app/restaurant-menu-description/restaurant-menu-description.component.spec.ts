import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMenuDescriptionComponent } from './restaurant-menu-description.component';

describe('RestaurantMenuDescriptionComponent', () => {
  let component: RestaurantMenuDescriptionComponent;
  let fixture: ComponentFixture<RestaurantMenuDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantMenuDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantMenuDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
