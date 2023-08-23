import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { PlagaComponent } from './modules/plaga/plaga.component';
import { ResultComponent } from './modules/result/result.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
  },
  {
    path: 'home', component: HomeComponent,
  },
  { path: 'plaga',
   component: PlagaComponent },
  { path: 'resultado',
   component: ResultComponent },
   

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
