import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentlistComponent } from './components/studentlist/studentlist.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';

const routes: Routes = [
  {path: "studentlist", component: StudentlistComponent},
  {path: "employeelist", component: EmployeelistComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


  
}
