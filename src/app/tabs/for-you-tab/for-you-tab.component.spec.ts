import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForYouTabComponent } from './for-you-tab.component';

describe('ForYouTabComponent', () => {
  let component: ForYouTabComponent;
  let fixture: ComponentFixture<ForYouTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForYouTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForYouTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
