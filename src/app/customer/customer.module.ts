import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyerDashboadComponent } from './buyer/buyer-dashboad/buyer-dashboad.component';
import { CheckoutComponent } from './buyer/checkout/checkout.component';
import { SellerDashboardComponent } from './seller/seller-dashboard/seller-dashboard.component';
import { SigninSignupComponent } from './signin-signup/signin-signup.component';
import { CustomerComponent } from './services/customer/customer.component';



@NgModule({
  declarations: [
    BuyerDashboadComponent,
    CheckoutComponent,
    SellerDashboardComponent,
    SigninSignupComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
