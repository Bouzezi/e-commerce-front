import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashMagasinComponent } from './dash-magasin.component';

describe('DashMagasinComponent', () => {
  let component: DashMagasinComponent;
  let fixture: ComponentFixture<DashMagasinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashMagasinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
