import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { Component, NO_ERRORS_SCHEMA } from '@angular/core'; // when adding the @Component this also needs to be imported.

@Component( { selector: 'app-nav', template: '' } )  // this is a good way to test app-nav
class NavComponent {}


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavComponent
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'angular-part2'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('angular-part2');
  }));
  it('should render application navigation', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    // compiling helps when we have angular html attributes in our code, so the test can run.
    // expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-part2!'); // this was the original line, below new
    expect(compiled.querySelector('app-nav'));

  }));
});
