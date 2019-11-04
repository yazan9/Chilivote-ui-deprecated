import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChilivoteComponent } from './new-chilivote.component';

describe('NewChilivoteComponent', () => {
  let component: NewChilivoteComponent;
  let fixture: ComponentFixture<NewChilivoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewChilivoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChilivoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
