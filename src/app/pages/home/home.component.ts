import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home!: MenuItem;

  constructor() { }

  ngOnInit(): void {
    this.home = {icon: 'pi pi-home', routerLink: '/home'};
  }

}
