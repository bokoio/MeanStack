import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {RestaurantsService} from '../../restaurants/restaurants.service'

import {Observable} from 'rxjs/Observable'


@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

	reviews: Observable<any>

  constructor( private restaurantsService: RestaurantsService, 
  	           private route: ActivatedRoute) { }

  ngOnInit() {
  	/*Esse componente é filho por isso nao tem acesso diretamente aos valores da rota
  	por isso tem que usar a marcaçao parent  */
  	this.reviews = this.restaurantsService
  	  .reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
