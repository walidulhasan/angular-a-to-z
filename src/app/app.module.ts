import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialComponent } from './AngularForBeginners/components/initial/initial.component';
import { AngularFirstComponentsComponent } from './AngularForBeginners/components/angular-first-components/angular-first-components.component';
import { InputsAndtheInputDecoratorComponent } from './AngularForBeginners/components/inputs-andthe-input-decorator/inputs-andthe-input-decorator.component';
import { NgforDirectiveComponent } from './AngularForBeginners/components/ngfor-directive/ngfor-directive.component';


@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    AngularFirstComponentsComponent,
    InputsAndtheInputDecoratorComponent,
    NgforDirectiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
