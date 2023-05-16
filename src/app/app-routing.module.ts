import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { IntroduceComponent } from './views/introduce/introduce.component';
import { CartComponent } from './views/cart/cart.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { OverviewComponent } from './views/overview/overview.component';
import { ProductComponent } from './views/product/product.component';
import { CategoryComponent } from './views/category/category.component';
import { NotfoundComponent } from './views/notfound/notfound.component';



const routes: Routes = [
    {
      path: '',
      component: AppLayoutComponent,
      children: [
        {
          path: '',
          component: HomepageComponent,
        },
        {
          path: 'introduce',
          component: IntroduceComponent,
        },
        {
          path: 'cart',
          component: CartComponent
        }
      ]
    }, 
    {
      path: 'dashboard',
      component: DashboardLayoutComponent,
      children: [
        {
          path: '',
          component: OverviewComponent
        },
        {
          path: 'product',
          component: ProductComponent
        },
        {
          path: 'category',
          component: CategoryComponent
        }
      ]
    },
    { 
      path: '**', 
      component: NotfoundComponent,
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
