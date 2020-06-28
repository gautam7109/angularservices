import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { GraphComponent } from './graph/graph.component';


const routes: Routes = [{
  path:"",
  component:ListComponent
},{
  path:"create",
  component:CreateComponent
},{
  path:"edit/:id",
  component:EditComponent
},{
  path:"graphs",
  component:GraphComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }