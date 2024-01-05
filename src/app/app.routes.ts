import { Routes } from '@angular/router';
import { AppLayoutComponent } from './common/template/components/app.layout.component';
import { LoginComponent } from './core/auth/components/login.component';
import { authGuard, authGuardLogin } from './core/auth/services/auth.guard';
import { UserListComponent } from './features/Managmanet/users/user-list.component';

export const routes: Routes = [
  { path: '', component: LoginComponent, canActivate: [authGuardLogin] },
  {
    path: 'portal', component: AppLayoutComponent, canActivate: [authGuard], children: [
      {path:'list-users', component:UserListComponent}
    ]
  }
];
