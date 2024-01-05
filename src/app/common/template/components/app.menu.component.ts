import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenuServiceApp } from '../service/menu.service';
import { AuthService } from '../../../core/auth/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

  model: MenuItem[] = [];
  constructor(private serviceMenu: MenuServiceApp, private auth: AuthService) { }

  ngOnInit() {

    let user = this.auth.getInfoUser();
    this.serviceMenu.getMenuApp(user.application?.roleUserAppId ?? 0).subscribe(result => {
      this.model = <MenuItem[]>result;
      // this.isMenuLoader = false;
    });
  }
}
