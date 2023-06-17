import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.scss'],
})
export class AnalogClockComponent implements OnInit {

  @ViewChild('hour-hand', { static: true }) hourHand!: ElementRef;
  @ViewChild('min-hand', { static: true }) minuteHand!: ElementRef;
  @ViewChild('sec-hand', { static: true }) secondHand!: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setInterval(() => {
      const date = new Date();
      this.updateClock(date);
    }, 1000);
  }

  updateClock(date: Date) {
    const secondHandElements = document.getElementsByClassName('sec-hand');
    const minuteHandElements = document.getElementsByClassName('min-hand');
    const hourHandElements = document.getElementsByClassName('hour-hand');

    if (secondHandElements.length > 0 && minuteHandElements.length > 0 && hourHandElements.length > 0) {
      const secondHand = secondHandElements[0] as HTMLElement;
      const minuteHand = minuteHandElements[0] as HTMLElement;
      const hourHand = hourHandElements[0] as HTMLElement;

      secondHand.style.transform = `rotate(${date.getSeconds() * 6}deg)`;
      minuteHand.style.transform = `rotate(${date.getMinutes() * 6}deg)`;
      hourHand.style.transform = `rotate(${date.getHours() * 30}deg)`;
    }
  }

  rotateClock() {
    let secondRotation = 0;
    let minuteRotation = 0;
    let hourRotation = 0;
  
    const secondHand = document.getElementById('sec-hand');
    const minuteHand = document.getElementById('min-hand');
    const hourHand = document.getElementById('hour-hand');
  
    const rotationInterval = setInterval(() => {
      secondRotation += 6; // Jede Sekunde um 6 Grad drehen
      minuteRotation += 6 / 60; // Jede Sekunde um 1/60 Grad drehen (1 Minute = 60 Sekunden)
      hourRotation += 6 / 3600; // Jede Sekunde um 1/3600 Grad drehen (1 Stunde = 60 Minuten = 3600 Sekunden)
  
      if (secondHand && minuteHand && hourHand) {
        secondHand.style.transform = `rotate(${secondRotation}deg)`;
        minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
        hourHand.style.transform = `rotate(${hourRotation}deg)`;
      }
    }, 1000); // Jede Sekunde aktualisieren
  
    // Beispielaufruf zum Starten der Rotation
    // rotateClock();
  
    // Beispielaufruf zum Stoppen der Rotation nach 10 Sekunden
    // setTimeout(() => {
    //   clearInterval(rotationInterval);
    // }, 10000);
  }
  
}
