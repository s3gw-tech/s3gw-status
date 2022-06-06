import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './pages/results/results.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "s3tests",
    pathMatch: "full",
  },
  {
    path: "s3tests",
    component: ResultsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
