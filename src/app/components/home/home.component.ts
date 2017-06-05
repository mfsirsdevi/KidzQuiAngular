import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css',
    '../../../assets/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css',
    '../../../assets/vendors/jqvmap/dist/jqvmap.min.css',
    '../../../assets/vendors/bootstrap-daterangepicker/daterangepicker.css'
  ]
})
export class HomeComponent implements OnInit {

  firstName = '';
  userType = '';
  constructor(private router: Router) { }

  ngOnInit() {
    this.firstName = localStorage.getItem('name').split(' ')[0];
    this.userType = localStorage.getItem('type');
  }

  fetchUsers(type) {
    this.router.navigate(['home/evaluators']);
  }

  logout() {
    localStorage.removeItem('name');
    localStorage.removeItem('type');
    this.router.navigate(['login']);
  }
}
