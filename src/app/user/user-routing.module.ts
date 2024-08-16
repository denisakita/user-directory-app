import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserDetailsComponent, UserListComponent} from "./components";


const routes: Routes = [
  {path: 'user-list', component: UserListComponent},
  {path: 'user-details', component: UserDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
