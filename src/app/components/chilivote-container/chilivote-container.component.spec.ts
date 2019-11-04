import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilivoteContainerComponent } from './chilivote-container.component';

describe('ChilivoteContainerComponent', () => {
  let component: ChilivoteContainerComponent;
  let fixture: ComponentFixture<ChilivoteContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChilivoteContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilivoteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
