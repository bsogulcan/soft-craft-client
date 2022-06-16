import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnumerateValueComponent } from './enumerate-value.component';

describe('EnumerateValueComponent', () => {
  let component: EnumerateValueComponent;
  let fixture: ComponentFixture<EnumerateValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnumerateValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnumerateValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
