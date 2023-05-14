import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashInternauteComponent } from './dash-internaute.component';

describe('DashInternauteComponent', () => {
  let component: DashInternauteComponent;
  let fixture: ComponentFixture<DashInternauteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashInternauteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashInternauteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
