import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { WorkoutsComponent } from './workouts/workouts.component';
import { NutritionComponent } from './nutrition/nutrition.component';
import { ToolsComponent } from './tools/tools.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { SideMenuComponent } from './shared/header/side-menu/side-menu.component';
import { TitleComponentComponent } from './shared/small-components/title-component/title-component.component';
import { ButtonComponentComponent } from './shared/small-components/button-component/button-component.component';
import { HeroComponent } from './home/hero/hero.component';
import { FeatureCardComponent } from './shared/small-components/feature-card/feature-card.component';
import { AboutComponent } from './home/about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    WorkoutsComponent,
    NutritionComponent,
    ToolsComponent,
    ServicesComponent,
    ContactComponent,
    SideMenuComponent,
    TitleComponentComponent,
    ButtonComponentComponent,
    HeroComponent,
    FeatureCardComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
