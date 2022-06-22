import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReOrderNavigationComponent } from './re-order-navigation.component';

describe('ReOrderNavigationComponent', () => {
  let component: ReOrderNavigationComponent;
  let fixture: ComponentFixture<ReOrderNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReOrderNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReOrderNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
