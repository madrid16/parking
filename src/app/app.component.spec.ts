/* tslint:disable:no-unused-variable */

import {TestBed, async} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {RegistrationPipe} from "../pipe/filter.pipe";

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        RegistrationPipe
      ],
      imports: [ FormsModule ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('LynCar');
  }));

  it('should be contain four tr on table', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let nativeElement = fixture.nativeElement;
    expect(nativeElement.querySelectorAll('tbody tr').length).toBe(4);
  }));


  it('should filter table string with one and zero result', async(() => {
    let pipe: RegistrationPipe = new RegistrationPipe();
    let cars: string = JSON.stringify({registration: "FGJG15", dateTime: "13:13"});
    expect(pipe.transform([JSON.parse(cars)], "FG").length).toBe(1);
    expect(pipe.transform([JSON.parse(cars)], "AA").length).toBe(0);
  }));

});
