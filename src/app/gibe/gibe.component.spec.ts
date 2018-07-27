import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GibeComponent } from './gibe.component';

describe('GibeComponent', () => {
  let component: GibeComponent;
  let fixture: ComponentFixture<GibeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GibeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GibeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
