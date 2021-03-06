import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model'
import { RestaurantsService } from './restaurants.service'
import { trigger, state, style, transition, animate } from '@angular/animations'

import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import {Observable, from} from 'rxjs'
import {switchMap, tap, debounceTime, distinctUntilChanged, catchError} from 'rxjs/operators'



@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
  	trigger('toogleSearch', [
  		state('hidden', style({
  			opacity:0,
  			"max-height": "0px"
  		})),
  		state('visible', style({
  			opacity:1,
  			"max-height": "70px",
  			"margin-top": "20px"
  		})),
  		transition('* => *', [
  			  animate('300ms 0s ease-in-out')
  			])
  	])
  ]
})
export class RestaurantsComponent implements OnInit {

  searchForm: FormGroup
  searchControl: FormControl

	searchBarState = 'hidden'

	restaurants: Restaurant[] = []

  constructor( private RestaurantsService: RestaurantsService, 
               private fb: FormBuilder ) { }

  ngOnInit() {
    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(searchTerm => console.log(`q=${searchTerm}`)),
        switchMap(searchTerm => 
          this.RestaurantsService
          .restaurants(searchTerm)//observable que retorna ao switchMap aqui é onde iremos tratar o erro.
          .pipe(catchError(error => from([])))) //retorna um observable vazio

      ).subscribe(restaurants => this.restaurants = restaurants)

    this.RestaurantsService.restaurants().subscribe(restaurants => this.restaurants = restaurants)
  }

  toogleSearch(){
  	this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }

}
