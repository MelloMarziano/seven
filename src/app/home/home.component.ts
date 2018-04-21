import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = localStorage.getItem('email');
  ver = false;
  casa=true;
  constructor(private route:Router) { }

  ngOnInit() {

    $(document).ready(function(){
      //$('.collapse').collapse();
    })

  }

  public logout(){
    localStorage.removeItem('email');
    this.route.navigate(["/"]);
  }



}


