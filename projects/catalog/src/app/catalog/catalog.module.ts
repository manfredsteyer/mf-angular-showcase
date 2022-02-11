import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CatalogRoutingModule } from './catalog-routing.module';
import { BrowseProductsComponent } from './browse-products/browse-products.component';
import { CartComponent } from './cart/cart.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [
    CatalogComponent,
    BrowseProductsComponent,
    CartComponent,
    SearchComponent
  ],
})
export class CatalogModule { }
