import {Injectable} from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {AuthenticationService} from "./authentication.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private router: Router,private authService: AuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn())
      return true;
    this.router.navigate(['login'])

    return false;
  }



}
