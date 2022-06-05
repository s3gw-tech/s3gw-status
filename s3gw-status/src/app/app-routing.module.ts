import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './pages/results/results.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "results",
    pathMatch: "full",
  },
  {
    path: "results",
    component: ResultsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
