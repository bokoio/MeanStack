var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { RestaurantsService } from './restaurants.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';
import { Observable } from "rxjs";
var RestaurantsComponent = /** @class */ (function () {
    function RestaurantsComponent(RestaurantsService, fb) {
        this.RestaurantsService = RestaurantsService;
        this.fb = fb;
        this.searchBarState = 'hidden';
        this.restaurants = [];
    }
    RestaurantsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchControl = this.fb.control('');
        this.searchForm = this.fb.group({
            searchControl: this.searchControl
        });
        this.searchControl.valueChanges
            .debounceTime(500)
            .distinctUntilChanged()
            .do(function (searchTerm) { return console.log("q=" + searchTerm); })
            .switchMap(function (searchTerm) {
            return _this.RestaurantsService.restaurants(searchTerm) //observable que retorna ao switchMap aqui é onde iremos tratar o erro.
                .catch(function (error) { return Observable.from([]); });
        }) //retorna um observable vazio
            .subscribe(function (restaurants) { return _this.restaurants = restaurants; });
        this.RestaurantsService.restaurants().subscribe(function (restaurants) { return _this.restaurants = restaurants; });
    };
    RestaurantsComponent.prototype.toogleSearch = function () {
        this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
    };
    RestaurantsComponent = __decorate([
        Component({
            selector: 'mt-restaurants',
            templateUrl: './restaurants.component.html',
            animations: [
                trigger('toogleSearch', [
                    state('hidden', style({
                        opacity: 0,
                        "max-height": "0px"
                    })),
                    state('visible', style({
                        opacity: 1,
                        "max-height": "70px",
                        "margin-top": "20px"
                    })),
                    transition('* => *', [
                        animate('300ms 0s ease-in-out')
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [RestaurantsService,
            FormBuilder])
    ], RestaurantsComponent);
    return RestaurantsComponent;
}());
export { RestaurantsComponent };
//# sourceMappingURL=restaurants.component.js.map