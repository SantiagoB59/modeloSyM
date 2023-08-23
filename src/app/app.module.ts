import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import {CarouselModule} from 'primeng/carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './modules/carousel/carousel.component';
import { HeaderComponent } from './modules/header/header.component';
import { MenuComponent } from './modules/menu/menu.component';
import { PlagaComponent } from './modules/plaga/plaga.component';
import { ResultComponent } from './modules/result/result.component';
import { ButtonCameraComponent } from './modules/button-camera/button-camera.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    HeaderComponent,
    MenuComponent,
    PlagaComponent,
    ResultComponent,
    ButtonCameraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
