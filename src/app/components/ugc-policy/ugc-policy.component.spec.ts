import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgcPolicyComponent } from './ugc-policy.component';

describe('UgcPolicyComponent', () => {
  let component: UgcPolicyComponent;
  let fixture: ComponentFixture<UgcPolicyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgcPolicyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UgcPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
