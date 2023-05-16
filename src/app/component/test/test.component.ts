import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  message: string = '';
  keyTicket: string = '';
  @Input() listStaff: any;
  @Output() pushData = new EventEmitter<string>();
  @Output() pushListTicket = new EventEmitter<string[]>();
  handleSendListTicket() {
    this.pushListTicket.emit(['NH-1', 'NH-2', 'NH-3']);
  }
  handleSend() {
    this.pushData.emit(this.keyTicket);
  }
}
