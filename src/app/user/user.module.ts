import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [ 
  {path: 'view', component: ViewComponent},
  {path: 'create', component: CreateComponent}
]
@NgModule({
  declarations: [
    CreateComponent,
    ViewComponent
  ],
  imports: [RouterModule.forChild(routes),
  ReactiveFormsModule,RxReactiveFormsModule,
  CommonModule,
  NgbModule],
  exports: [RouterModule]
})
export class UserModule {
  
 }
