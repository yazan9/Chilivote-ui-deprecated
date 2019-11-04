import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChilivotesComponent } from './my-chilivotes.component';

describe('MyChilivotesComponent', () => {
  let component: MyChilivotesComponent;
  let fixture: ComponentFixture<MyChilivotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyChilivotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChilivotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
