import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RandomTableComponent } from './components/random-table/random-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material import
import { MatTableModule } from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'


@NgModule({
  declarations: [AppComponent, RandomTableComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatTableModule, MatToolbarModule, MatButtonModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
