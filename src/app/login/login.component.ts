import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username?: string;
  password?: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
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
