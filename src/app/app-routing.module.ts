import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdmisionUvWebListComponent } from './components/admision-uv-web-list/admision-uv-web-list.component';
import { AddAdmisionUvWebComponent } from './components/add-admision-uv-web/add-admision-uv-web.component';
import { StatisticsAdmisionUvWebComponent } from './components/statistics-admision-uv-web/statistics-admision-uv-web.component';

const routes: Routes = [
//  { path: '', redirectTo: 'registrar', pathMatch: 'full' },
//  { path: 'consultar', component: TestsUvWebListComponent },
//  { path: 'estadisticas', component: StatisticsTestUvWebComponent}
//  { path: 'registrar', component: AddTestUvWebComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
