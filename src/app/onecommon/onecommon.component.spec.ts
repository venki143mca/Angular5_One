import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnecommonComponent } from './onecommon.component';

describe('OnecommonComponent', () => {
  let component: OnecommonComponent;
  let fixture: ComponentFixture<OnecommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnecommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnecommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
