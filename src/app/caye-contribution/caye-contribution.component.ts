import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-caye-contribution',
  templateUrl: './caye-contribution.component.html',
  styleUrls: ['./caye-contribution.component.css']
})
export class CayeContributionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  start()
  {
  this.router.navigate(["contributionform"]);
  window.scrollTo(0, 0);
  }

  draft(){
    this.router.navigate(["draftsubmission"]);
    window.scrollTo(0, 0);
  }

  deduction(){
    this.router.navigate(["deduction"]);
    window.scrollTo(0, 0);
  }
}
