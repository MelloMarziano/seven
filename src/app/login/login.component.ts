import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
///import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
//import { Command } from 'selenium-webdriver';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario;
  public cl;
  constructor(private router : Router) { }

  ngOnInit() {
  }

  comprobar(){
    if(this.usuario=="eliu.orteg@gmail.com" && this.cl=="1234"){
      localStorage.setItem('email',this.usuario)
      this.router.navigate( ['home']);
    }else{
      alert(this.usuario+" < -  > "+this.cl);
    }
  }

}
