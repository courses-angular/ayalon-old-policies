import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldPoliciesComponent } from './old-policies.component';

describe('OldPoliciesComponent', () => {
  let component: OldPoliciesComponent;
  let fixture: ComponentFixture<OldPoliciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldPoliciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
