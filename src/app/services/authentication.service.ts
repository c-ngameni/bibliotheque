import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class AuthenticationService {

  constructor() { }

  signUpUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(
          () => {
            resolve(true);
          },
          (error: any) => {
            reject(error);
          }
        );
    });
  }

  signInUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(
          () => {
            resolve(true);
          },
          (error: any) => {
            reject(error);
          }
        );
    });
  }

  signOutUser() {
    firebase.auth().signOut();
  }

}
