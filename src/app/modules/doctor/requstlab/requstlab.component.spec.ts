import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequstlabComponent } from './requstlab.component';

describe('RequstlabComponent', () => {
  let component: RequstlabComponent;
  let fixture: ComponentFixture<RequstlabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequstlabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RequstlabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
