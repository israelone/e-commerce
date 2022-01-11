import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { DescriptionComponent } from './components/main/description/description.component';
import { PictureComponent } from './components/main/picture/picture.component';
import { NavigationComponent } from './components/main/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DescriptionComponent,
    PictureComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
