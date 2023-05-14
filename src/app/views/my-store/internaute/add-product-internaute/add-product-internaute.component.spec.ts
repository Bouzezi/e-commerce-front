import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductInternauteComponent } from './add-product-internaute.component';

describe('AddProductInternauteComponent', () => {
  let component: AddProductInternauteComponent;
  let fixture: ComponentFixture<AddProductInternauteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductInternauteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductInternauteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
