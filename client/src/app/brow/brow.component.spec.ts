import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowComponent } from './brow.component';

describe('BrowComponent', () => {
  let component: BrowComponent;
  let fixture: ComponentFixture<BrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
