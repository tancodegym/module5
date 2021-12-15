import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentComponent} from "./student/student.component";
import {CarComponent} from "./car/car.component";


const routes: Routes = [
  {
    path:"",
    component: CarComponent
  },
  {
    path:"student",
    component: StudentComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
