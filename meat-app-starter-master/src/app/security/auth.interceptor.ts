import { Injectable,Injector } from '@angular/core'

import {HttpInterceptor,HttpRequest,HttpHandler,HttpEvent,HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs/Observable'
import {LoginService} from './login/login.services'

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
	constructor(private injector: Injector){}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
		const loginService = this.injector.get(LoginService)//aqui é onde temos acesso ao login service
    if(loginService.isLoggedIn()){
    	//Clonar o request original
    	const authRequest = request.clone(/*Parametros da funçao clone, passando os novos parametros para o request*/
    		 		{setHeaders:{'Authorization': `Bearer ${loginService.user.accessToken}`}})
    	// Passar o authRequest modificado e nao passar o request original:
    	return next.handle(request)
    } else {
    	return next.handle(request)
    }
	}
}