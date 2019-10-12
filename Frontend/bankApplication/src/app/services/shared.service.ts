import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private router: Router) { }

  loginService(user?, password?) {
    console.log('user', user);
    console.log('password', password);

    // TODO: upon success set the token in local storage and then route to home page
    this.router.navigate(['/']); // routing to home

  }
}
