import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgSlidComponent } from './img-slid.component';

describe('ImgSlidComponent', () => {
  let component: ImgSlidComponent;
  let fixture: ComponentFixture<ImgSlidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgSlidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgSlidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
