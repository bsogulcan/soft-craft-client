import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNavigationComponent } from './update-navigation.component';

describe('UpdateNavigationComponent', () => {
  let component: UpdateNavigationComponent;
  let fixture: ComponentFixture<UpdateNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
