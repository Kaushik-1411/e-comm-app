import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductComponent } from './product/product.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NumberOnlyDirective } from './shared/directives/number-only.directive';
import { FooterComponent } from './shared/layouts/footer/footer.component';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { PageNotFoundComponent } from './shared/layouts/page-not-found/page-not-found.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ContactUsComponent,
        ProductComponent,
        UserProfileComponent,
        NumberOnlyDirective,
        FooterComponent,
        HeaderComponent,
        PageNotFoundComponent,
    ],
    providers: [
        provideClientHydration()
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
    ]
})
export class AppModule { }
