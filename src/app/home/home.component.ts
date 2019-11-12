import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  carousel = [
    'Pixel 4',
    'Nest Mini (2nd Gen)',
    'Nest Wifi',
    'Pixelbook Go',
    'Nest Hub Max',
    'Stadia Premiere Edition',
    'Nest Learning Thermostat',
    'Nest Hello Doorbell',
    'Nest Hub',
    'Pixel Slate',
    'Pixelbook',
    'Chromecast',
    'Nest Thermostat E',
    'Nest Protect',
    'Nest Cam IQ Indoor',
    'Nest Cam IQ Outdoor',
    'Nest Cam Outdoor',
    'Nest X Yale Lock',
    'Nest Secure Alarm',
    'Nest Temperature Sensor',
    'Google Home',
    'Chromecast Ultra',
    'Google Home Max',
    'Pixel 3a',
    'Pixel Stand',
    'All Accessories',
  ]
  constructor() { }

  ngOnInit() {
  }

}
