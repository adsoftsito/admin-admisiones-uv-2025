import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestsUvWebListComponent } from './components/tests-uv-web-list/tests-uv-web-list.component';
import { AddTestUvWebComponent } from './components/add-test-uv-web/add-test-uv-web.component';

const routes: Routes = [
//  { path: '', redirectTo: 'registrar', pathMatch: 'full' },
//  { path: 'registrar', component: TestsUvWebListComponent },
//  { path: 'consultar', component: AddTestUvWebComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
