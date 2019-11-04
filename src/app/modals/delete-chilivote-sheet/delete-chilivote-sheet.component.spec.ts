import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteChilivoteSheetComponent } from './delete-chilivote-sheet.component';

describe('DeleteChilivoteSheetComponent', () => {
  let component: DeleteChilivoteSheetComponent;
  let fixture: ComponentFixture<DeleteChilivoteSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteChilivoteSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteChilivoteSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
