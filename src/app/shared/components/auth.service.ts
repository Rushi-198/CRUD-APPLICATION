import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _firebaseauth: AngularFireAuth,
    private router: Router) { }

  loginstatus: BehaviorSubject<Boolean> = new BehaviorSubject<Boolean>(false)


  Onlogin(email: string, password: string): Promise<any> {
    return this._firebaseauth.signInWithEmailAndPassword(email, password)
  }



  Onsignup(email: string, password: string): Promise<any> {
    return this._firebaseauth.createUserWithEmailAndPassword(email, password)
  }



  Onlogout() {

    this.loginstatus.next(false)
    localStorage.clear()
    this.router.navigate([ '' ])
  }
}