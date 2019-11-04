import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsbarComponent } from './tabsbar.component';

describe('TabsbarComponent', () => {
  let component: TabsbarComponent;
  let fixture: ComponentFixture<TabsbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
