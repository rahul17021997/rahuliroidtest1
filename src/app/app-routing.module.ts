import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JoblistComponent } from './joblist/joblist.component';



const routes: Routes = [
  {path:"joblist",component:JoblistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
