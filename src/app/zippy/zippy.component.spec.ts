import { ComponentFixture, TestBed } from '@angular/core/testing';

import { zippyComponent } from './zippy.component';

describe('zippyComponent', () => {
  let component: zippyComponent;
  let fixture: ComponentFixture<zippyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [zippyComponent],
    });
    fixture = TestBed.createComponent(zippyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
