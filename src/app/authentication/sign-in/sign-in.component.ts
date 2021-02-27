import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {
    const email = this.signInForm.value['email'];
    const password = this.signInForm.value['password'];

    this.authenticationService.signInUser(email, password).then(
      () => {
        this.router.navigate(['/livres']);
      },
      (error) => this.errorMessage = error
    );
  }

}
