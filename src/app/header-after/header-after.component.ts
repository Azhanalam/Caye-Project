import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-after',
  templateUrl: './header-after.component.html',
  styleUrls: ['./header-after.component.css']
})
export class HeaderAfterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
logout()
{
  {
  this.router.navigate([""]);
  localStorage.setItem('username',"");
  // console.log("username: ",localStorage.getItem('username'));
  }
}
}
