import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
    if(this.username === 'jupiter' && this.password === 'b3xsaturno'){
      this.router.navigate(['/home']);
    } else {
      alert('Credenciales incorrectas. Por favor intente de nuevo.');
      //this.router.navigate(['/login']);
    }
  }

}
