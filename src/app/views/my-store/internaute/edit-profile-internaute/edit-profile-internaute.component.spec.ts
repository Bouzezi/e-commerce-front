import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfileInternauteComponent } from './edit-profile-internaute.component';

describe('EditProfileInternauteComponent', () => {
  let component: EditProfileInternauteComponent;
  let fixture: ComponentFixture<EditProfileInternauteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfileInternauteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileInternauteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
