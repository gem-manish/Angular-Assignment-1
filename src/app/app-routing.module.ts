import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:"",redirectTo:'user/create',pathMatch:"full"},
  {path: 'user',
  loadChildren: () => import('./user/user.module').then(x => x.UserModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
