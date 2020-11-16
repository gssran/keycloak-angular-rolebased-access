
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RolesComponent } from './roles/roles/roles.component';
import { ErrorComponent } from './error/error/error.component';
 
function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: environment.keyclockUrl,
        realm: 'angular-keycloak',
        clientId: environment.keyclockClient,
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
    });
}
 
@NgModule({
  declarations: [AppComponent, HomeComponent, RolesComponent, ErrorComponent],
  imports: [AppRoutingModule, BrowserModule, KeycloakAngularModule,HttpClientModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
