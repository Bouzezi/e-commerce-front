import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileMagasinComponent } from './edit-profile-magasin.component';

describe('EditProfileMagasinComponent', () => {
  let component: EditProfileMagasinComponent;
  let fixture: ComponentFixture<EditProfileMagasinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileMagasinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileMagasinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
