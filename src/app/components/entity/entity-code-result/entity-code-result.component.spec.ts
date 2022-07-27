import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityCodeResultComponent } from './entity-code-result.component';

describe('EntityCodeResultComponent', () => {
  let component: EntityCodeResultComponent;
  let fixture: ComponentFixture<EntityCodeResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityCodeResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityCodeResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
