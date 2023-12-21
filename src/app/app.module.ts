import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.routes';
import { TemplateModule } from './common/template/template.module';
import { AppConfig } from './core/services/app.config.service';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    RouterModule.forRoot(routes, { useHash: false, enableTracing: false }),
    TemplateModule,
    HttpClientModule,
    CoreModule
  ],
  bootstrap: [AppComponent],
  providers: [
    AppConfig,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfig], multi: true
    },
  ]
})
export class AppModule { }
export function initializeApp(appConfig: AppConfig) {
  return () => appConfig.load();
}
