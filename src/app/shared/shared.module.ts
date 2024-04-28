import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberOnlyDirective } from './directives/number-only.directive';
import { FooterComponent } from './latouts/footer/footer.component';
import { HeaderComponent } from './latouts/header/header.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    NumberOnlyDirective,
    FooterComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
