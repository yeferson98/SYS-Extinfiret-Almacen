import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './auth/components/login.component';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpAppWeb } from './http/http-backend';
import { AuthController } from './auth/domain/controllers/auth-controller';
import { AuthRepository } from './auth/infrastructure/repository/auth-repository';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers:[
    HttpAppWeb,
    AuthController,
    AuthRepository
  ]
})
export class CoreModule { }
