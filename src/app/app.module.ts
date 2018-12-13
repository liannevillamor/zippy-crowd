import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularFittextModule } from 'angular-fittext';

import { RecommendationsComponent } from './recommendations/recommendations.component';
import { LandingBackgroundComponent } from './landing-background/landing-background.component';
import { LoginToolbarComponent } from './login-toolbar/login-toolbar.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    RecommendationsComponent,
    LandingBackgroundComponent,
    LoginToolbarComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    FlexLayoutModule,
    AngularFittextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
