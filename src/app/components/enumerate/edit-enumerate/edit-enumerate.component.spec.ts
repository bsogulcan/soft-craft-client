import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEnumerateComponent } from './edit-enumerate.component';

describe('EditEnumerateComponent', () => {
  let component: EditEnumerateComponent;
  let fixture: ComponentFixture<EditEnumerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEnumerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEnumerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
