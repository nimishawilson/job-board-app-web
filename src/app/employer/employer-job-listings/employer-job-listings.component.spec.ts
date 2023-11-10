import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerJobListingsComponent } from './employer-job-listings.component';

describe('EmployerJobListingsComponent', () => {
  let component: EmployerJobListingsComponent;
  let fixture: ComponentFixture<EmployerJobListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployerJobListingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployerJobListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
