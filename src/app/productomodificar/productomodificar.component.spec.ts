import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductomodificarComponent } from './productomodificar.component';

describe('ProductomodificarComponent', () => {
  let component: ProductomodificarComponent;
  let fixture: ComponentFixture<ProductomodificarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductomodificarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductomodificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
