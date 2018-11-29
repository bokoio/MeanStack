import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';/*é o decorator, serve para aplicar metadados
 em uma classe em um atributo ou em um metodo ou em um argumento de um metodo*/

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './student/student.component';

/*Meta dados associados a classe*/
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } /*ng model ira aplicar os metadados nessa classe */
