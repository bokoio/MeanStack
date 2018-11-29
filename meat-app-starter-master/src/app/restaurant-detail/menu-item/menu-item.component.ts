import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import {MenuItem} from './menu-item.model'


@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})



export class MenuItemComponent implements OnInit {

	@Input() menuItem: MenuItem
	/*Evento personalizado para receber o add do template html*/
	@Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent(){
  	this.add.emit(this.menuItem)
  }

}
