import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { filter } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isConnected: boolean;
  isAddPage: boolean;

  // Subs des behaviors
  routerEventSub: Subscription;
  tokenSub: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {

// Display or not the logout button if connected or not

    this.routerEventSub = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((e: any) => {
        if (e.url === '/books/new') {
          this.isAddPage = true;
        } else {
          this.isAddPage = false;
        }
      });

// Generate token for auth

    this.tokenSub = this.authService.token.subscribe((token: string) => {
      this.isConnected = false;
      if (token) {
        this.isConnected = true;
      }
    });
  }


// On click sign out function
  onClickSignOut() {
    this.authService
      .signOut()
      .then((result) => {
        this.router.navigateByUrl('auth');
      })
      .catch((err) => {});
  }

// Prevent memory loss by destroying subscriptions when finished using.

  ngOnDestroy() {
    this.tokenSub.unsubscribe();
    this.routerEventSub.unsubscribe();
  }
}
