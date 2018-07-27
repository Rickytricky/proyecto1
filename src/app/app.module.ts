import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GibeComponent } from './gibe/gibe.component';
import { FooterComponent } from './footer/footer.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { CarouselComponent } from './carousel/carousel.component';
import { AccordionComponent } from './accordion/accordion.component';
import { InfoComponent } from './info/info.component';
import { CardsComponent } from './cards/cards.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductosagregarComponent } from './productosagregar/productosagregar.component';
import { ProductomodificarComponent } from './productomodificar/productomodificar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GibeComponent,
    FooterComponent,
    SitemapComponent,
    CarouselComponent,
    AccordionComponent,
    InfoComponent,
    CardsComponent,
    ProductoComponent,
    ProductosComponent,
    ProductosagregarComponent,
    ProductomodificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
