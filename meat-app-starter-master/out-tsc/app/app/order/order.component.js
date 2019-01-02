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
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrderService } from './order-service';
import { OrderItem } from './order.model';
import 'rxjs/add/operator/do';
var OrderComponent = /** @class */ (function () {
    function OrderComponent(orderService, router, formBulder) {
        this.orderService = orderService;
        this.router = router;
        this.formBulder = formBulder;
        this.emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        this.numberPattern = /^[0-9]*$/;
        this.delivery = 8;
        this.paymentOptions = [
            { label: 'Dinheiro', value: 'MON' },
            { label: 'Cartao de Debito', value: 'DEB' },
            { label: 'Cartao Refeiçao', value: 'REF' }
        ];
    }
    OrderComponent_1 = OrderComponent;
    OrderComponent.prototype.ngOnInit = function () {
        this.orderForm = this.formBulder.group({
            name: this.formBulder.control('', [Validators.required, Validators.minLength(5)]),
            email: this.formBulder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
            emailConfirmation: this.formBulder.control('', [Validators.required, Validators.email]),
            address: this.formBulder.control('', [Validators.required, Validators.minLength(5)]),
            number: this.formBulder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
            optionalAddress: this.formBulder.control(''),
            paymentOption: this.formBulder.control('', [Validators.required])
        }, { validator: OrderComponent_1.equalsTo });
    };
    OrderComponent.equalsTo = function (group) {
        var email = group.get('email');
        var confirmEmail = group.get('emailConfirmation');
        if (!email || !confirmEmail) {
            return undefined;
        }
        if (email.value !== confirmEmail.value) {
            return { emailsNotMatch: true };
        }
        return undefined;
    };
    OrderComponent.prototype.itemsValue = function () {
        return this.orderService.itemsValue();
    };
    OrderComponent.prototype.cartItems = function () {
        return this.orderService.cartItems();
    };
    OrderComponent.prototype.increaseQty = function (item) {
        this.orderService.increaseQty(item);
    };
    OrderComponent.prototype.decreaseQty = function (item) {
        this.orderService.decreaseQty(item);
    };
    OrderComponent.prototype.remove = function (item) {
        this.orderService.remove(item);
    };
    OrderComponent.prototype.checkOrder = function (order) {
        var _this = this;
        order.orderItems = this.cartItems()
            .map(function (item) { return new OrderItem(item.quantity, item.menuItem.id); });
        this.orderService.checkOrder(order)
            .do(function (orderId) {
            _this.orderId = orderId;
        })
            .subscribe(function (orderId) {
            _this.router.navigate(['/order-sumary']);
            _this.orderService.clear();
        });
    };
    OrderComponent.prototype.isOrderCompleted = function () {
        return this.orderId !== undefined;
    };
    var OrderComponent_1;
    OrderComponent = OrderComponent_1 = __decorate([
        Component({
            selector: 'mt-order',
            templateUrl: './order.component.html'
        }),
        __metadata("design:paramtypes", [OrderService,
            Router,
            FormBuilder])
    ], OrderComponent);
    return OrderComponent;
}());
export { OrderComponent };
//# sourceMappingURL=order.component.js.map