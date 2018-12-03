import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations'

import  {Restaurant} from './restaurant.model'

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html',
  //Definiçao da animaçao
  //Nome da animaçao = restaurantAppeared 
  //State = Ready e o stylo css = opacity
  animations: [
  	trigger('restaurantAppeared', [
  		state('ready', style({opacity:1})),
  		transition('void => ready', [
  			style({opacity: 0, transform: 'translate(-30px, -10px)'}),
  			animate('500ms 0s ease-in-out')
  			])
  	])
  ]
})
export class RestaurantComponent implements OnInit {
	//Associando a trigger ao estado do componente

	restaurantState = 'ready'

	@Input() restaurant: Restaurant

  constructor() { }

  ngOnInit() {
  }

}
