import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGenerateComponent } from './project-generate.component';

describe('ProjectGenerateComponent', () => {
  let component: ProjectGenerateComponent;
  let fixture: ComponentFixture<ProjectGenerateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectGenerateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectGenerateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
