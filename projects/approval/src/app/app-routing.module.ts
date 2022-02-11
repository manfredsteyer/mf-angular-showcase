import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'approval',
    pathMatch: 'full'
  },
  {
    path: 'approval',
    loadChildren: () => import('./approval/approval.module')
      .then(esm => esm.ApprovalModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
