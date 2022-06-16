import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEnumerateComponent } from './create-enumerate.component';

describe('CreateEnumerateComponent', () => {
  let component: CreateEnumerateComponent;
  let fixture: ComponentFixture<CreateEnumerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEnumerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEnumerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
