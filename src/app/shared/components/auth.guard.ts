import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {




  constructor(private _router: Router,
    private _auth: AuthService) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const login = localStorage.getItem('userid')




    if (login) {
      // this._auth.loginstatus = true

      this._auth.loginstatus.next(true)
      return true
    } else {
      this._router.navigate([ '/' ])
      return false
    }
  }


}
