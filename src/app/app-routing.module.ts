import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductentryComponent } from './productentry/productentry.component';
import { RegistrationComponent } from './registration/registration.component';
import { StoreComponent } from './store/store.component';
import { TestComponent } from './test/test.component';
const routes: Routes = [
{
  path:"home",
  component:CalculatorComponent
},{
  path:"test",
  component:TestComponent
},
{
  path:"register",
  component:ProductentryComponent
},
{
  path:"student",
  component:RegistrationComponent
},
{
  path:"store",
  component:StoreComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
