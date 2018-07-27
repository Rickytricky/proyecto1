import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosagregarComponent } from './productosagregar.component';

describe('ProductosagregarComponent', () => {
  let component: ProductosagregarComponent;
  let fixture: ComponentFixture<ProductosagregarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosagregarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosagregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
