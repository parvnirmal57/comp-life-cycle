import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicsComponent } from './events/basics/basics.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'basics',
    pathMatch:'full',
    
    
  },
  
  {
    path:'basics',
    component:BasicsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
