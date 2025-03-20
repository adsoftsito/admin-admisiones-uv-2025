import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAdmisionUvWebComponent } from './components/add-admision-uv-web/add-admision-uv-web.component';
import { AdmisionUvWebDetailsComponent } from './components/admision-uv-web-details/admision-uv-web-details.component';
import { AdmisionUvWebListComponent } from './components/admision-uv-web-list/admision-uv-web-list.component';
import { StatisticsAdmisionUvWebComponent } from './components/statistics-admision-uv-web/statistics-admision-uv-web.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    AddAdmisionUvWebComponent,
    AdmisionUvWebDetailsComponent,
    AdmisionUvWebListComponent,
    StatisticsAdmisionUvWebComponent,
    ConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule, // for firestore
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
