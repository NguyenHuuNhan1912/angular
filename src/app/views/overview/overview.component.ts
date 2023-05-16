import { Component } from '@angular/core';
import {LoginUser} from './interface';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})

export class OverviewComponent {
  listStaff: any[] = [
    { 
      name: 'Nguyen Huu Nhan',
      position: 'Frontend Fresher',
      salary: '8tr',
    }, 
    {
      name: 'Tu Ngoc Diep',
      position: 'Java Fresher',
      salary: '8tr',
    }
  ];
  login: LoginUser  = {
      username: '',
      password: '',
  }
  ticket: string = '';
  getTicket(ticket: string) {
    this.ticket = ticket;
  }
  listTicket: string[] = [];
  getListTicket(data: string[]) {
    this.listTicket = [...data];
  }
  handleSubmit(event: any): void {
      event.preventDefault();
      console.log(this.login);
  }
}
