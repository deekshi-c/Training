import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestGaurdGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): any {
    const quizStarted = sessionStorage.getItem('quizStarted');
    if (quizStarted) {
      return true;
    } else {
      this.router.navigate(['/congrats']);
    }
  }
}
