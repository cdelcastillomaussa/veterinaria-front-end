import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('InputUser')
  inputUser!: MatInput;
  username?: string;
  password?: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.inputUser.focus();

  }

  login(){
    if(this.username === 'demo.demo' && this.password === 'jupiter48'){
      this.router.navigate(['/home']);
    } else {
      alert('Credenciales incorrectas. Por favor intente de nuevo.');
      this.username = '';
      this.password = '';
    }

  }



}
