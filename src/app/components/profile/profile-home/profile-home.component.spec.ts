import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHomeComponent } from './profile-home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProfileHomeComponent', () => {
  let component: ProfileHomeComponent;
  let fixture: ComponentFixture<ProfileHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileHomeComponent ],
      imports: [ HttpClientModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
