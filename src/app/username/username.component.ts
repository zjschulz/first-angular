import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  userName = '';

  constructor() { }

  ngOnInit(): void {
  }

  onResetInput() {
    this.userName = ''
  }

}
