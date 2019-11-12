import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuOpenComponent } from './menu-open/menu-open.component';
import { AuthIndicatorComponent } from './auth-indicator/auth-indicator.component';
import { FooterComponent } from './footer/footer.component';
import { BuyFooterComponent } from './buy-footer/buy-footer.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductFeatureComponent } from './product-feature/product-feature.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuOpenComponent,
    AuthIndicatorComponent,
    FooterComponent,
    BuyFooterComponent,
    HomeComponent,
    ProductComponent,
    ProductFeatureComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'product/:id', component: ProductComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
