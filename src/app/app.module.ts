import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FiltroArrayImpuroPipe } from './filtro-array-impuro.pipe';
import { FiltroArrayPipe } from './filtro-array.pipe';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';

@NgModule({
  declarations: [
    AppComponent,
    FiltroArrayImpuroPipe,
    FiltroArrayPipe,
    PipesExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
