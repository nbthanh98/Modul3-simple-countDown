import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
  @Input() time: number;
  id = 0;
  remainingTime: number;
  mesg: string;

  ngOnInit() {
    this.onRestart();
  }

  clearTime() {
    clearInterval(this.id);
  }

  countDown() {
    this.remainingTime = this.time;
    this.id = window.setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime === 0) {
        this.clearTime();
        this.mesg = 'Het gio';
      }
      console.log(this.remainingTime);
      console.log(this.mesg);
    }, 1000);
  }

  onStart() {
    this.countDown();
  }

  onStop() {
    this.clearTime();
  }

  onRestart() {
    this.remainingTime = this.time;
  }
}
