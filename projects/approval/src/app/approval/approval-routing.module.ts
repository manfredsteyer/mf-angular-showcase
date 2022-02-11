import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApprovalComponent } from './approval.component';
import { HistoryComponent } from './history/history.component';
import { ManageComponent } from './manage/manage.component';

const routes: Routes = [
    {
        path: '',
        component: ApprovalComponent,
        children: [
          {
            path: '',
            redirectTo: 'manage'
          },
          {
            path: 'manage',
            component: ManageComponent
          },
          {
            path: 'history',
            component: HistoryComponent
          },

        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovalRoutingModule { }
