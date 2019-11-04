import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingTabComponent } from './following-tab.component';

describe('FollowingTabComponent', () => {
  let component: FollowingTabComponent;
  let fixture: ComponentFixture<FollowingTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowingTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowingTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
