import {
	Injectable
} from '@angular/core';
import {
	CanActivate,
	Router,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class AuthCheckerService implements CanActivate {
	constructor(private router: Router) {}


	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
		//Check user token in real life
/*		if (route.params['data'] && route.params['data'] == 'admin')
			return true
		console.log(route)
		this.router.navigateByUrl('/')
		return false*/
		return true
	}

}