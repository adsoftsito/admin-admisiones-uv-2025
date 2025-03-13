import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestsUvWebListComponent } from './components/tests-uv-web-list/tests-uv-web-list.component';
import { AddTestUvWebComponent } from './components/add-test-uv-web/add-test-uv-web.component';
import { StatisticsTestUvWebComponent } from './components/statistics-test-uv-web/statistics-test-uv-web.component';

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
