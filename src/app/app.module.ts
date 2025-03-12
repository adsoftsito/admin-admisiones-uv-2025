import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTestUvWebComponent } from './components/add-test-uv-web/add-test-uv-web.component';
import { TestUvWebDetailsComponent } from './components/test-uv-web-details/test-uv-web-details.component';
import { TestsUvWebListComponent } from './components/tests-uv-web-list/tests-uv-web-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTestUvWebComponent,
    TestUvWebDetailsComponent,
    TestsUvWebListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // for firestore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
