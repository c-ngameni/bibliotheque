import { Component } from '@angular/core';
import firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bibliothèque';

  constructor() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyCB1L-6cpyXTxBHkx7uZ509tJ22dMyRNVU",
      authDomain: "bibliotheque-4c297.firebaseapp.com",
      projectId: "bibliotheque-4c297",
      storageBucket: "bibliotheque-4c297.appspot.com",
      messagingSenderId: "1086509631630",
      appId: "1:1086509631630:web:ef23960e4ede99ba8ea1df"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

}
