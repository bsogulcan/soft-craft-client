import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEnumerateValueComponent } from './edit-enumerate-value.component';

describe('EditEnumerateValueComponent', () => {
  let component: EditEnumerateValueComponent;
  let fixture: ComponentFixture<EditEnumerateValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEnumerateValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEnumerateValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
