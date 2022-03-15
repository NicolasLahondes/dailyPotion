import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css'],
})
export class AuthViewComponent implements OnInit {
  errMsg: string;
  email: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

// When form is submitted, ask to signIn function of auth.service to navigate to 'home'. It's the login function.

  onSubmitAuthForm() {
    this.authService
      .signIn(this.email, this.password)
      .then((result) => {
        this.router.navigateByUrl('home');
      })
      .catch((errMsg: string) => {
        this.errMsg = errMsg;
      });
    //TODO Récupérer messages erreurs avec le form
  }
}
