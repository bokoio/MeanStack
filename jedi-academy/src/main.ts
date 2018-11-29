import { enableProdMode } from '@angular/core';/*nao permite debug em modo de produçao*/
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';/*Importada sempre o Angular é iniciado atraves do browser*/

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));/*é o que start realmente a aplicaçao*/
  /*o AppModule é camel case por que verifica dentro da pasta app se existe um arquivo de nome igual .ts
  Exemplo AppModule = app.module.ts */

