import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { AuthenticationGuardService } from './services/authentication-guard.service';

const routes: Route[] = [
  { path: 'authentification/inscription', component: SignUpComponent },
  { path: 'authentification/connexion', component: SignInComponent },
  { path: 'livres', canActivate: [AuthenticationGuardService], component: BookListComponent },
  { path: 'livres/nouveau', canActivate: [AuthenticationGuardService], component: BookFormComponent },
  { path: 'livres/:id', canActivate: [AuthenticationGuardService], component: BookComponent },
  { path: '', redirectTo: 'livres', pathMatch: 'full' },
  { path: '**', component: BookListComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
