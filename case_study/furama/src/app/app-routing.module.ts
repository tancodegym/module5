import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {CustomerComponent} from "./customer/customer.component";
import {HomeComponent} from "./home/home.component";
import {EmployeeComponent} from "./employee/employee.component";
import {OfficeComponent} from "./office/office.component";



const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path:'home',
        component: HomeComponent
      },
      {
      path: 'customer',
      component: CustomerComponent
      // loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
    },
      {
        path: 'employee',
        component: EmployeeComponent
        // loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
      },
      {
        path: 'service',
        component: OfficeComponent
        // loadChildren: () => import('./customer/customer.module').then(module => module.CustomerModule)
      }
     ]
  }

  // },
  // {
  //   path: 'customer',
  //
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
