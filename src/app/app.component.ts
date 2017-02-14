import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  cars = [
    {registration: "AAAA11", dateTime: "15:30"},
    {registration: "BBBB22", dateTime: "15:30"},
    {registration: "CCCC33", dateTime: "15:30"},
    {registration: "DDDD44", dateTime: "15:30"}
  ];

}
