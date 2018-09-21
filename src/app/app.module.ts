import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { GiphyComponent } from './giphy/giphy.component';
import { GiphySearchComponent } from './giphysearch/giphysearch.component';

@NgModule({
 declarations: [
   AppComponent,
   GiphyComponent,
   GiphySearchComponent

 ],
 imports: [
   BrowserModule,
   HttpModule
 ],
 providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
