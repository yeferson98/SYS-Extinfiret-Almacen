import { Routes } from '@angular/router';
import { AppLayoutComponent } from './common/template/components/app.layout.component';
import { LoginComponent } from './core/auth/components/login.component';

export const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'portal', component:AppLayoutComponent}
];
