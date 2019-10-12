import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Login', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Login', cols: 1, rows: 1 },
      ];
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private sharedService: SharedService
    ) {

    }

  login(event) {
    console.log('login');

    const userInfo = {
      user: 'swapnilsrivastava68@gmail.com',
      password: 'Hello'
    };

    const { user, password } = userInfo;
    this.sharedService.loginService(user, password)
  }
}
