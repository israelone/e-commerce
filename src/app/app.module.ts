import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { DescriptionComponent } from './components/main/description/description.component';
import { PictureComponent } from './components/main/picture/picture.component';
import { NavigationComponent } from './components/main/navigation/navigation.component';
import { ContentComponent } from './components/main/content/content.component';
import { ModalComponent } from './components/main/picture/modal/modal.component';
import { ShoppingCartModalComponent } from './components/main/navigation/shopping-cart-modal/shopping-cart-modal.component';
import { CartItemComponent } from './components/main/navigation/shopping-cart-modal/cart-item/cart-item.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DescriptionComponent,
    PictureComponent,
    NavigationComponent,
    ContentComponent,
    ModalComponent,
    ShoppingCartModalComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
