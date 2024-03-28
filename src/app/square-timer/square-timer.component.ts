import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-square-timer',
  templateUrl: './square-timer.component.html',
  styleUrls: ['./square-timer.component.scss']
})
export class SquareTimerComponent {

  public hours: number = 0;
  public minutes: number = 0;
  public seconds: number = 0;

  private timer : any;
  private data = new Date();

  show:boolean = true;
  disabled:boolean = false;
  animate: boolean = false;

  @ViewChild("isAudio") isAudio!: ElementRef;

  constructor() {
  }

  ngOnInit(){

  }



}
