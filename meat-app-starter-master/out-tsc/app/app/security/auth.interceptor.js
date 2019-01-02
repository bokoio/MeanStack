var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, Injector } from '@angular/core';
import { LoginService } from './login/login.services';
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(injector) {
        this.injector = injector;
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        var loginService = this.injector.get(LoginService); //aqui é onde temos acesso ao login service
        if (this.loginService.isLoggedIn()) {
        }
        else {
        }
        /*let headers = new HttpHeaders()
        if(this.loginService.isLoggedIn()){
            //para evitar duplicaçao de codigo vai ser utilizado interceptor para passar o token.
            headers = headers.set('autorization', `Bearer ${this.injector.get(loginService.user.accessToken)}`)
        }*/
    };
    AuthInterceptor = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Injector])
    ], AuthInterceptor);
    return AuthInterceptor;
}());
export { AuthInterceptor };
//# sourceMappingURL=auth.interceptor.js.map