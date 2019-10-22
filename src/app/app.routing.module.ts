import { NgModule }               from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { FormsModule }            from '@angular/forms';

import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { OffersComponent } from './offers/offers.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { AccomidationComponent } from './accomidation/accomidation.component';
import { RoomsComponent } from './accomidation/rooms/rooms.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { RestaurantComponent } from './food-and-beverage/restaurant/restaurant.component';
import { BarsComponent } from './food-and-beverage/bars/bars.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WelnessAndSpaComponent } from './lifestyle/welness-and-spa/welness-and-spa.component';
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { WesternWeddingsComponent } from './weddings/western-weddings/western-weddings.component';
import { ThaiWeddingsComponent } from './weddings/thai-weddings/thai-weddings.component';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent  },
  { path: 'accomidation', component: AccomidationComponent },
  { path: 'celebrations', component: CelebrationsComponent },
  { path: 'food-and-beverage', component: FoodAndBeverageComponent },
  { path: 'lifestyle', component: LifestyleComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'weddings', component: WeddingsComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },

];


@NgModule({
  imports:[ RouterModule.forRoot(appRoutes)],
  exports:[ RouterModule ],

})

export class AppRoutingModule {

}
