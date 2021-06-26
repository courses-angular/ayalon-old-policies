import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchByComponent } from './search-by/search-by.component';
import { OldPoliciesComponent } from './old-policies/old-policies.component';
import {ReactiveFormsModule} from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchByComponent,
    OldPoliciesComponent,
    SearchPipe
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
