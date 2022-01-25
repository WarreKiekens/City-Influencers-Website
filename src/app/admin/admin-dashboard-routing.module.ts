import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'overview', loadChildren: () => import('./admin-dashboard/admin-overview/admin-overview.module').then(m => m.AdminOverviewModule)},
  {path: 'requests', loadChildren: () => import('./admin-dashboard/requests/requests.module').then(m => m.RequestsModule)},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule {
}