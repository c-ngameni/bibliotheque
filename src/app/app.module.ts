import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookComponent } from './book/book.component';
import { BookFormComponent } from './book-form/book-form.component';
import { HeaderComponent } from './header/header.component';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationGuardService } from './services/authentication-guard.service';
import { BookService } from './services/book.service';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    BookListComponent,
    BookComponent,
    BookFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthenticationService, AuthenticationGuardService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
