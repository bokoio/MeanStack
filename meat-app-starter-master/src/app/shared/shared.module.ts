import { NgModule, ModuleWithProviders } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'


import { InputComponent } from './input/input.component'
import { RadioComponent } from  './radio/radio.component'
import { RatingComponent } from './rating/rating.component'

import { OrderService} from '../order/order-service'
import { ShoppingCartService } from '../restaurant-detail/shopping-cart/shopping-cart.service'
import { RestaurantsService } from '../restaurants/restaurants.service';
import { SnackbarComponent } from './messages/snackbar/snackbar.component'
import { NotificationService } from './messages/notification.service'
import { LoginService } from '../security/login/login.services'
import { LoggedindGard } from '../security/loggedin.gard'


@NgModule({
	declarations: [InputComponent,RadioComponent,RatingComponent, SnackbarComponent],
	imports: [FormsModule, ReactiveFormsModule, CommonModule],
	exports: [InputComponent,RadioComponent,RatingComponent,
	          FormsModule, ReactiveFormsModule, CommonModule,SnackbarComponent]
})

export class SharedModule {
	static forRoot(): ModuleWithProviders{
		return {
			ngModule: SharedModule,
			providers: [OrderService,
			            ShoppingCartService,
			            RestaurantsService,
			            NotificationService,
			            LoginService,
			            LoggedindGard]
		}
	}


}