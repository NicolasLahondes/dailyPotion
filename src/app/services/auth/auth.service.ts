import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //Fake identification Token
  token: BehaviorSubject<string>; // Observable

  constructor() {
    this.token = new BehaviorSubject<string>('');
  }

  // Allow user to connect with email field being "Administrateur" and password being "azerty" after a delay of 300ms
  signIn(email: string, password: string): Promise<void | string> {
    // res => resolve promese | rej => reject promese
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (email === 'Administrateur' && password === 'azerty') {
          this.token.next('azertyui');
          res();
        } else {
          rej('Les identifiants sont incorrects.');
        }
      }, 300);
    });
  }

  // Allow user to sign out
  signOut(): Promise<void> {
    return new Promise<void>((res, rej) => {
      this.token.next('');
      res();
    });
  }
}
