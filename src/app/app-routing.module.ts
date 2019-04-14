import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TransactionViewerComponent } from './transaction-viewer/transaction-viewer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/issuereport',pathMatch: 'full'},
  {path: 'issuereport', component: TransactionViewerComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
