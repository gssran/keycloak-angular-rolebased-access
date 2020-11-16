import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile, KeycloakRoles } from 'keycloak-js';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userDetails: KeycloakProfile;
  user:String ;
  constructor(private keycloakService: KeycloakService ){ }

  async ngOnInit() {
    if (await  this.keycloakService.isLoggedIn()) {
      this.userDetails = await this.keycloakService.loadUserProfile();
      this.user= this.userDetails.firstName + " "+ this.userDetails.lastName;
      
    }
  }
 
}
