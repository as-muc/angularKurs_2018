import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {

  public isHidden: Boolean = false;
  constructor() { }

  onClick() {
    this.isHidden = !this.isHidden; 
    console.log(this.isHidden)
  }
  ngOnInit() {
  }

}
