import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailsComponent, UserListComponent} from "./components";


const routes: Routes = [
  {path: 'users', component: UserListComponent},
  {path: 'users/:id', component: UserDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
