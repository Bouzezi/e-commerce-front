import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashInternauteMenuComponent } from './dash-internaute-menu.component';

describe('DashInternauteMenuComponent', () => {
  let component: DashInternauteMenuComponent;
  let fixture: ComponentFixture<DashInternauteMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashInternauteMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashInternauteMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
