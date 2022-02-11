import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseProductsComponent } from './browse-products/browse-products.component';
import { CartComponent } from './cart/cart.component';
import { CatalogComponent } from './catalog.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    {
        path: '',
        component: CatalogComponent,
        children: [
          {
            path: '',
            redirectTo: 'browse-products'
          },
          {
            path: 'browse-products',
            component: BrowseProductsComponent
          },
          {
            path: 'search',
            component: SearchComponent
          },
          {
            path: 'cart',
            component: CartComponent
          }
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
