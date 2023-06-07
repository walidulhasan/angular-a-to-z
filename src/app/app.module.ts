import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialComponent } from './AngularForBeginners/components/initial/initial.component';
import { AngularFirstComponentsComponent } from './AngularForBeginners/components/angular-first-components/angular-first-components.component';


@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    AngularFirstComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
