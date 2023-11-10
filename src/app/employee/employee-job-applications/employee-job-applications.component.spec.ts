import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeJobApplicationsComponent } from './employee-job-applications.component';

describe('EmployeeJobApplicationsComponent', () => {
  let component: EmployeeJobApplicationsComponent;
  let fixture: ComponentFixture<EmployeeJobApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeJobApplicationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeJobApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
