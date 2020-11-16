import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  constructor(private keycloakService: KeycloakService) { }
  roles:String[];
  async ngOnInit() {
    if (await  this.keycloakService.isLoggedIn()) {
      this.roles= this.keycloakService.getUserRoles()
      
    }
  }

}
