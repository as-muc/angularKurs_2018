import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mouse-over',
  templateUrl: './mouse-over.component.html',
  styleUrls: ['./mouse-over.component.css']
})
export class MouseOverComponent implements OnInit {
  x: number;
  y: number;
  constructor() { }
  onMouseMove(mm){
   console.log(mm);
   this.x = mm.clientX;
   this.y = mm.clientY;
  }

  ngOnInit() {
  }

}
