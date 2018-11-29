import { Component } from '@angular/core';/*importaçao de um decorator*/

import { Student } from './student/student.model'

@Component({/*metadados da classe*/
  selector: 'jad-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']/* esse componente é opcional bem como o arquivo app.component.css*/
})
export class AppComponent {
	/*Passar um array*/
	students : Student[] = [
  {name: 'Luke',isJedi: true ,temple: 'Coruscan'},
  {name: 'Leia',isJedi: false },
  {name: 'Felipe',isJedi: true ,temple: 'Coruscan'},
  {name: 'Han Solo',isJedi:  false}
  ]
}
