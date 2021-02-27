import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: boolean;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(
      (user: any) => {
        if (user) {
          this.isAuthenticated = true;
        } else {
          this.isAuthenticated = false;
        }
      }
    );
  }

  onSignOut() {
    this.authenticationService.signOutUser();
  }

}
