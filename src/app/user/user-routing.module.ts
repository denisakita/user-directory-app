import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailsComponent, UserListComponent} from "./components";


const routes: Routes = [
  {path: '', component: UserListComponent},
  {path: ':id', component: UserDetailsComponent},
  {path: '**', redirectTo: ''}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
