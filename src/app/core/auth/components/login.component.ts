import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../../common/models/user-login';
import { AuthController } from '../domain/controllers/auth-controller';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styles: ``
})
export class LoginComponent implements OnInit {
  model: UserLogin = {}

  constructor(private controller:AuthController){

  }
  ngOnInit(): void {
  }
  async onLogin() {
    let response= await this.controller.login(this.model);
    if(response.error){
      return;
    }
    console.log(response.body);
  }
}
