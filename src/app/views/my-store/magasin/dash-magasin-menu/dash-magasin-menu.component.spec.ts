import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashMagasinMenuComponent } from './dash-magasin-menu.component';

describe('DashMagasinMenuComponent', () => {
  let component: DashMagasinMenuComponent;
  let fixture: ComponentFixture<DashMagasinMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashMagasinMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashMagasinMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
