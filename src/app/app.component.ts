import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'canvas';

  constructor() {
  }

  square = {
    x1: 10,
    y1: 10,
    x2: 100,
    y2: 100,
  }
  ctx;

  ngOnInit() {
    const canvas = <HTMLCanvasElement> document.getElementById('canvas')
    this.ctx = canvas.getContext('2d');
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(this.square.x1, this.square.y1, this.square.x2, this.square.y2);
  }

  @HostListener('document:mousemove', ['$event'])
  onmousemove(e) {
    console.log(e.clientX, e.clientY);
    this.ctx.clearRect(this.square.x1, this.square.y1, this.square.x2, this.square.y2);
    this.square.x1 = e.clientX;
    this.square.y1 = e.clientY;
    this.ctx.fillRect(this.square.x1, this.square.y1, this.square.x2, this.square.y2);
  }
}
