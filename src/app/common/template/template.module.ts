import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './components/app.layout.component';
import { AppMenuComponent } from './components/app.menu.component';
import { AppMenuitemComponent } from './components/app.menuitem.component';
import { AppMenuProfileComponent } from './components/app.menuprofile.component';
import { AppSidebarComponent } from './components/app.sidebar.component';
import { AppTopbarComponent } from './components/app.topbar.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { StyleClassModule } from 'primeng/styleclass';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppLayoutComponent,
    AppMenuComponent,
    AppMenuitemComponent,
    AppMenuProfileComponent,
    AppSidebarComponent,
    AppTopbarComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    RouterOutlet,
    TooltipModule,
    StyleClassModule,
    BrowserAnimationsModule
  ]
})
export class TemplateModule { }
