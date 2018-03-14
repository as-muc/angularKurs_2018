import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.css']
})
export class TitleBoxComponent implements OnInit {
  
  @Input() title: string;
  @Output() ping = new EventEmitter<string>();

  constructor() { }

  sendPing(){
    console.log("Ping will be sent")
    this.ping.emit('A ping messagewas sent out!');
    console.log("Ping sent")
  }
  ngOnInit() {
  }

}
