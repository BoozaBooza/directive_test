import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { TooltipDirective } from './tooltip.directive';
import { TooltipComponent } from './tooltip/tooltip.component';
import { OverlayModule } from '@angular/cdk/overlay';

// https://github.com/angular/material2/blob/master/src/lib/tooltip/tooltip.ts#L286
@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, OverlayModule ],
  declarations: [ AppComponent, TooltipDirective, TooltipComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
