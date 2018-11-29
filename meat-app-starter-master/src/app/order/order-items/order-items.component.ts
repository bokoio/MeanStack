import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {CartItem} from '../../restaurant-detail/shopping-cart/cart-item.model'

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

	/*@Input dando visibilidade externa ao componente para que se possa receber os valores*/
	@Input() items: CartItem[]

	/*@Output para enviar esses valores*/
	@Output() increaseQty = new EventEmitter<CartItem>()
	@Output() decreaseQty = new EventEmitter<CartItem>()
	@Output() remove = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item:CartItem){
  	this.increaseQty.emit(item);
  }

  emitDecreaseQty(item:CartItem){
  	this.decreaseQty.emit(item);
  }

  emitRemove(item:CartItem){
  	this.remove.emit(item);
  }


}
