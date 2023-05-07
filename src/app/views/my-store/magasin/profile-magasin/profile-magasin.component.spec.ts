import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMagasinComponent } from './profile-magasin.component';

describe('ProfileMagasinComponent', () => {
  let component: ProfileMagasinComponent;
  let fixture: ComponentFixture<ProfileMagasinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMagasinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
