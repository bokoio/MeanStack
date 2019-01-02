import {HttpErrorResponse} from '@angular/common/http'
import {ErrorHandler, Injectable, Injector, NgZone} from '@angular/core'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/throw'
import {NotificationService} from './shared/messages/notification.service'
import {LoginService} from './security/login/login.services'

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {
	  constructor(private ns: NotificationService, 
	  						private injec: Injector,
	  						private zn: NgZone){
	  	super()
	  }

	  handleError(errorResponse: HttpErrorResponse | any){
	  	if(errorResponse instanceof HttpErrorResponse){
	  		const message = errorResponse.error.message
	  		this.zn.run(()=>{
	  			switch (errorResponse.status) {
	  			case 401:
	  				this.injec.get(LoginService).handleLogin()
	  				break;
	  			case 403:
	  				  this.ns.notify(message || 'Nao autorizado')
	  				break;
	  			case 404:
	  				this.ns.notify(message || 'Recurso Nao encontrado, verifique console.')
	  				break;
	  		  }
	     })
	  	}	
	    super.handleError(errorResponse)
	}
}