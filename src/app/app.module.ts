import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Items} from './amazon';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AmazonComponent } from './amazon/amazon.component';
import {AmazonService} from './amazon.service';

@NgModule({
  declarations: [
    AppComponent,
    AmazonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    Items,
    AmazonService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
