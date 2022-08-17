import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ColorPipe } from './pipes/color/color.pipe';
import { IsAvailablePipe } from './pipes/isAvailable/is-available.pipe';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    MainComponent,
    ColorPipe,        //  Added By Angualar
    IsAvailablePipe   //  Added By Angualar
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
