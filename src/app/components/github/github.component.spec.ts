import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubComponent } from './github.component';

import { NO_ERRORS_SCHEMA } from '@angular/core'; // this was imported to help remove failed unit test section.
import { SearchPipe } from '../../pipes/search.pipe'; //
import { HttpClientModule } from '@angular/common/http'; // these Http modules are specifically meant for testing


describe('GithubComponent', () => {
  let component: GithubComponent;
  let fixture: ComponentFixture<GithubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubComponent, SearchPipe ],
      imports: [ HttpClientModule ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
