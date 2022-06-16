import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEnumerateValueComponent } from './create-enumerate-value.component';

describe('CreateEnumerateValueComponent', () => {
  let component: CreateEnumerateValueComponent;
  let fixture: ComponentFixture<CreateEnumerateValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEnumerateValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEnumerateValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
