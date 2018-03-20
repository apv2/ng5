import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApoorvComponent } from './apoorv/apoorv.component';


const routes: Routes = [
  {
    path: '',
    component:ApoorvComponent
  },
  {
    path: 'apoorv',
    component:ApoorvComponent
  },
  {
    path: 'home/:id',
    component:HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
