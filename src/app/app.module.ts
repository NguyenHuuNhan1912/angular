import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { IntroduceComponent } from './views/introduce/introduce.component';
import { CartComponent } from './views/cart/cart.component';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { OverviewComponent } from './views/overview/overview.component';
import { ProductComponent } from './views/product/product.component';
import { CategoryComponent } from './views/category/category.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { TestComponent } from './component/test/test.component';
 import { ReactiveFormsModule } from '@angular/forms';

// Antd
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    IntroduceComponent,
    CartComponent,
    AppLayoutComponent,
    DashboardLayoutComponent,
    OverviewComponent,
    ProductComponent,
    CategoryComponent,
    NotfoundComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NzFormModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
