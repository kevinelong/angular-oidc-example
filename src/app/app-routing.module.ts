import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProtectedComponent } from './protected/protected.component';

const routes: Routes = [
  {
    path: '',
    children: []
  },
  {
    path: 'protected',
    component: ProtectedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
